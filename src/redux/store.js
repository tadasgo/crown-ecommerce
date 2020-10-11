import { createStore, applyMiddleware } from 'redux';
// allows to cache store to local or session storage
import { persistStore } from 'redux-persist';
// handy for debugging
import logger from 'redux-logger';

// import combineReducers with a name of rootReducer
import rootReducer from './root-reducer';

const middlewares = [logger];

// gets rootReducer and all other middlewares in this case it only logger
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store
export const persistor = persistStore(store);
