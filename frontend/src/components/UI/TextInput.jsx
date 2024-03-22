import React from 'react';

import styles from './TextInput.module.css'
function TextInput({ value, onChange, placeholder }) {
  return (
    <input
    className={styles.textInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
