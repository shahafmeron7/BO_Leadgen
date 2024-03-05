// UI/Button.jsx

import React from 'react';

const Button = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
