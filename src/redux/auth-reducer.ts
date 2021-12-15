import {Dispatch} from "redux";
import {authAPI,} from "../API/api";
import {stopSubmit} from "redux-form";
import {getUserProfile} from "./profile-reducer";

const SET_USER_DATA = "social-network/auth/SET-USER-DATA"

type AuthType = {
    id: null | number
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export type  InitialStateType = typeof initialState
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
} as AuthType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "social-network/auth/SET-USER-DATA":
            return {...state, ...action.data}
        default :
            return state
    }
}

export type ActionsType = setAuthUserDataActionType

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
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


export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        //todo
        dispatch(getAuthUserData() as any)
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages}))
    }

}


export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}






