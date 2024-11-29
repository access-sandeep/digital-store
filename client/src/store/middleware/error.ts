const on_error = (store: any) => (next:any)  => async (action: any) => {
    switch(action.type) {
        case "tasks/errorActions":
            // httpRequests.send(store.dispatch, action);
            console.log("This is an error");
        break;
        default:
            next(action);
    }
};

export default on_error;