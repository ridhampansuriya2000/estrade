import React, {useEffect, useState} from 'react';
import {authStatus, getAccountData} from "../../utilis/API/Call/apiCall";
import {useAppContext} from "../../utilis/ContextState/AppContext";

const DashboardController = () => {
    const [activeStep, setActiveStep] = useState("");
    const [userAccountData, setUserAccountData] = useState({});
    const [callApi, setCallApi] = useState(false);
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        (async () => {
            dispatch({type: 'SET_LOADING', payload: true});
            try {
                const response = await getAccountData(dispatch);
                if (response?.data) {
                    dispatch({type: 'SET_LOADING', payload: false});
                    setUserAccountData(response.data);
                }
            } catch (e) {
                dispatch({type: 'SET_LOADING', payload: false});

            } finally {
                dispatch({type: 'SET_LOADING', payload: false});
            }

        })()

    }, []);

    return {
        activeStep,
        setActiveStep,
        userAccountData
    };
};

export default DashboardController;
