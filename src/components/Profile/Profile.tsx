import React from 'react';
import {
    Grid,
    Paper,

} from "@mui/material";
import UserInfo from "./RightColumn/UserInfo/UserInfo";
import ProfileInfo from "./LeftColumn/ProfileInfo/ProfileInfo";
import AddPostContainer from "./RightColumn/AddPost/AddPostContainer";
import PostsContainer from "./RightColumn/Posts/PostsContainer";
import SuggestionsContainer from "./LeftColumn/Suggestions/SuggestionsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";


function Profile(props: ProfilePropsType) {
    if (!props.profile.fullName) {
        return <Preloader/>
    }


    return (
        <>
            <Grid container
                  direction={"column"}
                  md={4} lg={5} xl={4}
                  item
                  spacing={4}>
                <Grid item>
                    <Paper elevation={4}>
                        <ProfileInfo profile={props.profile}/>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={4}>
                        <SuggestionsContainer/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container
                  md={8} lg={9} xl={9}
                  item
                  spacing={4} direction={"column"}
                  marginBottom={'10px'}
                  flexWrap={"nowrap"}>
                <Grid item>
                    <Paper elevation={4}>
                        <UserInfo profile={props.profile}
                                  status={props.status}
                                  updateStatus={props.updateStatus}/>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={4}>
                        <AddPostContainer/>
                    </Paper>
                </Grid>
                <PostsContainer/>
            </Grid>
        </>
    );
}

export default Profile;
