import React from "react";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireMultiForm.module.css";
import { useForm } from "../Context/FormContext";
const QuestionnaireDetailsStep = () => {
  const { formData, handleQuestionnaireNameChange, handlePortalNameChange,errors } =
    useForm();

  return (
    <div className={styles.detailsStep}>
      <div className={styles.inputItem}>
        <h4>Questionnaire Name</h4>
        <TextInput
          value={formData.questionnaireName}
          onChange={handleQuestionnaireNameChange}
          placeholder="Questionnaire Name"
        />
        {errors.questionnaireName && (
        <div className={styles.errMsg}>{errors.questionnaireName}</div>
      )}
      </div>
      <div className={styles.inputItem}>
        <h4>Questionnaire Portal</h4>
        <TextInput
          value={formData.portalName}
          onChange={handlePortalNameChange}
          placeholder="Portal Name"
        />
         {errors.portalName && (
        <div className={styles.errMsg}>{errors.portalName}</div>
      )}
      </div>
    </div>
  );
};

export default QuestionnaireDetailsStep;
