import React from 'react';
import {
    Avatar,
    Button,
    Grid,
    Input,
    NativeSelect,
    Pagination,
    styled,
} from "@mui/material";
import {UserType} from "../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import UserCard from "./UserCard/UserCard";


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
}

function Users(props: UsersPropsType) {

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


    return (
        <Grid container item direction={"column"}>
            <Grid container spacing={2} item direction={"row"} wrap={"nowrap"} alignItems={"center"}
                  style={{padding: '5px'}}>
                <Grid item xs={12} style={{padding: '15px 0 0 30px'}}>
                    <Input fullWidth placeholder="Search users"/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" size={"medium"}>Search</Button>
                </Grid>
            </Grid>
            <Grid container item justifyContent={"flex-end"} direction={"row"}
                  style={{padding: '5px', marginTop: '5px'}}>
                <Grid item>
                    <NativeSelect
                        color={"primary"}
                        size={"small"}
                        style={{fontSize: '13px'}}
                        defaultValue={'Filter'}>
                        <option value={10}>All</option>
                        <option value={20}>Only followed</option>
                        <option value={30}>Only unfollowed</option>
                    </NativeSelect>
                </Grid>
            </Grid>
            <Grid container item direction={"row"} wrap={"wrap"} justifyContent={"flex-start"}
                  style={{marginTop: '10px', marginLeft: '20px'}}>
                {props.isFetching ? <Preloader/> : usersElement}
            </Grid>
            <Grid item flexWrap={"nowrap"} margin={"auto"}>
                {props.isFetching ? <></> : <Pagination count={pagesCount}
                            page={props.currentPage}
                            onChange={props.handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            color={"primary"}/>}
            </Grid>
        </Grid>

    );
}


export default Users;
