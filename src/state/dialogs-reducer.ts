import {ActionsType, DialogPageType} from "./state";
import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newMess = {
                id: v1(),
                message: action.newMessText,
            }
            state.messages.push(newMess)
            state.newMessText = ''
            break
        case "UPDATE_NEW_MESSAGE_TEXT":
            state.newMessText = action.newText
            break
        default :
            return state

    }

    return state
}

export const sendMessageActionCreator = (postText: string)=> {
    return {
        type: SEND_MESSAGE,
        newMessText: postText
    } as const
}
export const UpdateNewMessTextCreator= (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}