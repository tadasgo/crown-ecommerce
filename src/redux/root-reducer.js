// combines all objects provided by reducers into one final object = state of the project

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// type of storage we want -> localStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// redux-persist config
const persistConfig = {
	// at what point we want to start storing stuff
	key: 'root',
	// where to store
	storage,
	// what we want to persist. User is handled by firebase
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

// modified rootReducer with persistence capabilities and pass to storage
export default persistReducer(persistConfig, rootReducer);
