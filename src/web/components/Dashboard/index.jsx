import React from 'react';
import DashboardController from "./DashboardController"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {dashboardTabs} from "../../utilis/Constants/commonData"

const Dashboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {
        activeStep,
        setActiveStep,
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

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (<>
        <Box style={newStyle.tabBox} sx={{p: 2, overflowX: {xs: 'scroll', sm: 'auto'}}}>
            <Tabs value={value} onChange={handleChange} sx={{
                overflowX: {xs: 'scroll', sm: "auto"},
                width: {xs: '300px', sm: "500px"},
                minWidth: 'fit-content',
                minHeight: '48px',
                display: '-webkit-box'
            }}>
                {dashboardTabs.map((tab, index) => {
                    return (<Tab label={tab.name} {...a11yProps(index)}
                                 sx={{
                                     width: 'max-content',
                                     fontWeight: 500, fontSize: '20px', textTransform: 'capitalize', color: "black",
                                     '&.Mui-selected': {color: 'black'}
                                 }}/>)
                })}
            </Tabs>
        </Box>


        {dashboardTabs.map((Tab, index) => {
            return (<CustomTabPanel value={value} index={index}>
                <Tab.component/>
            </CustomTabPanel>)
        })}

    </>);
};

export default Dashboard;

const newStyle = {
    tabBox: {
        borderBottom: 0, backgroundColor: 'white', border: '1px solid rgba(204, 204, 204, 0.5)',
        boxShadow: '0px 8px 13px -3px rgba(0,0, 0, 0.07)',
        display: "flex"
    }
};
