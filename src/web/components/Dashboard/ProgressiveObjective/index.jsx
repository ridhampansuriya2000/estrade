import React, {useState} from 'react';
import styles from "./TradingJournal.module.css";
import {Grid, Box, Typography} from "@mui/material";
import {TradingJournal} from "../../../utilis/Constants/commonData.jsx";
import AccountController from "../Account/AccountController.jsx";


const Account = () => {
    const [valueNew, setvalueNew] = useState(0);
    const handleButtonClick = (index) => {
        setvalueNew(index);
    };
    return (
        <div>
            <Box className={styles.contentBox}>
                <Grid container>
                    <Grid item md={2.5} xs={12}>
                        {TradingJournal.map((tab, index) => {
                            return (
                                <Box sx={{
                                    display: 'flex',
                                    backgroundColor: "#f3f8fb",
                                    padding: '10px',
                                    cursor: "pointer",
                                    marginBottom: '10px',
                                    borderRadius: '10px'
                                }} value={valueNew} onClick={() => {
                                    handleButtonClick(index)
                                }} className={valueNew === index ? styles.paperBoxNew : styles.paperBox}>
                                    <Typography className={valueNew === index ? styles.iconTabBox : styles.iconTab}>{tab.icon}</Typography>
                                    <Typography className={styles.tabNameButton}>{tab.name}</Typography>
                                </Box>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>
            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}} sx={{mt: 1}}>
                <Grid item md={12} lg={7} sx={{width: '100%'}}>
                    <Box className={styles.contentBox}>
                        <Box className={`${styles.heading2} ${styles.mb10}`}>Basic Information</Box>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px'}}>
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

                        <Box className={`${styles.heading2} ${styles.mb10} ${styles.mt10}`}>Final
                            Evaluation</Box>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px'}}>
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
                        <Box className={`${styles.heading2} ${styles.mb10}`}>Basic Information</Box>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px'}}>
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

                        <Box className={`${styles.heading2} ${styles.mb10} ${styles.mt10}`}>Final
                            Evaluation</Box>
                        <Box sx={{
                            overflowX: 'auto'
                        }}>
                            <Box sx={{display: 'flex', gap: '20px'}}>
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
