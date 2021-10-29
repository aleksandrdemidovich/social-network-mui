import * as React from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, styled, TextField, Typography} from "@mui/material";



export default function Login() {
    return (
        <RootContentContainer>
            <LogInInfoContainer elevation={4}>
                <Typography fontWeight={"bold"} variant={'h5'}>Hi my friend. I'm glad you decided to try my social network. Hope you like it <span>&#128521;</span></Typography>
                <Typography variant={'subtitle2'}>Here's your default email and password so you can try it online</Typography>
                <ul>
                    <li>login</li>
                    <li>password</li>
                </ul>
            </LogInInfoContainer>
            <LogInFormContainer elevation={4}>
                <form action="">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    <TextField fullWidth id="outlined-basic" type={"password"} label="Password" variant="outlined" />
                    <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                        <Button variant={"contained"} color={"primary"}>Sign in</Button>
                    </Grid>
                </form></LogInFormContainer>
        </RootContentContainer>
    );
}

const RootContentContainer = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 50px auto;
  padding: 50px;
`
const LogInInfoContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  
  .MuiTypography-subtitle2{
    margin-top: 20px;
  }
`
const LogInFormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;

  .MuiTextField-root{
    margin-bottom: 20px;
  }

  .MuiGrid-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
