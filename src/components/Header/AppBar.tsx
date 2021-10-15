import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Avatar, Divider, Drawer, Grid, ListItemIcon, styled} from "@mui/material";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import NavBar from "../NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import useClasses from "../../customHookCSS/useClasses";



interface PrimarySearchAppBarPropsType  {
    isDarkMode: boolean
    toggleThemeMode: () => void
}

const MainHeaderContainer = styled('div')(({ theme }) => ({
    margin: 'auto',
    width: '70%',
    display: 'flex',
    alignItems:'center',
    flexDirection:'row',
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
    navLink:{
        textDecoration:'none', color:'inherit'
    }
});

type Anchor = "top" | "left" | "bottom" | "right";


export default function Header(props: PrimarySearchAppBarPropsType) {
    const classes = useClasses(styles);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const [state, setState] = React.useState(false);


    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent | React.FocusEvent<HTMLDivElement>) => {
        setState(!state)
    }


    const list = (anchor: Anchor) => (
        <Box
            style={{marginTop:'20px', width:'250px'}}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
            onClick={toggleDrawer(false)}
        >
            <Grid container item  direction={"row"} flexWrap={"nowrap"} alignItems={"center"}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                    sx={{width: 60, height: 60, margin:'10px'}}

                />
                <Grid container item  direction={"column"} flexWrap={"wrap"} >
                    <Typography variant={"subtitle1"} style={{padding:0}}>Aleksandr Demidovich</Typography>
            </Grid>
            </Grid>
            <Divider/>
            <NavBar/>
        </Box>
    );


    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const toggleThemeMode = () => {
        props.toggleThemeMode()
    }

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <NavLink to="/profile" className={classes.navLink}>
            <MenuItem>
                <Avatar /> Profile
            </MenuItem>
            </NavLink>
            {/*<MenuItem>*/}
            {/*    <Avatar /> My account*/}
            {/*</MenuItem>*/}
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <Divider/>
            <MenuItem onClick={toggleThemeMode}>
                <IconButton color="inherit">
                    {props.isDarkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
                <p>{props.isDarkMode ? 'Switch to dark' : 'Switch to light'}</p>
            </MenuItem>
        </Menu>
    );


    return (
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" style={{boxSizing:'initial'}}>
                    <MainHeaderContainer >
                        <IconButton
                            sx={{ display: { xs: 'block', sm: 'block', md:'none', xl:'none' } }}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                            <Drawer

                                anchor={"left"}
                                open={state}
                                onClose={toggleDrawer(false)}
                            >
                                {list('left')}
                            </Drawer>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Social Network
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton color="inherit" onClick={toggleThemeMode}>
                                {props.isDarkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                            </IconButton>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </MainHeaderContainer>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
    );
}
