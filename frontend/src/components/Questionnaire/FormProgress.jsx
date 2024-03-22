import React from 'react'
 import styles from './QuestionnaireMultiForm.module.css'
const FormProgress = ({currentStep}) => {
  const steps = [1,2,3]
return (
    <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
              
            {steps.map(step=>(
              <div key={step} className={`${styles.step} ${step<=currentStep ? styles.stepActive: '' }`}>
                    {step}
                </div>
            ))}
            </div>
    </div>
  )
}

export default FormProgress