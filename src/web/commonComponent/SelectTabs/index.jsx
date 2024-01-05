import React from 'react';
import {Box} from "@mui/material";

const SelectTabs = ({selectData, selectTabs, setSelectTabs}) => {

    return (
        <>
            <Box style={newStyle.tabComponent}>
                {selectData?.map((name, index) => {
                    return (<Box key={index} sx={selectTabs === name ? newStyle.selectActiveTab : newStyle.selectTab}
                                 onClick={() => setSelectTabs(name)}>{name}</Box>)
                })}
            </Box>
        </>
    );
};

export default SelectTabs;
const newStyle = {
    tabComponent: {
        width: 'max-content',
        padding: '0.375rem',
        borderRadius: '0.375rem',
        display: "flex"
    },
    selectTab: {
        border: '1.2px solid #0085ff00',
        cursor: "pointer",
        fontWeight: 500,
        lineHeight: '1rem',
        padding: '8px 16px',
        mr: 1,
        opacity: 0.5,
        fontSize: '13px',
    },
    selectActiveTab: {
        color: '3D454E',
        padding: '8px 16px',
        borderRadius: '10px',
        border: '1.2px solid #0085FF',
        backgroundColor: '#F2F8FB',
        boxShadow: '0px 2px 10px 0px rgba(0, 133, 255, 0.10)',
        cursor: "pointer",
        fontWeight: 600,
        lineHeight: '1rem',
        mr: 1,
        fontSize: '13px',
    }
};

