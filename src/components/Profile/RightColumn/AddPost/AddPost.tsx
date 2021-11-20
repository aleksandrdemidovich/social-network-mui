import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import {AddPostPropsType} from "./AddPostContainer";
import useClasses from "../../../../customHookCSS/useClasses";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";

const styles = (theme: any) => ({
    rootContainer: {
        padding:'20px',
    },
    addPostButton: {
        float: 'right'
    }
});

function AddPost(props: AddPostPropsType) {

    const classes = useClasses(styles);

    const [error, setError] = useState(false)



    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.charCode === 13 && props.newPostText.trim() !== '') {
    //         e.preventDefault()
    //         props.addPost(props.newPostText)
    //     } else if(props.newPostText.trim() === '' && e.charCode === 13) {
    //         e.preventDefault()
    //         setError(true)
    //     }
    // }

    //todo types
    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <Grid container item display={"flex"} direction={"row"} flexWrap={"nowrap"} className={classes.rootContainer}>
            <Avatar
                alt="Remy Sharp"
                src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                sx={{width: 50, height: 50}}
            />
            <AddPostFormRedux onSubmit={addNewPost}/>
        </Grid>

    );
}

export default AddPost;


//@ts-ignore
const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        id="outlined-multiline-flexible"
        label={"What's new?"}
        multiline
        maxRows={3}
        error={touched && invalid}
        fullWidth
        size={"small"}
        {...input}
        {...custom}
        helperText={touched && error}
    />
)

let maxLength50 = maxLengthCreator(50)

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center', marginLeft:'10px'}}>
            <Field component={renderTextField}
                   name={'newPostText'}
                   validate={[requiredField,maxLength50]}
            />
            <Button style={{marginLeft:'10px'}}
                variant="contained"
                    type={"submit"}>
                Post
            </Button>
        </form>

    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)