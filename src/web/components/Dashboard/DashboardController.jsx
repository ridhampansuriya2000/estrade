import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../utilis/ContextState/AppContext";
import {logOutUser} from "../../utilis/API/Call/apiCall";

const DashboardController = () => {
    const [activeStep, setActiveStep] = useState("");
    const navigate = useNavigate();
    const {state, dispatch} = useAppContext();

    const userLogOut = async () => {
        const response = await logOutUser(dispatch)

        if (response?.data?.status) {
            dispatch({type: 'SET_USER_VERIFY'})
            navigate('/login')
        }
    };

    return {
        activeStep,
        setActiveStep,
        userLogOut
    };
};

export default DashboardController;
