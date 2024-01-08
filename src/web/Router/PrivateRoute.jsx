import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppContext} from "../utilis/ContextState/AppContext";
import LocalStorageManager from "../utilis/LocalStorage/LocatStorage";
import {logOutUser} from "../utilis/API/Call/apiCall";

const PrivateRoute = ({children, check, arr}) => {
    const {state, dispatch} = useAppContext();
    const checkToken = LocalStorageManager.getLocalStorage('estrade_authorized') === true;

    const userLogOut = async () => {
        dispatch({type: 'SET_LOADING', payload: true});
        const response = await logOutUser(dispatch);
        dispatch({type: 'SET_USER_VERIFY'});
        if (response?.data?.status) {
            dispatch({type: 'SET_LOADING', payload: false});
        } else {
            dispatch({type: 'SET_LOADING', payload: false});
        }
    };
    const logOutUserApi = () => {
        userLogOut()
        return <Navigate to="/login"/>
    }

    if (check) {
        return checkToken ? children : logOutUserApi()
    } else {
        return !checkToken ? children : <Navigate to="/dashboard"/>
    }

};

export default PrivateRoute;
