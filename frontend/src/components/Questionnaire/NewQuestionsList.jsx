import React from "react";
import { useForm } from "../Context/FormContext";
import NewQuestionItem from "./NewQuestionItem";
import styles from './QuestionnaireMultiForm.module.css'
const NewQuestionsList = ({onDelete}) => {
  const { formData } = useForm();
  return (
    <div className={styles.newQuestionsSection}>
      <div>Questions ({formData.questions.length})</div>
      <div className={styles.questionsContainer}>
      {formData.questions.map((question, index) => (
        <NewQuestionItem
          key={question.identifier} // Ensure keys are unique; consider a more unique key if possible
          questionDetails={question}
          onDelete={onDelete}
          index={index}
        />
      ))}
      </div>
    </div>
  );
};

export default NewQuestionsList;
