# reduxexample
Created with CodeSandbox
----------------------------------
1. I have created a reducer using use reducer hook 
  which takes 2 arguments, one is reducer function and
  another is state.
2. Use reducer hook return two params, 1 is its state 
  and a dispatcher to perform actions.

3. to dispatch an action :
    syntax: dispatch({type: action.type, payload: action.payload })

-----------------------------------------------

PLAIN REDUX.

```...........````

1. Redux is something similar to useReducer hook
  which has capability to combine all reducers and
  maintain the state in a seperate container.

2. Redux reducer takes two params as usual, state and action.
3. we can manipulate state using action type and action payload.
``
export const rootReducer = combineReducers({
  somereducer: somereducer
});
 ``
 4. we can add this root reducer to our redux store 
  using createStore(rootReducer) function.

  5. we can provide this store to provider and we can
    access the store using useSelector() hook.
  6. we can dispatch actions using useDispatch() hook.

`` eg: <button
        onClick={() => {
          dispatch(actionType);
        }} /> ``
  7. We can use immer to reproduce the state which is
    being used internally by @redux-js-toolkit.