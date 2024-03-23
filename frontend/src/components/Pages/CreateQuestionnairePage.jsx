import React from "react";
// import QuestionnaireForm from '../Questionnaire/QuestionnareForm';
import QuestionnaireMultiForm from "../Questionnaire/QuestionnaireMultiForm";
import { FormProvider } from "../Context/FormContext";
function CreateQuestionnairePage() {
  return (
    <FormProvider>
      <QuestionnaireMultiForm />
    </FormProvider>
  );
}

export default CreateQuestionnairePage;
