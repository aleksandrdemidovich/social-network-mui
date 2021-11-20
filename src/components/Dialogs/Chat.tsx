import React, {useEffect, useRef, useState} from 'react';
import SentMessage from "./Messages/SentMessage";
import {Alert, Button, Divider, Grid, Paper, Snackbar, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {DialogsPropsType} from "./ChatContainer";
import ReceivedMessage from "./Messages/ReceivedMessage";
import ChatHeader from "./Headers/ChatHeader";
import  {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


function Chat(props: DialogsPropsType) {

    const messageArea = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const [editMode, setEditMode] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [selectedMessages, setSelectedMessages] = useState<string[]>([])


    const scrollToBottom = () => {
        messagesEndRef.current!.scrollIntoView({behavior: "auto"})
    }
    useEffect(scrollToBottom, [props.dialogsPage.messages]);




    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13 && props.dialogsPage.newMessText.trim() !== '') {
    //         e.preventDefault()
    //         props.sendMessage(props.dialogsPage.newMessText)
    //     } else if (props.dialogsPage.newMessText.trim() === '' && e.charCode === 13) {
    //         e.preventDefault()
    //     }
    // }

    //todo add types
    const addNewMessage = (values: any) => {
        // alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    const handleSelectMessage = (messID: string) => {
        if (selectedMessages.includes(messID)) {
            setSelectedMessages(selectedMessages.filter(m => m !== messID));
        } else {
            setSelectedMessages([...selectedMessages, messID]);
        }
    }
    const deleteMessages = () => {
        props.deleteMessages(props.dialogsPage.messages.map(m => m.id).filter(x => selectedMessages.includes(x)))
        setOpenAlert(true)
        setSelectedMessages([])
    }
    const handlerEditMode = () => {
        setSelectedMessages([]);
    }


    let messagesElements = props.dialogsPage.messages
        .map(m => <SentMessage key={m.id}
                               message={m.message}
                               id={m.id}
                               editMode={selectedMessages.includes(m.id)}
                               setSelectedMessages={handleSelectMessage}
            />
        )


    return (
        <Grid item xs={12} md={12} lg={9}>
            <Paper elevation={2}>
                <RootContainer container item>
                    <ChatHeader
                        editMode={!!selectedMessages.length}
                        setEditMode={handlerEditMode}
                        selectedMessageCount={selectedMessages.length}
                        deleteMessages={deleteMessages}
                    />
                    <Divider/>
                    <MessagesArea ref={messageArea}>
                        <ReceivedMessage/>
                        <ReceivedMessage/>
                        {messagesElements}
                        <div ref={messagesEndRef}/>
                    </MessagesArea>
                    <Divider/>
                    <InputArea item>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </InputArea>
                    <Snackbar open={openAlert} autoHideDuration={6000}
                              style={{position: 'absolute', bottom: 10, left: 10}} onClose={() => setOpenAlert(false)}>
                        <Alert severity="success">
                            Messages was deleted!
                        </Alert>
                    </Snackbar>
                </RootContainer>
            </Paper>
        </Grid>
    );
}

export default Chat;


const MessagesArea = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '75vh',

    overflow: 'auto',
    overflowY: 'visible',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#3f51b5',
        borderRadius: '5px'
    },
    'h3,p': {
        margin: 0,
        padding: '10px 15px 0 15px'
    }
}));
const RootContainer = styled(Grid)({
    height: '90vh ',
    flexDirection: 'column',
    flexWrap: 'nowrap'
});
const InputArea = styled(Grid)({
    padding: '15px 15px 15px 15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
});


//@ts-ignore
const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        label={'Write a message'}
        error={touched && invalid}
        helperText={touched && error}
        fullWidth
        multiline
        autoFocus
        maxRows={4}
        size={"small"}
        autoComplete={'off'}
        id="outlined-basic"
        variant="outlined"
        style={{marginRight: '15px'}}
        {...input}
        {...custom}
    />
)

let maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: any) => {
    return(
        <form onSubmit={props.handleSubmit} style={{display:'flex', flexDirection:'row', width:'100%'}}>
            <Field component={renderTextField}
                   name={'newMessageBody'}
                   validate={[requiredField, maxLength100]}
            />
            <Button variant="contained"
                    type={"submit"}
                    endIcon={<Send/>}>
                Send
            </Button>
        </form>

    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)