import React, { useState, useEffect } from "react";
// Import step components...
import QuestionnaireDetailsStep from "./QuestionnaireDetailsStep";
import CreateQuestionsStep from "./CreateQuestionsStep";
import ReviewQuestionnaireStep from "./ReviewQuestionnaireStep";
import FormProgress from "./FormProgress";
import { ArrowRight,ChevronLeft } from "lucide-react";
import styles from "./QuestionnaireMultiForm.module.css";
const QuestionnaireMultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    questionnaireName: "",
    portalName: "",
    questions: [],
  });
  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);

  useEffect(() => {
    setIsCurrentStepValid(validateCurrentStep(currentStep, formData));
  }, [formData, currentStep]);
  
  const validateCurrentStep = (step, formData) => {
    switch (step) {
      case 1:
        //return true;
        return validateStepOne(formData);
      case 2:
        return true;
        // return validateStepTwo(formData);
      case 3:
        // Assuming step 3 is always valid as it's a review step, or add your validation
        return true;
      default:
        return false;
    }
  };
  
  // Validation for Step 1
  const validateStepOne = (formData) => {
    return (
      formData.questionnaireName.trim() !== "" &&
      formData.portalName.trim() !== ""
    );
  };
  const handleQuestionnaireNameChange = (event) => {
    setFormData({ ...formData, questionnaireName: event.target.value });
  };
  
  const handlePortalNameChange = (event) => {
    setFormData({ ...formData, portalName: event.target.value });
  };
  // Validation for Step 2
  const validateStepTwo = (formData) => {
    return (
      formData.questions.length > 0 &&
      formData.questions.every(
        (question) =>
          question.text.trim() !== "" &&
          question.answers.every((answer) => answer.trim() !== "")
      )
    );
  };

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
            <QuestionnaireDetailsStep
            questionnaireName={formData.questionnaireName}
            portalName={formData.portalName}
            onQuestionnaireNameChange={handleQuestionnaireNameChange}
            onPortalNameChange={handlePortalNameChange}
          />
        );
      case 2:
        return (
          <CreateQuestionsStep formData={formData} setFormData={setFormData} />
        );
      case 3:
        return <ReviewQuestionnaireStep formData={formData} />;
      default:
        return <div>Unknown step</div>;
    }
  }

  return (
    <div className={styles.formContainer}>
      <FormProgress currentStep={currentStep} />
      {renderStep()}
      <div className={styles.buttonsContainer}>
        {currentStep > 1 && <button className={styles.prevBtn} onClick={prevStep}><ChevronLeft size={20}/></button>}
        {currentStep < 3 ? (
          <button
          className={`${styles.nextBtn} ${!isCurrentStepValid ? styles.disabledBtn : ''}`}
          onClick={handleNextClick}
          disabled={!isCurrentStepValid}
        >
          Next <ArrowRight size={20} />
        </button>
        ) : (
          <button
          className={`${styles.nextBtn} ${!isCurrentStepValid ? styles.disabledBtn : ''}`}
          onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireMultiForm;
