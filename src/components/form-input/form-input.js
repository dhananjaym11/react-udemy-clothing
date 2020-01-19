import React from 'react';

function FormInput({label, handleChange, ...otherProps}){
	return (
		<div className="form-input">
			<label>{label}</label>
			<input onChange={handleChange} {...otherProps} />
		</div>
	)
}

export default FormInput;