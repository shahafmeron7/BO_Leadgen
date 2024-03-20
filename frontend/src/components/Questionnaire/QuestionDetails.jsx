import React from "react";
import TextInput from "../UI/TextInput"; // Adjust the import path as needed

function QuestionDetails({
  className,
  currentQuestionText,
  setCurrentQuestionText,
  questionIdentifier,
  setQuestionIdentifier,
  questionType,
  setQuestionType,
}) {
  return (
    <div className={className}>
      <TextInput
        value={currentQuestionText}
        onChange={(e) => setCurrentQuestionText(e.target.value)}
        placeholder="Current Question Text"
      />
      <TextInput
        value={questionIdentifier}
        onChange={(e) => setQuestionIdentifier(e.target.value)}
        placeholder="Question Identifier"
      />
      <TextInput
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
        placeholder="Question Type Structure"
      />
    </div>
  );
}

export default QuestionDetails;
