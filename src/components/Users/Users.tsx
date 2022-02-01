import React from 'react';
import {Grid, NativeSelect, Pagination,} from "@mui/material";
import {FilterType, setUserCountPerPage, UserType} from "../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import UserCard from "./UserCard/UserCard";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserSearchForm} from "./UsersSearchForm";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    handlePageChange: (event: React.ChangeEvent<unknown>, pageNumber: number) => void
    isFetching: boolean
    followingInProgress: number[]
    onFilterChanged: (filter: FilterType) => void
}

function Users(props: UsersPropsType) {

    const usersCountPerPage = useSelector((state: AppStateType) => state.usersPage.pageSize)
    const usersFilter = useSelector((state: AppStateType) => state.usersPage.filter)

    const dispatch = useDispatch()

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const usersElement = props.users.map(u => {
        return <UserCard name={u.name}
                         key={u.id}
                         id={u.id}
                         status={u.status}
                         followed={u.followed}
                         photos={u.photos}
                         follow={props.follow}
                         unfollow={props.unfollow}
                         followingInProgress={props.followingInProgress}/>
    })


    const onChangeCardsCountPerPage = (value: string) => {
        dispatch(setUserCountPerPage(+value))
    }


    return (
        <Grid container item direction={"column"}>
            <Grid container spacing={2} item direction={"row"} wrap={"nowrap"} alignItems={"center"}
                  style={{padding: '5px'}}>
                <UserSearchForm onFilterChanged={props.onFilterChanged}/>
            </Grid>
            <Grid container item direction={"row"} wrap={"wrap"} justifyContent={"flex-start"}
                  style={{marginTop: '10px', marginLeft: '20px'}}>
                {props.isFetching ? <Preloader/> : usersElement}
            </Grid>
            <Grid item display={"flex"} alignItems={"center"} flexDirection={"row"} flexWrap={"nowrap"} margin={"auto"}>
                {props.isFetching ? <></>
                    : <><Pagination count={pagesCount}
                                    page={props.currentPage}
                                    onChange={props.handlePageChange}
                                    variant="outlined"
                                    shape="rounded"
                                    color={"primary"}/>
                        <p style={{margin: '0 10px 0 15px'}}>Show</p>
                        <NativeSelect
                            onChange={(e) => onChangeCardsCountPerPage(e.currentTarget.value)}
                            color={"primary"}
                            value={usersCountPerPage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </NativeSelect><p style={{margin: '0 0 0 10px'}}> users per page</p>
                    </>}
            </Grid>
        </Grid>

    );
}


export default Users;



