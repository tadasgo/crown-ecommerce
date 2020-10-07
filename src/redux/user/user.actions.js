// takes provided object and returns object which can be used with reducers
export const setCurrentUser = (user) => ({
	type: 'SET_CURRENT_USER',
	payload: user,
});
