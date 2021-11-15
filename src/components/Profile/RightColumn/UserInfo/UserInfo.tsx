import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {Badge, BadgeProps, Grid, IconButton, Input, Paper, styled, Tooltip, Typography} from "@mui/material";
import useClasses from "../../../../customHookCSS/useClasses";
import {ProfileType} from "../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '30px',
    backgroundColor: theme.palette.text.disabled,
    padding: '4px 10px 4px 10px'
}));
const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -59,
        top: 7,
        padding: '0 4px',
        font: 'italic 0.9em "Fira Sans", serif'
    },
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

type UserInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

function UserInfo(props: UserInfoPropsType) {

    const classes = useClasses(styles);

    return (
        <Grid container item direction={"column"} className={classes.rootContainer}>
            <Grid container item spacing={2} direction={"row"} className={classes.userInfoContainer}>
                <Grid item className={classes.userInfoContainerContent}>
                    <Tooltip title="Change your profile information">
                        <IconButton className={classes.editButton} color={"primary"}>
                            <EditOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" fontWeight={"bold"} component="h1" className={classes.userName}>
                        {props.profile.fullName}
                    </Typography>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus} />
                    {/*<Input disableUnderline value={props.profile.aboutMe ? props.profile.aboutMe : '' } placeholder="Set status" className={classes.statusInput}/>*/}
                    <StyledBadge invisible={!props.profile.lookingForAJob} badgeContent={'Open to work'}
                                 color="success">
                        <span className={classes.userPosition}>
                            {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'default description'}
                        </span>
                    </StyledBadge>
                </Grid>
                <Grid item>
                    <Item>HTML</Item>
                </Grid>
                <Grid item>
                    <Item>CSS</Item>
                </Grid>
                <Grid item>
                    <Item>JS</Item>
                </Grid>
                <Grid item>
                    <Item>ReactJS</Item>
                </Grid>
                <Grid item>
                    <Item>TypeScript</Item>
                </Grid>
                <Grid item>
                    <Item>Redux</Item>
                </Grid>
                <Grid item>
                    <Item>Git</Item>
                </Grid>
                <Grid item>
                    <Item>Yarn</Item>
                </Grid>
                <Grid item>
                    <Item>Webpack</Item>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default UserInfo;

