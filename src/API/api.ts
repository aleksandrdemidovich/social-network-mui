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
    getUsers: (currentPage: number, pageSize: number, isFriends: boolean) => {
        return instance.get<UsersResponseAPIType>(`users?page=${currentPage}&count=${pageSize}&friend=${isFriends}`)
            .then(response => response.data)
    },
    follow: (id: number) => {
        return instance.post<FollowUnfollowResponseAPIType>(`follow/${id}`)
    },
    unfollow: (id: number) => {
        return instance.delete<FollowUnfollowResponseAPIType>(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get<ProfileResponseAPIType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: string) => {
        //todo type
        return instance.get<any>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus: (status: string) => {
        //todo type
        return instance.put<any>(`profile/status`, {status})
            .then(response => response.data)
    }
}


export const authAPI = {
    me: () => {
        return instance.get<AuthResponseAPIType>('auth/me')
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<any>('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete<any>('auth/login')
    }
}





