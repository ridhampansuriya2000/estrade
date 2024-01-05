import React from 'react';
import {Avatar, Box, Grid, Divider, Typography} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import user from "../../../assets/Images/user-01.png"
import logo from "../../../assets/Images/logo/logo-icon.svg";
import HeaderController from "./HeaderController"
import Badges from "../../commonComponent/Badges"
import Home from "../../../assets/Images/Home.svg"
import "./header.css"


const HeaderWeb = ({setOpenNavbar, openNavbar, checkToken}) => {
    const {dropdownVisible, setDropdownVisible, toggleDropdown, userLogOut, userLogIn} = HeaderController();

    return (
        <>
            <Box style={{zIndex: 1}} onClick={() => setDropdownVisible(false)}
                 sx={{
                     p: {xs: 2},
                     pr: {lg: 4, xs: 2},
                     pl: {lg: 4, xs: 2},
                 }}>

                <Grid container xs={12} style={newStyle.headerFlex} width="100%">
                    <Grid style={newStyle.rightHeader}>
                        <Grid sx={{display: {xs: "contents", sm: "none"}}}>
                            <Box sx={{borderRadius: "0.25rem", border: '1px solid #ccc'}}>
                                <MenuRoundedIcon style={newStyle.headerMenuIcon}
                                                 onClick={(e) => {
                                                     e.stopPropagation();
                                                     setOpenNavbar(true)
                                                 }}/>
                            </Box>
                            <Grid sx={{display: "flex", alignItems: 'center', pr: 1, maxWidth: 'max-content', pl: 1}}>
                                <img src={logo} style={newStyle.headerLogo}/>
                            </Grid>
                        </Grid>
                        <Grid sx={{display: {xs: "none", sm: "contents"}}}>
                            <Typography sx={newStyle.headerTitle}>Account Metric</Typography>
                            <Divider sx={{width: '2px', borderWidth: '1px', borderColor: "#3D454E", mr: 2,display: {md:"flex",xs:"none"}}} orientation="vertical"
                                     variant="middle"
                                     flexItem/>
                            <Box sx={{display: {md:"flex",xs:"none"}}}>
                                <img src={Home}/>
                                <KeyboardArrowRightRoundedIcon sx={{ml: 1}}/>
                                <Typography sx={newStyle.headerSubTitle}>Account Metric</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid item>
                        <Grid container sx={{display: "flex", alignItems: 'center'}}>
                            <Grid item sx={{height: 'max-content', pr: {sm: 3, xs: 1}, display: "flex"}}>
                                <Badges style={{marginRight: "10px",}} icon={<SearchOutlinedIcon sx={newStyle.headerIcon}/>}/>
                                <Badges style={{marginRight: "10px",}} icon={<DarkModeOutlinedIcon sx={newStyle.headerIcon}/>}/>
                                <Badges style={{marginRight: "10px",}} icon={<SettingsOutlinedIcon sx={newStyle.headerIcon}/>}/>
                                <Badges icon={<NotificationsOutlinedIcon sx={newStyle.headerIcon}/>}/>
                            </Grid>
                            <Grid item sx={{display: 'flex', alignItems: 'center'}}>

                                <Avatar alt="Remy Sharp" src={user} sx={{width: 46, height: 46, mr: 1}} onClick={(e) => toggleDropdown(e)}/>

                                <div className="dropdown">
                                    <div className="dropbtn" onClick={(e) => toggleDropdown(e)}>
                                        <KeyboardArrowDownRoundedIcon sx={{cursor: "pointer", display: {sm: 'block', xs: 'none'}}}/>
                                    </div>
                                    <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                                        <span style={newStyle.selectSpan}><PersonOutlinedIcon/>&nbsp;&nbsp;My Profile</span>
                                        <span style={newStyle.selectSpan}><ContactsOutlinedIcon/>&nbsp;&nbsp;My Contacts</span>
                                        <span style={newStyle.selectSpan}><SettingsOutlinedIcon/>&nbsp;&nbsp;Account Settings</span>
                                        {!checkToken ? <span style={newStyle.logOutSpan} onClick={() => userLogIn()}><LoginOutlinedIcon
                                            />&nbsp;&nbsp;Log In</span> :
                                            <span style={newStyle.logOutSpan} onClick={() => userLogOut()}><LogoutOutlinedIcon
                                                sx={{transform: 'scaleX(-1)'}}/>&nbsp;&nbsp;Log Out</span>}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default HeaderWeb;

const newStyle = {
    userDetails: {
        fontSize: '0.75rem',
        lineHeight: '1rem'
    },
    selectSpan: {
        color: '#758398',
        padding: '12px 15px',
        display: 'flex',
        caretColor: 'transparent',
        cursor: 'pointer',
    },
    logOutSpan: {
        color: '#758398',
        padding: '12px 15px',
        display: 'flex',
        caretColor: 'transparent',
        cursor: 'pointer',
        borderTop: '1px solid #e2e8f0',
    },
    notificationInfo: {
        backgroundColor: "#eff4fb",
        display: 'flex',
        alignItems: 'center',
        borderColor: '#e5e5e5',
        width: 40, height: 40,
        borderRadius: '50%',
        justifyContent: 'center',
    },
    headerFlex: {display: 'flex', justifyContent: 'space-between'},
    rightHeader: {display: 'flex', alignItems: "center"},
    headerMenuIcon: {fontSize: "30px", color: "rgb(28, 36, 52)", display: "flex", cursor: "pointer"},
    headerLogo: {maxWidth: '100%', height: 'auto', width: "40px"},
    headerComponent: {
        p: {xs: 2},
        pr: {lg: 4, xs: 2},
        pl: {lg: 4, xs: 2},
        boxShadow: '0px -1px 7px 0px rgba(0, 0, 0, 0.5)'
    },
    headerIcon: {fontSize: "20px", color: "#3D454E"},
    headerTitle: {
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: '600', pr: 2
    },
    headerSubTitle: {
        fontSize: '19px',
        fontStyle: 'normal',
        fontWeight: '400',
        ml: 2
    }
};
