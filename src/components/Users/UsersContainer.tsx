import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FilterType,
    follow, requestUsers,
    setCurrentPage,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/users-selectors";


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter: FilterType
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    requestUsers: (currentPage: number, pageSize: number, filter:FilterType) => void
}
type  UsersPropsType = mapStateToPropsType & mapDispatchPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        const {pageSize, currentPage, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
        this.props.setCurrentPage(pageNumber)
    };

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
    };


    render() {
        return <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onFilterChanged={this.onFilterChanged}
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
        follow, unfollow, setCurrentPage, requestUsers
    })
)(UsersContainer)


