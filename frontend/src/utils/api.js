import axios from 'axios';
import { getToken } from './utils';

const api = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        'Content-Type': 'application/json'
    }
})

// api.interceptors.request.use(
//     (config) => {
//         const token = getToken();
//         if(token){
//             config.headers['Authorization'] = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return  Promise.reject(error);
//     }
// )

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            console.log('Session expired, please login again.');
        }
        return Promise.reject(error)
    }
)

export default api;