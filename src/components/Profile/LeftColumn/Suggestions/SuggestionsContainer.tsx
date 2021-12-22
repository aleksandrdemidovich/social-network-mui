import React from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {
    followSuccess, setUsers,
    unfollowSuccess,
    UserType
} from "../../../../redux/users-reducer";
import Suggestions from "./Suggestions";
import {usersAPI} from "../../../../API/api";


type mapStateToPropsType = {
    users: Array<UserType>
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type  SuggestionsPropsType = mapStateToPropsType & mapDispatchPropsType
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}


class SuggestionsContainer extends React.Component<SuggestionsPropsType> {
    componentDidMount() {
        usersAPI.getUsers(1, 30, false).then(data => {
                this.props.setUsers(data.items)
            });
    }

    follow = (userId: number) => {
        this.props.follow(userId)
    }
    unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }

    render() {
        return <Suggestions users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
        />
    }
}


export default connect(mapStateToProps, {follow: followSuccess, unfollow: unfollowSuccess, setUsers})(SuggestionsContainer)
