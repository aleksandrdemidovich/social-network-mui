import React from 'react';
import {Avatar, Button, Divider, Grid, IconButton, Typography} from "@mui/material";
import {SuggestionsPropsType} from "./SuggestionsContainer";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {NavLink} from 'react-router-dom';
import defaultUserPhoto from '../../../../assets/images/userAvatar.jpg'
import axios from "axios";
import {UsersResponsAPIType} from "../../../../APIResponseType/UsersResponsAPIType";


class Suggestions extends React.Component<SuggestionsPropsType> {

    follow = (userId: string) => {
        this.props.follow(userId)
    }
    unfollow = (userId: string) => {
        this.props.unfollow(userId)
    }

    componentDidMount() {
        axios.get<UsersResponsAPIType>("https://social-network.samuraijs.com/api/1.0/users?count=6")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        const suggestionElements = this.props.users.map(s => {
            return <Grid item>
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
                            {s.status}
                        </Typography>
                    </Grid>
                    <Grid item style={{marginLeft: 'auto'}}>
                        {s.followed ?
                            <IconButton aria-label="delete" size="large"
                                        onClick={() => this.unfollow(s.id)}><IndeterminateCheckBoxOutlinedIcon
                                fontSize="inherit"
                                color={"secondary"}/></IconButton>
                            : <IconButton aria-label="delete" size="large"
                                          onClick={() => this.follow(s.id)}><AddBoxOutlinedIcon
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
}

export default Suggestions;
