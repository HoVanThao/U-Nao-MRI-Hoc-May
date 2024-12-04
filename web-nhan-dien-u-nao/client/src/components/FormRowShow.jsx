import React from 'react';

const FormRowShow = ({ type, name, labelText, value }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className='form-input'
                value={value}
                readOnly
            />
        </div>
    );
};

export default FormRowShow;