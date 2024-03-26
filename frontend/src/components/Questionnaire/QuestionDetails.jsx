import React from "react";
import TextInput from "../UI/TextInput"; // Ensure the path is correct
import { useForm } from "../Context/FormContext";
import styles from "./QuestionnaireMultiForm.module.css";
function QuestionDetails({ question, setQuestion }) {
  const { errors,currentQuestion,updateCurrentQuestion } = useForm();
  // const handleTextChange = (e) => {
  //   const value = e.target.value;
  //   setQuestion((prevQuestion) => ({ ...prevQuestion, text: value }));
  // };

  // const handleIdentifierChange = (e) => {
  //   const value = e.target.value;
  //   setQuestion((prevQuestion) => ({ ...prevQuestion, identifier: value }));
  // };

  // const handleQuestionTypeChange = (e) => {
  //   const value = e.target.value;
  //   setQuestion((prevQuestion) => ({ ...prevQuestion, type: value }));
  // };
  const handleTextChange = e => updateCurrentQuestion('text', e.target.value);
  const handleIdentifierChange = e => updateCurrentQuestion('identifier', e.target.value);
  const handleTypeChange = e => updateCurrentQuestion('type', e.target.value);
  const handleFunnelIdChange = e => updateCurrentQuestion('funnel_id', e.target.value);

  return (
    <>
      <div className={styles.inputWrapper}>
        <span>Description</span>
        <TextInput
          value={currentQuestion.text}
          onChange={handleTextChange}
          placeholder="e.g Which best describes your business?"
        />
        {errors.text && <div className={styles.errMsg}>{errors.text}</div>}
      </div>
      <div className={styles.inputWrapper}>
        <span>Identifier ID</span>

        <TextInput
          value={currentQuestion.identifier}
          onChange={handleIdentifierChange}
          placeholder="e.g industry_type"
        />
        {errors.identifier && (
          <div className={styles.errMsg}>{errors.identifier}</div>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <span>Question Type</span>

        <TextInput
          value={currentQuestion.type}
          onChange={handleTypeChange}
          placeholder="e.g checkbox"
        />
        {errors.type && <div className={styles.errMsg}>{errors.type}</div>}
      </div>
      <div className={styles.inputWrapper}>
        <span>Funnel ID</span>

        <TextInput
          value={currentQuestion.funnel_id}
          onChange={handleFunnelIdChange}
          placeholder="e.g 101"
        />
        {errors.type && <div className={styles.errMsg}>{errors.type}</div>}
      </div>
      {/* Implement TextInput for answers if needed */}
    </>
  );
}

export default QuestionDetails;
