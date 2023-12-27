import React, {useState} from 'react';

const initialDetail = [{name: 'Start Date', data: '1 Feb, 2022'},
    {name: 'End Date', data: '28 Feb, 2022'},
    {name: 'Account Size', data: '$50,000.00'},
    {name: 'Status', data: 'In Progress'},
    {name: 'Status', data: 'In Progress'}];
const newSelectData = ['Grow', 'Balance', 'Profit', 'DrowDown'];

const ProgressiveController = () => {
    const [progressiveDetail, setprogressiveDetail] = useState(initialDetail);
    const [selectTabs, setSelectTabs] = useState(newSelectData[0]);
    const [state, setState] = useState({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
        ],
    });

    const options = {
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#3C50E0', '#80CAEE'],
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
        // labels: {
        //   show: false,
        //   position: "top",
        // },
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

    return {progressiveDetail, options, state, newSelectData, selectTabs, setSelectTabs}
};

export default ProgressiveController;
