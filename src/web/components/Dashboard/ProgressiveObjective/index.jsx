import React, {useState} from 'react';
import styles from "./TradingJournal.module.css";
import {Grid, Box, Typography} from "@mui/material";
import {TradingJournal} from "../../../utilis/Constants/commonData.jsx";
import ApexChart from "../../../commonComponent/ApexChart";
import TradingJournalController from "./TradingJournalController.jsx"

const Account = () => {
    const {options, newState} = TradingJournalController()
    const [valueNew, setvalueNew] = useState(0);
    const handleButtonClick = (index) => {
        setvalueNew(index);
    };
    return (
        <div>
            <Box className={styles.contentBox}>
                <Grid container spacing={2} columnSpacing={{sm: 2, md: 3}}>
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
                    <Grid item md={4.7} xs={12}>
                        <Typography sx={{color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2}}>Balance Curve</Typography>
                        <Box style={{borderRadius: "10px", background: "#F2F8FB"}}>
                            <Box style={{display: 'flex'}}>
                                <Box className={styles.balanceTranding}>Balance</Box>
                                <Box className={styles.TradesName}>No. of Trades</Box>
                            </Box>
                            <ApexChart options={options} state={newState}/>
                        </Box>
                    </Grid>
                    <Grid item md={4.7} xs={12}>
                        <Typography sx={{color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2}}>Average</Typography>
                        <Box style={{borderRadius: "10px", background: "#F2F8FB"}}>
                            <Box style={{display: 'flex'}}>
                                <Box className={styles.balanceTranding}>Balance</Box>
                                <Box className={styles.TradesName}>No. of Trades</Box>
                            </Box>
                            <ApexChart options={options} state={newState}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}} sx={{mt: 1}}>
                <Grid item md={12} lg={7} sx={{width: '100%'}}>
                    <Box className={styles.contentBox}>
                        <Typography sx={webStyles.detailTitle}>Basic Information</Typography>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px', mb: 1}}>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Typography sx={webStyles.detailTitle}>Final Evaluation</Typography>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px', mb: 1}}>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={12} lg={5} sx={{width: '100%'}}>
                    <Box className={styles.contentBox}>
                        <Typography sx={webStyles.detailTitle}>Basic Information</Typography>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px', mb: 1}}>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Login Id
                                    </Box>
                                    <Box className={styles.LoginIdBox}>
                                        20218451566
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Typography sx={webStyles.detailTitle}>Final Evaluation</Typography>
                        <Box sx={{overflowX: 'auto'}}>
                            <Box sx={{display: 'flex', gap: '20px', mb: 1}}>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.card1Box}>
                                    <Box className={styles.lable1}>
                                        Max Daily Loss
                                    </Box>
                                    <Box className={`${styles.spaceBetween} ${styles.gap10}`}>
                                        <div className={styles.greenLabel}>
                                            Pass
                                        </div>
                                        <Box className={styles.amountGroup}>
                                            <Box className={styles.amountLabel}>Result</Box>
                                            <Box className={styles.amount}>$480.66</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Account

const webStyles = {
    displayButtonMap: {
        display: 'flex',
        backgroundColor: "#f3f8fb",
        padding: '10px',
        cursor: "pointer",
        borderRadius: '10px'
    },
    chartSelectDetails: {display: 'flex', justifyContent: 'space-between'},
    detailTitle: {color: '#3D454E', fontWeight: '600', fontSize: '22px', mb: 2},
};
