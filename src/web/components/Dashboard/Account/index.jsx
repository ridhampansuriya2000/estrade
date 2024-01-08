import React, {useState} from 'react';
import dayjs from 'dayjs';
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Table} from 'antd';
import {Grid, Box, Typography} from "@mui/material";
import AccountController from "./AccountController"
import {accountAnalysisNew} from "../../../utilis/Constants/commonData"
import stylesAccount from "./account.module.css";
import european from "../../../../assets/Images/european-union.png";

const columns = [
    {
        title: 'No',
        dataIndex: 'key'
    },
    {
        title: 'Open Time',
        dataIndex: 'open_time',
    },
    {
        title: 'Close Time',
        dataIndex: 'close_time',
        filters: [
            {text: 'Aggressive', value: 'Aggressive'},
            {text: 'Open Time', value: 'Open Time'},
            {text: 'Close Time', value: 'Close Time'},
            {text: 'Symbol', value: 'Symbol'},
            {text: 'Action', value: 'Action'},
            {text: 'Lefts', value: 'Lefts'},
            {text: 'LSI(Options)', value: 'LSI(Options)'},
            {text: 'TP(pips)', value: 'TP(pips)'},
            {text: 'Open Price', value: 'Open Price'},
            {text: 'Close Price', value: 'Close Price'},
            {text: 'Pips', value: 'Pips'},
            {text: 'Profit', value: 'Profit'},
            {text: 'Duration', value: 'Duration'},
            {text: 'Gain', value: 'Gain'},
        ],
        filterSearch: true,
    },
    {
        title: 'Symbol',
        dataIndex: 'symbol',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
    {
        title: 'Lefts',
        dataIndex: 'lefts',
    },
    {
        title: 'LSI(Options)',
        dataIndex: 'LSIOptions',
    },
    {
        title: 'TP(pips)',
        dataIndex: 'TPpips',
    },
    {
        title: 'Open Pr.',
        dataIndex: 'OpenPr',
    },
    {
        title: 'Close Pr.',
        dataIndex: 'ClosePr',
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
    },
    {
        title: 'Gain',
        dataIndex: 'gain',
    },
];

const data = [
    {
        key: '25581152',
        number: 1,
        open_time: '10:00 AM',
        close_time: '4:00 PM',
        symbol: 'Europe',
        action: 'Set 1',
        lefts: 0.16,
        LSIOptions: "1.16",
        TPpips: "1.525.09",
        OpenPr: "25.0",
        ClosePr: "26.25",
        duration: "15m",
        gain: <svg xmlns="http://www.w3.org/2000/svg" width="82" height="24" viewBox="0 0 82 24" fill="none">
            <path d="M1 1.5L18 11.5L31 1.5L50.5 11.5C53.3333 10 60.7 7.9 67.5 11.5C74.3 15.1 79 20.6667 80.5 23" stroke="#0085FF" stroke-width="2"
                  stroke-linecap="round"/>
        </svg>
    },
    {
        key: '25581152',
        number: 1,
        open_time: '10:00 AM',
        close_time: '4:00 PM',
        symbol: 'Europe',
        action: 'Set 1',
        lefts: 0.16,
        LSIOptions: "1.16",
        TPpips: "1.525.09",
        OpenPr: "25.0",
        ClosePr: "26.25",
        duration: "15m",
        gain: <svg xmlns="http://www.w3.org/2000/svg" width="82" height="24" viewBox="0 0 82 24" fill="none">
            <path d="M1 1.5L18 11.5L31 1.5L50.5 11.5C53.3333 10 60.7 7.9 67.5 11.5C74.3 15.1 79 20.6667 80.5 23" stroke="#0085FF" stroke-width="2"
                  stroke-linecap="round"/>
        </svg>
    },
    {
        key: '25581152',
        number: 1,
        open_time: '10:00 AM',
        close_time: '4:00 PM',
        symbol: 'Europe',
        action: 'Set 1',
        lefts: 0.16,
        LSIOptions: "1.16",
        TPpips: "1.525.09",
        OpenPr: "25.0",
        ClosePr: "26.25",
        duration: "15m",
        gain: <svg xmlns="http://www.w3.org/2000/svg" width="82" height="24" viewBox="0 0 82 24" fill="none">
            <path d="M1 1.5L18 11.5L31 1.5L50.5 11.5C53.3333 10 60.7 7.9 67.5 11.5C74.3 15.1 79 20.6667 80.5 23" stroke="#0085FF" stroke-width="2"
                  stroke-linecap="round"/>
        </svg>
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const Account = () => {
    const [valueNew, setvalueNew] = useState(0);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [displayedMonth, setDisplayedMonth] = useState(selectedDate);
    const {activeStep, setActiveStep} = AccountController();


    const handleMonthChange = (newDate) => {
        setDisplayedMonth(newDate);
    };

    const handleNextMonth = () => {
        const nextMonth = displayedMonth.add(1, 'month');
        setDisplayedMonth(nextMonth);
    };

    const handlePrevMonth = () => {
        const prevMonth = displayedMonth.subtract(1, 'month');
        setDisplayedMonth(prevMonth);
    };


    const handleButtonClick = (index) => {
        setvalueNew(index);
    };


    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}}>
                <Grid item md={12}>
                    <Box className={stylesAccount.summaryBox} sx={{p: 3}}>
                        <Grid container md={12} sx={{width: '100%', display: 'flex', justifyContent: 'center'}}
                              rowSpacing={2} columnSpacing={{sm: 2, md: 3}}>
                            <Grid item md={2.5} xs={12} sx={{paddingLeft: {md: '0px!important', xs: '10px!important'}}}>
                                {accountAnalysisNew.map((tab, index) => {
                                    return (<Box sx={newStyle.displayButtonMap} value={valueNew} onClick={() => {
                                        handleButtonClick(index)
                                    }} className={valueNew === index ? stylesAccount.paperBoxNew : stylesAccount.paperBox}>
                                        <Typography
                                            className={valueNew === index ? stylesAccount.iconTabBox : stylesAccount.iconTab}>{tab.icon}</Typography>
                                        <Typography className={stylesAccount.tabNameButton}>{tab.name}</Typography>
                                    </Box>)
                                })}
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box>
                                    <Typography sx={newStyle.boxTitle}>Advanced Statistics</Typography>
                                    <Box>
                                        <Box className={stylesAccount.summaryBoxNew} sx={{p: 2.5}}>
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenData}>Trades</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Longer win :
                                                        06/11/23</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>17,23</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Profit Feature :
                                                        1.72</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenData}>Profitability</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo
                                                        tax {'{50%t020%}'} </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>-</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax : 0.05</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenData}>Pips</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax :
                                                        2,502.00</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>-10.117.O</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax : 0.05</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenDataColor}>Average Win</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo
                                                        tax {'{+251.20}'}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>147.50 pips/$32.05</Typography>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenDataNew}>Demo tax : 0.05</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenDataColorRed}>Average
                                                        Loss</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax :
                                                        +$20.0</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>17-305.20
                                                        pips/-35.47</Typography>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenDataNew}>Demo tax : 0.05</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenData}>lots</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo
                                                        ta{'{$202.58}'}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>327.26</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax : 2%</Typography>
                                                </Box>
                                            </Box>
                                            {/*  */}
                                            <Box sx={newStyle.objectiveDetails}>
                                                <Box>
                                                    <Typography sx={newStyle.greenData}>Commissions</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo
                                                        tax {'{-250}'}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography style={{display: 'flex', justifyContent: 'end'}}
                                                                sx={newStyle.greenData}>325.54</Typography>
                                                    <Typography sx={newStyle.greenDataNew}>Demo tax : 00%</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2.5} xs={12}>
                                <Box style={{display: 'flex', alignItems: "flex-end", height: "100%"}}>
                                    <Box style={{width: '100%'}} className={stylesAccount.summaryBoxNew} sx={{p: 2.5}}>
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <img width="25px"
                                                 src='https://cdn2.iconfinder.com/data/icons/material-round-rectangle-world-flags/180/flag-country-nation-us_united_states_america-512.png'/>&nbsp;
                                            <Box sx={newStyle.greenData}>USD /</Box>&nbsp;<img width="25px"
                                                                                               src={european}/>&nbsp;
                                            <Box sx={newStyle.greenData}>JPY</Box>
                                        </Box>
                                        <Box sx={newStyle.greenDataNewUs}>US DOLLOR / JAPANESE CURRENCY</Box>
                                        <Box style={{display: 'flex'}}>
                                            <Box sx={newStyle.greenData}>115.451</Box>&nbsp;&nbsp;&nbsp;
                                            <Box sx={newStyle.greenDataColor}>+0.001585(+0.13%)</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={2.5} xs={12}>
                                <Box style={{display: 'flex', alignItems: "flex-end", height: "100%"}}>
                                    <Box style={{width: '100%'}} className={stylesAccount.summaryBoxNew} sx={{p: 2.5}}>
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <img width="30px"
                                                 src='https://cdn2.iconfinder.com/data/icons/material-round-rectangle-world-flags/180/flag-country-nation-us_united_states_america-512.png'/>&nbsp;
                                            <Box sx={newStyle.greenData}>EUR /</Box>&nbsp;<img width="35px"
                                                                                               src={european}/>&nbsp;
                                            <Box sx={newStyle.greenData}>JPY</Box>
                                        </Box>
                                        <Box sx={newStyle.greenDataNewUs}>US DOLLOR / JAPANESE CURRENCY</Box>
                                        <Box style={{display: 'flex'}}>
                                            <Box sx={newStyle.greenData}>115.451</Box>&nbsp;&nbsp;&nbsp;
                                            <Box sx={newStyle.greenDataColor}>+0.001585(+0.13%)</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}} sx={{mt: 1}}>
                <Grid item md={12} sx={{width: '100%'}}>
                    <Box className={stylesAccount.summaryBox} sx={{p: 2.5, width: '100%',}}>
                        <Grid container rowSpacing={3} columnSpacing={{sm: 2, md: 3}}>
                            <Grid item md={3} xs={12}>

                                <Box style={{display: 'flex', paddingBottom: '15px'}}>
                                    <Box className={stylesAccount.summaryBoxNew1} sx={{display: 'flex', p: 2, alignItems: 'center'}}>
                                        &lt; Augest 2023 &gt;
                                    </Box>
                                </Box>
                                <Box style={{display: 'flex', justifyContent: "CENTER"}}>
                                    <Box style={{width: '100%', height: "100%"}} className={stylesAccount.summaryBoxNew}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                                                <DemoItem label={''}>
                                                    <DateCalendar style={{display: 'flex', justifyContent: 'center', width: '100%'}} views={['day']}
                                                                  value={selectedDate}
                                                                  onChange={(date) => setSelectedDate(date)}
                                                                  onViewChange={handleMonthChange}
                                                        // view={displayedMonth}
                                                                  renderDay={(day, _value, DayComponentProps) =>
                                                                      <span {...DayComponentProps}>{day}</span>}
                                                    />
                                                </DemoItem>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <Box style={{}}>
                                    <Box sx={{display: 'flex', justifyContent: 'end'}}>
                                        <Box className={stylesAccount.summaryBoxNew1} sx={newStyle.timeZoneBox1}>
                                            Tuesday, 2023
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{
                                            overflowX: 'auto'
                                        }}>

                                            <Box className={stylesAccount.allDate} style={{display: 'flex'}}>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>04</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box sx={newStyle.timeZoneDay} className={stylesAccount.summaryBoxNew1}>
                                                        <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                            <Box style={{display: 'flex', justifyContent: 'end'}}>
                                                                <Box sx={newStyle.timeZoneDate}>11</Box>
                                                            </Box>
                                                            <Box sx={newStyle.greenData}>$122.5K</Box>
                                                            <Box
                                                                sx={{...newStyle.greenDatagrren, ...newStyle.font13}}>$126/Profit</Box>
                                                            <Box sx={{...newStyle.greenDatagrren, ...newStyle.font13}}>$126.1/2nd
                                                                Profit</Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>06</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>05</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>04</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>03</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                                <Box className={stylesAccount.widthBox}>
                                                    <Box className={stylesAccount.dayRewanuCard} sx={{p: 2.5}}>
                                                        <Box sx={newStyle.greenData}
                                                             style={{display: 'flex', justifyContent: 'end'}}>02</Box>
                                                        <Box sx={newStyle.greenDataNew} style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            marginBottom: '30px',
                                                            opacity: '0.5',
                                                        }}>Tuesday</Box>
                                                        <Box sx={newStyle.greenData}>$122.5K</Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            overflowX: 'auto'
                                        }}>
                                            <Box className={stylesAccount.tradInfo}>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle}>
                                                        Total Trades
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        12,000
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle}>
                                                        Gross P&L
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        $3,110,320
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle}>
                                                        Volume
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        30,21,980
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle} style={{color: '#08C031'}}>
                                                        Winners
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        30.000
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle} style={{color: '#FF3F3F'}}>
                                                        Losers
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        30.21,020
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={stylesAccount.tradInfoTitle}>
                                                        Commissions
                                                    </div>
                                                    <div className={stylesAccount.tradInfoTextData}>
                                                        $0
                                                    </div>
                                                </div>

                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={stylesAccount.contentBox}>
                        <Table style={{overflow: 'auto'}} columns={columns} dataSource={data} onChange={onChange}/>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Account;

