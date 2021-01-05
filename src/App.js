import React, { useEffect } from 'react';
// switch loads first matched route
// route properties - exact (to check for exact or only part of the path), path, component
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

// header outside of switch will always be loaded
// class to store login state
const App = ({ setCurrentUser, currentUser }) => {
	useEffect(() => {
		// this returns subscribtion and firebase.Unsubscribe() so if we call it again subscription ends
		// we pass observer next function here
		let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// get referance and new user data to db
				const userRef = await createUserProfileDocument(userAuth);
				// listen to any changes to the data and get 1st state of data -> use action from redux to pass data to state
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						// get all other data from snapshot
						...snapShot.data(),
					});
				});
			} else {
				// else currentUser state = null, because auth = null
				setCurrentUser(userAuth);
			}
		});

		// same as componentWillUnmount
		return () => {
			unsubscribeFromAuth();
		};
	}, [setCurrentUser]);

	// switch only picks first matching. Render stuff based on conditions
	// shop is not exact because we will do shop/womens etc..
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
					}
				/>
			</Switch>
		</div>
	);
};

// destructure state.user
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

// passes an action, returns an object
// whatever the name of the keys we return in that object will be the name of the props that get passed to our connected component.
// redux func dispatch when activated will passess action to every reducer
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// app doesnt need props, so we only pass action to update
export default connect(mapStateToProps, mapDispatchToProps)(App);
