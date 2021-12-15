import React from 'react';
import s from './Settings.module.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {Grid, Paper} from "@mui/material";


function Settings() {
    return (
        <Grid item xs={10}>
            <Paper elevation={4}>
                <div className={s.settingsWrap}>
                    <div className={s.settingListMenu}>
                        <a href="#/"> <SettingsOutlinedIcon style={{paddingRight: '10px'}}/> Account Setting</a>
                        <a href="#/"> <CallMadeOutlinedIcon style={{paddingRight: '10px'}}/> Status</a>
                        <a href="#/"> <LockOutlinedIcon style={{paddingRight: '10px'}}/> Change Password</a>
                        <a href="#/"> <NotificationsActiveOutlinedIcon style={{paddingRight: '10px'}}/> Notifications</a>
                        <a href="#/"> <AutorenewOutlinedIcon style={{paddingRight: '10px'}}/> Requests</a>
                        <a href="#/"> <SecurityOutlinedIcon style={{paddingRight: '10px'}}/>Security and Login</a>
                        <a href="#/"> <FingerprintOutlinedIcon style={{paddingRight: '10px'}}/>Privacy</a>
                        <a href="#/"> <BlockOutlinedIcon style={{paddingRight: '10px'}}/>Blocking</a>
                        <a href="#/"> <HighlightOffOutlinedIcon style={{paddingRight: '10px'}}/>Deactivate Account</a>
                    </div>
                    <div className={s.settingMenu}>Item Settings</div>
                </div>
            </Paper>
        </Grid>
    );
}

export default Settings;
