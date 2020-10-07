// combines all objects provided by reducers into one final object = state of the project

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer,
});
