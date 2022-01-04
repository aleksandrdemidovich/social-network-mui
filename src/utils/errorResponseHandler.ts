import {setAppError} from "../redux/app-reducer";
import axios from "axios";
import { Dispatch } from "redux";

export default function errorResponseHandler(e: any, dispatch: Dispatch) {
    if (axios.isAxiosError(e) && e.response) {
        // @ts-ignore
        dispatch(setAppError({error: e.response.data.error}))
    } else {
        dispatch(setAppError('Some error occurred, check your connection.'))
    }
}