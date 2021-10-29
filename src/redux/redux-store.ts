import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage:usersReducer,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers)

export default store

// @ts-ignore
window.store = store;

