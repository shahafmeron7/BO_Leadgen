import React, { useState } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireForm.module.css";
import QuestionDetails from "./QuestionDetails";
import QuestionCardItem from "./QuestionCardItem";
import axios from 'axios'

function QuestionnaireForm() {
  const [title, setTitle] = useState("");
  const [portal, setPortal] = useState("");
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [questionIdentifier, setQuestionIdentifier] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([""]); // Array of answers for the current question
  // Adds a new answer input field for the current question
  const addAnswerField = () => {
    setCurrentAnswers([...currentAnswers, ""]);
  };
  const removeAnswerField = (index) => {
    const updatedAnswers = currentAnswers.filter((_, i) => i !== index);
    setCurrentAnswers(updatedAnswers);
  };
  // Updates the text for a specific answer of the current question
  const updateAnswerText = (text, index) => {
    const updatedAnswers = currentAnswers.map((answer, i) =>
      i === index ? text : answer
    );
    setCurrentAnswers(updatedAnswers);
  };
  // Adds the current question and its answers to the questions array
  const addQuestion = () => {
    if (
      currentQuestionText &&
      currentAnswers.every((answer) => answer.trim() !== "")
    ) {
      const newQuestion = {
        identifier_id: questionIdentifier,
        text: currentQuestionText,
        type:questionType,
        answers: currentAnswers,
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestionText("");
      setQuestionIdentifier("");
      setQuestionType("");
      setCurrentAnswers([""]); // Reset answers for next question
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionnaireData = {
      title,
      portal,
      questions,
    };
    console.log("Form submitted with data:", questionnaireData);
    // Here, you would send `questionnaireData` to your backend via an API call
    try {
      console.log(process.env.REACT_APP_API_BASE_URL)
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/questionnaires`, questionnaireData);
      console.log("Successfully submitted questionnaire", response.data);
      // Handle success scenario
    } catch (error) {
      console.error("Failed to submit questionnaire:", error.response ? error.response.data : error.message);
      // Handle error scenario
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.questionnaireForm}>
      <div className={styles.formSection}>
        <div className={styles.formTitle}>Questionnaire Details</div>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Questionnaire Title"
        />
        <TextInput
          value={portal}
          onChange={(e) => setPortal(e.target.value)}
          placeholder="Portal"
        />
      </div>

      <div className={styles.formSection}>
        <div className={styles.formTitle}>Add Question</div>
        <QuestionDetails
          className={styles.questionInput}
          currentQuestionText={currentQuestionText}
          setCurrentQuestionText={setCurrentQuestionText}
          questionIdentifier={questionIdentifier}
          setQuestionIdentifier={setQuestionIdentifier}
          questionType={questionType}
          setQuestionType={setQuestionType}
        />
        <div className={styles.formTitle}>Add Answers</div>
        {currentAnswers.map((answer, index) => (
          <div key={index} className={styles.answerInput}>
            <TextInput
              value={answer}
              onChange={(e) => updateAnswerText(e.target.value, index)}
              placeholder={`Answer ${index + 1}`}
            />
            <Button type="button" onClick={() => removeAnswerField(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addAnswerField}>
          Add Answer
        </Button>
        <Button type="button" onClick={addQuestion}>
          Add Question
        </Button>
      </div>

      {/* Question list and submission button */}
      <div className={styles.formSection}>
        {questions.length > 0 &&
          questions.map((question, index) => (
            <QuestionCardItem
              key={question.identifier_id}
              text={question.text}
              answers={question.answers}
              identifierId={question.identifier_id}
              type={question.type}
              position={index}
            />
          ))}
      </div>
      <Button type="submit">Submit Questionnaire</Button>
    </form>
  );
}

export default QuestionnaireForm;
