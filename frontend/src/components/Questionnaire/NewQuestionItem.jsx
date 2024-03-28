import React, { useState } from "react";
import styles from "./QuestionnaireMultiForm.module.css";
import {
  ChevronUp,
  Split,
  BookType,
  Tag,
  Trash2,
  KeyRound,
  AlignJustify,
} from "lucide-react";
const NewQuestionItem = ({ questionDetails, onDelete, index }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.newQuestionItem}>
      <div className={styles.questionHeader}>
        <div className={styles.newQuestionleftHeader}>
          {/* <ChevronUp size={18}/> */}
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
      {/* {isOpen && ( */}
      <div
        className={`${styles.questionItemDetails} ${
          isOpen ? styles.questionItemDetailsOpen : ""
        }`}
      >
        <div className={styles.infoFieldWrapper}>
          <div>
            <BookType size={16} strokeWidth={1.5} />
          </div>
          <div className={styles.detailsFieldContainer}>
            <p className={styles.infoLabelText}>Description</p>
            <span className={styles.infoLabelDetails}>
              {questionDetails.text}
            </span>
          </div>
        </div>
        <div className={styles.infoFieldWrapper}>
          <div>
            <Tag size={16} strokeWidth={1.5} />
          </div>
          <div className={styles.detailsFieldContainer}>
            <p className={styles.infoLabelText}>Question type</p>
            <span className={styles.infoLabelDetails}>
              {questionDetails.type}
            </span>
          </div>
        </div>
        <div className={styles.infoFieldWrapper}>
          <div>
            <KeyRound size={16} strokeWidth={1.5} />
          </div>
          <div className={styles.detailsFieldContainer}>
            <p className={styles.infoLabelText}>Identifier ID</p>
            <span className={styles.infoLabelDetails}>
              {questionDetails.identifier}
            </span>
          </div>
        </div>
        <div className={styles.infoFieldWrapper}>
          <div>
            <Split size={16} strokeWidth={1.5} />
          </div>
          <div className={styles.detailsFieldContainer}>
            <p className={styles.infoLabelText}>Funnel ID</p>
            <span className={styles.infoLabelDetails}>
              {questionDetails.funnelId}
            </span>
          </div>
        </div>
        <div className={styles.infoFieldWrapper}>
          <div>
            <AlignJustify size={16} strokeWidth={1.5} />
          </div>
          <div className={styles.detailsFieldContainer}>
            <p className={styles.infoLabelText}>Answers</p>
            <div className={styles.answersDetailsWrapper}>
              <div className={styles.answerDetailsContainer}>
                <div className={styles.answersTable}>
                  <div className={styles.tableHeadersWrapper}>
                    <div className={styles.tableHeaders}>
                      <div className={styles.tableCell}>#</div>
                      <div className={styles.tableCell}>Description</div>
                      <div className={styles.tableCell}>Funnel ID</div>
                    </div>
                  </div>

                  <div className={styles.tableBody}>
                      {questionDetails.answers.map((answer, answerIndex) => (
                        <div  key={answerIndex} className={styles.answerDetailsItemContainer} >
                          <div className={styles.tableCell}>{answerIndex+1}.</div>
                          <div className={styles.tableCell}>{answer}</div>
                          <div className={styles.tableCell}>Funnel ID</div>

                          
                        </div>
                      ))}
                  </div>
                </div>
                {/* <ul>
                  {questionDetails.answers.map((answer, answerIndex) => (
                    <div className={styles.answerDetailsItemContainer}>
                      <div></div>
                      <li key={answerIndex} className={styles.infoLabelDetails}>
                        {answerIndex + 1}. {answer}
                      </li>
                    </div>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // )} */}
    </div>
  );
};

export default NewQuestionItem;
