import React, { useState } from "react";
import { useForm } from "../Context/FormContext";
import { useNavigate, NavLink } from "react-router-dom";

import QuestionnaireDetailsStep from "./QuestionnaireDetailsStep";
import CreateQuestionsStep from "./CreateQuestionsStep";
import ReviewQuestionnaireStep from "./ReviewQuestionnaireStep";
import FormProgress from "./FormProgress";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { TailSpin } from "react-loader-spinner";
import styles from "./QuestionnaireMultiForm.module.css";
import axios from "axios";
const QuestionnaireMultiForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        answers: question.answers,
        identifier_id: question.identifier,
      })),
    };

    console.log("Form submitted with data:", questionnaireData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/questionnaires`,
        questionnaireData
      );
      setTimeout(() => {
        setIsSubmitting(false); // Stop submitting
        setSubmissionMessage("Successfully submitted questionnaire.");
        setFormSubmitted(true);
        resetFormData(); // Reset form data after successful submission
        // Optionally, clear the form here if you have a function to reset formData
      }, 500); // Adjust the delay as needed
    } catch (error) {
      console.error(
        "Failed to submit questionnaire:",
        error.response ? error.response.data : error.message
      );
      setTimeout(() => {
        setIsSubmitting(false); // Stop submitting
        setSubmissionMessage(
          "Failed to submit questionnaire. Please try again."
        );
      }, 500); // Adjust the delay as needed
      // Handle error scenario, such as showing an error message to the user
    }
  };

  function renderStep() {
    let stepTitle = ""; // Initialize step title
    let stepComponent = null; // Initialize step component

    switch (currentStep) {
      case 1:
        stepTitle = "Questionnaire Details";
        stepComponent = <QuestionnaireDetailsStep />;
        break;
      case 2:
        stepTitle = "Create Questions";
        stepComponent = <CreateQuestionsStep />;
        break;
      case 3:
        stepTitle = "Review & Submit";
        stepComponent = <ReviewQuestionnaireStep />;
        break;
      default:
        stepComponent = <div>Unknown step</div>;
    }

    return (
      <>
        {stepTitle && <h4>{stepTitle}</h4>}
        {stepComponent}
      </>
    );
  }
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
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
          <>
            <h4>{submissionMessage}</h4>
            <div className={styles.buttonsContainer}>
              <NavLink to="/questionnaires" className="button">
                Review Questionnaire
              </NavLink>
              <button
                onClick={() => {
                  setFormSubmitted(false); // Reset the form submission state
                  setCurrentStep(1); // Reset to the first step
                  // Reset the form state to initial values here if needed
                  navigate("/create-new"); // Navigate to the form start page for a new questionnaire
                }}
              >
                Create New Questionnaire
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.formTopContainer}>
              <FormProgress currentStep={currentStep} />
              {/* <div className={styles.formContent}> */}
              {renderStep()}
              {/* </div> */}
            </div>
            <div className={styles.buttonsContainer}>
              {currentStep > 1 && (
                <button className={styles.prevBtn} onClick={prevStep}>
                  <ChevronLeft size={20} />
                </button>
              )}
              {currentStep < 3 ? (
                <button className={styles.btn} onClick={handleNextClick}>
                  Next <ArrowRight size={20} />
                </button>
              ) : (
                <button className={styles.btn} onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
//   return (
//     <div className={styles.formContainer}>
//       {isSubmitting ? (
//         <TailSpin
//           visible={true}
//           height="100"
//           width="100"
//           color="#006EFF"
//           ariaLabel="tail-spin-loading"
//           radius="1"
//           wrapperStyle={{}}
//           wrapperClass=""
//         /> // Replace this with your loading spinner or indicator
//       ) : submissionMessage ? (
//         <div
//           className={
//             submissionMessage.startsWith("Successfully")
//               ? "successMessage"
//               : "errorMessage"
//           }
//         >
//           {submissionMessage}
//         </div>
//       ) : (
//         <>
//           <FormProgress currentStep={currentStep} />
//           {renderStep()}
//           <div className={styles.buttonsContainer}>
//             {currentStep > 1 && (
//               <button className={styles.prevBtn} onClick={prevStep}>
//                 <ChevronLeft size={20} />
//               </button>
//             )}
//             {currentStep < 3 ? (
//               <button className={styles.btn} onClick={handleNextClick}>
//                 Next <ArrowRight size={20} />
//               </button>
//             ) : (
//               <button className={styles.btn} onClick={handleSubmit}>
//                 Submit
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

export default QuestionnaireMultiForm;
