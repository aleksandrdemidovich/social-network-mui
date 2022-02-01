import {Field, FormikProvider, useFormik} from "formik";
import {Button, Input, styled} from "@mui/material";
import React from "react";
import {FilterType} from "../../redux/users-reducer";



type UserSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UserSearchForm = React.memo((props: UserSearchFormPropsType) => {


    const formik = useFormik({
        initialValues: {
            term: '',
            friend: false
        },
        onSubmit: (values) => {
            props.onFilterChanged({term: values.term, friend: values.friend})
        },
    })

    return (
        <FormikProvider value={formik}>
        <StyledForm onSubmit={formik.handleSubmit}>
            <Input fullWidth placeholder="Search users"
                   id="term" name="term"
                   onChange={formik.handleChange}
                   value={formik.values.term}
                   onBlur={formik.handleBlur}/>
            <Field name="friend" as="select" style={{backgroundColor: 'inherit', color:'inherit'}}>
                <option value="null" style={{color:'black'}}>All</option>
                <option value="true" style={{color:'black'}}>Only followed</option>
                <option value="false" style={{color:'black'}}>Only unfollowed</option>
            </Field>
            <Button type={"submit"} variant="contained" color="success" size={"medium"}>Search</Button>
        </StyledForm>
        </FormikProvider>
    )
})
const StyledForm = styled("form")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`

