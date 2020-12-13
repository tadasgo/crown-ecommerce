import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import { SignInAndSignUpContainer } from './signin-signup.styles';

const SignInSignUpPage = () => (
	<SignInAndSignUpContainer>
		<SignIn />
		<SignUp />
	</SignInAndSignUpContainer>
);

export default SignInSignUpPage;
