import React from 'react';
import { Link } from 'react-router-dom';
// get higher order component -> take component and return one with props
import { connect } from 'react-redux';
// add firebase authetification funcs
import { auth } from '../../firebase/firebase.utils';

// creates ReactComponent from the provided file and calls it a Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

// header for the page
const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>

			{currentUser ? (
				// if there is user logged in - button to sign out, else signin link
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

// will receive the entire application state object as returned by calling store.getState().
// function will receive the entire application state object as returned by calling store.getState() -> then we select the part that we care about for this particular component
// Each key of the object you return will become a prop that gets passed to the component you're trying to connect
// destructure state = {user: {currentUser: ..}, cart: {hidden: ..}}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

// connect function automatically takes the data from the store from provider, and passes it down as props to the connected component. When the data in the store changes, the passed down props changes, and the component is automatically re-rendered.
// connect function returns a new function that is then immediately called hence ()()
export default connect(mapStateToProps)(Header);
