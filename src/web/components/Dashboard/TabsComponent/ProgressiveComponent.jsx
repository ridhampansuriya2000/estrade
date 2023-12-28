import React from 'react';
import {Grid, Box, Typography, Paper} from "@mui/material";
import ProgressiveController from "./ProgressiveController";
import styles from "../dashboard.module.css"
import ApexChart from "../../../commonComponent/ApexChart";
import SelectTabs from "../../../commonComponent/SelectTabs"


const ProgressiveComponent = () => {
    const {progressiveDetail, options, state, newSelectData, selectTabs, setSelectTabs, initialTradingData, tradingFactor} = ProgressiveController()
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
                    <Paper className={styles.boxBorder}
                           sx={{
                               height: '100%',
                               backgroundColor: '#fff',
                               p: '1.875rem',
                               border: '1px solid rgba(204, 204, 204, 0.5)',
                               boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px'
                           }}>
                        <Box style={newStyle.chartSelectDetails}>
                            <SelectTabs selectData={newSelectData} selectTabs={selectTabs} setSelectTabs={setSelectTabs}/>
                            <Box className={styles.tabComponent}><Typography sx={newStyle.selectActiveTab}>Grow v</Typography></Box>
                        </Box>
                        <ApexChart options={options} state={state}/>
                    </Paper>
                </Grid>
                <Grid item lg={5} md={12} sx={{width: '100%'}}>
                    <Paper className={styles.boxBorder}
                           sx={{
                               height: '100%',
                               backgroundColor: '#fff',
                               p: '1.875rem',
                               border: '1px solid rgba(204, 204, 204, 0.5)',
                               boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px'
                           }}>
                        <Typography sx={{
                            fontWeight: '600', fontSize: '1.25rem',
                            lineHeight: '1.75rem', mb: 3
                        }}>DailySummary</Typography>
                        <Box className={styles.summaryBox} sx={{p: 2.5}}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>Day Gan</Typography>
                                <Typography sx={newStyle.greenData}>15.41%</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>ABC Gan</Typography>
                                <Typography sx={newStyle.greenData}>15.43%</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>Day Dradown</Typography>
                                <Typography sx={newStyle.normalData}>0.17%</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>LoremEpsum</Typography>
                                <Typography sx={newStyle.normalData}>1200</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>LoremEpsum</Typography>
                                <Typography sx={newStyle.normalData}>7.22%</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: {md: 1.3}, pb: {md: 1.3}
                            }}>
                                <Typography sx={{fontWeight: '700'}}>LoremEpsum</Typography>
                                <Typography sx={newStyle.normalData}>7.22%</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mt: 1}}>
                <Grid item lg={7} md={12}>
                    <Paper className={styles.boxBorder}
                           sx={{
                               height: '100%',
                               backgroundColor: '#fff',
                               p: '1.875rem',
                               border: '1px solid rgba(204, 204, 204, 0.5)',
                               boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px'
                           }}>
                        <Typography sx={{fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem', mb: 3}}>Trading Objective</Typography>
                        <Box className={styles.summaryBox} sx={{p: 2.5}}>

                            <Grid container spacing={2}>
                                {initialTradingData?.map((value) => {
                                    return (<Grid item lg={3} md={4} xs={6}>

                                        <Typography sx={{fontWeight: 700}}>{value.name}</Typography>
                                        <Typography sx={newStyle.normalData}>{value.data}</Typography>
                                    </Grid>)
                                })}
                            </Grid>
                        </Box>

                        <Grid container spacing={2} sx={{mt: 1}}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                                    <Box sx={{
                                        border: '2px solid #808080', borderRadius: '20px', p: 3, backgroundColor: 'white', display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around'
                                    }}>
                                        <Typography sx={{fontWeight: 700}}>Avrg pice</Typography>
                                        <Typography sx={{fontWeight: '700', color: "rgb(100 116 139 / 1)"}}>$46.36</Typography>
                                    </Box>
                                    <Box sx={{
                                        p: 3, display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around'
                                    }}>
                                        <Typography sx={{fontWeight: 700}}>Avrage</Typography>
                                        <Typography sx={{fontWeight: 700}}>Loss</Typography>
                                    </Box>
                                    <Box sx={{
                                        p: 3, display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around'
                                    }}>
                                        <Typography sx={{fontWeight: 700}}>Avrage</Typography>
                                        <Typography sx={{fontWeight: 700}}>RRR</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box className={styles.summaryBox} sx={{p: 3}}>
                                    <Grid container>
                                        {tradingFactor?.map((value) => {
                                            return (<Grid item lg={4} md={4} xs={4} sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-around'
                                            }}>
                                                <Typography sx={{fontWeight: 700}}>{value.name}</Typography>
                                                <Typography sx={newStyle.normalData}>{value.data}</Typography>
                                            </Grid>)
                                        })}
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                        <Grid sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                            <Box className={styles.summaryBox} sx={{display: 'flex', p: 4, alignItems: 'center'}}>
                                <Typography sx={{fontWeight: 700}}>Time Zone : &nbsp;</Typography>
                                <Typography sx={newStyle.normalData}> GMT + 0</Typography>
                            </Box>
                            <Box sx={{p: '20px', display: 'flex', alignItems: 'center'}}>
                                <Typography sx={{fontWeight: 700}}>Last Update : &nbsp;</Typography>
                                <Typography sx={newStyle.blueData}>5 Jan 2022 00:00:20:12</Typography>
                            </Box>
                        </Grid>

                    </Paper>
                </Grid>

                <Grid item lg={5} md={12} sx={{width: '100%'}}>
                    <Paper
                        sx={{
                            height: '100%',
                            backgroundColor: '#fff',
                            p: '1.875rem',
                            border: '1px solid rgba(204, 204, 204, 0.5)',
                            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px'
                        }}>
                        <Typography sx={{
                            fontWeight: '600', fontSize: '1.25rem',
                            lineHeight: '1.75rem', mb: 3
                        }}>Trading Objective</Typography>
                        <Box className={styles.summaryBox} sx={{display: 'flex', p: 2.5, alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography sx={{fontWeight: 700}}>Result : 70 &nbsp;</Typography>
                            <Box sx={{border: '2px solid #50d71e', borderRadius: '4px', pt: 0.6, pb: 0.6, pr: 1.2, pl: 1.2}}>
                                <Typography sx={{color: "#50d71e"}}>Passed</Typography>
                            </Box>
                        </Box>
                        <Box className={styles.summaryBox}
                             sx={{display: 'flex', p: 2.5, alignItems: 'center', justifyContent: 'space-between', mt: 3}}>
                            <Box>
                                <Typography sx={{fontWeight: 700}}>Max Daily Loss</Typography>
                                <Typography sx={{fontWeight: 700}}>Result : 400</Typography>
                            </Box>
                            <Box sx={{border: '2px solid #cfcf46', borderRadius: '4px', pt: 0.6, pb: 0.6, pr: 1.2, pl: 1.2}}>
                                <Typography sx={{color: "#cfcf46"}}>In Progress</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', pt: 3}}>
                            <input id="range2" name="range2" type="range" min="0" max="300" value="150" style={{width: '100%'}}/>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mt: 1}}>
                <Grid item lg={7} md={12}>

                </Grid>
            </Grid>

        </div>
    </>);
};

export default ProgressiveComponent;
const newStyle = {
    detailTitle: {
        fontWeight: 500, opacity: 0.7, fontSize: '0.775rem', lineHeight: '1.25rem'
    },
    chartSelectDetails: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    selectActiveTab: {
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px',
        cursor: 'pointer',
        backgroundColor: 'white',
        borderRadius: '0.25rem',
        fontWeight: '500',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        padding: '0.25rem 0.75rem',
    },
    greenData: {fontWeight: '700', color: "#50d71e"},
    blueData: {fontWeight: '700', color: "#0000ff"},
    normalData: {fontWeight: '700', color: "rgb(100 116 139 / 1)"}
};
