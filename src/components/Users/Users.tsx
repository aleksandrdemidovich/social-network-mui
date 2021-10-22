import React from 'react';
import {
    Avatar,
    Button,
    Grid,
    Input,
    NativeSelect,
    Pagination,
    Paper, styled,
    Typography
} from "@mui/material";
import defaultUserPhoto from '../../assets/images/userAvatar.jpg'
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    handleChange: (event: React.ChangeEvent<unknown>, pageNumber: number) => void
    isFetching: boolean
}

function Users(props: UsersPropsType) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const usersElement = props.users.map(u => {
        return <Paper elevation={4} style={{marginBottom: '30px', marginRight: '10px', width: '220px'}}>
            <Grid container item direction={"column"} alignItems={"center"}
                  style={{padding: '25px 15px', wordWrap: 'break-word'}}>
                <NavLink to={`/profile/${u.id}`}>
                    <UserAvatar
                        alt="Tony Stark"
                        src={u.photos.large !== null ? u.photos.large : defaultUserPhoto}/>
                </NavLink>
                <Typography textAlign={"center"} fontWeight={"bold"} variant={"subtitle1"}
                            style={{paddingTop: '10px'}}>{u.name}</Typography>
                <Typography textAlign={"center"} variant={"caption"}>{u.status}</Typography>
                <Typography variant={"body2"}>{'u.location.country'}</Typography>
                <Typography variant={"body2"} style={{paddingBottom: '15px'}}>{'u.location.city'}</Typography>
                {u.followed ?
                    <Button variant={"contained"} size={"small"} color={"secondary"}
                            onClick={() => props.unfollow(u.id)}>Unfollow</Button>
                    : <Button variant={"contained"} size={"small"} color={"success"}
                              onClick={() => props.follow(u.id)}>Follow</Button>}
            </Grid>
        </Paper>
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
            <Grid container item direction={"row"} wrap={"wrap"} justifyContent={"flex-start"} style={{marginTop: '10px', marginLeft: '20px'}}>
                {props.isFetching ? <Preloader/> : usersElement}
            </Grid>
            <Grid item flexWrap={"nowrap"} margin={"auto"}>
                <Pagination count={pagesCount}
                            page={props.currentPage}
                            onChange={props.handleChange}
                            variant="outlined"
                            shape="rounded"
                            color={"primary"}/>
            </Grid>
        </Grid>

    );
}


export default Users;

const UserAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;

  :hover {
    cursor: pointer;
  }
`;