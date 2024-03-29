import React, { useState } from "react";
import { useForm } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import SubmissionMessage from "../UI/SubmissionMessage";
import NavigationButtons from "../UI/NavigationButtons";
import QuestionnaireDetailsStep from "./QuestionnaireDetailsStep";
import CreateQuestionsStep from "./CreateQuestionsStep";
import ReviewQuestionnaireStep from "./ReviewQuestionnaireStep";
import FormProgress from "./FormProgress";
import { TailSpin } from "react-loader-spinner";
import styles from "./QuestionnaireMultiForm.module.css";
import appStyles from '../App.module.css'
import axios from "axios";
import DetailsContainer from "../Layouts/DetailsContainer";
import LayoutComponent from "../Layouts/LayoutComponent";
const QuestionnaireMultiForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null); // null, true, or false

  const { formData, validateCurrentStep, resetFormData } = useForm(); // Using useForm to access formData and setFormData
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  }
  const handleNextClick = () => {
    const isValid = validateCurrentStep(currentStep);
    if (isValid) {
      nextStep();
    } else {
      // Optionally handle the invalid case (e.g., showing an error message)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting
    setSubmissionMessage(""); // Clear previous messages

    const { questionnaireName, portalName, questions } = formData;

    const questionnaireData = {
      title: questionnaireName,
      portal: portalName,
      questions: questions.map((question) => ({
        text: question.text,
        type: question.type,
        answers: question.answers.map(answer => ({
          text: answer.text, 
          funnelId: answer.funnelId
        })),
        identifier_id: question.identifier,
        funnelId: question.funnelId 
      })),
    };

    console.log("Form submitted with data:", questionnaireData);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/questionnaires`, questionnaireData);
      setIsSuccess(true);
      setSubmissionMessage("Successfully submitted questionnaire.");
    } catch (error) {
      console.error("Failed to submit questionnaire:", error);
      setIsSuccess(false);
      setSubmissionMessage("Failed to submit questionnaire. Please try again.");
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true); // Ensure this is set immediately before any async operations like setTimeout
      setTimeout(() => {
        resetFormData();
      }, 1000);
    }
  };


  function renderStep() {
    let stepComponent = null; // Initialize step component

    switch (currentStep) {
      case 1:
        stepComponent = <QuestionnaireDetailsStep />;
        break;
      case 2:
        stepComponent = <CreateQuestionsStep />;
        break;
      case 3:
        stepComponent = <ReviewQuestionnaireStep />;
        break;
      default:
        stepComponent = <div>Unknown step</div>;
    }

    return stepComponent;
  }
  const onNewQuestionnaire = () => {
    setFormSubmitted(false);
    setCurrentStep(1);
    navigate("/create-new");
  };

  return (
    <div className={appStyles.pageChildContent}>
      <FormProgress currentStep={currentStep} />
      <div className={appStyles.pageContentWrapper}>
        {isSubmitting ? (
          <TailSpin
            visible={true}
            height="100"
            width="100"
            color="#006EFF"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : formSubmitted ? (
          <DetailsContainer>
            <LayoutComponent>
          <SubmissionMessage
              isSuccess={isSuccess}
              message={submissionMessage}
              onNewQuestionnaire={onNewQuestionnaire}
              />
              </LayoutComponent>
            </DetailsContainer>
        ) : (
          <>
            {renderStep()}
            <NavigationButtons
              currentStep={currentStep}
              prevStep={prevStep}
              handleNextClick={handleNextClick}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </div>
    </div>
  );

};
export default QuestionnaireMultiForm;
