import React from 'react';
import {
    DeleteDialogCreator,
    DialogPageType,
    sendMessageCreator,
    UpdateNewMessTextCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import { Dispatch } from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

type mapDispatchPropsType = {
    onChangeMess: (text: string) => void
    sendMessage: (newMessText: string) => void
    deleteDialog: (dialogID: string) => void
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
        },
        deleteDialog: (dialogID: string) => {
            dispatch(DeleteDialogCreator(dialogID))
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;