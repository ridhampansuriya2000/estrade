import React from 'react';
import {Grid, Box, Typography} from "@mui/material";
import ProgressiveController from "./ProgressiveController";
import styles from "../dashboard.module.css"
import ApexChart from "../../../commonComponent/ApexChart";
import SelectTabs from "../../../commonComponent/SelectTabs"


const ProgressiveComponent = () => {
    const {progressiveDetail, options, state, newSelectData, selectTabs, setSelectTabs} = ProgressiveController()
    return (<>
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    {progressiveDetail.map(value => {
                        return (<Grid item lg={2.4} sm={6} xs={12}>
                            <Box className={styles.progressiveDetail} sx={{p: 3}}>
                                <Box sx={{mt: '1rem'}}>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        lineHeight: '30px',
                                        wordBreak: 'break-word',
                                    }}>{value.data}</Typography>
                                    <Typography style={newStyle.detailTitle}>{value.name}</Typography>
                                </Box>
                            </Box>
                        </Grid>)
                    })}
                </Grid>
            </Box>

            <Grid container rowSpacing={3} columnSpacing={{xs: 0, sm: 2, md: 3}} sx={{mt: 1}}>
                <Grid item lg={7} md={12} sx={{width: '100%'}}>
                    <Box className={styles.boxBorder} sx={{p: '1.875rem'}}>
                        <Box><SelectTabs selectData={newSelectData} selectTabs={selectTabs} setSelectTabs={setSelectTabs}/></Box>
                        <ApexChart options={options} state={state}/>
                    </Box>
                </Grid>
                <Grid item lg={5} md={12} sx={{width: '100%'}}>
                    <Box className={styles.boxBorder} sx={{p: '1.875rem'}}>
                        <ApexChart options={options} state={state}/>
                    </Box>
                </Grid>
            </Grid>
            {/*<Grid container spacing={3} sx={{mt: 1}}>*/}
            {/*    <Grid item lg={7} md={12}>*/}
            {/*        <Box className={styles.boxBorder} sx={{p: '1.875rem'}}>*/}
            {/*            <Box><SelectTabs selectData={newSelectData} selectTabs={selectTabs} setSelectTabs={setSelectTabs}/></Box>*/}
            {/*            <ApexChart options={options} state={state}/>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid item lg={5} md={12}>*/}
            {/*        <Box className={styles.boxBorder} sx={{p: '1.875rem'}}>*/}
            {/*            <ApexChart options={options} state={state}/>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </div>
    </>);
};

export default ProgressiveComponent;
const newStyle = {
    detailTitle: {
        fontWeight: 500, opacity: 0.7, fontSize: '0.775rem', lineHeight: '1.25rem'
    },

};
