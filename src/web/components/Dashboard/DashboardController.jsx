import React, {useState} from 'react';
import LocalStorageManager from "../../utilis/LocalStorage/LocatStorage";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../utilis/ContextState/AppContext";

const DashboardController = () => {
    const [activeStep, setActiveStep] = useState("");
    const navigate = useNavigate();
    const {state, dispatch} = useAppContext();

    const userLogOut=()=>{
        LocalStorageManager.setLocalStorage('estrade_authorized', false)
        dispatch({type: 'SET_USER_VERIFY'})
        dispatch({type: 'SET_LOADING', payload: false})
        navigate('/login')
    }
    return {
        activeStep,
        setActiveStep,
        userLogOut
    };
};

export default DashboardController;
