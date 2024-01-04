import React, {useState} from 'react';
import {useAppContext} from "../../../utilis/ContextState/AppContext";
const initialDetail = [
    {name: 'Start Date', data: '1 Feb, 2022'},
    {name: 'End Date', data: '28 Feb, 2022'},
    {name: 'Account Size', data: '$50,000.00'},
    {name: 'Status', data: 'In Progress'},
    {name: 'Status', data: 'In Progress'}];
const newSelectData = ['Balance', "No. of Trades"];
const initialTradingData = [
    {name: 'Equity', data: '$12,344,4'},
    {name: 'Udoras', data: '$52,215.52'},
    {name: 'No of off', data: '48'},
    {name: 'Loss', data: '7.09'},
    {name: 'woin rate', data: '100.00%'},
    {name: 'Highest', data: '$12,434.34'}];
const tradingFactor = [
    {name: 'Expectence', data: '$46.36'},
    {name: 'Fyot Factor', data: '$15,215.52'},
    {name: 'Noyot', data: '$53.96'}];
const gainersStokes = [
    {name: "BA", brand: "Boeing", price: 244.52, change: 7.19, changePercent: 3.03},
    {name: "IBM", brand: "IBM", price: 161.96, change: 1.74, changePercent: 1.09},
    {name: "INTC", brand: "Intel", price: 42.70, change: 0.55, changePercent: 1.30},
    {name: "CVX", brand: "Chevron", price: 144.29, change: 1.87, changePercent: 1.31},
    {name: "GS", brand: "Goldman", price: 350.80, change: 6.18, changePercent: 1.79}
];
const TradingJournalController = () => {
    const [progressiveDetail, setprogressiveDetail] = useState(initialDetail);
    const [selectTabs, setSelectTabs] = useState(newSelectData[0]);
    const [gainersStokesData, setGainersStokesData] = useState(gainersStokes);
    const [newState, setNewState] = useState({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22],
            },
        ],
    });
    const {dispatch} = useAppContext();
    const options = {
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        tooltip: {
            enabled: false,
        },
        colors: ['#3C50E0', '#80CAEE'],
        chart: {
            fontFamily: 'Satoshi, sans-serif',
            height: 335,
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'category',
            categories: [
                '0',
                '6',
                '12',
                '18',
                '24',
                '30'
            ],
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
        dispatch
    }
};
export default TradingJournalController;
