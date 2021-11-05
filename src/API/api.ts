import axios from "axios";
import {
    AuthResponseAPIType,
    FollowUnfollowResponseAPIType, ProfileResponseAPIType,
    UsersResponseAPIType
} from "../APIResponseType/ApiResponseTypes";



const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY" : "cf750a83-7c21-4e27-915c-0dade0a73893"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<UsersResponseAPIType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (id: number) => {
        return instance.post<FollowUnfollowResponseAPIType>(`follow/${id}`)
    },
    unfollow: (id: number) => {
        return instance.delete<FollowUnfollowResponseAPIType>(`follow/${id}`)
    },
    getProfile: (userId: string) => {
        return instance.get<ProfileResponseAPIType>(`profile/${userId}`)
            .then(response => response.data)
    }
}


export const authAPI = {
    me: () => {
        return instance.get<AuthResponseAPIType>('auth/me')
            .then(response => response.data)
    }
}





