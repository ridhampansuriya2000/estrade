import React from 'react';
import DashboardController from "./DashboardController"
import Box from '@mui/material/Box';
import {dashboardTabs} from "../../utilis/Constants/commonData"
import DashboardTabs from "../../commonComponent/DashboardTabs";
import ProgressiveComponent from "./TabsComponent/ProgressiveComponent";
import Account from "./Account";
import ProgressiveObjective from "./ProgressiveObjective";
import AccountInfo from "./AccountInfo";

const Dashboard = () => {
    const [value, setValue] = React.useState(0);

    const {
        activeStep,
        setActiveStep,
        userAccountData,
    } = DashboardController()

    const renderDashboardTab = (values, userAccountDatas) => {
        switch (values) {
            case 0:
                return <ProgressiveComponent userAccountData={userAccountDatas}/>;
            case 1:
                return <Account/>;
            case 2:
                return <ProgressiveObjective/>;
            case 3:
                return <AccountInfo/>;
            default:
                return <ProgressiveComponent/>;
        }
    }

    return (<>
        <Box style={newStyle.tabBox} sx={{p: 1, overflowX: {xs: 'scroll', sm: 'auto'}}}>
            <DashboardTabs selectData={dashboardTabs} setValue={setValue} currentTab={value}/>
        </Box>
        <Box sx={{pt: 3}}>
            {renderDashboardTab(value, userAccountData)}
        </Box>
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
