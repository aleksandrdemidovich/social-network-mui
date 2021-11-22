import {Dispatch} from "redux";
import {authAPI, } from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA"

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
        case "SET-USER-DATA":
            return {...state, ...action.data}
        default :
            return state
    }
}

export type ActionsType =  followActionType

export type followActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data:{id,email,login, isAuth}
    } as const
}


//thunk
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(data => {
            let {id, login, email} = data.data
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true))
            }else {

            }
        })
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email,password, rememberMe)
            .then(data => {
                if (data.data.resultCode === 0) {
                    //todo
                    dispatch(getAuthUserData() as any)
                }else {
                    dispatch(stopSubmit('login',{_error: data.data.messages}))
                }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}





