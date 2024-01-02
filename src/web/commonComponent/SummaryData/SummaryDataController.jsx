import React, {useEffect, useState} from 'react';
import {pnlPartitionedData} from "../../utilis/API/Call/apiCall";
import {useAppContext} from "../../utilis/ContextState/AppContext";

const SummaryDataController = () => {
    const [PLData, setPLData] = useState({});
    const { state,dispatch} = useAppContext();

    useEffect(() => {
        async function fetchData() {
            const response = await pnlPartitionedData(dispatch)
            if (response?.data?.upnl["DU7621536.Core"]) {
                setPLData(response?.data?.upnl["DU7621536.Core"])
            }
        }

        fetchData();
    }, []);
    return {PLData}
};

export default SummaryDataController;
