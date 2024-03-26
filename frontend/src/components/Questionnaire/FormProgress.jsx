import React from 'react'
import { Check } from 'lucide-react'
 import styles from './QuestionnaireMultiForm.module.css'
const FormProgress = ({currentStep}) => {
  const steps = ["Details","Add Questions","Review"]
return (
    <div className={styles.stepsContainer}>
            {/* <div className={styles.stepsWrapper}> */}
              
            {steps.map((step,i)=>(
              <div key={step} className={`${styles.stepItem} ${currentStep===i+1 && styles.active} ${i+1<currentStep && styles.complete}`}>
                    <div className={styles.step}>{i+1 < currentStep ? <Check />: i+1 }</div>
                    <p className={styles.stepText}>
                    {step}
                    </p>
                </div>
            ))}
            {/* </div> */}
    </div>
  )
}

export default FormProgress