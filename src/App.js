import React from 'react';
import './App.css';
// switch loads first matched route
// route properties - exact (to check for exact or only part of the path), path, component
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// header outside of switch will always be loaded
// class to store login state
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};

		this.unsubscribeFromAuth = null;
	}

	// keeps us logged in until we unsubscribe
	// this connection is always open until component is mounted
	componentDidMount() {
		// this returns subscribtion and firebase.Unsubscribe() so if we call it again subscription ends
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// get referance and new user data to db
				const userRef = await createUserProfileDocument(userAuth);
				// listen to any changes to the data and get 1st state of data
				userRef.onSnapshot((snapShot) => {
					// add data to state's id from returned snapshot and all other data
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				// else currentUser state = null
				this.setState({ currentUser: userAuth });
			}
		});
	}

	// cut off subscribtion when component unmounts
	// this.unsubscribeFromAuth() = firebase.Unsubscribe()
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
