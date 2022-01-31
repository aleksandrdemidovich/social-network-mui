import {follow, followSuccess, toggleFollowingProgress, unfollow, unfollowSuccess} from "../redux/users-reducer";
import {usersAPI} from "../API/api";

jest.mock('../API/api')
let userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
let result: any;


beforeEach(() => {
    result = {
        resultCode: 0,
        messages: [],
        data: {}
    }

    userAPIMock.follow.mockReturnValue(Promise.resolve(result))
    userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))
})


test('success follow thunk',async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3,toggleFollowingProgress(false, 1))

})


test('success unfollow thunk',async () => {
    const thunk = unfollow(1)
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2,unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3,toggleFollowingProgress(false, 1))

})
