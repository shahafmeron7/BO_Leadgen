import React from "react";
import styles from "./InputWrapper.module.css";
const InputWrapper = ({ label, value, onChange, placeholder, error }) => {
  return (
    
    <div className={`${styles.inputWrapper} ${error ? styles.error:''}`}>
      {label && (<span>{label}</span>)}
      <input
        className={styles.textInput}
        type="text"
        // style={{ borderColor: error ? 'var(--err-msg-color)' : '' }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.errMsg}>{error}</div>}
    </div>
  );
};

export default InputWrapper;
