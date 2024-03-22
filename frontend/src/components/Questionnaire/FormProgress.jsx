import React from 'react'
 import styles from './QuestionnaireMultiForm.module.css'
const FormProgress = ({currentStep}) => {
  const steps = [1,2,3]
return (
    <div>
            {steps.map(step=>(
                <div key={step} className={`${styles.stepContainer} ${step<=currentStep ? styles.stepActive: '' }`}>
                    {step}
                </div>
            ))}
    </div>
  )
}

export default FormProgress