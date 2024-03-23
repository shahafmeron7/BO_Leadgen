import React from "react";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";
import { useForm } from "../Context/FormContext";
import { Trash2 } from "lucide-react";
import styles from "./CreateQuestionsStep.module.css";
import mainStyle from "./QuestionnaireMultiForm.module.css";
const AnswerList = () => {
  const {
    currentAnswers,
    updateAnswerText,
    removeAnswerField,
    addAnswerField,
    errors,
  } = useForm();

  return (
    <>
      <div className={styles.answersList}>
        {currentAnswers.map((answer, index) => (
          <div key={index}>
            <div  className={styles.answerItem}>
              <TextInput
                value={answer}
                onChange={(e) => updateAnswerText(e.target.value, index)}
                placeholder={`Answer ${index + 1}`}
              />
              {/* Display error for individual answer if exists */}

              <Button type="button" onClick={() => removeAnswerField(index)}>
                <Trash2 size={20} />
              </Button>
            </div>
            {errors.answers && errors.answers[index] && (
              <div className={mainStyle.errMsg}>{errors.answers[index]}</div>
            )}
          </div>
        ))}
      </div>
      {errors.answers?.general && (
        <div className={mainStyle.errMsg}>{errors.answers.general}</div>
      )}
      <Button type="button" onClick={addAnswerField}>
        Add Answer
      </Button>
    </>
  );
};

export default AnswerList;
