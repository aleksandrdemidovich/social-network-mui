import {locationType, PhotosType, UserType} from "../redux/users-reducer";

export type UsersResponseAPIType = {
    items:Array<UserType>
    totalCount: number
}


