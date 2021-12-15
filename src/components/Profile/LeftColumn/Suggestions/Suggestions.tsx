import React from 'react';
import {Avatar, Button, Divider, Grid, IconButton, Typography} from "@mui/material";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {NavLink} from 'react-router-dom';
import defaultUserPhoto from '../../../../assets/images/userAvatar.jpg'
import {UserType} from "../../../../redux/users-reducer";


type SuggestionPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

function Suggestions (props: SuggestionPropsType) {

        const top6Users = props.users.filter(u => !u.followed).slice(0,6)

        const suggestionElements = top6Users.map(s => {
            return <Grid item key={s.id}>
                <Grid container xs={12} item spacing={2} direction={"row"} wrap={"nowrap"}
                      justifyContent={'flex-start'}>
                    <Grid item style={{marginLeft: '20px'}}>
                        <Avatar
                            alt="Remy Sharp"
                            src={s.photos.large !== null ? s.photos.large : defaultUserPhoto}
                            sx={{width: 48, height: 48}}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" component="h1" style={{paddingBottom: 0}}>
                            {s.name}
                        </Typography>
                        <Typography variant="caption">
                            {s.status === null ? 'default status' : s.status }
                        </Typography>
                    </Grid>
                    <Grid item style={{marginLeft: 'auto'}}>
                        {s.followed ?
                            <IconButton aria-label="delete" size="large"
                                        onClick={() => props.unfollow(s.id)}><IndeterminateCheckBoxOutlinedIcon
                                fontSize="inherit"
                                color={"secondary"}/></IconButton>
                            : <IconButton aria-label="delete" size="large"
                                          onClick={() => props.follow(s.id)}><AddBoxOutlinedIcon
                                fontSize="inherit" color={"success"}/></IconButton>}
                    </Grid>
                </Grid>
            </Grid>
        })

        return (
            <Grid container item spacing={2} direction={"column"}>
                <Grid item>
                    <Typography variant="h6" component="h1" style={{fontWeight: 'bold',  paddingBottom: '10px',
                        paddingLeft: '20px',}}>
                        Suggestions
                    </Typography>
                    <Divider/>
                </Grid>
                {suggestionElements}
                <Grid item style={{margin: 'auto', paddingTop: 0, width: '100%'}}>
                    <NavLink to="/users" style={{textDecoration: 'none', color: 'inherit'}} >
                        <Button fullWidth variant={"text"} color={"secondary"}>view more</Button>
                    </NavLink>
                </Grid>
            </Grid>

        );
    }


export default Suggestions;
