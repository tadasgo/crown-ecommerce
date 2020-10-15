import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	// stripe wnat price in cents
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HblcuB3we2VO3eiXfQg5kVub8hZrqjCwmUCuJfOag3TWEcTGUJwL4ItZg7CeTmZhZQtinLOIyro9u5PgP4TCUzX00Yg0RyaMD';

	// onSuccess do this
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return <StripeCheckout label="Pay Now" name="Crown Clothing Ltd" billingAddress shippingAddress currency="EUR" image="https://sendeyo.com/up/d/f3eb2117da" description={`Your total is €${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
