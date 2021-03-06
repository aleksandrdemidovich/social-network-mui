import axios from "axios";
import {
    AuthResponseAPIType,
    FollowUnfollowResponseAPIType, ProfileResponseAPIType,
    UsersResponseAPIType
} from "../APIResponseType/ApiResponseTypes";
import {ProfileType} from "../redux/profile-reducer";




const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY" : "cf750a83-7c21-4e27-915c-0dade0a73893"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) => {
        return instance.get<UsersResponseAPIType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },
    follow: (id: number) => {
        return instance.post<FollowUnfollowResponseAPIType>(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow: (id: number) => {
        return instance.delete<FollowUnfollowResponseAPIType>(`follow/${id}`)
            .then(res => res.data)
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
    },
    savePhoto: (file: File) => {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put<any>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<any>(`profile`, profile).then(res => res.data);
    }
}


export const authAPI = {
    me: () => {
        return instance.get<AuthResponseAPIType>('auth/me')
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
        return instance.post<any>('auth/login', {email, password, rememberMe, captcha})
    },
    logout: () => {
        return instance.delete<any>('auth/login')
    }
}

export const securityAPI = {
    getCaptchaURL: () => {
        return instance.get<any>('security/get-captcha-url')
            .then(response => response.data)
    },

}



