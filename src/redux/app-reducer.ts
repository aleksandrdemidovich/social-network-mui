import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_INITIALIZED_SUCCESS"
const TOGGLE_IN_PROGRESS = "TOGGLE-IN-PROGRESS"
const SET_APP_ERROR = "SET-APP-ERROR"

export type  InitialStateType = typeof initialState
const initialState = {
    initialized: false,
    inProgress: false,
    error: ''
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INITIALIZED_INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        case "TOGGLE-IN-PROGRESS":
            return {...state, inProgress: action.inProgress}
        case "SET-APP-ERROR":
            return {...state, error: action.error}
        default :
            return state
    }
}

export type ActionsType = followActionType | toggleInProgressActionType | setAppErrorActionType

export type followActionType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export type toggleInProgressActionType = ReturnType<typeof toggleInProgress>
export const toggleInProgress = (inProgress: boolean) => {
    return {
        type: TOGGLE_IN_PROGRESS,
        inProgress
    } as const
}

export type setAppErrorActionType = ReturnType<typeof setAppError>
export const setAppError = (error: string) => {
    return {
        type: SET_APP_ERROR,
        error
    } as const
}


//thunk
export const initializeApp = () => async (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())
}