const newStyle = {
    timeZoneBox: {display: 'flex', p: 2, alignItems: 'center'},
    timeZoneBox1: {display: 'flex', p: 2, alignItems: 'center', border: '1px solid #3787fa'},
    timeZoneDay: {border: '1px solid #2dc341', borderRadius: '20px'},
    timeZoneDate: {color: "white", background: "#49c958", padding: "5px", borderRadius: "5px", width: '30px'},

    timeBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "10px",
        flexDirection: {xs: 'column', sm: 'row'}
    },
    tabBox: {
        borderBottom: 0, backgroundColor: 'white', border: '1px solid rgba(204, 204, 204, 0.5)',
        boxShadow: '0px 8px 13px -3px rgba(0,0, 0, 0.07)',
        display: "flex"
    },
    objectiveDetails: {display: 'flex', justifyContent: 'space-between', pt: {md: 1.3}, pb: {md: 1.3}},
    font13: {fontSize: "14px"},
    greenData: {fontWeight: 700, color: "#3D454E"},
    greenDataNew: {fontWeight: 700, color: "#3D454E", opacity: '0.8', fontSize: '12px'},
    greenDataNewUs: {fontWeight: 700, color: "#626971", margin: "10px 0px"},
    greenDataColor: {fontWeight: 700, color: "#2dc341"},
    greenDataColorRed: {fontWeight: 700, color: "#f72145"},
    greenDatagrren: {
        fontWeight: 700,
        color: "white",
        background: "#49c958",
        padding: "5px",
        borderRadius: "5px",
        marginBottom: '5px',
        width: 'fit-content'
    },
    paperBox: {
        backgroundColor: '#f3f8fb',
        p: {sm: 3, xs: 2},
        margin: '10px 0px',
        borderRadius: '10px',
        color: "#3e454d"
    },
    paperBoxNew: {
        color: "#3e454d",
        backgroundColor: '#f3f8fb',
        p: {sm: 3, xs: 2},
        border: '2px solid #808080',
        margin: '10px 0px',
        borderRadius: '10px'
    },
    boxTitle: {fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem', mb: 3, color: "#3D454E"},
    displayButtonMap: {
        display: 'flex',
        backgroundColor: "#f3f8fb",
        padding: '10px',
        cursor: "pointer",
        borderRadius: '10px'
    },
    chartSelectDetails: {display: 'flex', justifyContent: 'space-between'},
};
