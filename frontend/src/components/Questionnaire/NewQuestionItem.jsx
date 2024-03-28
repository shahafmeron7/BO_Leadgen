import React from "react";
import styles from "./QuestionnaireMultiForm.module.css";
import { BookType, Tag, KeyRound, Split, AlignJustify, Trash2 } from "lucide-react";
import AnswerTableComponent from "./AnswersTableComponent.jsx";

const InfoField = ({ icon: Icon, label, details }) => (
  <div className={styles.infoFieldWrapper}>
    <div><Icon size={16} strokeWidth={1.5} /></div>
    <div className={styles.detailsFieldContainer}>
      <p className={styles.infoLabelText}>{label}</p>
      <span className={styles.infoLabelDetails}>{details}</span>
    </div>
  </div>
);

const NewQuestionItem = ({ questionDetails, onDelete, index }) => {
  return (
    <div className={styles.newQuestionItem}>
      <div className={styles.questionHeader}>
        <div className={styles.newQuestionleftHeader}>
          <span className={styles.questionDescText}>
            Question {index + 1} Details
          </span>
        </div>
        <button className={styles.trashBtn}  onClick={(e) => {
            e.stopPropagation(); // Prevent accordion toggle when clicking remove
            onDelete(index);
          }}>
          <Trash2 size={18} color="#e16573" />
        </button>
      </div>
      <div className={`${styles.questionItemDetails}`}>
        <div className={styles.questionItemRow}>

        <InfoField icon={BookType} label="Description" details={questionDetails.text} />
        </div>
        <div className={styles.questionItemRow} >
        <InfoField icon={Tag} label="Question type" details={questionDetails.type} />
        <InfoField icon={KeyRound} label="Identifier ID" details={questionDetails.identifier} />
        <InfoField icon={Split} label="Funnel ID" details={questionDetails.funnelId} />

        </div>
        <div className={styles.questionItemRow}>

          <div className={styles.infoFieldWrapper}>
            <div><AlignJustify size={16} strokeWidth={1.5} /></div>
            <div className={styles.detailsFieldContainer}>
              <p className={styles.infoLabelText}>Answers</p>
              <AnswerTableComponent answers={questionDetails.answers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestionItem;
