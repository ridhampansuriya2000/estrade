import React, {useState} from 'react';
import {useAppContext} from "../../utilis/ContextState/AppContext";
import {useNavigate} from "react-router-dom"
import {reauthenticate} from "../../utilis/API/Call/apiCall";

const LoginController = () => {
    const {state, dispatch} = useAppContext();
    const navigate = useNavigate();

    const loginUser = async () => {
        dispatch({type: 'SET_LOADING', payload: true})
        const response = await reauthenticate()
        if (response.data.statusText === 'OK') {
            dispatch({type: 'SET_USER_VERIFY'})
            navigate('/dashboard')
        }
        dispatch({type: 'SET_LOADING', payload: false})


    }
    return {
        state,
        dispatch,
        navigate,
        loginUser
    };
};

export default LoginController;
