import { combineReducers, createStore, applyMiddleware } from 'redux';

import promise 			from "redux-promise-middleware";
import thunk 			from "redux-thunk";
import { createLogger } from "redux-logger";

import MathOperations from '../reducers/mathReducer';

const reducers = combineReducers({
	counter  : MathOperations
})

const middleware 	= applyMiddleware(  promise(),  thunk,  createLogger() );
const store 			= createStore( reducers, middleware );

export default store;
