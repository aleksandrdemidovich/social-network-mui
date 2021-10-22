import React from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import Suggestions from "./Suggestions";
import {follow, setUsers, unfollow, UserType} from "../../../../redux/users-reducer";


type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type  SuggestionsPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const SuggestionsContainer = connect(mapStateToProps, {follow, unfollow, setUsers})(Suggestions)

export default SuggestionsContainer;
