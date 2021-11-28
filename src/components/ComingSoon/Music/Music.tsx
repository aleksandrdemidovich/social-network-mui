import React from 'react';
import {Grid, Paper} from "@mui/material";
import Preloader from "../../../common/Preloader/Preloader";


function Music() {
    return (
        <Grid item xs={10}>
            <Paper elevation={2}>
                <div style={{width: '100%', height: '85vh'}}>
                    Music in coming soon
                    <Preloader/>
                </div>
            </Paper>
        </Grid>
    );
}

export default Music;
