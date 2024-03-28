// CreateQuestionsStep.jsx

import React from "react";
import { useForm } from "../Context/FormContext";
import LayoutComponent from "../Layouts/LayoutComponent";
import DetailsContainer from "../Layouts/DetailsContainer";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import NewQuestionsList from "./NewQuestionsList";
import styles from "./QuestionnaireMultiForm.module.css";
import errorStyle from "../UI/InputWrapper.module.css";

const CreateQuestionsStep = ({}) => {
  const { addQuestionToFormData, errors } = useForm();

  const handleAddQuestion = () => {
    addQuestionToFormData();
  };
 

  return (
    <>
      <DetailsContainer>
        <LayoutComponent label="Question Details">
          <QuestionDetails />
        </LayoutComponent>
        <LayoutComponent label="Answers">
          <AnswerList />
        </LayoutComponent>
        <div className={styles.addQuestionContainer}>
          <div className={styles.addQuestionWrapper}>
            <button className={styles.addQuestionBtn} onClick={handleAddQuestion}>
              Add Question
            </button>
            {errors.general && <div className={errorStyle.errMsg}>{errors.general}</div>}
          </div>
        </div>
      </DetailsContainer>
      <DetailsContainer>

        <NewQuestionsList sectionLabel />
      </DetailsContainer>
    </>
  );
};

export default CreateQuestionsStep;
