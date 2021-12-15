import React from 'react';
import {Avatar, Button, Grid, Paper, styled, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import defaultUserPhoto from "../../../assets/images/userAvatar.jpg";
import {UserType} from "../../../redux/users-reducer";


type UserCardPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
} & UserType

function UserCard(props: UserCardPropsType) {
    return (
        <Paper elevation={4} style={{marginBottom: '30px', marginRight: '10px', width: '220px'}}>
            <Grid container item direction={"column"} alignItems={"center"}
                  style={{padding: '25px 15px', wordWrap: 'break-word'}}>
                <NavLink to={`/profile/${props.id}`}>
                    <UserAvatar
                        alt="Tony Stark"
                        src={props.photos.large !== null ? props.photos.large : defaultUserPhoto}/>
                </NavLink>
                <Typography textAlign={"center"} fontWeight={"bold"} variant={"subtitle1"}
                            style={{paddingTop: '10px'}}>{props.name}</Typography>
                <Typography textAlign={"center"} variant={"caption"}>{props.status}</Typography>
                <Typography variant={"body2"}>{'u.location.country'}</Typography>
                <Typography variant={"body2"} style={{paddingBottom: '15px'}}>{'u.location.city'}</Typography>
                {props.followed ?
                    <Button variant={"contained"} disabled={props.followingInProgress.some(id => id === props.id)}  size={"small"} color={"secondary"}
                            onClick={() => {
                                props.unfollow(props.id)
                            }}>Unfollow</Button>
                    : <Button variant={"contained"} disabled={props.followingInProgress.some(id => id === props.id)} size={"small"} color={"success"}
                              onClick={() => {
                                  props.follow(props.id)
                              }}>Follow</Button>}
            </Grid>
        </Paper>
    )
}

export default UserCard;

const UserAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;

  :hover {
    cursor: pointer;
  }
`;