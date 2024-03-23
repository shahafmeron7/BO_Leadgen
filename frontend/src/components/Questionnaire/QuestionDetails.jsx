import React from "react";
import TextInput from "../UI/TextInput"; // Ensure the path is correct

function QuestionDetails({ question, setQuestion }) {
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
    <div>
      <TextInput
        value={question.text}
        onChange={handleTextChange}
        placeholder="Current Question Text"
      />
      <TextInput
        value={question.identifier}
        onChange={handleIdentifierChange}
        placeholder="Question Identifier"
      />
      <TextInput
        value={question.type}
        onChange={handleQuestionTypeChange}
        placeholder="Question Type Structure"
      />
      {/* Implement TextInput for answers if needed */}
    </div>
  );
}

export default QuestionDetails;
