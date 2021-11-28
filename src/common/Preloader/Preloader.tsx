import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function Preloader() {

    return (
        <Box sx={{position: 'absolute', top: '50%', left:'50%'}}>
            <CircularProgress/>
        </Box>
    );
}

export default Preloader;
