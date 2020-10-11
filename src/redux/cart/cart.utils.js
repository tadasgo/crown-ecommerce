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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	// if its the last item in cart remove it
	if (existingCartItem.quantity === 1) {
		// get new array without matching item
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) => {
		// reduce the quantity of only selected item, keep others the same
		if (cartItem.id === cartItemToRemove.id) {
			return {
				...cartItem,
				quantity: cartItem.quantity - 1,
			};
		} else {
			return cartItem;
		}
	});
};
