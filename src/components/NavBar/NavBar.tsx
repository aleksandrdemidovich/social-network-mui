import * as React from 'react';
import {NavLink} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import useClasses from "../../customHookCSS/useClasses";
import {IconButton, styled} from "@mui/material";


const styles = (theme: any) => ({
    navLink: {
        textDecoration: 'none', color: 'inherit'
    }
});


export default function NavBar() {
    const classes = useClasses(styles);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };


    return (
        <>
            <NavLink to="/" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <StyledListItemIcon>
                        <AccountCircleOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/dialogs" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <StyledListItemIcon>
                        <ChatOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Messanger"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/users" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <StyledListItemIcon>
                        <GroupAddOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/news" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <StyledListItemIcon>
                        <BallotOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="News"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/music" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <StyledListItemIcon>
                        <LibraryMusicOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Music"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/communities" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <StyledListItemIcon>
                        <PeopleIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Communities"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/photos" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                >
                    <StyledListItemIcon>
                        <PhotoCameraOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Photos"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/videos" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                >
                    <StyledListItemIcon>
                        <VideoCameraBackOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Viedos"/>
                </ListItemButton>
            </NavLink>
            <NavLink to="/settings" className={classes.navLink}>
                <ListItemButton
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                >
                    <StyledListItemIcon>
                        <SettingsOutlinedIcon/>
                    </StyledListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
            </NavLink>
        </>
    );
}

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
  color: #3f51b5;
`