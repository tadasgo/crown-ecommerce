import CartActionTypes from './cart.types';

// no need of payload because we just flipping current state
export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});
