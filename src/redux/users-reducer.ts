const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

export type locationType = {
    city: string | null
    country: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
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
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        case "UNFOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default :
            return state
    }
}

export type ActionsType = unfollowActionType
    | followActionType
    | setUsersActionType
    | setPageActionType
    | setTotalUserCountActionType
    | toggleIsFetchingActionType


export type followActionType = ReturnType<typeof follow>
export const follow = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type unfollowActionType = ReturnType<typeof unfollow>
export const unfollow = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type setUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export type setPageActionType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    } as const
}

export type setTotalUserCountActionType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}

export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
