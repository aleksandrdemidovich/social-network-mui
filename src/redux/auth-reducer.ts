import {Dispatch} from "redux";
import {authAPI, } from "../API/api";

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
            return {...state, ...action.data, isAuth: true}
        default :
            return state
    }
}

export type ActionsType =  followActionType

export type followActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data:{id,email,login}
    } as const
}


//thunk
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(data => {
            let {id, login, email} = data.data
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}





