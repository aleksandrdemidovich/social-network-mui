import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE"
const DELETE_DIALOG = "DELETE-DIALOG"
const DELETE_MESSAGES = "DELETE-MESSAGES"
const EDIT_MESSAGES = "EDIT-MESSAGES"

export type MessageType = {
    id: string
    message: string
    isEdit: boolean
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
        {id: v1(), name: 'Noah'},
        {id: v1(), name: 'Liam'},
        {id: v1(), name: 'Mason'},
        {id: v1(), name: 'Jacob'},
        {id: v1(), name: 'William'},
        {id: v1(), name: 'Ethan'},
        {id: v1(), name: 'Michael'},
        {id: v1(), name: 'Daniel'},
        {id: v1(), name: 'Thomas'},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'hi', isEdit:false},
        {id: v1(), message: 'how is your it-kamasutra', isEdit:false},
        {id: v1(), message: 'yo', isEdit:false},
        {id: v1(), message: 'yo', isEdit:false},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? ' +
                'Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!',
            isEdit:false
        },
    ] as Array<MessageType>
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let newMess = {
                id: v1(),
                message: action.newMessText,
                isEdit:false
            }
            return {...state, messages:[...state.messages, newMess]}
        }
        case "DELETE-DIALOG":{
            return {...state, dialogs:[...state.dialogs.filter(d => d.id !== action.dialogID)]}
        }
        case "DELETE-MESSAGES":{
            return {...state, messages: [...state.messages.filter(m => !action.selectedMessages.includes(m.id))]}
        }
        case "EDIT-MESSAGES":{
            return {...state, messages: state.messages.map(m => m.id === action.messID
                    ? {...m, message: action.newMessText, isEdit: !m.isEdit}
                    : m)}
        }
        default :
            return state
    }
}

type ActionsType =  SendMessageActionType | DeleteMessagesActionType |  DeleteDialogActionType | EditMessageActionType

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

export type EditMessageActionType = ReturnType<typeof EditMessageAC>
export const EditMessageAC= (messID: string, newMessText: string) => {
    return {
        type: EDIT_MESSAGES,
        messID, newMessText
    } as const
}