// takes provided object and returns object which can be used with reducers
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
