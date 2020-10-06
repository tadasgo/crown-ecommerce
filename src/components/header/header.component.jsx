import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

// creates ReactComponent from the provided file and calls it a Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

// header for the page
const Header = ({ currentUser }) => (
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
		</div>
	</div>
);
export default Header;
