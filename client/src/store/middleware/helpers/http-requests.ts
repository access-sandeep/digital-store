import axios from "axios";

const httpRequests = {
    baseURL: 'http://localhost:3000',
    send: async (dispatch:any, action:any) => {
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const response = await axios.request({
                baseURL: httpRequests.baseURL,
                url,
                method,
                data,
            });
            dispatch({type: onSuccess, payload: response.data});
        } catch(error: any) {
            dispatch({type: onError, payload: {error:  error.message}});
        }
    }
};

export default httpRequests;