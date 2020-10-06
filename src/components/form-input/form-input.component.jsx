import React from 'react';

import './form-input.styles.scss';

// if we pass label we generate it else render null
// if there is some value inside the field -> apply class of shrink to label and animate it
const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...otherProps} />

		{label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
	</div>
);

export default FormInput;
