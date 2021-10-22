import React, {useState} from 'react';
import Header from "./components/Header/AppBar";
import {
    Alert,
    createTheme,
    CssBaseline, Grid,
    PaletteOptions,
    Paper, Snackbar,
    styled,
    ThemeProvider,
} from "@mui/material";
import {Redirect, Route, Switch} from "react-router-dom";
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
import ProfileContainer from "./components/Profile/ProfileContainer";


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


const MainContentContainer = styled('div')(({theme}) => ({
    flexGrow: 1,
    margin: 'auto',
    width: '70%',
    marginTop: '20px',
    marginBottom: '20px',
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

const styles = (theme: any) => ({
    rootContainer: {
        gap: 16,
        [theme.breakpoints.between('xs', "md")]: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
        },
        [theme.breakpoints.between('md', "lg")]: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            direction: 'row',
            flexWrap: 'nowrap',
        },

    },
    navigationContainer: {
        [theme.breakpoints.between('xs', "md")]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },


});


function App() {

    const [isDarkMode, setDarkMode] = useState(false)

    const classes = useClasses(styles);

    const toggleThemeMode = () => {
        setDarkMode(!isDarkMode)
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme :  lightTheme}>
            <CssBaseline/>
            <div className="App">
                <Header
                    isDarkMode={isDarkMode}
                    toggleThemeMode={toggleThemeMode}/>
                <MainContentContainer>
                    <Grid item className={classes.rootContainer}>
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
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route exact path='/dialogs' render={() =>
                                <Grid container item spacing={2} flexDirection={"row"} flexWrap={"nowrap"}>
                                    <DialogsContainer/>
                                    <RightDialogMenu/>
                                </Grid>
                            }/>
                            <Route path='/dialogs/:id' render={() =>
                                <Grid container item spacing={2} flexDirection={"row"} flexWrap={"nowrap"}>
                                    <ChatContainer/>
                                    <RightDialogMenu/>
                                </Grid>
                            }/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={() =><News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/communities' render={() => <Communities/>}/>
                            <Route path='/photos' render={() => <Photos/>}/>
                            <Route path='/videos' render={() => <Videos/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </Switch>
                    </Grid>
                </MainContentContainer>

            </div>
        </ThemeProvider>

    );
}

export default App;
