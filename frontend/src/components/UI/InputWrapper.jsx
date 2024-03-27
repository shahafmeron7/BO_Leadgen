import React from "react";
import styles from "./InputWrapper.module.css";
const InputWrapper = ({ label, value, onChange, placeholder, error }) => {
  return (
    <div className={styles.inputWrapper}>
      <span>{label}</span>
      <input
        className={styles.textInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.errMsg}>{error}</div>}
    </div>
  );
};

export default InputWrapper;
