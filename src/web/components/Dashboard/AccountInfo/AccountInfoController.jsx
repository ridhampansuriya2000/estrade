import React, {useState} from 'react';

const AccountInfoController = () => {
    const [accountInfo, setAccountInfo] = useState();

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
    let column = [
        {filedName: 'no_tread_1', title: 'No Trades'},
        {filedName: 'result_1', title: 'Results'},
        {filedName: 'no_tread_2', title: 'No Trades'},
        {filedName: 'result_2', title: 'Results'},
        {filedName: 'no_tread_3', title: 'No Trades'},
        {filedName: 'result_3', title: 'Results'},
    ];
    let data = [
        {
            no_tread_1: '1',
            result_1: '2',
            no_tread_2: '3',
            result_2: '4',
            no_tread_3: '5',
            result_3: '6',
        },
        {
            no_tread_1: '1',
            result_1: '1',
            no_tread_2: '1',
            result_2: '1',
            no_tread_3: '1',
            result_3: '1',
        },
        {
            no_tread_1: '1',
            result_1: '1',
            no_tread_2: '1',
            result_2: '1',
            no_tread_3: '1',
            result_3: '1',
        },
        {
            no_tread_1: '1',
            result_1: '1',
            no_tread_2: '1',
            result_2: '1',
            no_tread_3: '1',
            result_3: '1',
        }
    ]
    return {accountInfo, setAccountInfo, options, column, data}
};

export default AccountInfoController;
