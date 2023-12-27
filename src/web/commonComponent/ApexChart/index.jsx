import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({options, state}) => {

    return (
        <>
            <ReactApexChart
                options={options}
                series={state.series}
                type="area"
                height={350}
            />
        </>
    );
};

export default ApexChart;
