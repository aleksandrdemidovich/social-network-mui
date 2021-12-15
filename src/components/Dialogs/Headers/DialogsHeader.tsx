import React, {useState} from 'react';
import {
    Grid,
    IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        width:'100%'
    },
}));


type DialogsHeaderPropsType = {
    setSearchDialogName: (name: string) => void
}

function DialogsHeader(props: DialogsHeaderPropsType) {

    const changeEventHandler = (e: any) => {
        props.setSearchDialogName(e.currentTarget.value)
    }

    return (
        <Grid container item direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={'nowrap'}
              style={{padding:'10px 15px 10px 15px'}}>
            <Grid item flexWrap={"nowrap"} boxSizing={"border-box"} xs={12}>
                <Search >
                    <SearchIconWrapper>
                        <SearchIcon color={"primary"}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        onChange={(e) => changeEventHandler(e)}
                        fullWidth
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
            </Grid>
            <Grid item>
                <Grid container item direction={"row"} justifyContent={"space-between"} flexWrap={'nowrap'} alignItems={"center"}>
                    <Grid item>
                        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                            <AddIcCallIcon color={"primary"}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            size="small"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <EditOutlinedIcon color={"primary"}/>

                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            size="small"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreHorizIcon color={"primary"}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default DialogsHeader