import React, {useState} from 'react';
import {useAppContext} from "../../utilis/ContextState/AppContext";
import {useNavigate} from "react-router-dom"

const LoginController = () => {
    const {state, dispatch} = useAppContext();
    const navigate = useNavigate();
    return {
        state,
        dispatch,
        navigate
    };
};

export default LoginController;
