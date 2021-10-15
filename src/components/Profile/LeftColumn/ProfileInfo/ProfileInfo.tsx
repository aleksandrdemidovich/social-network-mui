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



const CustomAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    width: 200,
    height: 200,
    margin: 'auto',
    marginTop:'-25px',
    border: '3px solid transparent',
        '&:hover': {
            border: `3px solid #3f51b5`
        }
}));
const styles = (theme:any) =>  ({
    editButton:{
        float:'right', display:'inline'
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

function ProfileInfo() {

    const classes = useClasses(styles);

    return (

        <Grid container item direction={"column"} >
            <Grid item >
                <IconButton className={classes.editButton} color={"primary"}>
                    <EditOutlinedIcon/>
                </IconButton>
            </Grid>
            <Grid item >
                <CustomAvatar src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"/>
            </Grid>
            <Grid item >
                <ListItemButton>
                    <ListItemIcon>
                        <FacebookIcon fontSize={"large"} className={classes.profileFacebookIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Facebook"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <LanguageIcon fontSize={"large"} className={classes.profileWebsiteIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Website"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <i style={{padding: '2px'}}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'
                                 className={classes.profileVkontakteIcon}/>
                        </i>
                    </ListItemIcon>
                    <ListItemText  primary="VK"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <TwitterIcon fontSize={"large"} className={classes.profileTwitterIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Twitter"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <InstagramIcon fontSize={"large"} className={classes.profileInstagramIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Instagram"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <YouTubeIcon fontSize={"large"} className={classes.profileYouTubeIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="YouTube"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <GitHubIcon fontSize={"large"} className={classes.profileGitHubIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="GitHub"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <LinkedInIcon fontSize={"large"} className={classes.profileLinkedInIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn"/>
                </ListItemButton>
            </Grid>
        </Grid>
    );
}

export default ProfileInfo;