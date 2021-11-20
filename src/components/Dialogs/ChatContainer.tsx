import React from 'react';
import {
    DeleteMessagesCreator,
    DialogPageType,
    sendMessageCreator,
} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import { Dispatch } from 'redux';
import Chat from "./Chat";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

type mapDispatchPropsType = {
    sendMessage: (newMessText: string) => void
    deleteMessages:(selectedMess: string[]) => void
}

export type  DialogsPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        sendMessage: (newMessText: string) => {
           dispatch(sendMessageCreator(newMessText))
        },
        deleteMessages: (selectedMess: string[]) => {
            dispatch(DeleteMessagesCreator(selectedMess))
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;