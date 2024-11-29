const on_error = (store) => (next)  => async (action) => {
    switch(action.type) {
        case "products/errorActions":
        case "tasks/errorActions":
            console.log(`Error:\n-----------------------------\n${action.payload.error}`);
        break;
        default:
            next(action);
    }
};

export default on_error;