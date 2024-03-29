import React, { useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div className={`${styles.tooltipText} ${isVisible ? styles.visible : ''}`}>
        {text}
      </div>
    </div>
  );
};


export default Tooltip;
