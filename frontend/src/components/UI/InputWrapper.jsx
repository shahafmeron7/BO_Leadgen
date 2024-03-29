import React from "react";
import styles from "./InputWrapper.module.css";
import Tooltip from "./Tooltip";
const InputWrapper = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  isNum = false,
  icon: Icon,
  tooltipType,
}) => {
  const displayValue = isNum ? (value > 0 ? value.toString() : "") : value;
  const tooltipTexts = {
    question:
      "This Funnel ID specifies which answers direct users to this question.",
    answer:
      `This Funnel ID determines the next set of questions based on the selected answer.\nEach ID leads to a unique sequence.`,
  };
  const tooltipText = tooltipTexts[tooltipType] || '';

  const handleInputChange = (e) => {
    const newValue = isNum ? e.target.value : e.target.value;
    onChange(isNum && newValue !== "" ? parseInt(newValue, 10) : newValue);
  };
  return (
    <div className={`${styles.inputWrapper} ${error ? styles.error : ""}`}>
      <div className={styles.labelWithIcon}>
        {label && <span>{label}</span>}
        {Icon && (
          <Tooltip text={tooltipText}>
            <Icon size={16} strokeWidth={1.75} />
          </Tooltip>
        )}
      </div>
      <input
        className={styles.textInput}
        type={isNum ? "number" : "text"}
        value={displayValue} // For numeric inputs, ensure value is a string
        min={isNum ? "1" : undefined} // Set a minimum value if it's a numeric input
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.errMsg}>{error}</div>}
    </div>
  );
};

export default InputWrapper;
