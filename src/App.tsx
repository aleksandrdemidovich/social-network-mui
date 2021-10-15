import React, {useState} from 'react';
import Header from "./components/Header/AppBar";
import {
    createTheme,
    CssBaseline, Grid,
    PaletteOptions,
    Paper,
    styled,
    ThemeProvider,
} from "@mui/material";
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Music from "./components/ComingSoon/Music/Music";
import News from "./components/ComingSoon/News/News";
import Settings from "./components/ComingSoon/Settings/Settings";
import RightDialogMenu from "./components/Dialogs/RightDialogMenu/RightDialogMenu";
import Communities from "./components/ComingSoon/Communities/Communities";
import Photos from "./components/ComingSoon/Photos/Photos";
import Videos from "./components/ComingSoon/Videos/Videos";
import ChatContainer from "./components/Dialogs/ChatContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import useClasses from "./customHookCSS/useClasses";


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
});
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    } as PaletteOptions,
});


const MainContentContainer = styled('div')(({ theme }) => ({
    flexGrow: 1,
    margin: 'auto',
    width: '70%',
    marginTop: '20px' ,
    marginBottom:'20px',
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
    [theme.breakpoints.up('md')]: {
        width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '80%',
    },
}));

const styles = (theme:any) =>  ({
    rootContainer: {
        gap: 16,
        [theme.breakpoints.between('xs', "md")]: {
            display:'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent:'center',
            width:'100%',
            alignItems:'center',
        },
        [theme.breakpoints.between('md', "lg")]: {
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        [theme.breakpoints.up('lg')]: {
            display:'flex',
            direction: 'row',
            flexWrap: 'nowrap',
        },

    },
    navigationContainer:{
        [theme.breakpoints.between('xs', "md")]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    rightDialogMenu:{
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width:'300px'
        }
    }

});



function App() {

    const [isDarkMode, setDarkMode] = useState(false)

    const classes = useClasses(styles);

    const toggleThemeMode = () => {
        setDarkMode(!isDarkMode)
    }

    return (
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
            <CssBaseline/>
            <div className="App">
                <Header
                    isDarkMode={isDarkMode}
                    toggleThemeMode={toggleThemeMode}/>
                <MainContentContainer>
                    <Grid  item className={classes.rootContainer}>
                        <Grid item className={classes.navigationContainer}>
                            <Grid item>
                                <Paper elevation={4}>
                                    <NavBar/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/profile"/>
                            </Route>
                            <Route path='/profile' render={() => <Profile/>}/>
                            <Route exact path='/dialogs' render={() =>
                                <Grid container item spacing={2}  flexDirection={"row"} flexWrap={"nowrap"}>
                                    <Grid item xs={12} md={12} lg={9}>
                                        <Paper elevation={4}>
                                            <DialogsContainer/>
                                        </Paper>
                                    </Grid>
                                    <Grid item lg={3} className={classes.rightDialogMenu}>
                                        <Paper elevation={4}>
                                            <RightDialogMenu/>
                                        </Paper>
                                    </Grid>
                                </Grid>}/>
                            <Route path='/dialogs/:id' render={() =>
                                <Grid container item spacing={2} flexDirection={"row"} flexWrap={"nowrap"}>
                                    <Grid item xs={12} md={12} lg={9}>
                                        <Paper elevation={2}>
                                            <ChatContainer/>
                                        </Paper>
                                    </Grid>
                                    <Grid item lg={3} className={classes.rightDialogMenu} >
                                        <Paper elevation={4}>
                                            <RightDialogMenu/>
                                        </Paper>
                                    </Grid>
                                </Grid>}/>
                            <Route path='/users'
                                   render={() => <Grid  item xs={10}><UsersContainer/></Grid>}/>
                            <Route path='/news'
                                   render={() => <Grid item xs={10}><Paper elevation={2}><News/></Paper></Grid>}/>
                            <Route path='/music'
                                   render={() => <Grid item xs={10}><Paper elevation={2}><Music/></Paper></Grid>}/>
                            <Route path='/communities'
                                   render={() => <Grid item xs={10}><Paper elevation={2}><Communities/></Paper></Grid>}/>
                            <Route path='/photos'
                                   render={() => <Grid item xs={10}><Paper elevation={2}><Photos/></Paper></Grid>}/>
                            <Route path='/videos'
                                   render={() => <Grid item xs={10}><Paper elevation={2}><Videos/></Paper></Grid>}/>
                            <Route path='/settings'
                                   render={() => <Grid item xs={10}><Paper elevation={4}><Settings/></Paper></Grid>}/>
                        </Switch>
                    </Grid>
                </MainContentContainer>


            </div>
        </ThemeProvider>

    );
}

export default App;
