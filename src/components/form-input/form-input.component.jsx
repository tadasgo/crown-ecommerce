import React from 'react';

import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel,
} from './form-input.styles';

// if we pass label we generate it else render null
// if there is some value inside the field -> apply class of shrink to label and animate it
const FormInput = ({ handleChange, label, ...props }) => (
	<GroupContainer>
		<FormInputContainer onChange={handleChange} {...props} />

		{label ? (
			<FormInputLabel className={props.value.length ? 'shrink' : ''}>
				{label}
			</FormInputLabel>
		) : null}
	</GroupContainer>
);

export default FormInput;
