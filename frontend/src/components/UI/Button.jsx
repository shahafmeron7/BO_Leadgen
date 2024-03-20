// UI/Button.jsx

import React from 'react';

const Button = ({ children, type = 'button', onClick, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
