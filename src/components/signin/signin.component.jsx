import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './signin.styles';

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;

	// prevent default behavior and clean fields after submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// let user signin with email and password then clear state
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	// destructure e.target -> set those values to state.
	// [name] is computed property name of the object
	const handleChange = (e) => {
		const { value, name } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password.</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="Email"
					handleChange={handleChange}
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={password}
					label="Password"
					handleChange={handleChange}
					required
				/>

				<ButtonsBarContainer>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
