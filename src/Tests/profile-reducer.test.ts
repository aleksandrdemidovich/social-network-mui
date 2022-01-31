import {addPostActionCreator, DeletePostCreator, PostType, profileReducer, ProfileType} from "../redux/profile-reducer";
import {v1} from "uuid";

let action = addPostActionCreator('test')
const state = {
    posts: [
        {id: v1(), message: 'Hi, how are you ', likeCount: 15},
        {id: v1(), message: 'It\'s my first post ', likeCount: 20},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam',
            likeCount: 5
        },
        {id: v1(), message: 'Da da ', likeCount: 99},
    ] as PostType[],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website:'',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            large: null,
            small: null
        }
    } as ProfileType,
    status: '',
    loggedUserPhoto: ''
}

test(('new post should be added'), () => {
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

test(('new post text should be "test"'), () => {
    let newState = profileReducer(state, action)

    expect(newState.posts[0].message).toBe('test')
})

test(('post should be deleted'), () => {
    let firstPostId = state.posts[0].id
    let newState = profileReducer(state, DeletePostCreator(firstPostId))

    expect(newState.posts.length).toBe(3)
})
