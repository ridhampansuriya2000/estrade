import React, {useState} from 'react';
import AccountInfoController from "./AccountInfoController";
import {Box, Grid, Typography} from "@mui/material";
import styles from "./AccountInfo.module.css";
import {TradingJournal} from "../../../utilis/Constants/commonData";
import InstrumentTable from "../../../commonComponent/InstrumentTable";

let column = [
    {filedName : 'no_tread_1', title:'No Trades'},
    {filedName : 'result_1', title:'Results'},
    {filedName : 'no_tread_2', title:'No Trades'},
    {filedName : 'result_2', title:'Results'},
    {filedName : 'no_tread_3', title:'No Trades'},
    {filedName : 'result_3', title:'Results'},
];
let data = [
    {
        no_tread_1 : '1',
        result_1 : '2',
        no_tread_2 : '3',
        result_2 : '4',
        no_tread_3 : '5',
        result_3 : '6',
    },
    {
        no_tread_1 : '1',
        result_1 : '1',
        no_tread_2 : '1',
        result_2 : '1',
        no_tread_3 : '1',
        result_3 : '1',
    },
    {
        no_tread_1 : '1',
        result_1 : '1',
        no_tread_2 : '1',
        result_2 : '1',
        no_tread_3 : '1',
        result_3 : '1',
    },
    {
        no_tread_1 : '1',
        result_1 : '1',
        no_tread_2 : '1',
        result_2 : '1',
        no_tread_3 : '1',
        result_3 : '1',
    }
]
const AccountInfo = () => {
    const {accountInfo, setAccountInfo} = AccountInfoController();
    const [valueNew, setvalueNew] = useState(0);
    const handleButtonClick = (index) => {
        setvalueNew(index);
    };
    return (
        <div>
            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}} >
                <Grid item md={12}>
                    <Box className={styles.contentBox} >
                        <Grid container md={12} classname={`${styles.width100} ${styles.justifyContent}`}
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
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box className={styles.contentBox} >
                <InstrumentTable column={column} data={data}/>
            </Box>
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
