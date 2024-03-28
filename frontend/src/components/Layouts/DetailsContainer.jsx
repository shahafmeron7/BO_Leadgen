// DetailsContainer.js
import React from 'react';
import styles from './DetailsContainer.module.css'; // Adjust the import path to your styles

const DetailsContainer = ({ children }) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsWrapper}>
        {children}
      </div>
    </div>
  );
};

export default DetailsContainer;
