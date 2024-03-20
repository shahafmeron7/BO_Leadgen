// In /src/components/UI/FormSection.jsx (adjust the path as needed)

import React from 'react';
import styles from './FormSection.module.css'; // Assuming you have styles specific to FormSection

function FormSection({ title, children }) {
  return (
    <div className={styles.formSection}>
      <div className={styles.formTitle}>{title}</div>
      {children}
    </div>
  );
}

export default FormSection;
