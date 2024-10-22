import axios from "axios";

const axiosClinet = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

//Add request and response interceptors
axiosClinet.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosClinet.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClinet;