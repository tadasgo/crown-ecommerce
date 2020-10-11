import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

// add up all quantities of cart items - memoized selector
const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

// maps action to flip hidden value to prop
// if the input doesnt change we dont want to rerender component - memoization(caching). Otherwise get rerendered everytime redux state changes, event if its not related - like login etc.
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// pass action from reduc to this element
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
