import axios from "axios";

const axiosClient = axios.create({
    // baseURL: 'https://prismatic-technologies.com/api',
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

//Add request and response interceptors
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}, 
    (error) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, 
    (error) => {
    return Promise.reject(error);
});

export default axiosClient;