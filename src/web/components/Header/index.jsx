import React, {useEffect, useState} from 'react';
import {Box, Grid, Avatar, InputBase} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import user from "../../../assets/Images/user-01.png"
import "./header.css"
import logo from "../../../assets/Images/logo/logo-icon.svg";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const HeaderWeb = ({setOpenNavbar, openNavbar}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    };


    return (
        <>
            <Box style={{zIndex: 1}} onClick={() => setDropdownVisible(false)}
                 sx={{
                     p: {xs: 2},
                     pr: {xs: 3},
                     pl: {xs: 3},
                     boxShadow: '0px -1px 7px 0px rgba(0, 0, 0, 0.5)'
                 }}>

                <Grid container xs={12} style={newStyle.headerFlex} width="100%">
                    <Grid style={newStyle.rightHeader}>
                        <Grid sx={{display: {xs: "contents", sm: "none"}}}>
                            <Box sx={{borderRadius: "0.25rem", border: '1px solid #ccc!important'}}>
                                <MenuRoundedIcon style={newStyle.headerMenuIcon}
                                                 onClick={(e) => {
                                                     e.stopPropagation();
                                                     setOpenNavbar(true)
                                                 }}/>
                            </Box>
                            <Grid sx={{display: "flex", alignItems: 'center', pr: 1, maxWidth: 'max-content', pl: 3}}>
                                <img src={logo} style={newStyle.headerLogo}/>
                            </Grid>
                        </Grid>
                        <Grid sx={{display: {xs: "none", sm: "contents"}}}>
                            <SearchOutlinedIcon/>
                            <InputBase sx={{ml: 1, flex: 1}} placeholder="Type to search" inputProps={{'aria-label': 'search google maps'}}/>
                        </Grid>
                    </Grid>


                    <Grid item>
                        <Grid container sx={{display: "flex", alignItems: 'center'}}>
                            <Grid item sx={{height: 'max-content', pr: 3, display: "flex"}}>
                                <Box style={newStyle.notificationInfo} sx={{p: 1, border: 1, mr: 2}}>
                                    <NotificationsNoneIcon sx={{fontSize: "20px"}}/>
                                </Box>
                                <Box style={newStyle.notificationInfo} sx={{p: 1, border: 1}}>
                                    <ChatOutlinedIcon sx={{fontSize: "20px"}}/>
                                </Box>
                            </Grid>
                            <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                                <Avatar alt="Remy Sharp" src={user} sx={{width: 46, height: 46, mr: 1}}/>

                                <div className="dropdown">
                                    <div className="dropbtn" onClick={(e) => toggleDropdown(e)}>
                                        <KeyboardArrowDownRoundedIcon sx={{cursor: "pointer"}}/>
                                    </div>
                                    <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                                        <span style={newStyle.selectSpan}>Home</span>
                                        <span style={newStyle.selectSpan}>About</span>
                                        <span style={newStyle.selectSpan}>Contact</span>
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
    selectSpan: {
        color: 'black',
        padding: '12px 15px',
        display: 'block',
        caretColor: 'transparent',
        cursor: 'pointer',
    },
    notificationInfo: {
        backgroundColor: "#eff4fb",
        borderRadius: "25px",
        display: 'flex',
        alignItems: 'center',
        borderColor: '#e5e5e5',
    },
    headerFlex: {display: 'flex', justifyContent: 'space-between'},
    rightHeader: {display: 'flex', alignItems: "center"},
    headerMenuIcon: {fontSize: "30px", color: "rgb(28, 36, 52)", display: "flex", cursor: "pointer"},
    headerLogo: {maxWidth: '100%', height: 'auto', width: "40px"}
};
