import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {PostType} from "../../../../redux/store";
import Posts from "./Posts";
import {Dispatch} from "redux";
import {sendMessageCreator, UpdateNewMessTextCreator} from "../../../../redux/dialogs-reducer";
import {DeletePostCreator} from "../../../../redux/profile-reducer";


type mapStateToPropsType = {
    posts: Array<PostType>
}
type mapDispatchPropsType = {
    deletePost: (postID: string) => void
}

export type  PostsPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
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