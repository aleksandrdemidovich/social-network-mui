import React, {useState} from 'react';
import {
    Divider,
    Grid, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListProps, Paper,
    styled
} from "@mui/material";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import {Delete} from "@mui/icons-material";
import {NavLink} from 'react-router-dom';
import useClasses from "../../../customHookCSS/useClasses";

const CustomListItem = styled(ListItem)<ListProps>(({theme}) => ({
    '& .MuiListItemSecondaryAction-root': {
        visibility: 'hidden'
    },
    '&:hover': {
        '.MuiTypography-root': {color: theme.palette.primary.main},
        '.MuiListItemSecondaryAction-root': {
            visibility: 'visible'
        }
    }
}))
const styles = (theme: any) => ({
    navLink: {
        textDecoration: 'none', color: 'inherit'
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


function RightDialogMenu() {

    const classes = useClasses(styles);

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [open, setClose] = useState(true);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number,) => {
        setSelectedIndex(index);
    };


    return (
        <Grid item lg={3} className={classes.rightDialogMenu}>
            <Paper elevation={4}>
                <Grid container item direction={"column"} wrap={"nowrap"}>
                    <List>
                        <NavLink to="/dialogs" className={classes.navLink}>
                            <ListItem disablePadding>
                                <ListItemButton selected={selectedIndex === 0}
                                                onClick={(event) => handleListItemClick(event, 0)}>
                                    <ListItemIcon>
                                        <ForumOutlinedIcon color={"primary"}/>
                                    </ListItemIcon>
                                    <ListItemText primary="All chats"/>
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <ListItem disablePadding>
                            <ListItemButton selected={selectedIndex === 1}
                                            onClick={(event) => handleListItemClick(event, 1)}>
                                <ListItemIcon>
                                    <MarkEmailUnreadOutlinedIcon color={"primary"}/>
                                </ListItemIcon>
                                <ListItemText primary="Unread"/>
                            </ListItemButton>
                        </ListItem>
                        {open && <NavLink exact to="/dialogs/chat" className={classes.navLink}>
                            <Divider/>
                            <CustomListItem disablePadding
                                            secondaryAction={
                                                <IconButton aria-label="delete" edge={"end"}
                                                            onClick={() => setClose(!open)}>
                                                    <Delete color={"secondary"} fontSize={"small"}/>
                                                </IconButton>}>


                                <ListItemButton selected={selectedIndex === 2}
                                                onClick={(event) => handleListItemClick(event, 2)}>
                                    <ListItemText primary="Tony Stark"/>
                                </ListItemButton>
                            </CustomListItem>
                        </NavLink>}

                    </List>

                </Grid>
            </Paper>
        </Grid>
    )
}

export default RightDialogMenu