import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
// @ts-ignore
import {reducer as formReducer} from "redux-form";
import usersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        UsersPage: usersReducer,
        form: formReducer
    }
);

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>



let store = createStore(reducers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
export default store
