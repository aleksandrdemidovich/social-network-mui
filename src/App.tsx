import React, {useEffect, useState} from 'react';
import {
    createTheme,
    CssBaseline, Grid, IconButton,
    PaletteOptions,
    styled,
    ThemeProvider, Tooltip,
} from "@mui/material";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
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
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import Chat from "./components/Chat/Chat";
import {getUserProfile, ProfileType} from "./redux/profile-reducer";


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#90caf9',
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
        [theme.breakpoints.only('md')]: {
            display: 'flex',
            width: '60px',
            overflow: 'hidden',
        }
    },


});


function App() {
    console.log('app')
    const classes = useClasses(styles);
    const dispatch = useDispatch()

    const [isDarkMode, setDarkMode] = useState(true)

    const toggleThemeMode = () => {
        setDarkMode(!isDarkMode)
    }

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth )
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)


    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if(!initialized){
        return <Preloader/>
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme :  lightTheme}>
            <CssBaseline/>
            <div className="App">
                <HeaderContainer/>
                <MainContentContainer>
                    <Grid item className={classes.rootContainer}>
                        {isAuth && <Grid item className={classes.navigationContainer}>
                            <Grid item>
                                <NavBar/>
                            </Grid>
                        </Grid>}
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/profile"/>
                            </Route>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
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
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/chat' render={() => <Chat/>}/>
                        </Switch>
                    </Grid>
                </MainContentContainer>
                <ModeButton aria-label="Switcher Mode" size={"large"} onClick={toggleThemeMode}>
                    {isDarkMode
                        ? <Tooltip title="Switch to light"><LightModeIcon color={"warning"}/></Tooltip>
                        : <Tooltip title="Switch to dark"><DarkModeIcon/></Tooltip> }
                </ModeButton>
            </div>
        </ThemeProvider>

    );
}

export default App

const ModeButton = styled(IconButton)`
  position: sticky;
  bottom: 0;
  left: 97%;
`