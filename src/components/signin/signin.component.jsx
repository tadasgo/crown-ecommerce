import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	// prevent default behavior and clean fields after submit
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	// destructure e.target -> set those values to state.
	// [name] is computed property name of the object
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password.</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />

					<FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
