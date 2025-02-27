import api from "./api";

export async function sendRequest(url, data){
    try {
        const response =await api.post(url, data);
        if(response.statusText === 'OK'){
            return response;
        }
        
    } catch (error) {
        if(error.isAxiosError){
            return {message: error.message, code: error.code, status: error.response?.status};
        }else{
            return {message: error.message};
        }
    }
}