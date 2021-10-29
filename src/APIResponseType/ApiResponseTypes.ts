import {PhotosType, UserType} from "../redux/users-reducer";

//---auth
export type AuthResponseAPIType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

//---follow
export type FollowUnfollowResponseAPIType = {
    data: {

    }
    resultCode: number
    messages: string[]
}

//---profile
export type ContactsType = {
    "facebook": string,
    "website":string,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": string,
    "github": string,
    "mainLink": string
}

export type ProfileResponseAPIType = {
    "aboutMe": string
    "contacts": ContactsType,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": PhotosType
}

//---users
export type UsersResponseAPIType = {
    items:Array<UserType>
    totalCount: number
}


