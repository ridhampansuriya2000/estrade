import api from "../Interceptors/api"
import LocalStorageManager from "../../LocalStorage/LocatStorage";


export async function authStatus(dispatch) {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
        const res = await api.post('iserver/auth/status')
        if (res?.data?.authenticated) {
            LocalStorageManager.setLocalStorage('estrade_authorized', true)
        } else {
            LocalStorageManager.setLocalStorage('estrade_authorized', false)
        }
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: true, data: res.data}
    } catch (e) {
        if (e?.response?.statusText === 'Unauthorized') {
            LocalStorageManager.setLocalStorage('estrade_authorized', false)
        }
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: false, msg: e.response};
    }
}

export async function reauthenticate(dispatch) {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
        const res = await api.post('iserver/reauthenticate')
        if (res.statusText === 'OK') {
            LocalStorageManager.setLocalStorage('estrade_authorized', true)
        }
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: true, data: res}
    } catch (e) {
        // await logOutUser(dispatch)
        LocalStorageManager.setLocalStorage('estrade_authorized', false)
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: false, msg: e.response};
    }
}

export async function logOutUser(dispatch) {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
        const res = await api.post('logout')
        if (res.data.status) {
            LocalStorageManager.setLocalStorage('estrade_authorized', false)
        }
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: true, data: res.data}
    } catch (e) {
        LocalStorageManager.setLocalStorage('estrade_authorized', false)
        dispatch({type: 'SET_LOADING', payload: false});
        return {success: false, msg: e.response};
    }
}

export async function pnlPartitionedData(dispatch) {
    try {
        const res = await api.get('iserver/account/pnl/partitioned');
        if (res.statusText !== 'OK') {
            // await logOutUser(dispatch)
        }
        return {success: true, data: res.data}
    } catch (e) {
        // await logOutUser(dispatch)
        return {success: false, msg: e.response};
    }
}
