import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers(
    {
        UsersPage: usersReducer,
        form: formReducer
    }
);



let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store
