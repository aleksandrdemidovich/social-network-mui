import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
    unfollowSuccess,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchPropsType = {
    follow:(userId: number) => void
    unfollow:(userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type  UsersPropsType = mapStateToPropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
            };


    render() {
        return <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      handlePageChange={this.handlePageChange}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
        />
    }
}




export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsers
})
)(UsersContainer)


