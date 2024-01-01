import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../utilis/ContextState/AppContext";
import {logOutUser, reauthenticate} from "../../utilis/API/Call/apiCall";

const HeaderController = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const {state, dispatch} = useAppContext();

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    };

    const userLogOut = async () => {
        const response = await logOutUser(dispatch);
        dispatch({type: 'SET_USER_VERIFY'});
        if (response?.data?.status) {
            navigate('/login')
        }
    };

    const userLogIn = async () => {
        const response = await reauthenticate(dispatch);
        dispatch({type: 'SET_USER_VERIFY'});
        if (response.data.statusText === 'OK') {
            navigate('/dashboard')
        }
    };


    return {state, dropdownVisible, setDropdownVisible, toggleDropdown, userLogOut, userLogIn}
};

export default HeaderController;
