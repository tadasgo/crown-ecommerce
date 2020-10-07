// func which gets lastState and action -> returns new object with state for root reducer to combine
// we pass as action {type: x, payload: x}
// every single reducer get every single action, so we need a default statement in switch

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			// return object with everyting else on the state while modifying value we care about
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
