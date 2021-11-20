import {v1} from "uuid";
import {PhotosType, toggleIsFetching} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../API/api";

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

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
    profile: ProfileType
    status: string
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
    } as ProfileType,
    status: ''
}


export const profileReducer = (state:InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            }
            return {...state, posts:[newPost,...state.posts]}
        }
        // case "UPDATE-NEW-POST-TEXT": {
        //     return{...state, newPostText: action.newText}
        // }
        case "DELETE-POST":{
            return {...state, posts:[...state.posts.filter(p => p.id !== action.postID)]}
        }
        case "SET-USER-PROFILE":{
            return {...state, profile:action.profile}
        }
        case "SET-STATUS":{
            return {...state, status:action.status}
        }
        default :
            return state
    }

}

type ActionsType = AddPostActionType
    | DeletePostActionType
    | setUserProfileActionType
    | setUserStatusActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string)=> {
    return {
        type: ADD_POST,
        newPostText
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

export type setUserStatusActionType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

//thunk
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            });
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            });
    }
}