import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// Higher order component
// if isLoading true - show spinner, else load component with all the properties
const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;
