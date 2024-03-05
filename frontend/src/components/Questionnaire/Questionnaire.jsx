// Questionnaire/Questionnaire.jsx

import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionForm from './QuestionForm.jsx';

const Questionnaire = () => {
  return (
    <div>
      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default Questionnaire;
