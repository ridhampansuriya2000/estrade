import api from "../Interceptors/api"
import LocalStorageManager from "../../LocalStorage/LocatStorage";


export async function portfolioSummary() {
    try {
        const res = await api.post('iserver/reauthenticate')
        return {success: true, data: res.data}
    } catch (e) {
        return {success: false, msg: "Something went wrong"};
    }
}

export async function authStatus() {
    try {
        const res = await api.post('iserver/auth/status')
        console.log("res", res)
        return {success: true, data: res.data}
    } catch (e) {
        if (e.response.statusText === 'Unauthorized') {
            LocalStorageManager.setLocalStorage('estrade_authorized', false)
        }
        return {success: false, msg: e.response};
    }
}

export async function reauthenticate() {
    try {
        const res = await api.post('iserver/reauthenticate')
        console.log("res", res)
        if (res.statusText === 'OK') {
            LocalStorageManager.setLocalStorage('estrade_authorized', true)
        }
        return {success: true, data: res}
    } catch (e) {
        LocalStorageManager.setLocalStorage('estrade_authorized', false)
        console.error("res error", e)
        return {success: false, msg: e.response};
    }
}
