import {followSuccess, InitialStateType, unfollowSuccess, usersReducer} from "../redux/users-reducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                photos: {large: null, small: null},
                status: 'status 0',
                followed: false,
                name: 'Alex 0',
                location: {
                    city: 'Brest',
                    country: 'BLR'
                }
            },
            {
                id: 1,
                photos: {large: null, small: null},
                status: 'status 1',
                followed: false,
                name: 'Alex 1',
                location: {
                    city: 'Brest',
                    country: 'BLR'
                }
            },
            {
                id: 2,
                photos: {large: null, small: null},
                status: 'status 2',
                followed: true,
                name: 'Alex 2',
                location: {
                    city: 'Brest',
                    country: 'BLR'
                }
            },
            {
                id: 3,
                photos: {large: null, small: null},
                status: 'status 3',
                followed: true,
                name: 'Alex 3',
                location: {
                    city: 'Brest',
                    country: 'BLR'
                }
            },
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFriends: false,
        isFetching: false,
        followingInProgress: []
    }
})


test('follow success', () => {
    const newState = usersReducer(state, followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
    const newState = usersReducer(state, unfollowSuccess(3))

    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})
