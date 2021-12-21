import React, {useState} from 'react';
import {currentTime} from "../../Profile/RightColumn/Posts/Post/Post";
import {styled} from "@mui/material/styles";
import {Grid, TextField} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {EditMessageAC, MessageType} from "../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";


type SentMessagePropsType = {
    editMode: boolean
    setSelectedMessages: (messID: string) => void
}

function SentMessage(props: MessageType & SentMessagePropsType) {

    const SentMessageContainer = styled(Grid)`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 10px 20px;
      align-items: flex-end;

      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-left: 13px;
      }
    ;

      p {
        border: 1px solid #3f51b5;
        border: ${props.editMode ? '1px solid #f50057' : '1px solid #3f51b5'};
        color: #686868;
        width: auto;
        padding: 10px 15px 0 15px;
        border-radius: 15px;
        word-break: break-all;
        margin-left: 10px;
      }
    ;

      div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 14px;
        padding-bottom: 3px;
      }
    ;

      & svg {
        visibility: ${props.editMode ? 'visible' : 'hidden'};
        margin-left: 10px;
        margin-right: auto;
        position: relative;
        bottom: 50%;
      }
    ;

      :hover {
        cursor: pointer;

        & svg {
          opacity: ${props.editMode ? '1' : '0.5'};
          visibility: visible;
          margin-left: 10px;
          margin-right: auto;
        }
      ;;
      }
    ;
    `;

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [newMessageText, setNewMessageText] = useState(props.message)

    const activateEditMode = () => {
        setEditMode(true);
        setNewMessageText(props.message);
    }
    const activateViewMode = () => {
        setEditMode(false);
        dispatch(EditMessageAC(props.id, newMessageText))
    }

    const selectMessage = () => {
        props.setSelectedMessages(props.id)
    }

    const editMessageText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessageText(e.currentTarget.value)
    }

    return (
        <SentMessageContainer key={props.id}
                              // onClick={selectMessage}
        >
            <CheckCircleIcon color={"primary"}/>
            {!editMode
                ? <p  onDoubleClick={activateEditMode} >{props.message}
                <div>
                    {currentTime()}
                    {props.isEdit && ' (edit)'}
                </div>
            </p>
            :  <TextField id="standard-basic"
                          label="Edit message"
                          variant="standard"
                          fullWidth
                          onChange={editMessageText}
                          value={newMessageText}
                          onBlur={activateViewMode}
                          autoFocus/>}
            <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" alt="userAvatar"/>
        </SentMessageContainer>
    );
}

export default SentMessage;

