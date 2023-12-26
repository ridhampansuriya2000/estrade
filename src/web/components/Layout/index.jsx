import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import Sidebar from "../Sidebar";
import HeaderWeb from "../Header";
import style from "./layout.module.css"

const Layout = ({children}) => {
    const [openNavbar, setOpenNavbar] = useState(false);

    //Start -  Closes the navigation bar when the window width is 600 pixels.
    useEffect(() => {
        const handleResize = () => window.innerWidth === 600 && setOpenNavbar(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //End -  Closes the navigation bar when the window width is 600 pixels.

    const closeNavbar = (e) => {
        e.stopPropagation();
        setOpenNavbar(false)
    };

    return (<>
        <Box>
            <Grid container style={newStyle.layoutComponent}>

                {/*Start - Sidebar component responsible for navigation options*/}
                <Grid item style={newStyle.sidebarComponent} className={`${openNavbar ? style.showSideBar : style.sideBar}`}>
                    <Sidebar setOpenNavbar={setOpenNavbar} openNavbar={openNavbar}/>
                </Grid>
                {/*End - Sidebar component responsible for navigation options*/}

                <Grid item style={newStyle.secondLayoutComponent} className={`${openNavbar ? style.openArrow : style.closeArrow}`} xl={12}
                      onClick={(e) => closeNavbar(e)}>

                    {/*Start - Header component responsible for navigation options*/}
                    <Box style={newStyle.headerLayoutComponent}>
                        <HeaderWeb setOpenNavbar={setOpenNavbar} openNavbar={openNavbar}/>
                    </Box>
                    {/*End - Header component responsible for navigation options*/}

                    {/*Start - rendered router component within the main component*/}
                    <Box style={newStyle.mainComponent}
                         sx={{pr: {xl: 5, lg: 4, md: 3, sm: 2, xs: 1}, pl: {xl: 5, lg: 4, md: 3, sm: 2, xs: 1}, pt: {sm: 3, xs: 1.5}}}>
                        {children}
                    </Box>
                    {/*End - rendered router component within the main component*/}

                </Grid>

            </Grid>
        </Box>
    </>);
};

export default Layout;

const newStyle = {
    layoutComponent: {
        display: 'flex',
        height: '100vh',
        width: '100vw'
    },
    sidebarComponent: {
        width: 'fit-content', backgroundColor: "#1c2434", height: '100vh'
    },
    secondLayoutComponent: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        height: '100vh',
    },
    headerLayoutComponent: {
        display: 'flex',
        flexDirection: 'column',
    },
    mainComponent: {
        backgroundColor: "#f1f5f9", height: '100vh'
    }
};
