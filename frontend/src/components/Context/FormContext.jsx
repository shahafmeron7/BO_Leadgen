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
    funnelId:"",
    answers: [],
  });
  const [currentAnswers, setCurrentAnswers] = useState([""]);
  const [errors, setErrors] = useState({});

  const resetFormData = () => {
    setFormData({
      questionnaireName: "",
      portalName: "",
      questions: [],
    });
    setCurrentQuestion({ text: "", identifier: "", type: "",funnelId:"", answers: [] });
    setCurrentAnswers([""]);
  };

  const handleQuestionnaireNameChange = (e) => {
    setFormData({ ...formData, questionnaireName: e.target.value });
    setErrors({ ...errors, questionnaireName: "" });
  };

  const handlePortalNameChange = (e) => {
    setFormData({ ...formData, portalName: e.target.value });
    setErrors({ ...errors, portalName: "" });
  };
  const updateCurrentQuestion = (field, value) => {
    console.log(field,value)
    setCurrentQuestion(prev => ({
      ...prev,
      [field]: value,
    }));
    setErrors({ ...errors, [field]: "" });

  };
  const addQuestionToFormData = () => {
    // First, validate the new question
    const newErrors = validateNewQuestion();
    setErrors(newErrors); // Update error state

    // Only proceed if there are no errors
    if (Object.keys(newErrors).length === 0) {
      const updatedCurrentQuestion = {
        ...currentQuestion,
        answers: currentAnswers,
      };

      // Add this updated question to the list of questions in formData
      setFormData((prevState) => ({
        ...prevState,
        questions: [...prevState.questions, updatedCurrentQuestion],
      }));

      // Reset currentQuestion and currentAnswers for the next input
      setCurrentQuestion({ text: "", identifier: "", type: "",funnelId:"", answers: [] });
      setCurrentAnswers([""]);
    }
  };
  const deleteQuestion = (index) => {
    console.log('delete',index);
    const updatedQuestions = formData.questions.filter((_, questionIndex) => questionIndex !== index);
    setFormData({ ...formData, questions: updatedQuestions });
  };
  const clearCurrentQuestion = () => {
    return { text: "", identifier: "", type: "",funnelId:"", answers: [] };
  };
  const addAnswerField = () => {

    setCurrentAnswers([...currentAnswers, ""]);
    if (errors.answers && errors.answers.general) {
      const updatedErrors = { ...errors, answers: { ...errors.answers } };
      delete updatedErrors.answers.general; // Remove the general error

      // Check if after removing the general error, the answers errors object is empty
      if (Object.keys(updatedErrors.answers).length === 0) {
        delete updatedErrors.answers; // Remove the answers key if no more answer errors
      }

      setErrors(updatedErrors); // Update the errors state to reflect the removal of the general error
    }
  };
  const removeAnswerField = (index) => {
    if (currentAnswers.length > 1) {
      const updatedAnswers = currentAnswers.filter((_, i) => i !== index);
      setCurrentAnswers(updatedAnswers);

      // Optionally clear the error when the action doesn't result in an error state
      setErrors((prevErrors) => ({ ...prevErrors, answers: "" }));
    } else {
      console.log("error here");
      // Set an error message when trying to remove the last answer
      setErrors((prevErrors) => ({
        ...prevErrors,
        answers: { general: "Minimum one answer required." },
      }));
    }
  };
  // Updates the text for a specific answer of the current question
  const updateAnswerText = (text, index) => {
    const updatedAnswers = currentAnswers.map((answer, i) =>
      i === index ? text : answer
    );
    setCurrentAnswers(updatedAnswers);
    // Also update the errors state to remove the error for this answer index
    if (errors.answers && errors.answers[index]) {
      const updatedErrors = { ...errors }; // Make a shallow copy of the errors object
      delete updatedErrors.answers[index]; // Remove the error for the updated answer

      // Check if after removing the error, the answers errors object is empty
      if (Object.keys(updatedErrors.answers).length === 0) {
        delete updatedErrors.answers; // Remove the answers key if no more answer errors
      }
      console.log(updatedErrors);
      setErrors(updatedErrors); // Update the errors state
    }
  };
  // Validation for Step 1
  const validateStepOne = () => {
    let errors = {};
    if (!formData.questionnaireName.trim()) {
      errors.questionnaireName = "Questionnaire name is required.";
    }
    if (!formData.portalName.trim()) {
      errors.portalName = "Portal name is required.";
    }
    return errors;
  };
  const validateNewQuestion = () => {
    let errors = {};

    if (!currentQuestion.text.trim()) {
      errors.text = "Question text is required.";
    }

    if (!currentQuestion.identifier.trim()) {
      errors.identifier = "Identifier is required.";
    }

    if (!currentQuestion.type.trim()) {
      errors.type = "Question type is required.";
    }
    if (!currentQuestion.funnelId.trim()) {
      errors.funnelId = "Funnel ID is required.";
    }
    // Initialize the errors.answers as an object or array to store individual answer errors
    errors.answers = {};

    currentAnswers.forEach((answer, index) => {
      if (!answer.trim()) {
        // Record an error for each answer that fails validation
        errors.answers[index] = "Answer is required.";
      }
    });
    console.log(currentQuestion, "currentquestion");
    // Check if there are any answers at all
    if (currentAnswers.length === 0) {
      errors.answers.general = "At least one valid answer is required.";
    } else if (Object.keys(errors.answers).length === 0) {
      delete errors.answers; // If there are no answer errors, remove the answers key
    }
    return errors;
  };
  // Validation for Step 2
  const validateStepTwo = () => {
    let errors = {};

    if (formData.questions.length === 0) {
      // Set a general error if no questions have been added
      errors.general = "At least one question must be added before proceeding.";
    }
    return errors;

  };

  const validateCurrentStep = (step) => {
    let stepErrors = {};
    switch (step) {
      case 1:
        stepErrors = validateStepOne();
        break;
      case 2:
        stepErrors = validateStepTwo();
        break;
      // Include other cases as needed
    }
    console.log(stepErrors, step);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0; // Return true if no errors
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      errors,
      formData,
      currentQuestion,
      currentAnswers,
      resetFormData,
      setCurrentAnswers,
      addAnswerField,
      removeAnswerField,
      updateAnswerText,
      setCurrentQuestion,
      setFormData,
      updateCurrentQuestion,
      handleQuestionnaireNameChange,
      handlePortalNameChange,
      addQuestionToFormData,
      deleteQuestion,
      clearCurrentQuestion,
      validateCurrentStep,
    }),
    [formData, currentQuestion, currentAnswers, errors]
  );
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
