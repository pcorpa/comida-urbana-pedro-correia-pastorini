import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

//const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, applyMiddleware());
export default store;
