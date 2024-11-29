import httpRequests from "./helpers/http-requests";

const http_request = ({dispatch, getState}) => (next)  => async (action) => {
    switch(action.type) {
        case "tasks/httpRequest":
            action.payload = {url: "tasks", method: "GET", data: null, onSuccess:'tasks/successActions', onError:'tasks/errorActions'}
            httpRequests.send(dispatch, action);
        break;
        case "products/getProduct":
            action.payload = {url: "products", method: "GET", data: null, onSuccess:'products/successActions', onError:'products/errorActions'}
            httpRequests.send(dispatch, action);
        break;
        default:
            next(action);
    }
};

export default http_request;