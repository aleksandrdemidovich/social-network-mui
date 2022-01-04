import React, {useState} from 'react';
import {
    Alert,
    Avatar,
    AvatarProps,
    Badge,
    BadgeProps,
    Divider,
    Grid,
    IconButton,
    Input,
    LinearProgress, Snackbar,
    styled,
    Tooltip
} from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType} from "../../../../redux/profile-reducer";
import defaultUserAvatar from '../../../../assets/images/userAvatar.jpg'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import ProfileInfoData from "./ProfileInfoData";
import ProfileInfoDataForm from "./ProfileInfoDataForm";
import CloseIcon from "@mui/icons-material/Close";



const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
    '& .MuiBadge-badge': {
        right: 27,
        top: 25,
        padding: '0 4px',
        font: 'italic 0.9em "Fira Sans", serif'
    },
}));

const styles = (theme: any) => ({
    editButton: {
        float: 'right', display: 'inline'
    },
    profileFacebookIcon: {
        paddingRight: '10px', color: '#4267B2',
    },
    profileWebsiteIcon: {
        paddingRight: '10px', width: '40px'
    },
    profileVkontakteIcon: {
        width: '40px', paddingRight: '15px', paddingBottom: 0
    },
    profileTwitterIcon: {
        paddingRight: '10px', color: '#1DA1F2',
    },
    profileInstagramIcon: {
        paddingRight: '10px', color: '#8a3ab9',
    },
    profileYouTubeIcon: {
        paddingRight: '10px', color: '#FF0000',
    },
    profileGitHubIcon: {
        paddingRight: '10px', color: '#4078c0',
    },
    profileLinkedInIcon: {
        paddingRight: '10px', color: '#0077b5',
    },

});

export type ProfileInfoPropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    const CustomAvatar = styled(Avatar)<AvatarProps>(({theme}) => ({
        width: 250,
        height: 250,
        margin: 'auto',
        marginTop: props.isOwner ?  '-25px' : '20px',
        border: '3px solid transparent',
    }));
    const classes = useClasses(styles);

    const inProgress = useSelector<AppStateType, boolean>(state => state.app.inProgress)
    const error = useSelector<AppStateType, string>(state => state.app.error)

    const [invisible, setInvisible] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(error.length > 1)


    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            console.log(e.target.files[0])
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <Grid container item direction={"column"}>

            {inProgress && <LinearProgress/>}
            {props.isOwner && <Grid item>
                <Tooltip title={editMode? "Close edit mode" : "Change your social networks links"}>
                    {!editMode ?
                        <IconButton className={classes.editButton} onClick={() => setEditMode(true)}
                                    color={"primary"}>
                            <EditOutlinedIcon/>
                        </IconButton>
                        : <IconButton className={classes.editButton} onClick={() => setEditMode(false)}
                                      color={"error"}>
                            <CloseIcon/>
                        </IconButton>}
                </Tooltip>
            </Grid>}
            <Grid item style={{margin: 'auto'}}>

                <StyledBadge
                    badgeContent={
                        <Tooltip title="Update photo">
                            <label htmlFor="icon-button-file">
                                <Input id="icon-button-file" type="file" onChange={onMainPhotoSelected}
                                       style={{display: 'none'}}/>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <CameraAltIcon fontSize={"large"}/>
                                </IconButton>
                            </label>
                        </Tooltip>
                    }
                    invisible={invisible}
                    onMouseEnter={() => setInvisible(!props.isOwner)}
                    onMouseLeave={() => setInvisible(true)}
                    overlap="circular"
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                >
                    <CustomAvatar alt='avatar'
                                  src={props.profile.photos.large ? props.profile.photos.large : defaultUserAvatar}/>
                </StyledBadge>


            </Grid>

            {!editMode
                ? <ProfileInfoData profile={props.profile}/>
                : <ProfileInfoDataForm editMode={editMode} setEditMode={setEditMode} profile={props.profile}/>}


            <Snackbar open={error.length > 1} autoHideDuration={3000}
                      style={{position: 'absolute', bottom: 10, left: 10}} >
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>

        </Grid>
    );
}

export default ProfileInfo;

