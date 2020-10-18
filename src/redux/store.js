import { createStore, applyMiddleware } from 'redux';
// allows to cache store to local or session storage
import { persistStore } from 'redux-persist';
// handy for debugging
import logger from 'redux-logger';

// import combineReducers with a name of rootReducer
import rootReducer from './root-reducer';

const middlewares = [];

// only apply logger middleware if we are in development
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

// gets rootReducer and all other middlewares in this case it only logger
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store
export const persistor = persistStore(store);
