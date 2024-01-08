import React, {useState} from 'react';
import EU from "../../../../assets/Images/EU.svg"
import JP from "../../../../assets/Images/JP.svg"
import USA from "../../../../assets/Images/USA.svg"

const AccountInfoController = () => {
    const [accountInfo, setAccountInfo] = useState();
    const [instrumentsCountry, setInstrumentsCountry] = useState(0);
    const options = {
        series: [{
            name: 'category',
            data: [
                {x: 'EURJPY Index1', y: [100, 300, 100, 300]},
                {x: 'EURJPY Index2', y: [200, 300, 200, 300]},
                {x: 'EURJPY Index3', y: [300, 500, 300, 500]},
                {x: 'EURJPY Index4', y: [300, 400, 300, 400]},
                {x: 'EURJPY Index5', y: [300, 500, 300, 500]},
                {x: 'EURJPY Index6', y: [100, 300, 100, 300]},
                {x: 'EURJPY Index7', y: [200, 300, 200, 300]},
                {x: 'EURJPY Index8', y: [100, 300, 100, 300]},
                {x: 'EURJPY Index9', y: [300, 500, 300, 500]},
                {x: 'EURJPY Index10', y: [100, 300, 100, 300]},
                {x: 'EURJPY Index11', y: [200, 300, 200, 300]},
                {x: 'EURJPY Index12', y: [300, 500, 300, 500]},
            ],
        }],
        options: {
            chart: {
                height: 350,
                type: 'candlestick',
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: '',
                align: 'right',
            },
            annotations: {},
            tooltip: {
                enabled: false,
            },
            colors: ['#fd7567'],
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#3C90EB',
                        downward: '#3C90EB'
                    }
                }
            },
            xaxis: {
                type: 'category',
                labels: {
                    formatter: function (val) {
                        return val
                    },
                },
            },
            yaxis: {
                tooltip: {
                    enabled: false,
                },
            },
        },
    };
    const column = [
        {filedName: 'no_tread_1', title: 'No Trades'},
        {filedName: 'result_1', title: 'Results'},
        {filedName: 'no_tread_2', title: 'No Trades'},
        {filedName: 'result_2', title: 'Results'},
        {filedName: 'no_tread_3', title: 'No Trades'},
        {filedName: 'result_3', title: 'Results'},
    ];
    const data = [
        {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },
        {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },
        {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },
        {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },
        {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },  {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },  {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },  {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },  {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },  {
            no_tread_1: '01',
            result_1: '-$50.20',
            no_tread_2: '01',
            result_2: '-$50.20',
            no_tread_3: '01',
            result_3: '-$50.20',
        },
    ];
    const InstrumentsCountry = [
        {from: {name: "EUR", img: EU}, to: {name: "JPY", img: JP}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
        {from: {name: "EUR", img: EU}, to: {name: "USD", img: USA}},
    ];
    return {accountInfo, setAccountInfo, options, column, data, InstrumentsCountry,instrumentsCountry, setInstrumentsCountry}
};

export default AccountInfoController;
