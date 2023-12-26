import axios from "axios";
import {useAppContext} from "../../ContextState/AppContext";
import LocalStorageManager from "../../LocalStorage/LocatStorage";

const {state, dispatch} = useAppContext();
const baseURL = axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

const instance = axios.create({
    baseURL: baseURL,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(function (config) {
    dispatch({type: 'SET_LOADING', payload: true});

    Object.assign(config.headers, {Test: "123"})
    const data = LocalStorageManager.getLocalStorage("BEARER_TOKEN")
    if (data) config.headers[`Authorization`] = `Bearer ${data}`;

    return config;
}, function (error) {
    dispatch({type: 'SET_LOADING', payload: false});
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    Object.assign(response, {test: "Response"})
    dispatch({type: 'SET_LOADING', payload: false});

    return response;
}, function (error) {
    dispatch({type: 'SET_LOADING', payload: false});

    const status = error.response ? error.response.status : null;

    if (status === 401) {
        console.log("Unauthorized access");
    } else if (status === 404) {
        console.log("Post not found");
    } else {
        console.error("An error occurred:", error);
    }

    return Promise.reject(error);
});

export default instance
