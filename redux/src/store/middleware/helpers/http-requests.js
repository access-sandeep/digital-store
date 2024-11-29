import axios from "axios";

const httpRequests = {
    baseURL: 'http://localhost:3000',
    send: async (dispatch, action) => {
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const response = await axios.request({
                baseURL: httpRequests.baseURL,
                url,
                method,
                data,
            });
            dispatch({type: onSuccess, payload: response.data});
        } catch(error) {
            dispatch({type: onError, payload: {error:  `Name: ${error.name}\nCode: ${error.code}\nStatus: ${error.status}\nMessaage: ${error.message}\nBase URL: ${error.config.baseURL}\nUrl: ${error.config.url}\nMethod: ${error.config.method}\n`}});
        }
    }
};

export default httpRequests;