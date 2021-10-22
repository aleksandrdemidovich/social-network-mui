import {v1} from "uuid";
import {PhotosType} from "./users-reducer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const DELETE_POST = "DELETE-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostType = {
    id: string
    message: string
    likeCount: number
}
export type ContactsType = {
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    github: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText?: string
    profile: ProfileType
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
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website:'',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 20060,
        photos: {
            large: null,
            small: null
        }
    } as ProfileType
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
        case "SET-USER-PROFILE":{
            return {...state, profile:action.profile}
        }
        default :
            return state
    }

}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | DeletePostActionType | setUserProfileActionType

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

export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}