import React from 'react';
import {
    Divider,
    Grid,
    List,
} from "@mui/material";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import {DialogsPropsType} from "./DialogsContainer";
import UserDialogElement from "./UserDialogElement/UserDialogElement";
import {styled} from "@mui/material/styles";

const RootContainer = styled(Grid)({
    height: '90vh ',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    overflow: 'auto',
    overflowY: 'visible',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#3f51b5',
        borderRadius: '5px'
    },
});

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <UserDialogElement key={d.id}
                                     id={d.id}
                                     name={d.name}
                                     deleteDialog={props.deleteDialog}
        />

   );

    return (
        <RootContainer >
            <Grid item>
                <DialogsHeader/>
                <Divider/>
            </Grid>
            <Grid item wrap={"nowrap"}>
                <List style={{paddingTop:0}}>
                    {dialogsElements}
                </List>
            </Grid>
        </RootContainer>
    )
}

export default Dialogs


