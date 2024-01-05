import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ReactApexChart from 'react-apexcharts';
import AccountInfoController from "./AccountInfoController";
import styles from "./AccountInfo.module.css";
import {TradingJournal} from "../../../utilis/Constants/commonData";
import InstrumentTable from "../../../commonComponent/InstrumentTable";


const AccountInfo = () => {
    const {accountInfo, setAccountInfo, options, column, data} = AccountInfoController();
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
                                <Typography sx={{color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2}}>Results by Open</Typography>
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
                <Grid item md={2.5} xs={0}></Grid>
                <Grid item md={9.5} xs={12}>
                    <Typography sx={{color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2}}>Results by Instruments</Typography>
                    <Box className={styles.contentBox} sx={{mt: 3}}>
                        <InstrumentTable column={column} data={data}/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default AccountInfo;

const webStyles = {
    displayButtonMap: {
        display: 'flex',
        backgroundColor: "#f3f8fb",
        padding: '10px',
        cursor: "pointer",
        borderRadius: '10px'
    },
    chartSelectDetails: {display: 'flex', justifyContent: 'space-between'},
}
