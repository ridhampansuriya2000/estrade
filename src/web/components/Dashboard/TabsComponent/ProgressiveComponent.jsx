import React from 'react';
import {Grid, Box, Typography, Paper} from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ProgressiveController from "./ProgressiveController";
import styles from "../dashboard.module.css"
import ApexChart from "../../../commonComponent/ApexChart";
import SelectTabs from "../../../commonComponent/SelectTabs";
import Calendar from "../../../commonComponent/Calendar";
import SummaryData from "../../../commonComponent/SummaryData";


const ProgressiveComponent = ({userAccountData}) => {

    const {progressiveDetail, options, newState, newSelectData, selectTabs, setSelectTabs, initialTradingData, tradingFactor, gainersStokesData, dispatch, portfolioLedger, PLData} = ProgressiveController({userAccountData});
    return (<>
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={4}>
                    {progressiveDetail.map((value, index) => {
                        return (<Grid item key={index} lg={2.4} sm={6} xs={12}>
                            <Box className={styles.progressiveDetail} sx={{p: 3}}>
                                <Box sx={{
                                    width: '100%',
                                    textAlign: 'center'
                                }}>
                                    <Typography sx={{...newStyle.detailValue, pt: 0.5, pb: 1}}>{value.name}</Typography>
                                    <Typography sx={value.data === 'In Progress' ? {
                                        ...newStyle.detailTitle, border: '1.2px solid #0085FF',
                                        borderRadius: '15px', color: '#0085FF'
                                    } : {...newStyle.detailTitle}}>{value.data}</Typography>
                                </Box>
                            </Box>
                        </Grid>)
                    })}
                </Grid>
            </Box>

            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}} sx={{mt: 1}}>
                <Grid item lg={7.2} md={12} sx={{width: '100%'}}>
                    <Paper sx={newStyle.paperBox}>
                        <Box style={newStyle.chartSelectDetails} sx={{flexDirection: {xs: 'column', sm: 'row'}}}>
                            <SelectTabs selectData={newSelectData} selectTabs={selectTabs} setSelectTabs={setSelectTabs}/>
                            <Box className={styles.tabComponent}>
                                <Typography sx={{...newStyle.selectActiveTab, ...newStyle.chartGrow}}>Loss <ExpandMoreRoundedIcon/></Typography></Box>
                        </Box>
                        <ApexChart options={options} state={newState}/>
                    </Paper>
                </Grid>

                <Grid item lg={4.8} md={12} sx={{width: '100%'}}>
                    <Paper sx={newStyle.paperBox}>
                        <SummaryData newStyle={newStyle} dispatch={dispatch} PLData={PLData}/>
                    </Paper>
                </Grid>

                <Grid item lg={7.2} md={12}>
                    <Paper sx={newStyle.paperBox}>
                        <Box sx={{...newStyle.userBalanceDetails, p: 2.5}}>
                            <Grid container spacing={2}>
                                {initialTradingData?.map((value) => {
                                    return (<Grid item lg={2} md={2} xs={6}>

                                        <Typography sx={newStyle.tradeTitle}>{value.name}</Typography>
                                        <Typography sx={newStyle.normalData}>{value.data}</Typography>
                                    </Grid>)
                                })}
                            </Grid>
                        </Box>

                        <Grid container spacing={2} sx={{mt: 1}}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                                    <Box sx={newStyle.averagePrice}>
                                        <Typography sx={newStyle.tradeTitle}>Average Profit</Typography>
                                        <Typography sx={newStyle.tradeTime}>$46.36</Typography>
                                    </Box>
                                    <Box sx={newStyle.averageDetails}>
                                        <Typography sx={newStyle.tradeTitle}>Avrage Loss</Typography>
                                    </Box>
                                    <Box sx={newStyle.averageDetails}>
                                        <Typography sx={newStyle.tradeTitle}>Avrage RRR</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box sx={newStyle.averagePrice}>
                                    <Grid container>
                                        {tradingFactor?.map((value) => {
                                            return (<Grid item lg={4} md={4} xs={4} sx={newStyle.tradingData}>
                                                <Typography sx={newStyle.tradeTitle}>{value.name}</Typography>
                                                <Typography sx={newStyle.normalData}>{value.data}</Typography>
                                            </Grid>)
                                        })}
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                        <Grid sx={newStyle.timeBox}>
                            <Box sx={{...newStyle.timeZoneBox, ...newStyle.userBalanceDetails}}>
                                <Typography sx={newStyle.tradeTitle}>Timeframe : &nbsp;</Typography>
                                <Typography sx={newStyle.tradeTime}> GMT + 0</Typography>
                            </Box>
                            <Box sx={newStyle.timeZoneBox}>
                                <Typography sx={newStyle.tradeTitle}>Last Update : &nbsp;</Typography>
                                <Typography sx={newStyle.tradeTime}>5 Jan 2022 00:00:20:12</Typography>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>


                <Grid item lg={4.8} md={12} sx={{width: '100%'}}>
                    <Paper
                        sx={newStyle.paperBox}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography sx={{...newStyle.boxTitle, mb: 0}}>Trading Objective</Typography>
                            <Typography sx={{cursor: "pointer"}}><ExpandMoreRoundedIcon
                                sx={{backgroundColor: "#e5eff5", borderRadius: "7px"}}/></Typography>
                        </Box>
                        <Typography sx={{...newStyle.treadingTitle}}>Minimum 10 Trading Days</Typography>
                        <Typography sx={{...newStyle.treadingDisc}}>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been the industry's</Typography>
                        <Box sx={{...newStyle.profitResult, alignItems: 'center'}}>
                            <Typography sx={{...newStyle.profitResultTitle}}>Result : 70 &nbsp;</Typography>
                            <Box sx={{...newStyle.tradingButton, border: '2px solid #50d71e'}}>
                                <Typography sx={{color: "#50d71e"}}>Passed</Typography>
                            </Box>
                        </Box>
                        <Box sx={{...newStyle.profitResultProgress, mt: 3}}>
                            <Box sx={{display: "flex", justifyContent: 'space-between', mb: 1}}>
                                <div>
                                    <Typography sx={{...newStyle.profitResultTitle}}>Max Daily Loss -$2,500</Typography>
                                    <Typography sx={{...newStyle.resultValue}}>Results :
                                        $480,46</Typography>
                                </div>
                                <Box sx={{...newStyle.tradingButton, border: '2px solid #cfcf46'}}>
                                    <Typography sx={{color: "#cfcf46"}}>In Progress</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{textAlign: 'end', fontWeight: '500', fontSize: '12px', color: '#FF3F3F'}}>Time Fixe in :
                                16:15:04</Typography>
                            <Box sx={{display: 'grid', pt: 3}}>
                                <input id="range2" name="range2" type="range" min="0" max="300" value="150" style={{width: '100%'}}/>
                                <Typography sx={{textAlign: 'end', color: '#3D454E', fontSize: '12px'}}>$2500</Typography>
                            </Box>
                        </Box>

                    </Paper>
                </Grid>

                {/*<Grid item md={6} sm={12} sx={{width: '100%'}}>*/}
                {/*    <Paper sx={newStyle.paperBox}>*/}
                {/*        <Typography sx={newStyle.boxTitle}>Gainers Stokes</Typography>*/}
                {/*        <StokesTable stokes={'plus'} stokesHeader={dashboardStokesHeader} stokesData={gainersStokesData}/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

                {/*<Grid item md={6} sm={12} sx={{width: '100%'}}>*/}
                {/*    <Paper sx={newStyle.paperBox}>*/}
                {/*        <Typography sx={newStyle.boxTitle}>Losers Stokes</Typography>*/}
                {/*        <StokesTable stokes={'minus'} stokesHeader={dashboardStokesHeader} stokesData={gainersStokesData}/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

                <Grid item xs={12} sx={{mt: 5, zIndex: 0}}>
                    <Typography sx={{
                        ...newStyle.boxTitle,
                        fontSize: '26px',
                        lineHeight: '30px',
                        fontWeight: '600'
                    }}>Calendar</Typography>
                    <Paper sx={{
                        width: 'auto',
                        height: '700px',
                        backgroundColor: '#fff',
                        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px'
                    }}>
                        <Calendar/>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    </>);
};

export default ProgressiveComponent;
const newStyle = {
    detailTitle: {fontWeight: 600, fontSize: '16px', color: "#3D454E", backgroundColor: '#F2F8FB', borderRadius: "15px", p: 2.5},
    detailValue: {fontWeight: 500, fontSize: '15px', wordBreak: 'break-word', color: '#3D454E', opacity: '0.8'},
    chartSelectDetails: {display: 'flex', justifyContent: 'space-between'},
    selectActiveTab: {
        cursor: 'pointer',
        backgroundColor: 'white',
        borderRadius: '0.25rem',
        fontWeight: '600',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        padding: '0.25rem 0.75rem',
    },
    greenData: {fontWeight: '500', color: "#50d71e"},
    blueData: {fontWeight: '700', color: "#0000ff"},
    normalData: {fontWeight: '500', color: "#3D454E", textAlign: 'center'},
    boxTitle: {fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem', mb: 3},
    paperBox: {
        height: '100%',
        backgroundColor: '#fff',
        p: {sm: 3, xs: 2},
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 8px 13px -3px',
        borderRadius: '10px',
    },
    objectiveDetails: {display: 'flex', justifyContent: 'space-between', pt: {md: 1.3}, pb: {md: 1.3}},
    averagePrice: {
        border: '1.2px solid #0085FF',
        borderRadius: '15px',
        p: 3,
        backgroundColor: '#F2F8FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    averageDetails: {p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'},
    tradingData: {display: 'flex', flexDirection: 'column', justifyContent: 'space-around'},
    timeBox: {display: 'flex', justifyContent: 'space-between', mt: 3, flexDirection: {xs: 'column', sm: 'row'}},
    timeZoneBox: {display: 'flex', p: 4, alignItems: 'center'},
    tradingResult: {display: 'flex', p: 2.5, alignItems: 'center', justifyContent: 'space-between'},
    tradingButton: {borderRadius: '8px', pt: 0.6, pb: 0.6, pr: 1.2, pl: 1.2, height: 'max-content'},
    tradingSecondBox: {display: 'flex', p: 2.5, alignItems: 'center', justifyContent: 'space-between', mt: 3},
    userBalanceDetails: {borderRadius: '15px', backgroundColor: '#F2F8FB'},
    tradeTitle: {fontWeight: '500', color: "#3D454E", opacity: '0.8', fontSize: '14px', textAlign: 'center'},
    tradeTime: {fontWeight: '700', color: "#0085FF", textAlign: 'center'},
    profitResult: {display: "flex", justifyContent: 'space-between', backgroundColor: '#F2F8FB', borderRadius: '15px', p: 3,},
    profitResultProgress: {backgroundColor: '#F2F8FB', borderRadius: '15px', p: 3,},
    profitResultTitle: {fontWeight: '500', fontSize: '15px', color: "#3D454E", opacity: '0.8'},
    resultValue: {fontWeight: '500', opacity: '0.5', fontSize: '12px', color: "#3D454E"},
    treadingTitle: {color: '#3D454E', fontSize: '13px', fontWeight: '500', mb: 2},
    treadingDisc: {color: '#3D454E', fontSize: '11px', fontWeight: '400', opacity: '0.5'},
    chartGrow: {
        borderRadius: '8px',
        height: 'max-content',
        backgroundColor: '#F2F8FB',
        display: 'flex',
        alignItems: 'center',
    },
};
