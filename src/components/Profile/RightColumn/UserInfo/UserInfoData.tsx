import React from 'react';
import {Badge, BadgeProps, styled, Typography} from "@mui/material";
import ProfileStatus from "./ProfileStatus";
import useClasses from "../../../../customHookCSS/useClasses";
import {UserInfoPropsType} from "./UserInfo";


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
const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -59,
        top: 7,
        padding: '0 4px',
        font: 'italic 0.9em "Fira Sans", serif'
    },
}));


function UserInfoData(props: UserInfoPropsType) {
    const classes = useClasses(styles);

    return (
        <>
            <Typography variant="h6" fontWeight={"bold"} component="h1" className={classes.userName}>
                {props.profile.fullName}
            </Typography>
            <ProfileStatus status={props.status}
                           isOwner = {props.isOwner}
                           updateStatus={props.updateStatus}/>
            {/*<Input disableUnderline value={props.profile.aboutMe ? props.profile.aboutMe : '' } placeholder="Set status" className={classes.statusInput}/>*/}
            <StyledBadge invisible={!props.profile.lookingForAJob} badgeContent={'Open to work'}
                         color="success">
                        <span className={classes.userPosition}>
                            {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'default description'}
                        </span>
            </StyledBadge>
            <div><b>About me</b>: {props.profile.aboutMe}</div>
        </>
    );
}

export default UserInfoData;
