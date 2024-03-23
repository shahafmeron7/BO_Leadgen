// CreateQuestionsStep.jsx

import React, { useState, useEffect } from "react";
import { useForm } from "../Context/FormContext";
import QuestionDetails from "./QuestionDetails";

const CreateQuestionsStep = ({}) => {
  const { currentQuestion, setCurrentQuestion, addQuestionToFormData } = useForm();

  const handleAddQuestion = () => {
    addQuestionToFormData();
  };

  return (
    <div>
      <QuestionDetails
        question={currentQuestion}
        setQuestion={setCurrentQuestion}
      />

      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default CreateQuestionsStep;
