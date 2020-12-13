import React from 'react';
// get higher order component -> take component and return one with props
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// creates ReactComponent from the provided file and calls it a Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// add firebase authetification funcs
import { auth } from '../../firebase/firebase.utils';
// selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

// header for the page
const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>

			{currentUser ? (
				// if there is user logged in - button to sign out, else signin link
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

// will receive the entire application state object as returned by calling store.getState().
// function will receive the entire application state object as returned by calling store.getState() -> then we select the part that we care about for this particular component
// Each key of the object you return will become a prop that gets passed to the component you're trying to connect
// destructure state = {user: {currentUser: ..}, cart: {hidden: ..}}
/* const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
}); */

// same as ^ but with selector. Structured selector just automaticly pass state to each function. Saves some lines of code
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// connect function automatically takes the data from the store from provider, and passes it down as props to the connected component. When the data in the store changes, the passed down props changes, and the component is automatically re-rendered.
// connect function returns a new function that is then immediately called hence ()()
export default connect(mapStateToProps)(Header);
