import React from 'react';
import {Avatar, Button, Grid, Input, NativeSelect, Paper, Typography} from "@mui/material";
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import defaultUserPhoto from '../../assets/images/userAvatar.jpg'
import {UsersResponsAPIType} from "../../APIResponseType/UsersResponsAPIType";


function Users(props: UsersPropsType) {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get<UsersResponsAPIType>("https://social-network.samuraijs.com/api/1.0/users?count=25")
                .then(response => {props.setUsers(response.data.items)} );
        }
    }

    const follow = (userId: string) => {
        props.follow(userId)
    }

    const unfollow = (userId: string) => {
        props.unfollow(userId)
    }

    const usersElement = props.users.map(u => {
        return <Paper elevation={4} style={{marginBottom:'30px', marginRight:'10px', width:'240px'}}>
            <Grid container item direction={"column"} alignItems={"center"}  style={{padding:'25px 15px', wordWrap:'break-word'}}>
                <Avatar
                    alt="Tony Stark"
                    src={u.photos.large !== null ? u.photos.large : defaultUserPhoto}
                    sx={{width: 70, height: 70}}

                />
                <Typography fontWeight={"bold"} variant={"subtitle1"} style={{paddingTop:'10px'}}>{u.name}</Typography>
                <Typography variant={"caption"}>{u.status}</Typography>
                <Typography variant={"body2"}>{'u.location.country'}</Typography>
                <Typography variant={"body2"} style={{paddingBottom:'15px'}}>{'u.location.city'}</Typography>
                {u.followed ?
                    <Button  variant={"contained"} size={"small"} color={"secondary"}  onClick={() => unfollow(u.id)}>Unfollow</Button>
                    : <Button variant={"contained"} size={"small"} color={"success"} onClick={() => follow(u.id)}>Follow</Button>}
            </Grid>
        </Paper>
    })


    return (
        <Grid container item direction={"column"}>
            <Grid container  spacing={2} item direction={"row"} wrap={"nowrap"} alignItems={"center"} style={{padding: '5px'}}>
                <Grid item xs={12} style={{padding:'15px 0 0 30px'}}>
                    <Input fullWidth placeholder="Search users"  />
                </Grid>
                <Grid item >
                    <Button variant="contained" color="success" size={"medium"}>Search</Button>
                </Grid>
            </Grid>
            <Grid container item justifyContent={"flex-end"} direction={"row"} style={{padding: '5px', marginTop:'5px'}}>
                <Grid item >
                    <NativeSelect
                        color={"primary"}
                        size={"small"}
                        style={{fontSize:'13px'}}
                        defaultValue={'Filter'}>
                        <option value={10}>All</option>
                        <option value={20}>Only followed</option>
                        <option value={30}>Only unfollowed</option>
                    </NativeSelect>
                </Grid>
            </Grid>
            <Button variant={"outlined"} color={"primary"} onClick={getUsers}>Get Users</Button>
            <Grid container  item  direction={"row"} wrap={"wrap"} justifyContent={"flex-start"} style={{marginTop:'10px', marginLeft:'20px'}}>
                {usersElement}
            </Grid>
        </Grid>
    );
}

export default Users;
