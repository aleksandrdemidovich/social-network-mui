import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import Posts from "./Posts";
import {Dispatch} from "redux";
import {DeletePostCreator, PostType} from "../../../../redux/profile-reducer";
import {PhotosType} from "../../../../redux/users-reducer";


type mapStateToPropsType = {
    posts: Array<PostType>
    profilePhotos: PhotosType
    userName: string
}
type mapDispatchPropsType = {
    deletePost: (postID: string) => void
}

export type  PostsPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profilePhotos: state.profilePage.profile.photos,
        userName: state.profilePage.profile.fullName
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        deletePost: (postID: string) => {
            dispatch(DeletePostCreator(postID))
        }
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;