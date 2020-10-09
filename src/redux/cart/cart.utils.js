// takes exsisting cart items array and new item
export const addItemToCart = (cartItems, cartItemToAdd) => {
	// find returns first item based on condition or undefined
	const exsistingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	// if we find smth
	if (exsistingCartItem) {
		// map returns new array and we need new array for react to rerender
		return cartItems.map((cartItem) => {
			if (cartItem.id === cartItemToAdd.id) {
				return { ...cartItem, quantity: cartItem.quantity + 1 };
			} else {
				// no need to update so just return item as it is
				return cartItem;
			}
		});
	}
	// this runs first time we add an item -> new array with all existing + obj with cartItemToAdd with starting quantity
	// so later iterations can access quantity
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
