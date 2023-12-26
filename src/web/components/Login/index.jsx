import React from 'react';
import LoginController from "./LoginController"
import LocalStorageManager from "../../utilis/LocalStorage/LocatStorage";

const Login = () => {
    const {state, dispatch, navigate} = LoginController()
    return (
        <div>
            <button onClick={() => {
                dispatch({type: 'SET_LOADING', payload: true})
                LocalStorageManager.setLocalStorage('estrade_verify', true)
                dispatch({type: 'SET_USER_VERIFY'})
                dispatch({type: 'SET_LOADING', payload: false})
                navigate('/dashboard')
                // dispatch({type: 'SET_LOADING', payload: true})
            }}>Login
            </button>
            Login
        </div>
    );
};

export default Login;
