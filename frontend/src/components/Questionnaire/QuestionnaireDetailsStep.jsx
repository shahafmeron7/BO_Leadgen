import React from "react";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireMultiForm.module.css";
const QuestionnaireDetailsStep = ({
  questionnaireName,
  portalName,
  onQuestionnaireNameChange,
  onPortalNameChange,
}) => {
  return (
    <div className={styles.detailsStep}>
      <div className={styles.inputItem}>
        <h4>Questionnaire Name</h4>
        <TextInput
          value={questionnaireName}
          onChange={onQuestionnaireNameChange}
          placeholder={"e.g Leadgen BO"}
        />
      </div>
      <div className={styles.inputItem}>
        <h4>Questionnaire Portal</h4>
        <TextInput
          value={portalName}
          onChange={onPortalNameChange}
          placeholder={"e.g Lendstart"}
        />
      </div>
    </div>
  );
};

export default QuestionnaireDetailsStep;
