import React, {useEffect, useState} from 'react';
import {getAccountData} from "../../utilis/API/Call/apiCall";
import {useAppContext} from "../../utilis/ContextState/AppContext";

const DashboardController = () => {
    const [activeStep, setActiveStep] = useState("");
    const [userAccountData, setUserAccountData] = useState({});
    const [callApi, setCallApi] = useState(false);
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        async function fetchData() {
            setCallApi(true)
            const response = await getAccountData()
            if (response?.data) {
                setUserAccountData(response?.data)
            }
            setCallApi(false)
        }

        if (!userAccountData?.accounts && !callApi && !state.loading) {
            fetchData();
        }
    }, []);

    return {
        activeStep,
        setActiveStep,
        userAccountData
    };
};

export default DashboardController;
