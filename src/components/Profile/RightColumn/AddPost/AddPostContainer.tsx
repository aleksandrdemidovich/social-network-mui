import React from 'react';
import {addPostActionCreator, ProfilePageType, UpdateNewPostTextCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: ProfilePageType
    newPostText: string
}
type mapDispatchPropsType = {
    onPostChange: (text: string) => void
    addPost: (newMessText: string) => void
}

export type  AddPostPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText!
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        onPostChange: (text: string) => {

            dispatch(UpdateNewPostTextCreator(text))
        },
        addPost: (newMessText: string) => {

            dispatch(addPostActionCreator(newMessText))
        }

    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;
