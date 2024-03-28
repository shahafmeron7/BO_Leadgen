import React from "react";
import styles from "./QuestionnaireMultiForm.module.css";
import {
  BookType,
  Tag,
  KeyRound,
  Split,
  AlignJustify,
  Trash2,
} from "lucide-react";
import AnswerTableComponent from "./AnswersTableComponent.jsx";
import InfoField from "../UI/InfoField";

const NewQuestionItem = ({ questionDetails, onDelete, index }) => {
  return (
    <div className={styles.newQuestionItem}>
      <div className={styles.questionHeader}>
        <div className={styles.newQuestionleftHeader}>
          <span className={styles.questionDescText}>
            Question {index + 1} Details
          </span>
        </div>
        <button
          className={styles.trashBtn}
          onClick={(e) => {
            e.stopPropagation(); // Prevent accordion toggle when clicking remove
            onDelete(index);
          }}
        >
          <Trash2 size={18} color="#e16573" />
        </button>
      </div>
      <div className={`${styles.questionItemDetails}`}>
        <div className={styles.detailsItemsRow}>
          <InfoField
            icon={BookType}
            label="Description"
            details={questionDetails.text}
          />
        </div>
        <div className={styles.detailsItemsRow}>
          <InfoField
            icon={Tag}
            label="Question type"
            details={questionDetails.type}
          />
          <InfoField
            icon={KeyRound}
            label="Identifier ID"
            details={questionDetails.identifier}
          />
          <InfoField
            icon={Split}
            label="Funnel ID"
            details={questionDetails.funnelId}
          />
        </div>
        <div className={styles.detailsItemsRow}>
          <InfoField icon={AlignJustify} label="Answers">
            <AnswerTableComponent answers={questionDetails.answers} />
          </InfoField>
        </div>
      </div>
    </div>
  );
};

export default NewQuestionItem;
