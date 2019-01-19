export default function({ dispatch }){
    return next => action => {
        // action does not have a payload
        // or payload has no .then property
        // we dont care about it, send it on
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        
        // make sure the action's promise resolves
        action.payload
            .then(function(response){
                // create a new action with the old type, but replace promise with response data
              const newAction =  { ...action, payload: response };
              dispatch(newAction);
            });
    };
}