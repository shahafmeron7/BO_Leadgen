// CreateQuestionsStep.jsx

import React from "react";
import { useForm } from "../Context/FormContext";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import styles from "./CreateQuestionsStep.module.css";
import mainStyle from "./QuestionnaireMultiForm.module.css";
const CreateQuestionsStep = ({}) => {
  const { currentQuestion, setCurrentQuestion, addQuestionToFormData, errors } =
    useForm();

  const handleAddQuestion = () => {
    addQuestionToFormData();
  };

  return (
    <div className={styles.questionContainer}>
      <QuestionDetails
        question={currentQuestion}
        setQuestion={setCurrentQuestion}
      />
      <div className={styles.answersContainer}>
        <label>Add Answers</label>
      <AnswerList />

      </div>
      

      <button onClick={handleAddQuestion}>Add Question</button>
      {errors.general && (
        <div className={mainStyle.errMsg}>{errors.general}</div>
      )}
    </div>
  );
};

export default CreateQuestionsStep;
