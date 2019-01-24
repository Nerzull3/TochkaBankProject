import React from 'react';

export default function FormErrors({ errors }) {
    return (
        <div className="form-errors">
            {Object.keys(errors).map((error, index) => 
                errors[error].length > 0 ? (<p key={index}>{error} {errors[error]}</p>) : ''
            )}
        </div>
    );
}