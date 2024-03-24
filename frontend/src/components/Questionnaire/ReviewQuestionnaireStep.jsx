import React from 'react'
import {useForm} from '../Context/FormContext'

const ReviewQuestionnaireStep = () => {
  const { formData } = useForm(); // Destructure formData from your context

  return (
      <div>
          <h2>Review Your Questionnaire</h2>
          {/* Display questionnaire name and portal name */}
          <p><strong>Questionnaire Name:</strong> {formData.questionnaireName}</p>
          <p><strong>Portal Name:</strong> {formData.portalName}</p>

          <h3>Questions:</h3>
          {formData.questions.length > 0 ? (
              <ul>
                  {formData.questions.map((question, index) => (
                      <li key={index}>
                          <h4>Question {index + 1}</h4>
                          <p><strong>Text:</strong> {question.text}</p>
                          <p><strong>Identifier:</strong> {question.identifier}</p>
                          <p><strong>Type:</strong> {question.type}</p>
                          <p><strong>Answers:</strong></p>
                          <ul>
                              {question.answers.map((answer, answerIndex) => (
                                  <li key={answerIndex}>{answer}</li>
                              ))}
                          </ul>
                      </li>
                  ))}
              </ul>
          ) : (
              <p>No questions added.</p>
          )}
      </div>
  );
};

export default ReviewQuestionnaireStep