import React from 'react';
import DashboardController from "./DashboardController"
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {dashboardTabs} from "../../utilis/Constants/commonData"
import DashboardTabs from "../../commonComponent/DashboardTabs";

const Dashboard = () => {
    const [value, setValue] = React.useState(0);

    const {
        activeStep,
        setActiveStep,
        userAccountData
    } = DashboardController()

    function CustomTabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{pt: 3}}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    return (<>
        <Box style={newStyle.tabBox} sx={{p: 1, overflowX: {xs: 'scroll', sm: 'auto'}}}>
            <DashboardTabs selectData={dashboardTabs} setValue={setValue} currentTab={value}/>
        </Box>

        {dashboardTabs.map((Tab, index) => {
            return (<CustomTabPanel value={value} index={index}>
                <Tab.component userAccountData={userAccountData}/>
            </CustomTabPanel>)
        })}

    </>);
};

export default Dashboard;

const newStyle = {
    tabBox: {
        borderBottom: 0, backgroundColor: 'white',
        boxShadow: '0px 8px 13px -3px rgba(0,0, 0, 0.07)',
        display: "flex",
        borderRadius: '10px',
    }
};
