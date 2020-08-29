import React from 'react';
import './input.css';

const Input = (props) => {
    const { variant = 'small', placeholderText, ...rest } = props;
    return (
        <input 
            className={`${variant}`}
            placeholder={placeholderText}
            {...rest}            
        />
      );
}
 
export default Input;
