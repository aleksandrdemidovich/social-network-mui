import {ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const DELETE_POST = "DELETE-POST"

type PostType = {
    id: string
    message: string
    likeCount: number
}

export type InitialStateType = typeof initialState
const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you ', likeCount: 15},
        {id: v1(), message: 'It\'s my first post ', likeCount: 20},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam',
            likeCount: 5
        },
        {id: v1(), message: 'Da da ', likeCount: 99},
    ] as PostType[],
    newPostText: ''
}


export const profileReducer = (state:InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                message: action.newPostText!,
                likeCount: 0
            }
            return {...state, posts:[newPost,...state.posts], newPostText:''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return{...state, newPostText: action.newText}
        }
        case "DELETE-POST":{
            return {...state, posts:[...state.posts.filter(p => p.id !== action.postID)]}
        }
        default :
            return state
    }

}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | DeletePostActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (postText: string)=> {
    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}

export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextCreator>
export const UpdateNewPostTextCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export type DeletePostActionType = ReturnType<typeof DeletePostCreator>
export const DeletePostCreator = (postID: string) => {
    return {
        type: DELETE_POST,
        postID: postID
    } as const
}