import React from 'react';
import {Box, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router";

const DashboardTabs = ({selectData, setValue, currentTab}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (index) => {
        setValue(index);
        navigate(`${location.pathname}?tab=${index}`)
    };

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tabParam = params.get("tab");

        tabParam ? setValue(parseInt(tabParam)) : setValue(0);
    },[location.search]);

    return (
        <>
            <Box style={newStyle.tabComponent}>
                {selectData?.map((value, index) => {
                    return (<Box key={index} sx={currentTab === index ? newStyle.selectActiveTab : newStyle.selectTab} onClick={() => {
                        handleChange(index)
                    }}>
                        <Typography sx={currentTab === index ? newStyle.selectActiveTabTitle : newStyle.selectTabTitle}>{value?.name}</Typography>
                    </Box>)
                })}
            </Box>
        </>
    );
};

export default DashboardTabs;
const newStyle = {
    tabComponent: {
        width: 'max-content',
        padding: '0.375rem',
        borderRadius: '0.375rem',
        display: "flex"
    },
    selectTab: {
        cursor: "pointer",
        borderRadius: '0.25rem',
        ml: 1,
        mr: 1,
        p: 2.5,
        m: 0.5,
    },
    selectActiveTab: {
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px',
        cursor: "pointer",
        backgroundColor: '#0085FF',
        borderRadius: '10px',
        p: 2.5,
        ml: 1,
        mr: 1,
        color: "#FFF",
        m: 0.5
    },
    selectActiveTabTitle: {
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '1rem',
    },
    selectTabTitle: {
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '1rem',
        color: "#3D454E"
    }
};

