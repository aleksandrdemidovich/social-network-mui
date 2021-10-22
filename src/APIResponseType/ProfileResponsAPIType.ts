import {PhotosType, UserType} from "../redux/users-reducer";

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