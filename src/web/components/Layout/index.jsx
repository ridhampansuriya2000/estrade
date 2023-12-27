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
        <div>
            <div style={newStyle.layoutComponent}>

                {/*Start - Sidebar component responsible for navigation options*/}
                <div style={newStyle.sidebarComponent} className={`${openNavbar ? style.showSideBar : style.sideBar}`}>
                    <Sidebar setOpenNavbar={setOpenNavbar} openNavbar={openNavbar}/>
                </div>
                {/*End - Sidebar component responsible for navigation options*/}

                <div style={newStyle.secondLayoutComponent} className={`${openNavbar ? style.openArrow : style.closeArrow}`}
                     onClick={(e) => closeNavbar(e)}>

                    {/*    /!*Start - Header component responsible for navigation options*!/*/}
                    <div style={newStyle.headerLayoutComponent}>
                        <HeaderWeb setOpenNavbar={setOpenNavbar} openNavbar={openNavbar}/>
                    </div>
                    {/*    /!*End - Header component responsible for navigation options*!/*/}

                    {/*    /!*Start - rendered router component within the main component*!/*/}
                    <Grid style={newStyle.mainComponent}
                          sx={{pr: {lg: 4, xs: 2}, pl: {lg: 4, xs: 2}, pt: {sm: 4, xs: 2}}}>
                        {children}
                    </Grid>
                    {/*    /!*End - rendered router component within the main component*!/*/}

                </div>

            </div>
        </div>
    </>);
};

export default Layout;

const newStyle = {
    layoutComponent: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
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
        overflow: 'scroll',
        position: 'relative',
        backgroundColor: "#f1f5f9", height: '100%'
    }
};
