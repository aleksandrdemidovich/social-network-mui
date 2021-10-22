import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function Preloader() {

    return (
        <Box sx={{display: 'flex', margin: 'auto', marginTop: '30%', paddingBottom: '30%'}}>
            <CircularProgress/>
        </Box>
    );
}

export default Preloader;
