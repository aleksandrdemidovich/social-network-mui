import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Button, Divider, Grid, Paper, styled, TextField} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {Send} from "@mui/icons-material";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {ChatMessageAPIType} from "../../API/chat-api";


function Chat() {
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <Grid item xs={10}>
            <Paper elevation={2}>
                {status === 'error' && <div>Some error occured. Please refresh the page</div>}
                <div style={{width: '100%', height: '85vh'}}>
                    <Messages/>
                    <AddMessageForm/>
                </div>
            </Paper>
        </Grid>
    );
}


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    return (
        <MessageContainer>
            <Grid item display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Avatar
                    src={message.photo}
                    sx={{width: 36, height: 36, marginRight: '10px'}}
                /> <b>{message.userName}</b>
            </Grid>
            <MessageText>
                {message.message}
            </MessageText>
            <Divider/>
        </MessageContainer>
    )
})

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return <ChatArea onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m}/>)}
        <div ref={messagesAnchorRef}/>
    </ChatArea>
}

const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <Grid display={"flex"} flexDirection={"row"} style={{padding: '10px', height: '10%'}}>
        <TextField label="Message"
                   variant="outlined"
                   fullWidth
                   size={"medium"}
                   onChange={(e) => setMessage(e.currentTarget.value)}
                   value={message}
                   style={{marginRight: '10px'}}/>
        <Button disabled={status !== 'ready'}
                onClick={sendMessageHandler}
                variant="contained"
                endIcon={<Send/>}
                size={"medium"}>
            Send
        </Button>
    </Grid>
}


export default Chat;

const MessageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 20px;
`
const ChatArea = styled('div')`
  height: 90%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
const MessageText = styled('p')`
  margin: 0 0 5px 46px;
`