import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_FILTER = "SET-FILTER"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const SET_USER_COUNT_PER_PAGE = "SET-USER-COUNT-PER-PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"


export type locationType = {
    city: string | null
    country: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: locationType
}

export type  InitialStateType = typeof initialState
export type  FilterType = typeof initialState.filter
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
    filter: {
        term: '',
        friend: null as null | boolean
    }
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        case "UNFOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-USER-COUNT-PER-PAGE":
            return {...state, pageSize: action.pageSize}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            } as InitialStateType
        case "SET-FILTER":
            return {...state, filter: action.filter}
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
    | toggleFollowingProgressActionType
    | setUserCountPerPageActionType
    | setFilterActionType


export type followActionType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type unfollowActionType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
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

export type setFilterActionType = ReturnType<typeof setFilter>
export const setFilter = (filter: FilterType) => {
    return {
        type: SET_FILTER,
        filter
    } as const
}

export type setUserCountPerPageActionType = ReturnType<typeof setUserCountPerPage>
export const setUserCountPerPage = (pageSize: number) => {
    return {
        type: SET_USER_COUNT_PER_PAGE,
        pageSize
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

export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isProgress: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isProgress, userId
    } as const
}


//thunk
export const requestUsers = (page: number, pageSize: number, filter: FilterType) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    dispatch(setUserCountPerPage(pageSize))
    dispatch(setFilter(filter))
    let response = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number,
                                  apiMethod: (userId: number) => Promise<any>,
                                  actionCreator: (userId: number) => ActionsType) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    debugger
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

