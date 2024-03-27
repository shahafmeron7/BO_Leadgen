import React, { useState } from "react";
import styles from "./QuestionnaireMultiForm.module.css";
import {ChevronUp,Trash2} from 'lucide-react'
const NewQuestionItem = ({ questionDetails, onDelete, index }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.newQuestionItem}>
      <div className={styles.questionHeader} onClick={toggleAccordion}>
        <div className={styles.leftHeader}>
        <ChevronUp size={18}/>
        <span>
          Question {index + 1}: {questionDetails.text}
        </span>

        </div>
        <button className={styles.trashBtn}
          onClick={(e) => {
            e.stopPropagation(); // Prevent accordion toggle when clicking remove
            onDelete(index);
          }}
        >
          <Trash2 size={18} color="#e16573" />
        </button>
        {/* Call onDelete with the question's index */}
      </div>
      {isOpen && (
         <div 
         className={`${styles.questionItemDetails} ${isOpen ? styles.questionItemDetailsOpen : ''}`}
       >
          <p>Identifier: {questionDetails.identifier}</p>
          <p>Funnel ID: {questionDetails.funnel_id}</p>

          <p>Type: {questionDetails.type}</p>
          <p>Answers:</p>
          <ul>
            {questionDetails.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewQuestionItem;
