import React from "react";
import styles from "./LayoutComponent.module.css"; // Adjust the import path to your styles

const LayoutComponent = ({ label, children }) => {
  return (
    <div className={styles.detailsBoxContainer}>
      <div className={styles.detailsBox}>
        {label && (
          <div className={styles.formSectionLabelContainer}>
            <span className={styles.formSectionLabel}>{label}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;