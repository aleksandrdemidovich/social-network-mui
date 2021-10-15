import React, {useEffect, useRef, useState} from 'react';
import SentMessage from "./Message/SentMessage/SentMessage";
import {Button, Divider, Grid, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";
import ChatHeader from "./ChatHeader/ChatHeader";
import {styled} from "@mui/material/styles";
import {DialogsPropsType} from "./ChatContainer";
import ReceivedMessage from "./Message/ReceivedMessage/ReceivedMessage";


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


function Chat(props: DialogsPropsType) {

    const messageArea = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const [editMode, setEditMode] = useState(false)
    const [selectedMessages, setSelectedMessages] = useState<string[]>([])
    const [selectedMessageCount, setSelectedMessageCount] = useState<number>(0)

    useEffect(() => {
        if (messageArea) {
            if (messageArea.current !== null) {
                messageArea.current.addEventListener('DOMNodeInserted', event => {
                    const {currentTarget: target} = event;
                    if (target !== null) {
                        (target as HTMLDivElement).scroll({
                            top: (target as HTMLDivElement).scrollHeight,
                            behavior: 'smooth'
                        })
                    }
                })
            }
        }
    }, [])
    const scrollToBottom = () => {
        messagesEndRef.current!.scrollIntoView({behavior: "auto"})
    }

    useEffect(scrollToBottom, [messageArea]);


    const sendMessage = () => {
        if (props.dialogsPage.newMessText.trim() !== '') {
            props.sendMessage(props.dialogsPage.newMessText)
        }

    }
    const onMessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeMess(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && props.dialogsPage.newMessText.trim() !== '') {
            e.preventDefault()
            props.sendMessage(props.dialogsPage.newMessText)
        } else if (props.dialogsPage.newMessText.trim() === '' && e.charCode === 13) {
            e.preventDefault()
        }
    }
    const handleSelectMessage = (messID:string) => {
       if (selectedMessages.includes(messID)) {
           setSelectedMessages(selectedMessages.filter(m => m !== messID))
           setSelectedMessageCount(selectedMessageCount-1)
       } else {
           setSelectedMessages([...selectedMessages, messID])
           setSelectedMessageCount(selectedMessageCount+1)
       }
    }
    const handlerEditMode = () => {
        let copyArr = [...selectedMessages]
        copyArr.splice(0,selectedMessages.length)
        setSelectedMessageCount(copyArr.length)
        setSelectedMessages(copyArr)
    }
    // let getAllMessagesIdFromState = () => {
    //     let allMesagessID = props.dialogsPage.messages.map(m => m.id)
    //     return allMesagessID
    // }
    //
    // let intersection = getAllMessagesIdFromState().filter(x => selectedMessages.includes(x));
    // console.log(intersection)

    let messagesElements = props.dialogsPage.messages
        .map(m => <SentMessage key={m.id}
                                message={m.message}
                                id={m.id}
                                editMode={selectedMessages.includes(m.id)}
                                setSelectedMessages={handleSelectMessage}
            />
        )


    return (
        <RootContainer container item>
            <ChatHeader
                editMode={!!selectedMessages.length}
                setEditMode={handlerEditMode}
                selectedMessageCount={selectedMessageCount}
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
                <TextField fullWidth
                           value={props.dialogsPage.newMessText}
                           onKeyPress={onKeyPressHandler}
                           onChange={onMessChange}
                           multiline
                           autoFocus
                           maxRows={4}
                           size={"small"}
                           autoComplete={'off'}
                           id="outlined-basic"
                           label="Write a message"
                           variant="outlined"
                           style={{marginRight: '15px'}}/>
                <Button variant="contained"
                        onClick={sendMessage}
                        endIcon={<Send/>}>
                    Send
                </Button>
            </InputArea>
        </RootContainer>

    );
}

export default Chat;