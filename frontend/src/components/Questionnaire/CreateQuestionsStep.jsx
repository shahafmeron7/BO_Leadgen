// CreateQuestionsStep.jsx

import React from "react";
import { useForm } from "../Context/FormContext";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import NewQuestionsList from "./NewQuestionsList";
import styles from "./QuestionnaireMultiForm.module.css";
const CreateQuestionsStep = ({}) => {
  const {
    currentQuestion,
    setCurrentQuestion,
    addQuestionToFormData,
    errors,
    deleteQuestion,
  } = useForm();

  const handleAddQuestion = () => {
    addQuestionToFormData();
  };
  const handleDeleteQuestion = (index) => {
    deleteQuestion(index);
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionDetailsContainer}>
        <div className={styles.sectionBox}>
          <label className={styles.sectionLabel}>Question Details</label>
          <QuestionDetails
            question={currentQuestion}
            setQuestion={setCurrentQuestion}
          />
        </div>
        <div className={styles.sectionBox}>
        <label className={styles.sectionLabel}>Add Answers</label>
          <AnswerList />
        </div>


        <button onClick={handleAddQuestion}>Add Question</button>
        {errors.general && (
          <div className={styles.errMsg}>{errors.general}</div>
        )}
      </div>
      <NewQuestionsList onDelete={handleDeleteQuestion} />
    </div>
  );
};

export default CreateQuestionsStep;
