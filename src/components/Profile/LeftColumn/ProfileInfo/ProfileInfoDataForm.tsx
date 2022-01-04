import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Divider,
    Grid, IconButton,
    Input, ListItem,
    styled, Tooltip,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType, saveProfile} from "../../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import DoneIcon from "@mui/icons-material/Done";
import {AppStateType} from "../../../../redux/redux-store";


type FormikErrorType = {
    github?: string
}

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
    editMode: boolean
    setEditMode: any
}

function ProfileInfoDataForm(props: ProfileInfoPropsType) {

    const classes = useClasses(styles);

    const dispatch = useDispatch()

    const closeEditMode = () => {
        props.setEditMode(false)
    }

    const formik = useFormik({
        initialValues: {
            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.github) {
                errors.github = 'Required';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(saveProfile({...props.profile, contacts:values}))
            closeEditMode()
        }
    })




    return (
        <form onSubmit={formik.handleSubmit}>
            <Tooltip title={'Save changes'}>
                <IconButton style={{float: 'right', display: 'inline'}}
                            type={"submit"}
                            color={"success"}>
                    <DoneIcon/>
                </IconButton>
            </Tooltip>
        <Grid container item direction={"column"}>
            <Grid item>
                <ListItem>
                    <StyledListItemIcon>
                        <FacebookIcon fontSize={"large"} className={classes.profileFacebookIcon}/>
                        {props.editMode && <Input id="facebook"
                                                  aria-label={'qwe'}
                                                  name="facebook"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.facebook}
                                                  placeholder="Facebook"/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <LanguageIcon fontSize={"large"} className={classes.profileWebsiteIcon}/>
                        {props.editMode && <Input id="website"
                                                  name="website"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.website}
                                                  placeholder="Website" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <i style={{padding: '2px'}}>
                            <img alt='vk img' src='https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'
                                 className={classes.profileVkontakteIcon}/>
                        </i>
                        {props.editMode && <Input id="vk"
                                                  name="vk"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.vk}
                                                  placeholder="VK" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <TwitterIcon fontSize={"large"} className={classes.profileTwitterIcon}/>
                        {props.editMode && <Input id="twitter"
                                                  name="twitter"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.twitter}
                                                  placeholder="Twitter" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <InstagramIcon fontSize={"large"} className={classes.profileInstagramIcon}/>
                        {props.editMode && <Input id="instagram"
                                                  name="instagram"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.instagram}
                                                  placeholder="Instagram" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <YouTubeIcon fontSize={"large"} className={classes.profileYouTubeIcon}/>
                        {props.editMode && <Input id="youtube"
                                                  name="youtube"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.youtube}
                                                  placeholder="YouTube" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <GitHubIcon fontSize={"large"} className={classes.profileGitHubIcon}/>
                        {props.editMode && <Input id="github"
                                                  name="github"
                                                  type="text"
                                                  error={!!formik.errors.github}
                                                  onChange={formik.handleChange}
                                                  value={formik.values.github}
                                                  placeholder="Github" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
                <Divider/>
                <ListItem>
                    <StyledListItemIcon>
                        <LinkedInIcon fontSize={"large"} className={classes.profileLinkedInIcon}/>
                        {props.editMode && <Input id="mainLink"
                                                  name="mainLink"
                                                  type="text"
                                                  onChange={formik.handleChange}
                                                  value={formik.values.mainLink}
                                                  placeholder="LinkedIn" fullWidth/>}
                    </StyledListItemIcon>

                </ListItem>
            </Grid>
        </Grid>
        </form>
    );
}

export default ProfileInfoDataForm;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
  color: #3f51b5;
`