import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, Typography} from "@mui/material";


function UserCard() {

    const [unfollow, setFollow] = useState<boolean>(false)

    const checkFollow = (f: boolean) => {
        f ? setFollow(false) : setFollow(true)
    }
    const setButtonName = (status: boolean) => {
        return status ? 'Unfollow' : 'Follow'
    }


    return (
        <Paper elevation={4} style={{marginBottom:'10px'}}>
            <Grid container  item direction={"column"} alignItems={"center"}  style={{padding:'25px 40px'}}>
                <Avatar
                    alt="Tony Stark"
                    src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                    sx={{width: 70, height: 70}}

                />
                <Typography fontWeight={"bold"} variant={"subtitle1"} style={{paddingTop:'10px'}}>User Name</Typography>
                <Typography variant={"caption"}>User status</Typography>
                <Typography variant={"body2"}>user.location.country</Typography>
                <Typography variant={"body2"} style={{paddingBottom:'15px'}}>user.location.city</Typography>
                <Button  onClick={() => {checkFollow(unfollow)}} variant={"contained"} size={"small"} color={ unfollow ? "secondary" : "success"}>{setButtonName(unfollow)}</Button>
            </Grid>
        </Paper>
    );
}

export default UserCard;
