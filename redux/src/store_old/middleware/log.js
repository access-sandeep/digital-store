const log = store => next => action => {
    console.log("Action =>  ",action);
    next(action);
}

export default log;