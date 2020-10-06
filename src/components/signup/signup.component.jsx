import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			// create new user acc with specific email and password then gives back userAuth which is on key user so we destructure that. Then add data to database and save it
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			// clear form
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password.</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput name="displayName" type="text" value={displayName} label="Username" handleChange={this.handleChange} required />

					<FormInput name="email" type="email" value={email} label="Email" handleChange={this.handleChange} required />

					<FormInput name="password" type="password" value={password} label="Password (atleast 6 characters)" handleChange={this.handleChange} required />

					<FormInput name="confirmPassword" type="password" value={confirmPassword} label="Confirm password" handleChange={this.handleChange} required />

					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
