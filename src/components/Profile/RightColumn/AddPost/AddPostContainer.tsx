import {addPostActionCreator, ProfilePageType} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: ProfilePageType
}
type mapDispatchPropsType = {
    addPost: (newMessText: string) => void
}

export type  AddPostPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (newMessText: string) => {
            dispatch(addPostActionCreator(newMessText))
        }

    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;
