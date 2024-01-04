import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../../utilis/ContextState/AppContext";
import {getPortfolioLedger,pnlPartitionedData} from "../../../utilis/API/Call/apiCall";


const initialDetail = [
    {name: 'Start Date', data: '1 Feb, 2022'},
    {name: 'End Date', data: '28 Feb, 2022'},
    {name: 'Account Size', data: '$50,000.00'},
    {name: 'Account Size', data: '$50,000.0'},
    {name: 'Status', data: 'In Progress'}];

const newSelectData = ['Grow', 'Balance', 'Profit', 'DrowDown'];

const initialTrading = [
    {name: 'Equity', data: '$12,344,4'},
    {name: 'Balance', data: '$52,215.52'},
    {name: 'No of Trades', data: '48'},
    {name: 'Lots', data: '7.09'},
    {name: 'Winrate', data: '100.00%'},
    {name: 'Highest', data: '$12,434.34'}];

const tradingFactor = [
    {name: 'ECurrency', data: '$46.36'},
    {name: 'Fylfot Facto', data: '$15,215.52'},
    {name: 'Interest', data: '$53.96'}];

const gainersStokes = [
    {name: "BA", brand: "Boeing", price: 244.52, change: 7.19, changePercent: 3.03},
    {name: "IBM", brand: "IBM", price: 161.96, change: 1.74, changePercent: 1.09},
    {name: "INTC", brand: "Intel", price: 42.70, change: 0.55, changePercent: 1.30},
    {name: "CVX", brand: "Chevron", price: 144.29, change: 1.87, changePercent: 1.31},
    {name: "GS", brand: "Goldman", price: 350.80, change: 6.18, changePercent: 1.79}
];


const ProgressiveController = ({userAccountData}) => {
    const [progressiveDetail, setprogressiveDetail] = useState(initialDetail);
    const [selectTabs, setSelectTabs] = useState(newSelectData[0]);
    const [gainersStokesData, setGainersStokesData] = useState(gainersStokes);
    const [portfolioLedger, setPortfolioLedger] = useState({});
    const [initialTradingData, setInitialTradingData] = useState(initialTrading);
    const [PLData, setPLData] = useState({});
    const [newState, setNewState] = useState({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
        ],
    });
    const {state, dispatch} = useAppContext();

    const fetchData = async () => {
        try {
            const [ledgerResponse, pnlResponse] = await Promise.all([
                getPortfolioLedger(userAccountData?.accounts[0]),
                pnlPartitionedData(dispatch)
            ]);

            if (ledgerResponse.data) {
                setInitialTradingData(tradingValue =>
                    tradingValue.map(value => {
                        if (value.name === "Equity") {
                            return { ...value, data: `$${ledgerResponse.data.BASE?.netliquidationvalue}` };
                        } else if (value.name === "Balance") {
                            return { ...value, data: `$${ledgerResponse.data.BASE?.cashbalance}` };
                        }
                        return value;
                    })
                );
                setPortfolioLedger(ledgerResponse.data);
            }

            if (pnlResponse.data?.upnl["DU7621536.Core"]) {
                setPLData(pnlResponse.data.upnl["DU7621536.Core"]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {

        if (userAccountData?.accounts?.length && !state.loading) {
            fetchData();
        }
    }, [userAccountData]);

    const options = {
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#0085FF', '#0085FF'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 335,
            type: 'area',
            dropShadow: {
                enabled: true,
                color: '#623CEA14',
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },

            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: 'smooth'
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            colors: '#fff',
            strokeColors: ['#3056D3', '#80CAEE'],
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: 'category',
            categories: [
                'Sep',
                'Oct',
                'Nov',
                'Dec',
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                style: {
                    fontSize: '0px',
                },
            },
            min: 0,
            max: 100,
        },
    };


    return {
        progressiveDetail,
        options,
        newState,
        newSelectData,
        selectTabs,
        setSelectTabs,
        initialTradingData,
        tradingFactor,
        gainersStokesData,
        dispatch,
        portfolioLedger,
        PLData
    }
};

export default ProgressiveController;
