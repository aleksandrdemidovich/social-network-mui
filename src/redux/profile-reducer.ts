import {v1} from "uuid";
import {PhotosType, toggleIsFetching} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../API/api";
import {setAppError, toggleInProgress} from "./app-reducer";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const SET_LIKE = "SET-LIKE"
const SET_DISLIKE = "SET-DISLIKE"
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"
const SET_LOGGED_USER_PHOTO = "SET-LOGGED-USER-PHOTO"

export type PostType = {
    id: string
    message: string
    likeCount: number
    isLiked: boolean
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
    userId: number | null
    photos: PhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType
    status: string
    loggedUserPhoto: string
}

export type InitialStateType = typeof initialState
const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you ', likeCount: 15, isLiked: false},
        {id: v1(), message: 'It\'s my first post ', likeCount: 20, isLiked: true},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam',
            likeCount: 5,
            isLiked: false
        },
        {id: v1(), message: 'Da da ', likeCount: 99, isLiked: true},
    ] as PostType[],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
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
        userId: null,
        photos: {
            large: null,
            small: null
        }
    } as ProfileType,
    status: '',
    loggedUserPhoto: ''
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0,
                isLiked: false
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case "DELETE-POST": {
            return {...state, posts: [...state.posts.filter(p => p.id !== action.postID)]}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-LIKE": {
            return {
                ...state, posts: state.posts.map(p => p.id === action.postID
                    ? {...p, likeCount: p.likeCount + 1, isLiked: true} : p)
            }
        }
        case "SET-DISLIKE":
            return {
                ...state, posts: state.posts.map(p => p.id === action.postID
                    ? {...p, likeCount: p.likeCount - 1, isLiked: false} : p)
            }
        case "SAVE-PHOTO-SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
        case "SET-LOGGED-USER-PHOTO":
            return {...state, loggedUserPhoto: action.photo}
        default :
            return state
    }

}

type ActionsType = AddPostActionType
    | DeletePostActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | setLikeActionType
    | setDislikeActionType
    | savePhotoSuccessActionType
    | setLoggedUserPhotoActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => {
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

export type setLikeActionType = ReturnType<typeof setLike>
export const setLike = (postID: string) => {
    return {
        type: SET_LIKE,
        postID
    } as const
}

export type setDislikeActionType = ReturnType<typeof setDislike>
export const setDislike = (postID: string) => {
    return {
        type: SET_DISLIKE,
        postID
    } as const
}

export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
export const savePhotoSuccess = (photos: any) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}

export type setLoggedUserPhotoActionType = ReturnType<typeof setLoggedUserPhoto>
export const setLoggedUserPhoto = (photo: string) => {
    return {
        type: SET_LOGGED_USER_PHOTO,
        photo
    } as const
}

//thunk
export const getUserProfile = (userId: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const loggedUserId = getState().auth.id
    dispatch(toggleIsFetching(true))
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
    if(userId === loggedUserId!.toString()){
        dispatch(setLoggedUserPhoto(response.photos.large!))
    }
}


export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}


export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    dispatch(setAppError(''))
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    } else {
        dispatch(setAppError(response.messages[0]))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    dispatch(setAppError(''))
    dispatch(toggleInProgress(true))
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
        dispatch(toggleInProgress(false))
    } else {
        dispatch(setAppError(response.messages[0]))
        dispatch(toggleInProgress(false))
    }
}

export const saveProfile = (profile: any) => async (dispatch: Dispatch<any>, getState: () => AppStateType) => {
    dispatch(setAppError(''))
    const userId = getState().auth.id
    dispatch(toggleInProgress(true))
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId.toString()))
            dispatch(toggleInProgress(false))
        }
    } else if (data.resultCode === 1) {
        dispatch(setAppError(data.messages[0]))
        dispatch(toggleInProgress(false))
    }
}
