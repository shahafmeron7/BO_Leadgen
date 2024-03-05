// Questionnaire/QuestionForm.jsx

import React, { useState } from 'react';
import TextInput from '../UI/TextInput.jsx';
import Button from '../UI/Button.jsx';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log(question);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default QuestionForm;
