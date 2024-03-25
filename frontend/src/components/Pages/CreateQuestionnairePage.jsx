import React from "react";
// import QuestionnaireForm from '../Questionnaire/QuestionnareForm';
import QuestionnaireMultiForm from "../Questionnaire/QuestionnaireMultiForm";
import { FormProvider } from "../Context/FormContext";
import styles from '../App.module.css'
function CreateQuestionnairePage() {
  return (
    <FormProvider>
      <QuestionnaireMultiForm />
    </FormProvider>
  );
}

export default CreateQuestionnairePage;
