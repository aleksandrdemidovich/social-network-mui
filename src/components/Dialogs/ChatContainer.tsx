import React from 'react';
import {sendMessageCreator, UpdateNewMessTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogPageType} from "../../redux/store";
import { Dispatch } from 'redux';
import Chat from "./Chat";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

type mapDispatchPropsType = {
    onChangeMess: (text: string) => void
    sendMessage: (newMessText: string) => void
}

export type  DialogsPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        onChangeMess: (text: string) => {
            dispatch(UpdateNewMessTextCreator(text))

        },
        sendMessage: (newMessText: string) => {
           dispatch(sendMessageCreator(newMessText))

        }

    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;