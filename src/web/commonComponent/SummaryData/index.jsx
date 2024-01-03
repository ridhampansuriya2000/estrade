import React, {memo} from 'react';
import {Box, Typography} from "@mui/material";


const SummaryData = ({newStyle, dispatch, PLData}) => {

    return (
        <>
            <Typography sx={newStyle.boxTitle}>DailySummary</Typography>
            <Box className={newStyle.userBalanceDetails} sx={{...newStyle.userBalanceDetails,p: 2.5}}>
                {Object.entries(PLData).map(([key, value]) => (
                    <Box key={key} sx={newStyle.objectiveDetails}>
                        <Typography sx={newStyle.tradeTitle}>{key}</Typography>
                        <Typography sx={newStyle.greenData}>{value}%</Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default memo(SummaryData);
