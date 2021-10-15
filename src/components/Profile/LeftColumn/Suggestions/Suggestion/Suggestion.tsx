import React from 'react';
import {Avatar, Grid, IconButton, Typography} from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


function Suggestion() {
    return (
            <Grid container xs={12} item spacing={2} direction={"row"} wrap={"nowrap"} justifyContent={'flex-start'}>
                <Grid item style={{marginLeft:'20px'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://gambolthemes.net/workwise-new/images/resources/s1.png"
                        sx={{ width: 48, height: 48 }}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" component="h1" style={{paddingBottom:0}}>
                        User Name
                    </Typography>
                    <Typography variant="caption">
                        Graphic Designer
                    </Typography>
                </Grid>
                <Grid item style={{marginLeft:'auto'}}>
                    <IconButton aria-label="delete" size="large">
                        <AddBoxOutlinedIcon fontSize="inherit" color={"secondary"} />
                    </IconButton>
                </Grid>
            </Grid>

    );
}

export default Suggestion;
