// CreateQuestionsStep.jsx

import React from "react";
import { useForm } from "../Context/FormContext";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import NewQuestionsList from "./NewQuestionsList";
import styles from "./QuestionnaireMultiForm.module.css";
const CreateQuestionsStep = ({}) => {
  const {
    // currentQuestion,
    // setCurrentQuestion,
    addQuestionToFormData,
    errors,
    deleteQuestion,
  } = useForm();

  const handleAddQuestion = () => {
    addQuestionToFormData();
  };
  const handleDeleteQuestion = (index) => {
    deleteQuestion(index);
  };

  return (
    <>
      <div className={styles.createQuestionContainer}>
        <div className={styles.createQuestionWrapper}>
          <div className={styles.sectionTopWrapper}>
            <div className={styles.sectionWrapper}>
              <div className={styles.detailsBoxContainer}>
                <div className={styles.detailsBox}>
                  <div className={styles.formSectionLabelContainer}>
                    <span className={styles.formSectionLabel}>
                      Question Details
                    </span>
                  </div>
                  <QuestionDetails/>
                </div>
              </div>
              <div className={styles.detailsBoxContainer}>
                <div className={styles.detailsBox}>
                  <div className={styles.formSectionLabelContainer}>
                    <span className={styles.formSectionLabel}>
                      Answers
                    </span>
                  </div>
                  <AnswerList />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.addQuestionContainer}>
            <div className={styles.addQuestionWrapper}>
              <button
                className={styles.addQuestionBtn}
                onClick={handleAddQuestion}
              >
                Add Question
              </button>
              {errors.general && (
                <div className={styles.errMsg}>{errors.general}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.questionListWrapper}>
        <NewQuestionsList onDelete={handleDeleteQuestion} />
      </div>
    </>
  );
};

export default CreateQuestionsStep;
