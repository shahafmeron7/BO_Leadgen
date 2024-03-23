import React, { createContext, useContext, useState, useMemo } from "react";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    questionnaireName: "",
    portalName: "",
    questions: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    text: "",
    identifier: "",
    type: "",
    answers: [],
  });

  const handleQuestionnaireNameChange = (e) => {
    setFormData({ ...formData, questionnaireName: e.target.value });
  };

  const handlePortalNameChange = (e) => {
    setFormData({ ...formData, portalName: e.target.value });
  };

  const addQuestionToFormData = () => {
    setFormData(prevState => ({
      ...prevState,
      questions: [...prevState.questions, currentQuestion],
    }));
    setCurrentQuestion({ text: "", identifier: "", type: "", answers: [] }); // Clear current question after adding
  };


  const clearCurrentQuestion = () => {
    return { text: "", identifier: "", type: "", answers: [] };
  };

  // Validation for Step 1
  const validateStepOne = () => {
    return (
      formData.questionnaireName.trim() !== "" &&
      formData.portalName.trim() !== ""
    );
  };

  // Validation for Step 2
  const validateStepTwo = () => {
    return (
      formData.questions.length > 0 &&
      formData.questions.every(
        (question) =>
          question.text.trim() !== "" &&
          question.answers.every((answer) => answer.trim() !== "")
      )
    );
  };
  // Memoize the context value to prevent unnecessary re-renders

  const validateCurrentStep = (step) => {
    switch (step) {
      case 1:
        return validateStepOne();
      case 2:
        return validateStepTwo();
      case 3:
        // Assuming step 3 is always valid as it's a review step, or add your validation
        return true;
      default:
        return false;
    }
  };
  const contextValue = useMemo(() => ({
    formData,
    currentQuestion,
    setCurrentQuestion,
    setFormData,
    handleQuestionnaireNameChange,
    handlePortalNameChange,
    addQuestionToFormData,
    clearCurrentQuestion,
    validateCurrentStep
  }), [formData,currentQuestion]);
  return (
    <FormContext.Provider
      value={contextValue}
    >
      {children}
    </FormContext.Provider>
  );
};
