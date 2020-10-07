import { createStore, applyMiddleware } from 'redux';
// handy for debugging
import logger from 'redux-logger';

// import combineReducers with a name of rootReducer
import rootReducer from './root-reducer';

const middlewares = [logger];

// gets rootReducer and all other middlewares in this case it only logger
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
