const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type locationType = {
    city: string | null
    country: string | null
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: locationType
}

export type  InitialStateType = typeof initialState
const initialState = {
    users: [] as Array<UserType>,
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true } : u)]}
        case "UNFOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false } : u)]}
        case "SET-USERS":
            return {...state, users:[...action.users]}
        default :
            return state
    }
}

export type ActionsType = unfollowActionType | followActionType | setUsersActionType


export type followActionType = ReturnType<typeof followAC>
export const followAC = (userId: string)=> {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type unfollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type setUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}