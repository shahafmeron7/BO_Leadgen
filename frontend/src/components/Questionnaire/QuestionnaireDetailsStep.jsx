import React from "react";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireMultiForm.module.css";
import { useForm } from "../Context/FormContext";
const QuestionnaireDetailsStep = () => {
  const { formData, handleQuestionnaireNameChange, handlePortalNameChange } =
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
      </div>
      <div className={styles.inputItem}>
        <h4>Questionnaire Portal</h4>
        <TextInput
          value={formData.portalName}
          onChange={handlePortalNameChange}
          placeholder="Portal Name"
        />
      </div>
    </div>
  );
};

export default QuestionnaireDetailsStep;
