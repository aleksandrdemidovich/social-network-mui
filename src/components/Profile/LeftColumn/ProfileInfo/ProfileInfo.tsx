import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Avatar, AvatarProps, Divider, Grid, IconButton, styled} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType} from "../../../../redux/profile-reducer";
import defaultUserAvatar from '../../../../assets/images/userAvatar.jpg'

const CustomAvatar = styled(Avatar)<AvatarProps>(({theme}) => ({
    width: 200,
    height: 200,
    margin: 'auto',
    marginTop: '-25px',
    border: '3px solid transparent',
    '&:hover': {
        border: `3px solid #3f51b5`
    }
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

type ProfileInfoPropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    const classes = useClasses(styles);


    return (
        <Grid container item direction={"column"}>
            <Grid item>
                <IconButton className={classes.editButton} color={"primary"}>
                    <EditOutlinedIcon/>
                </IconButton>
            </Grid>
            <Grid item>
                <CustomAvatar src={props.profile.photos.large ? props.profile.photos.large  : defaultUserAvatar }/>
            </Grid>
            <Grid item>
                <ListItemButton>
                    <StyledListItemIcon >
                        <FacebookIcon fontSize={"large"} className={classes.profileFacebookIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="Facebook"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <LanguageIcon fontSize={"large"} className={classes.profileWebsiteIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="Website"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <i style={{padding: '2px'}}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'
                                 className={classes.profileVkontakteIcon}/>
                        </i>
                    </StyledListItemIcon>
                    <ListItemText primary="VK"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <TwitterIcon fontSize={"large"} className={classes.profileTwitterIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="Twitter"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <InstagramIcon fontSize={"large"} className={classes.profileInstagramIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="Instagram"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <YouTubeIcon fontSize={"large"} className={classes.profileYouTubeIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="YouTube"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <GitHubIcon fontSize={"large"} className={classes.profileGitHubIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="GitHub"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <StyledListItemIcon>
                        <LinkedInIcon fontSize={"large"} className={classes.profileLinkedInIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="LinkedIn"/>
                </ListItemButton>
            </Grid>
        </Grid>
    );
}

export default ProfileInfo;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
  color: #3f51b5;
`