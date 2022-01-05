import {Dispatch} from "redux";
import {authAPI, securityAPI,} from "../API/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "social-network/auth/SET-USER-DATA"
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET-CAPTCHA-URL-SUCCESS"

type AuthType = {
    id: null | number
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaURL: string | null
}

export type  InitialStateType = typeof initialState
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
} as AuthType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "social-network/auth/SET-USER-DATA":
            return {...state, ...action.data}
        case "social-network/auth/GET-CAPTCHA-URL-SUCCESS":
            return {...state, captchaURL: action.captchaURL}
        default :
            return state
    }
}

export type ActionsType = setAuthUserDataActionType | getCaptchaURlSuccessActionType

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    } as const
}

export type getCaptchaURlSuccessActionType = ReturnType<typeof getCaptchaURlSuccess>
export const getCaptchaURlSuccess = (captchaURL: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaURL
    } as const
}

//thunk
export const getAuthUserData = () => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.me()
    let {id, login, email} = response.data
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        //todo
        dispatch(getAuthUserData() as any)
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaURL())
        }
        dispatch(stopSubmit('login', {_error: response.data.messages}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(getCaptchaURlSuccess(''))
    }

}

export const getCaptchaURL = () => async (dispatch: Dispatch) => {
    let response = await securityAPI.getCaptchaURL()
    const captchaURL = response.url
    dispatch(getCaptchaURlSuccess(captchaURL))

}





