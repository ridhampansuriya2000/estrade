import React from 'react';
import DashboardController from "./DashboardController"
import Grid from "@mui/material/Grid";

const Dashboard = () => {
    const {
        activeStep,
        setActiveStep,
        userLogOut
    } = DashboardController()


    return (<>
        <div style={{backgroundColor: "gray"}}>

            Dashboard
            <button onClick={() => {
                userLogOut()
            }}>Logout</button>

        </div>
        {/*<Grid container spacing={2}>*/}
        {/*    <Grid item xs={6} md={8}>*/}
        {/*        <span>xs=6 md=8</span>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6} md={4}>*/}
        {/*        <span>xs=6 md=4</span>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={4}>*/}
        {/*        <span>xs=6 md=4</span>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={0} md={0} sx={{display: {xs: "none", md: "block"}}}>*/}
        {/*        <span>xs=6 md=8</span>*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}
    </>);
};

export default Dashboard;
