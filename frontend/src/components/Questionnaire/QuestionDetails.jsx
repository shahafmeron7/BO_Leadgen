import React from "react";
import { useForm } from "../Context/FormContext";
import styles from "./QuestionnaireMultiForm.module.css";
import InputWrapper from "../UI/InputWrapper";
const QuestionDetails =()=> {
  const { errors,currentQuestion,updateCurrentQuestion } = useForm();

  const inputs = [
    { label: "Description", field: "text", placeholder: "e.g Which best describes your business?", error: errors.text },
    { label: "Identifier ID", field: "identifier", placeholder: "e.g industry_type", error: errors.identifier },
    { label: "Question Type", field: "type", placeholder: "e.g checkbox", error: errors.type },
    { label: "Funnel ID", field: "funnelId", placeholder: "e.g 101", error: errors.funnelId },
  ];

  return (
    <>
      {inputs.map((input, index) => (
        <div className={styles.inputContainer}>

        <InputWrapper
          key={index}
          label={input.label}
          value={currentQuestion[input.field]}
          onChange={e => updateCurrentQuestion(input.field, e.target.value)}
          placeholder={input.placeholder}
          error={errors[input.field]}
          />
          </div>
      ))}
    </>
  );
  // return (
  //   <>
  //     <div className={styles.inputWrapper}>
  //       <span>Description</span>
  //       <TextInput
  //         value={currentQuestion.text}
  //         onChange={handleTextChange}
  //         placeholder="e.g Which best describes your business?"
  //       />
  //       {errors.text && <div className={styles.errMsg}>{errors.text}</div>}
  //     </div>
  //     <div className={styles.inputWrapper}>
  //       <span>Identifier ID</span>

  //       <TextInput
  //         value={currentQuestion.identifier}
  //         onChange={handleIdentifierChange}
  //         placeholder="e.g industry_type"
  //       />
  //       {errors.identifier && (
  //         <div className={styles.errMsg}>{errors.identifier}</div>
  //       )}
  //     </div>
  //     <div className={styles.inputWrapper}>
  //       <span>Question Type</span>

  //       <TextInput
  //         value={currentQuestion.type}
  //         onChange={handleTypeChange}
  //         placeholder="e.g checkbox"
  //       />
  //       {errors.type && <div className={styles.errMsg}>{errors.type}</div>}
  //     </div>
  //     <div className={styles.inputWrapper}>
  //       <span>Funnel ID</span>

  //       <TextInput
  //         value={currentQuestion.funnel_id}
  //         onChange={handleFunnelIdChange}
  //         placeholder="e.g 101"
  //       />
  //       {errors.type && <div className={styles.errMsg}>{errors.type}</div>}
  //     </div>
  //     {/* Implement TextInput for answers if needed */}
  //   </>
  // );
}

export default QuestionDetails;
