import React, { useState, useEffect } from "react";
import {useForm} from '../Context/FormContext'
// Import step components...
import QuestionnaireDetailsStep from "./QuestionnaireDetailsStep";
import CreateQuestionsStep from "./CreateQuestionsStep";
import ReviewQuestionnaireStep from "./ReviewQuestionnaireStep";
import FormProgress from "./FormProgress";
import { ArrowRight, ChevronLeft } from "lucide-react";
import styles from "./QuestionnaireMultiForm.module.css";
const QuestionnaireMultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData,validateCurrentStep } = useForm(); // Using useForm to access formData and setFormData

  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);

  useEffect(() => {
    setIsCurrentStepValid(validateCurrentStep(currentStep, formData));

  }, [formData, currentStep]);

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  }
  const handleNextClick = () => {
    const isValid = validateCurrentStep(currentStep, formData);
    if (isValid) {
      nextStep();
    } else {
      // Optionally handle the invalid case (e.g., showing an error message)
    }
  };

  function handleSubmit() {
    // Handle final submission of formData...
  }

  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <QuestionnaireDetailsStep/>
        );
      case 2:
        return (
            <CreateQuestionsStep/>
        );
      case 3:
        return <ReviewQuestionnaireStep/>;
      default:
        return <div>Unknown step</div>;
    }
  }

  return (
    <div className={styles.formContainer}>
      <FormProgress currentStep={currentStep} />
      {renderStep()}
      <div className={styles.buttonsContainer}>
        {currentStep > 1 && (
          <button className={styles.prevBtn} onClick={prevStep}>
            <ChevronLeft size={20} />
          </button>
        )}
        {currentStep < 3 ? (
          <button
            className={`${styles.nextBtn} ${
              !isCurrentStepValid ? styles.disabledBtn : ""
            }`}
            onClick={handleNextClick}
            disabled={!isCurrentStepValid}
          >
            Next <ArrowRight size={20} />
          </button>
        ) : (
          <button
            className={`${styles.nextBtn} ${
              !isCurrentStepValid ? styles.disabledBtn : ""
            }`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireMultiForm;
