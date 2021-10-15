import React from 'react';
import {Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import {AddPostPropsType} from "./AddPostContainer";
import useClasses from "../../../../customHookCSS/useClasses";

const styles = (theme:any) =>  ({
    rootContainer: {
        paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px'
    },
    addPostButton:{
        float:'right'
    }
});

function AddPost(props: AddPostPropsType) {

    const classes = useClasses(styles);

    const addPost = () => {
        if (props.profilePage.newPostText?.trim() !== '') {
            props.addPost(props.newPostText!)
        }
    }
    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && props.newPostText.trim() !== '') {
            e.preventDefault()
            props.addPost(props.newPostText)
        } else if(props.newPostText.trim() === '' && e.charCode === 13) {
            e.preventDefault()
        }
    }

    return (
        <Grid container  item spacing={2} direction={"column"}  className={classes.rootContainer} >
            <Grid container spacing={2} item  direction={"row"} flexWrap={"nowrap"}>
                <Grid item >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                        sx={{width: 50, height: 50}}
                    />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="What's new?"
                        multiline
                        maxRows={3}
                        fullWidth
                        size={"small"}
                        value={props.newPostText}
                        onChange={ onPostChange }
                        onKeyPress={onKeyPressHandler}
                    />
                </Grid>
            </Grid>
            <Grid item >
                <Button onClick={ () => { addPost()} }
                        className={classes.addPostButton}
                        variant={"contained"}
                        color={"primary"}>Post</Button>
            </Grid>
        </Grid>

    );
}

export default AddPost;
