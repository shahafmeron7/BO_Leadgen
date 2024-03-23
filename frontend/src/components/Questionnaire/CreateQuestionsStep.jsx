// CreateQuestionsStep.jsx

import React, { useState, useEffect } from "react";
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
      <AnswerList />
      

      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default CreateQuestionsStep;
