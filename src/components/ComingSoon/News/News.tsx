import React from 'react';
import {Button, createTheme, Grid, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { styled } from '@mui/material/styles';

import {green} from "@mui/material/colors";
import useClasses from "../../../customHookCSS/useClasses";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
        color: 'black',
    },
    button:{
        visibility:'hidden',

    },

});

const styles = (theme:any) => ({
    paper: {
        marginTop: theme.spacing[8],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        backgroundColor: 'red',
        color: 'black',
    },
    button:{

    },

});





// @ts-ignore
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
    },

}));



function News() {

     // const classes = useStyles();
    const classes = useClasses(styles);
    return (
        <Root style={{width:'100%', height:'85vh'}} >
            <Grid container className={classes.root} item direction={"row"} flexWrap={"nowrap"}>
                <TextField/>
                <Button className={classes.button} variant={"contained"} color={"primary"}>Add</Button>
            </Grid>
        </Root>
    );
}

export default News;
