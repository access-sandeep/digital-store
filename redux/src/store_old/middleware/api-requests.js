import axios from "axios";

const http_request = ({dispatch, getState}) => next  => async (action) => {
    console.log("The http_request", action.type)
    if(action.type === "tasks/httpRequest" || action.type === "tasks/pullData") {
        const { url, method, data, onSuccess, onError } = action.payload;
        try {
            const response = await axios.request({
                baseURL: 'http://localhost:3000',
                url,
                method,
                data,
            });
            dispatch({type: onSuccess, payload: response.data});
        } catch(error) {
            dispatch({type: onError, payload: {error:  error.message}});
        }
    } else {
        next(action);
    }
};

export default http_request;