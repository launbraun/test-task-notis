import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({

    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;
