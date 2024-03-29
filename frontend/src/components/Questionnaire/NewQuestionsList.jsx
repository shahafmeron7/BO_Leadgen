import React from "react";
import { useForm } from "../Context/FormContext";
import NewQuestionItem from "./NewQuestionItem";
import styles from './QuestionnaireMultiForm.module.css'
const NewQuestionsList = ({sectionLabel}) => {
  const { formData,deleteQuestion } = useForm();
  const handleDeleteQuestion = (index)=>{
    deleteQuestion(index);
  }
  return (
    
    <div className={styles.newQuestionsSection}>
      {sectionLabel && (<span className={styles.formSectionLabel}>Questions ({formData.questions.length})</span>)}
      <div className={styles.questionsContainer}>
      {formData.questions.map((question, index) => (
        <NewQuestionItem
          key={question.identifier} // Ensure keys are unique; consider a more unique key if possible
          questionDetails={question}
          onDelete={handleDeleteQuestion}
          index={index}
        />
      ))}
      </div>
    </div>
  );
};

export default NewQuestionsList;
