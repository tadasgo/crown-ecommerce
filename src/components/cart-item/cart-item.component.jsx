import React from 'react';

import {
	CartItemContaiener,
	CartItemImg,
	ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContaiener>
		<CartItemImg src={imageUrl} alt="An item in cart" />
		<ItemDetailsContainer>
			<span>{name}</span>
			<span>
				{quantity} x €{price}
			</span>
		</ItemDetailsContainer>
	</CartItemContaiener>
);

export default CartItem;
