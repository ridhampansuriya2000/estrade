import React, {useState} from 'react';
import {Box} from "@mui/material";

const SelectTabs = ({selectData, selectTabs, setSelectTabs}) => {
    const [hover, setHover] = useState('');

    return (
        <>
            <Box style={newStyle.tabComponent}>
                {selectData?.map((name) => {
                    return (<Box style={[selectTabs, hover].includes(name) ? newStyle.selectActiveTab : newStyle.selectTab}
                                 onMouseOut={() => setHover('')}
                                 onMouseEnter={() => setHover(name)}
                                 onClick={() => setSelectTabs(name)}>{name}</Box>)
                })}
            </Box>
        </>
    );
};

export default SelectTabs;
const newStyle = {
    tabComponent: {
        backgroundColor: '#f5f7fd',
        width: 'max-content',
        padding: '0.375rem',
        borderRadius: '0.375rem',
        display: "flex"
    },
    selectTab: {
        cursor: "pointer",
        borderRadius: '0.25rem',
        fontWeight: 500,
        fontSize: '0.75rem',
        lineHeight: '1rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
    },
    selectActiveTab: {
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px',
        cursor: "pointer",
        backgroundColor: 'white',
        borderRadius: '0.25rem',
        fontWeight: 500,
        fontSize: '0.75rem',
        lineHeight: '1rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
    }
};

