import {ActionsType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state:ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: action.newPostText!,
                likeCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
        break
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
        break
        default :
            return state
    }

    return state
}

export const addPostActionCreator = (postText: string)=> {
    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}
export const UpdateNewPostTextCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}