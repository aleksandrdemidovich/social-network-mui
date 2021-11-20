import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE"
const DELETE_DIALOG = "DELETE-DIALOG"
const DELETE_MESSAGES = "DELETE-MESSAGES"

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type InitialStateType = typeof initialState

const initialState: DialogPageType = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Matthew'},
        {id: v1(), name: 'Larisa Dolina'},
        {id: v1(), name: 'Larisa Dolina1'},
        {id: v1(), name: 'Larisa Dolina2'},
        {id: v1(), name: 'Larisa Dolina3'},
        {id: v1(), name: 'Larisa Dolina4'},
        {id: v1(), name: 'Larisa Dolina5'},
        {id: v1(), name: 'Larisa Dolina5'},
        {id: v1(), name: 'Larisa Dolina5'},
        {id: v1(), name: 'Larisa Dolina5'},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'how is your it-kamasutra'},
        {id: v1(), message: 'yo'},
        {id: v1(), message: 'yo'},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!'
        },
    ] as Array<MessageType>
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let newMess = {
                id: v1(),
                message: action.newMessText,
            }
            return {...state, messages:[...state.messages, newMess]}
        }
        case "DELETE-DIALOG":{
            return {...state, dialogs:[...state.dialogs.filter(d => d.id !== action.dialogID)]}
        }
        case "DELETE-MESSAGES":{
            return {...state, messages: [...state.messages.filter(m => !action.selectedMessages.includes(m.id))]}
        }
        default :
            return state
    }
}

type ActionsType =  SendMessageActionType | DeleteMessagesActionType |  DeleteDialogActionType

export type SendMessageActionType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessText: string)=> {
    return {
        type: SEND_MESSAGE,
        newMessText
    } as const
}

export type DeleteMessagesActionType = ReturnType<typeof DeleteMessagesCreator>
export const DeleteMessagesCreator= (selectedMessages: string[]) => {
    return {
        type: DELETE_MESSAGES,
        selectedMessages
    } as const
}


export type DeleteDialogActionType = ReturnType<typeof DeleteDialogCreator>
export const DeleteDialogCreator= (dialogID: string) => {
    return {
        type: DELETE_DIALOG,
        dialogID: dialogID
    } as const
}