import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListProps,
    styled,
    Typography
} from "@mui/material";
import {currentTime} from "../../Profile/RightColumn/Posts/Post/Post";
import CustomizedDialogsAlert from "../../Alerts/DialogsAlert/CustomizedDialogsAlert";
import {DialogType} from "../../../redux/dialogs-reducer";

type UserDialogElementPropsType = {
    deleteDialog: (dialogID: string) => void
}

const CustomListItem = styled(ListItem)<ListProps>(({theme}) => ({
    '& .MuiListItemSecondaryAction-root': {
        visibility: 'hidden'
    },
    '&:hover': {
        '.MuiListItemSecondaryAction-root': {
            visibility: 'visible'
        }
    }
}))

function UserDialogElement(props: DialogType & UserDialogElementPropsType) {



    return (
        <>
        <CustomListItem
            secondaryAction={
                    <CustomizedDialogsAlert dialogID={props.id}
                                            deleteDialog={props.deleteDialog}/>
            }
        >
            <NavLink to={`/dialogs/${props.id}`} style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <ListItemAvatar>
                    <Avatar
                        alt="Tony Stark"
                        src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                        sx={{width: 50, height: 50}}
                    />
                </ListItemAvatar>
                <ListItemText
                    style={{paddingLeft: '15px'}}
                    primary={props.name}
                    secondary={'Secondary text'}
                />
                <Typography variant={'caption'}>{currentTime()}</Typography>
            </NavLink>

        </CustomListItem>
            <Divider/>
        </>
    );
}

export default UserDialogElement;