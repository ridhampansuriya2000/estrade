import React, {useState} from 'react';
import {useAppContext} from "../../utilis/ContextState/AppContext";
import {useNavigate} from "react-router-dom"
import {reauthenticate} from "../../utilis/API/Call/apiCall";

const LoginController = () => {
    const {state, dispatch} = useAppContext();
    const navigate = useNavigate();

    const loginUser = async () => {
        const response = await reauthenticate(dispatch)
        if (response.data.statusText === 'OK') {
            dispatch({type: 'SET_USER_VERIFY'})
            navigate('/dashboard')
        }
    };

    return {
        state,
        dispatch,
        navigate,
        loginUser
    };
};

export default LoginController;
