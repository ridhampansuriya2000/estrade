import axios from "axios";
// import LocalStorageManager from "../../LocalStorage/LocatStorage";

// const baseURL = axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const baseURL = 'https://localhost:5000/v1/api/';
// axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
// headers: { 'Content-Type': 'application/json',}
const instance = axios.create({
    baseURL: baseURL,
    headers: {'accept': 'application/json',}
});

instance.interceptors.request.use(function (config) {
    Object.assign(config.headers)
    // console.log("config", config)
    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    // Object.assign(response, {test: "Response"})
    // console.log("response", response)
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance
