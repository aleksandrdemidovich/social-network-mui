import React, {useState} from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {Grid, IconButton, LinearProgress, Paper, styled, Tooltip} from "@mui/material";
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType} from "../../../../redux/profile-reducer";
import UserInfoData from "./UserInfoData";
import UserInfoDataForm from "./UserInfoDataForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '30px',
    backgroundColor: theme.palette.text.disabled,
    padding: '4px 10px 4px 10px'
}));
const styles = (theme: any) => ({
    rootContainer: {
        paddingBottom: '20px'
    },
    userInfoContainer: {
        paddingLeft: '20px',
    },
    userInfoContainerContent: {
        width: '100%',
    },
    editButton: {
        float: 'right', display: 'inline'
    },
    userName: {
        padding: '20px 20px 0 0'
    },
    statusInput: {
        width: '97%', paddingTop: '-10px'
    },
    userPosition: {
        color: '#686868', fontSize: '16px', fontWeight: 700,
    },

});

export type UserInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

function UserInfo(props: UserInfoPropsType) {

    const inProgress = useSelector<AppStateType, boolean>(state => state.app.inProgress)

    const skills = ["HTML", "CSS", "JS", "ReactJS", "TypeScript", "Redux", "Git", "Yarn", "Webpack"].map(s => {
        return (<Grid item>
            <Item>{s}</Item>
        </Grid>)
    })

    const [editMode, setEditMode] = useState(false)

    const classes = useClasses(styles);

    return (
        <Grid container item direction={"column"} className={classes.rootContainer}>
            {inProgress && <LinearProgress/>}
            <Grid container item spacing={2} direction={"row"} className={classes.userInfoContainer}>
                <Grid item className={classes.userInfoContainerContent}>
                    {props.isOwner && <Tooltip title={editMode ? "Close" : "Change your profile information"}>
                        {!editMode ?
                            <IconButton className={classes.editButton} onClick={() => setEditMode(true)}
                                        color={"primary"}>
                                <EditOutlinedIcon/>
                            </IconButton>
                            : <IconButton className={classes.editButton} onClick={() => setEditMode(false)}
                                          color={"error"}>
                                <CloseIcon/>
                            </IconButton>}
                    </Tooltip>}
                    {editMode
                        ? <UserInfoDataForm profile={props.profile}
                                            status={props.status}
                                            updateStatus={props.updateStatus}
                                            isOwner={props.isOwner}
                                            setEditMode={setEditMode}/>
                        : <UserInfoData profile={props.profile}
                                        status={props.status}
                                        updateStatus={props.updateStatus}
                                        isOwner={props.isOwner}/>}
                </Grid>
                {skills}
            </Grid>
        </Grid>
    );
}

export default UserInfo;

