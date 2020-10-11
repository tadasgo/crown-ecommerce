import { createSelector } from 'reselect';

// imput selector -> takes state and returns a slice of it one layer deep usually each selector after this usually drills deeper
const selectCart = (state) => state.cart;

// output selector
// first arg - array of selectors we will use, second - f() that will return value that we want
// input selectors should be in the same order as function arguments
// it acts like a cascade and we get memoization
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
