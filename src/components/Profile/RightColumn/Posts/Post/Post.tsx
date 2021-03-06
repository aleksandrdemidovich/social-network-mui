import React from 'react';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Avatar, Grid, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import useClasses from "../../../../../customHookCSS/useClasses";
import {styled} from "@mui/material/styles";
import {PostType, setDislike, setLike} from '../../../../../redux/profile-reducer';
import {PhotosType} from "../../../../../redux/users-reducer";
import defaultUserAvatar from "../../../../../assets/images/userAvatar.jpg";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";


function checkOneDigitNumbers(i: any) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
export const currentTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let day = today.getDate()
    let month = monthNames[today.getMonth()]

    // add a zero in front of numbers<10
    m = checkOneDigitNumbers(m);
    h = checkOneDigitNumbers(h);

    return `${day} ${month} ${h}:${m}`
}

const styles = (theme: any) => ({
    userName: {
        padding: 0, margin: '15px 0 0 15px'
    },
    postTime: {
        margin: 0,
        display: 'flex',
        fontSize: '14px',
        color: '#b2b2b2',
        alignItems: 'center'
    },


});
const RootPostContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 20px 20px 20px 20px;
  align-items: stretch;
  :hover {
    & .MuiIconButton-root {
      visibility: visible;
    }
  }
`;

type PostPropsType = {
    deletePost: (postId: string) => void
    photos: PhotosType
    userName: string
}

const Post = React.memo((props: PostType & PostPropsType) => {

    const classes = useClasses(styles);

    const loggedUserPhoto = useSelector<AppStateType, string>(state => state.profilePage.loggedUserPhoto)

    const dispatch = useDispatch()

    const addLike = () => {
        dispatch(setLike(props.id))
    }
    const addDislike = () => {
        dispatch(setDislike(props.id))
    }

    const removePost = () => props.deletePost(props.id)

    return (
        <RootPostContainer container item spacing={2}>
            <Grid container item spacing={2} direction={"row"} alignItems={"flex-start"}>
                <Grid item>
                    <Avatar
                        alt="Remy Sharp"
                        src={props.photos.large
                            ? props.photos.large
                            : defaultUserAvatar}
                        sx={{width: 50, height: 50}}
                    />
                </Grid>
                <Grid item>
                    <Grid container item spacing={2} direction={"column"}>
                        <Grid item style={{padding: 0, margin: 0}}>
                            <h3 className={classes.userName}>{props.userName}</h3>
                        </Grid>
                        <Grid item className={classes.postTime} style={{paddingTop: 0}}>
                            <AccessTimeOutlined style={{width: '20px', paddingRight: '3px'}}/>{currentTime()}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: 'auto', visibility:'hidden'}} >
                    <IconButton style={{padding:0}}>
                        <ClearIcon onClick={removePost} color={"secondary"} style={{marginLeft: 'auto'}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item style={{wordWrap: 'break-word', paddingTop: '0'}}>
                <p style={{margin: 0}}>{props.message}</p>
            </Grid>
            <Grid item style={{padding: 0, marginLeft: 'auto', display: 'flex'}}>
                {props.likeCount}
                {!props.isLiked ?
                    <IconButton size={"small"} onClick={addLike} style={{padding: '0 0 0 5px'}}>
                        <FavoriteBorderOutlinedIcon style={{color: 'red', position: 'relative', right: 0}}/>
                    </IconButton>
                    : <IconButton size={"small"} onClick={addDislike} style={{padding: '0 0 0 5px'}}>
                        <FavoriteIcon style={{color: 'red', position: 'relative', right: 0}}/>
                    </IconButton>}
            </Grid>
        </RootPostContainer>
    );
})


export default Post;
