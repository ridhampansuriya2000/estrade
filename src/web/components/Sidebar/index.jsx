import React, {useEffect, useState} from 'react';
import {useLocation, Link} from "react-router-dom"
import {Box, Grid, Typography} from "@mui/material";
import WifiTetheringErrorRoundedIcon from '@mui/icons-material/WifiTetheringErrorRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from "../../../assets/Images/logo/logo-icon.svg"
import {LayoutPath} from "./LayoutPath"
import LocalStorageManager from "../../utilis/LocalStorage/LocatStorage";

const Sidebar = ({setOpenNavbar}) => {
    let location = useLocation();
    const lastActiveIndexString = LocalStorageManager.getLocalStorage("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || 0);

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return "/" + path;
        }
        return path;
    }

    function changeActiveIndex(newIndex) {
        LocalStorageManager.setLocalStorage("lastActiveIndex", newIndex);
        setActiveIndex(newIndex)
    }

    //Start - Update active item based on current location
    useEffect(() => {
        const activeItem = LayoutPath.findIndex(item => getPath(item.route) === getPath(`/${location.pathname.split('/')[1]}`));
        changeActiveIndex(activeItem);
    }, [location]);
    //End - Update active item based on current location

    return (
        <>
            <Box style={newStyle.mainComponent}>
                <Grid>

                    <Grid container style={newStyle.sidebarTop} sx={{p: 2.5}}>
                        <Grid sx={{display: {xs: "flex", sm: "none"}}}>
                            <span>
                              <CloseRoundedIcon sx={{fontSize: "30px", color: "rgb(241, 245, 249)", cursor: "pointer"}}
                                                onClick={() => setOpenNavbar(false)}/>
                            </span>
                        </Grid>
                        <Grid sx={{display: {xs: "none", sm: "flex"}}}>
                            <Box sx={{}}>
                                <img src={logo} style={{height: 'auto', width: "40px"}}/>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid>
                        {LayoutPath.map(({name, route, Icon}, index) => {
                            return (<>
                                <Box key={name} sx={{textAlign: 'center', m: 2}}>
                                    <Link to={route} style={{textDecoration: 'none'}}>
                                    <span>
                                        <img src={Icon} style={{opacity: activeIndex === index ? 1 : 0.3}}/>
                                    </span>
                                    </Link>
                                </Box>
                            </>)
                        })}
                    </Grid>

                </Grid>

                <Grid>
                    <Typography sx={{color: "white", textAlign: 'center'}}>
                        <WifiTetheringErrorRoundedIcon/>
                    </Typography>
                </Grid>

            </Box>
        </>
    );
};

export default Sidebar;

const newStyle = {
    mainComponent: {
        flexDirection: 'column',
        display: 'flex',
        minHeight: '100%',
        justifyContent: 'space-between'
    },
    sidebarTop: {
        display: "flex", alignItems: 'center', maxWidth: 'max-content'
    },
    sidebarLogo: {maxWidth: '100%', height: 'auto', width: "40px"}
};
