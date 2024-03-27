import React from "react";
import styles from "./QuestionnaireMultiForm.module.css";
import { useForm } from "../Context/FormContext";
import InputWrapper from "../UI/InputWrapper";
const QuestionnaireDetailsStep = () => {
  const {
    formData,
    handleQuestionnaireNameChange,
    handlePortalNameChange,
    errors,
  } = useForm();

  return (
    <div className={styles.detailsStepWrapper}>
      <div className={styles.detailsStep}>
        <div className={styles.inputContainer}>
        <InputWrapper
          label="Questionnaire Name"
          value={formData.questionnaireName}
          onChange={handleQuestionnaireNameChange}
          placeholder="e.g Leadgen POS"
          error={errors.questionnaireName}
        />
        </div>
        <div className={styles.inputContainer}>
        <InputWrapper
          label="Questionnaire Portal"
          value={formData.portalName}
          onChange={handlePortalNameChange}
          placeholder="e.g TOP5"
          error={errors.portalName}
        />
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireDetailsStep;
