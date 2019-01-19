export default ({ dispatch }) => (next) => (action) => {
    if (!action.payload || !action.payload.then) return next(action);

    // make sure the action's promise resolves
    action.payload.then((payload) => {
        // create a new action with the old type, but replace promise with response data
        dispatch({ ...action, payload });
    });
};
