import React from 'react';
import {
    Avatar, Button,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import {useHistory} from 'react-router-dom';

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CallIcon from "@mui/icons-material/Call";
import ClearIcon from "@mui/icons-material/Clear";

type ChatHeaderPropsType = {
    editMode: boolean
    selectedMessageCount: number
    setEditMode: () => void
    deleteMessages: () => void
}

function ChatHeader(props: ChatHeaderPropsType) {

    let history = useHistory()

    return (
        <Grid container item direction={"row"} justifyContent={"space-between"} alignItems={"center"}
              flexWrap={'nowrap'}
              style={{paddingLeft: '15px', paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px'}}>
            {props.editMode
                ? <Grid item display={"flex"} flexDirection={"row"} alignItems={"center"} style={{padding:'2px'}}>
                    <Typography variant={"subtitle2"}><b>{props.selectedMessageCount} messages</b></Typography>
                    <IconButton>
                        <ClearIcon onClick={() => props.setEditMode()} fontSize={"small"} color={"secondary"}/>
                    </IconButton>
                </Grid>
                : <> <Grid item>
                    <Button variant={"text"} startIcon={<ArrowBackOutlinedIcon/>} onClick={() => {
                        history.goBack()
                    }}>back</Button>
                </Grid>
                    <Grid item>
                        <Typography variant={"h6"}>Tony Stark</Typography>
                    </Grid>
                </>}

            <Grid item>
                {props.editMode ? <Grid item>
                        <Button variant={"contained"} color={"secondary"} onClick={props.deleteMessages} size={"small"}>Delete</Button>
                    </Grid> :
                    <Grid container item direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item>
                            <IconButton aria-label="delete" color="primary">
                                <CallIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="delete" color="primary">
                                <MoreHorizIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                                sx={{width: 33, height: 33}}
                            />
                        </Grid>
                    </Grid>}
            </Grid>
        </Grid>
    )
}

export default ChatHeader

