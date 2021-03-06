import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './signup.styles';

const SignUp = () => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			// create new user acc with specific email and password then gives back userAuth which is on key user so we destructure that. Then add data to database and save it
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			// clear form
			setCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have an account</SignUpTitle>
			<span>Sign up with your email and password.</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					label="Username"
					handleChange={handleChange}
					required
				/>

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
					label="Password (atleast 6 characters)"
					handleChange={handleChange}
					required
				/>

				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					label="Confirm password"
					handleChange={handleChange}
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
