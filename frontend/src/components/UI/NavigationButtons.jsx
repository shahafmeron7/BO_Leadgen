import React from 'react'
import styles from './NavigationButtons.module.css';
import { ChevronLeft } from 'lucide-react';
const NavigationButtons = ({ currentStep, prevStep, handleNextClick, handleSubmit }) => {
    return (
      <div className={styles.buttonsContainer}>
        {currentStep > 1 && (
          <button className={styles.prevBtn} onClick={prevStep}>
            <ChevronLeft size={20} />
          </button>
        )}
        {currentStep < 3 ? (
          <button className={styles.btn} onClick={handleNextClick}>Continue</button>
        ) : (
          <button className={styles.btn} onClick={handleSubmit}>Submit</button>
        )}
      </div>
    );
  };
  

export default NavigationButtons;