import React, { useState } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import styles from "./QuestionnaireForm.module.css";
import QuestionDetails from "./QuestionDetails";
import QuestionCardItem from "./QuestionCardItem";
import FormSection from "../UI/FormSection"; // Import the new component

import axios from "axios";

function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [title, setTitle] = useState("");
  const [portal, setPortal] = useState("");
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [questionIdentifier, setQuestionIdentifier] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([""]); // Array of answers for the current question

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const isNextEnabled = () => {
    switch (currentStep) {
      case 1:
        console.log(title.trim() !== "" && portal.trim() !== "")
        return title.trim() !== "" && portal.trim() !== "";
      case 2:
        return (
          questions.length > 0 &&
          questions.every(
            (question) =>
              question.questionText !== "" && question.answers.length > 0
          )
        );
      default:
        return false;
    }
  };
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
      questionType &&
      questionIdentifier &&
      currentAnswers.every((answer) => answer.trim() !== "")
    ) {
      const newQuestion = {
        identifier_id: questionIdentifier,
        text: currentQuestionText,
        type: questionType,
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
      console.log(process.env.REACT_APP_API_BASE_URL);
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/questionnaires`,
        questionnaireData
      );
      console.log("Successfully submitted questionnaire", response.data);
      // Handle success scenario
    } catch (error) {
      console.error(
        "Failed to submit questionnaire:",
        error.response ? error.response.data : error.message
      );
      // Handle error scenario
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.questionnaireForm}>
      {currentStep === 1 && (
        <FormSection title="Questionnaire Details">
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
        </FormSection>
      )}

      {currentStep === 2 && (
        <>
          <FormSection title="New Question">
            <QuestionDetails
              className={styles.questionInput}
              currentQuestionText={currentQuestionText}
              setCurrentQuestionText={setCurrentQuestionText}
              questionIdentifier={questionIdentifier}
              setQuestionIdentifier={setQuestionIdentifier}
              questionType={questionType}
              setQuestionType={setQuestionType}
            />
          </FormSection>
          <FormSection title="Answers">
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
          </FormSection>
          <Button type="button" onClick={addQuestion}>
            Submit Question
          </Button>
          {/* Question list and submission button */}
          <FormSection title="Questions List">
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
          </FormSection>
        </>
      )}

      {currentStep > 1 && (
        <Button type="button" onClick={prevStep}>
          Previous
        </Button>
      )}
      {currentStep < 3 && (
        <Button type="button" onClick={nextStep} disabled={!isNextEnabled()}>
          Next
        </Button>
      )}
      {currentStep === 3 && <Button type="submit">Submit Questionnaire</Button>}
    </form>
  );
}

export default QuestionnaireForm;
