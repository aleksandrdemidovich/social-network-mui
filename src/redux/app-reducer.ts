import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_INITIALIZED_SUCCESS"

export type  InitialStateType = typeof initialState
const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INITIALIZED_INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default :
            return state
    }
}

export type ActionsType =  followActionType

export type followActionType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}


//thunk
export const initializeApp = () => async (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())
    }





