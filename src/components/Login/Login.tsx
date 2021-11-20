import * as React from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    styled,
    TextField,
    Typography
} from "@mui/material";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

//@ts-ignore
const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        fullWidth
        variant="outlined"
        {...input}
        {...custom}
    />
)

//@ts-ignore
const renderCheckbox = ({input, label}) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={!!input.value}
                onChange={input.onChange}
            />
        }
        label={label}
    />
)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'login'}
                   label="Email"
                   component={renderTextField}
                   validate={[requiredField]}
            />
            <Field name={'password'}
                   type={"password"}
                   label="Password"
                   component={renderTextField}
                   validate={[requiredField]}
            />
            <Grid item flexWrap={'wrap'}>
                <Field name={'rememberMe'} label='Remember me' component={renderCheckbox}/>
                <Button variant={"contained"} type={"submit"} color={"primary"}>Sign in</Button>
            </Grid>

        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <RootContentContainer>
            <LogInInfoContainer elevation={4}>
                <Typography fontWeight={"bold"} variant={'h5'}>Hi my friend. I'm glad you decided to try my social
                    network. Hope you like it <span>&#128521;</span></Typography>
                <Typography variant={'subtitle2'}>Here's your default email and password so you can try it
                    online</Typography>
                <ul>
                    <li>login</li>
                    <li>password</li>
                </ul>
            </LogInInfoContainer>
            <LogInFormContainer elevation={4}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </LogInFormContainer>
        </RootContentContainer>
    );
}

export default Login;

const RootContentContainer = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 50px auto;
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`
const LogInInfoContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;

  .MuiTypography-subtitle2 {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
const LogInFormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;

  .MuiTextField-root {
    margin-bottom: 20px;
  }

  .MuiGrid-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
