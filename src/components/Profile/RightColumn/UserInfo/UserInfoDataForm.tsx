import React from 'react';
import {UserInfoPropsType} from "./UserInfo";
import {useFormik} from "formik";
import DoneIcon from "@mui/icons-material/Done";
import {IconButton, Input, Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {saveProfile} from "../../../../redux/profile-reducer";

type FormikErrorType = {
    name?: string
}
type ProfileDataFormType = {
    setEditMode: any
}



function UserInfoDataForm(props: UserInfoPropsType & ProfileDataFormType) {

    const dispatch = useDispatch()

    const closeEditMode = () => {
        props.setEditMode(false)
    }

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            status: props.status,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.lookingForAJob,
            aboutMe: props.profile.aboutMe,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.fullName) {
                errors.name = 'Required';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(saveProfile(values))
            closeEditMode()
        },
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
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: '20px', width: '70%'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width: '160px', margin: 0}}>Full name: </p>
                    <Input id="fullName"
                           name="fullName"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.fullName}
                           placeholder="Name"
                           style={{width: '300px'}}
                    /></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width: '160px', margin: 0}}>Status: </p>
                    <Input id="status"
                           name="status"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.status}
                           placeholder="Status"
                           style={{width: '300px'}}
                    /></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width: '160px', margin: 0}}>Looking for a job?: </p>
                    <input id="lookingForAJob"
                           name="lookingForAJob"
                           type="checkbox"
                           onChange={formik.handleChange}
                           checked={formik.values.lookingForAJob}
                    />{formik.values.lookingForAJob ? " Yes" : " No"}</div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width: '160px', margin: 0}}>Looking for a job description: </p>
                    <Input id="lookingForAJobDescription"
                           name="lookingForAJobDescription"
                           type="input"
                           onChange={formik.handleChange}
                           value={formik.values.lookingForAJobDescription}
                           style={{width: '300px'}}
                    /></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p style={{width: '160px', margin: 0}}>About me?: </p>
                    <Input id="aboutMe"
                           name="aboutMe"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.aboutMe}
                           placeholder="About Me"
                           style={{width: '300px'}}
                    /></div>
            </div>
        </form>
    );
}

export default UserInfoDataForm;
