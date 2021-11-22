import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Avatar, AvatarProps, Badge, BadgeProps, Divider, Grid, IconButton, styled, Tooltip} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType} from "../../../../redux/profile-reducer";
import defaultUserAvatar from '../../../../assets/images/userAvatar.jpg'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {NavLink} from 'react-router-dom';

const CustomAvatar = styled(Avatar)<AvatarProps>(({theme}) => ({
    width: 250,
    height: 250,
    margin: 'auto',
    marginTop: '-25px',
    border: '3px solid transparent',
    // '&:hover': {
    //     border: `3px solid #3f51b5`,
    // }
}));

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

type ProfileInfoPropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    const classes = useClasses(styles);

    const [invisible, setInvisible] = useState(true)

    return (
        <Grid container item direction={"column"}>
            <Grid item>
                <Tooltip title="Change your social networks links">
                    <IconButton className={classes.editButton} color={"primary"}>
                        <EditOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item style={{margin: 'auto'}}>
                {/*<CustomAvatar src={props.profile.photos.large ? props.profile.photos.large  : defaultUserAvatar }/>*/}

                <StyledBadge
                    badgeContent={
                        <Tooltip title="Update photo">
                            <IconButton style={{color: '#3f51b5'}} aria-label={'new photo'}>
                                <CameraAltIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                    }
                    invisible={invisible}
                    onMouseEnter={() => setInvisible(false)}
                    onMouseLeave={() => setInvisible(true)}
                    overlap="circular"
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                >
                    <CustomAvatar src={props.profile.photos.large ? props.profile.photos.large : defaultUserAvatar}/>
                </StyledBadge>


            </Grid>
            <Grid item>
                <ListItemButton>
                    <StyledListItemIcon>
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
                <a href={props.profile.contacts.github} target={'_blank'} style={{textDecoration: 'none', color:'inherit'}}>
                <ListItemButton href={props.profile.contacts.github}>
                    <StyledListItemIcon>
                        <LinkedInIcon fontSize={"large"} className={classes.profileLinkedInIcon}/>
                    </StyledListItemIcon>
                    <ListItemText primary="LinkedIn"/>
                </ListItemButton>
                </a>
            </Grid>
        </Grid>
    );
}

export default ProfileInfo;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
  color: #3f51b5;
`