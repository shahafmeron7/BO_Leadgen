import React from "react";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireMultiForm.module.css";
import { useForm } from "../Context/FormContext";
const QuestionnaireDetailsStep = () => {
  const {
    formData,
    handleQuestionnaireNameChange,
    handlePortalNameChange,
    errors,
  } = useForm();

  return (
    <div className={styles.detailsStep}>

        <div className={styles.inputItem}>
          <label>Questionnaire Name</label>
          <TextInput
            value={formData.questionnaireName}
            onChange={handleQuestionnaireNameChange}
            placeholder="e.g Leadgen POS"
          />
          {errors.questionnaireName && (
            <div className={styles.errMsg}>{errors.questionnaireName}</div>
          )}
        </div>
        <div className={styles.inputItem}>
          <label>Questionnaire Portal</label>
          <TextInput
            value={formData.portalName}
            onChange={handlePortalNameChange}
            placeholder="e.g TOP5"
          />
          {errors.portalName && (
            <div className={styles.errMsg}>{errors.portalName}</div>
          )}
        </div>
    </div>
  );
};

export default QuestionnaireDetailsStep;
