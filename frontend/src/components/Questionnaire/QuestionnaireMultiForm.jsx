import React, { useState } from "react";
// Import step components...
import QuestionnaireDetailsStep from "./QuestionnaireDetailsStep";
import CreateQuestionsStep from "./CreateQuestionsStep";
import ReviewQuestionnaireStep from "./ReviewQuestionnaireStep";
import FormProgress from "./FormProgress";

import styles from './QuestionnaireMultiForm.module.css'
const QuestionnaireMultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    questionnaireName: "",
    portalName: "",
    questions: [],
  });

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  }

  function handleSubmit() {
    // Handle final submission of formData...
  }

  function renderStep() {
    switch (currentStep) {
      case 1:
        return <QuestionnaireDetailsStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <CreateQuestionsStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <ReviewQuestionnaireStep formData={formData} />;
      default:
        return <div>Unknown step</div>;
    }
  }

  return (
    <div className={styles.formContainer}>
       <FormProgress currentStep={currentStep}/>
      {renderStep()}
      {currentStep > 1 && <button onClick={prevStep}>Back</button>}
      {currentStep < 3 ? (
        <button onClick={nextStep}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default QuestionnaireMultiForm;