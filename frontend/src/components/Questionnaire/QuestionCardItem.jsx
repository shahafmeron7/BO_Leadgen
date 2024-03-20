import React from "react";
import styles from "./QuestionCardItem.module.css";
import AnswerItem from "./AnswerItem";
function QuestionCardItem({ text, identifier_id, type,answers }) {
  return (
    <div className={styles.questionPreview}>
      <h4>Description: {text}</h4>
      <label>Identifier ID: {identifier_id}</label>
      <label>Question Type: {type}</label>

            {answers.map((answer, index) => (
              <AnswerItem key={index} text={answer} position={index}/>
            ))}
    </div>
  );
}

export default QuestionCardItem;
