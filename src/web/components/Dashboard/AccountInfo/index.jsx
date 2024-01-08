import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ReactApexChart from 'react-apexcharts';
import AccountInfoController from "./AccountInfoController";
import styles from "./AccountInfo.module.css";
import {TradingJournal} from "../../../utilis/Constants/commonData";
import InstrumentTable from "../../../commonComponent/InstrumentTable";


const AccountInfo = () => {
    const {accountInfo, setAccountInfo, options, column, data, InstrumentsCountry, instrumentsCountry, setInstrumentsCountry} = AccountInfoController();
    const [valueNew, setvalueNew] = useState(0);
    const handleButtonClick = (index) => {
        setvalueNew(index);
    };
    return (
        <div>
            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}}>
                <Grid item md={12}>
                    <Box className={styles.contentBox}>
                        <Grid container classname={`${styles.width100} ${styles.justifyContent}`}
                              rowSpacing={2} columnSpacing={{sm: 2, md: 3}}
                        >
                            <Grid item md={2.5} xs={12}>
                                {TradingJournal.map((tab, index) => {
                                    return (
                                        <Box sx={webStyles.displayButtonMap} value={valueNew} onClick={() => {
                                            handleButtonClick(index)
                                        }} className={valueNew === index ? styles.paperBoxNew : styles.paperBox}>
                                            <Typography
                                                className={valueNew === index ? styles.iconTabBox : styles.iconTab}>{tab.icon}</Typography>
                                            <Typography className={styles.tabNameButton}>{tab.name}</Typography>
                                        </Box>
                                    )
                                })}
                            </Grid>
                            <Grid item md={9.5} xs={12}>
                                <Typography sx={webStyles.accountInfoTitle}>Results by Open</Typography>
                                <Box sx={{backgroundColor: '#f3f8fb', borderRadius: '10px'}}>
                                    <ReactApexChart
                                        options={options.options}
                                        series={options.series}
                                        type="candlestick"
                                        height={350}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={2.5} xs={0}></Grid>
                <Grid item lg={9.5} xs={12}>
                    <Typography sx={webStyles.accountInfoTitle}>Results by Instruments</Typography>
                    <Box className={styles.contentBox} sx={{mt: 3}}>
                        <Grid container rowSpacing={0} columnSpacing={{sm: 0, md: 1}}>
                            <Grid item md={2} xs={12}>
                                <Box sx={{...webStyles.instrumentListHead}}>
                                    <Typography sx={{...webStyles.headerTitle}}>Instruments</Typography>
                                </Box>
                                {/*<Box>*/}
                                {InstrumentsCountry.map((value, index) => {
                                    return (<>
                                        <Box key={index}
                                             sx={{
                                                 ...webStyles.instrumentCountryBox,
                                                 boxShadow: instrumentsCountry === index && '2px 2px 15px 0px rgba(0, 133, 255, 0.30)',
                                                 backgroundColor: instrumentsCountry === index ? '#0085FF' : '#F2F8FB',
                                             }} onClick={() => {
                                            setInstrumentsCountry(index)
                                        }}>
                                            <Typography sx={{
                                                ...webStyles.selectInstrumentCountry,
                                                color: instrumentsCountry === index ? '#F2F8FB' : '#3D454E'
                                            }}>
                                                <img src={value.from.img}/>&nbsp;{value.from.name}&nbsp;/&nbsp;
                                                <img src={value.to.img}/>&nbsp;{value.to.name}</Typography>
                                        </Box>
                                    </>)
                                })}
                                {/*</Box>*/}
                            </Grid>
                            <Grid item md={10} xs={12}>
                                <InstrumentTable column={column} data={data}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default AccountInfo;

const webStyles = {
    displayButtonMap: {
        display: 'flex', backgroundColor: "#f3f8fb", padding: '10px',
        cursor: "pointer",
        borderRadius: '10px'
    },
    chartSelectDetails: {display: 'flex', justifyContent: 'space-between'},
    instrumentCountryBox: {
        cursor: 'pointer',
        display: "flex",
        p: 1,
        borderRadius: '10px',
        mb: 2
    },
    selectInstrumentCountry: {
        display: 'flex', fontSize: '15px', fontStyle: 'normal', fontWeight: '500', width: '100%',
        justifyContent: 'center'
    },
    instrumentListHead: {mb: 5, p: 2, borderRadius: '10px', backgroundColor: '#0085FF', boxShadow: '2px 2px 15px 0px rgba(0, 133, 255, 0.30)'},
    headerTitle: {fontSize: '15px', fontStyle: 'normal', fontWeight: '500', color: '#FFF', textAlign: 'center'},
    accountInfoTitle: {color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2}
};
