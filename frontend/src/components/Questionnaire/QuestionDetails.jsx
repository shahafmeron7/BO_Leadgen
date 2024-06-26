import React from "react";
import { useForm } from "../Context/FormContext";
import styles from "./QuestionnaireMultiForm.module.css";
import {CircleHelp} from 'lucide-react'
import InputWrapper from "../UI/InputWrapper";
const QuestionDetails =()=> {
  const { errors,currentQuestion,updateCurrentQuestion } = useForm();

  const inputs = [
    { label: "Description", field: "text", placeholder: "e.g Which best describes your business?", error: errors.text },
    { label: "Identifier ID", field: "identifier", placeholder: "e.g industry_type", error: errors.identifier },
    { label: "Question Type", field: "type", placeholder: "e.g checkbox", error: errors.type },
    { label: "Funnel ID", field: "funnelId", placeholder: "e.g 101", error: errors.funnelId, isNum: true,icon:CircleHelp },
  ];

  return (
    <>
      {inputs.map((input, index) => (
        <div           key={index}
        className={styles.inputContainer}>

        <InputWrapper
          label={input.label}
          value={currentQuestion[input.field]}
          onChange={(value) => updateCurrentQuestion(input.field, value)}
          placeholder={input.placeholder}
          error={errors[input.field]}
          isNum={input.isNum}
          icon={input.icon}
          tooltipType="question"
          />
          </div>
      ))}
    </>
  );
  
}

export default QuestionDetails;
