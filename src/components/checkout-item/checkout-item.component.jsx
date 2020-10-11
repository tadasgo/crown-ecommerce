import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="Product in cart" />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		<div className="remove-button">&#10005;</div>
	</div>
);

export default CheckoutItem;
