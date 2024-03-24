import React from "react";
import TextInput from "../UI/TextInput"; // Ensure the path is correct
import {useForm} from '../Context/FormContext'
import styles from './QuestionnaireMultiForm.module.css'
function QuestionDetails({ question, setQuestion }) {
  const {errors} = useForm()
  const handleTextChange = (e) => {
    const value = e.target.value;
    setQuestion(prevQuestion => ({ ...prevQuestion, text: value }));
  };

  const handleIdentifierChange = (e) => {
    const value = e.target.value;
    setQuestion(prevQuestion => ({ ...prevQuestion, identifier: value }));
  };

  const handleQuestionTypeChange = (e) => {
    const value = e.target.value;
    setQuestion(prevQuestion => ({ ...prevQuestion, type: value }));
  };
  return (
    <>
    
    <div>
      <TextInput
        value={question.text}
        onChange={handleTextChange}
        placeholder="e.g Which best describes your business?"
      />
         {errors.text && (
        <div className={styles.errMsg}>{errors.text}</div>
      )}

    </div>
      <TextInput
        value={question.identifier}
        onChange={handleIdentifierChange}
        placeholder="e.g industry_type"
      />
         {errors.identifier && (
        <div className={styles.errMsg}>{errors.identifier}</div>
      )}
      <TextInput
        value={question.type}
        onChange={handleQuestionTypeChange}
        placeholder="e.g checkbox"
      />
         {errors.type && (
        <div className={styles.errMsg}>{errors.type}</div>
      )}
      {/* Implement TextInput for answers if needed */}
    </>
  );
}

export default QuestionDetails;
