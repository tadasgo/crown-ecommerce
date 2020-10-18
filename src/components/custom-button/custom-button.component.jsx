import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
	// if we get prop isGoogleSignIn then add additional class
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
