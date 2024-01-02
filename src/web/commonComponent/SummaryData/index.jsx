import React, {memo} from 'react';
import {Box, Typography} from "@mui/material";
import styles from "../../components/Dashboard/dashboard.module.css";
import SummaryDataController from "./SummaryDataController"

const SummaryData = ({newStyle}) => {
    const {PLData} = SummaryDataController();

    return (
        <>
            <Typography sx={newStyle.boxTitle}>DailySummary</Typography>
            <Box className={styles.summaryBox} sx={{p: 2.5}}>
                {Object.entries(PLData).map(([key, value]) => (
                    <Box key={key} sx={newStyle.objectiveDetails}>
                        <Typography sx={{fontWeight: '700'}}>{key}</Typography>
                        <Typography sx={newStyle.greenData}>{value}%</Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default memo(SummaryData);
