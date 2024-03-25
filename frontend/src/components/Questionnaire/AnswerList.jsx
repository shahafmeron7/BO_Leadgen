import React from "react";
import TextInput from "../UI/TextInput";
import { useForm } from "../Context/FormContext";
import { Trash2,Plus } from "lucide-react";
import styles from "./QuestionnaireMultiForm.module.css";
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
          <div key={index} className={styles.fieldItem}>
            <div  className={styles.answerItem}>
              <TextInput
                value={answer}
                onChange={(e) => updateAnswerText(e.target.value, index)}
                placeholder={`Answer ${index + 1}`}
              />
              {/* Display error for individual answer if exists */}

              <button className={styles.trashBtn} type="button" onClick={() => removeAnswerField(index)}>
                <Trash2 size={18} color="#e16573" />
              </button>
            </div>
            {errors.answers && errors.answers[index] && (
              <div className={styles.errMsg}>{errors.answers[index]}</div>
            )}
          </div>
        ))}
      </div>
      {errors.answers?.general && (
        <div className={styles.errMsg}>{errors.answers.general}</div>
      )}
      <div className={styles.btnContainer}>
      <button className={styles.addAnswerBtn} type="button" onClick={addAnswerField}>
        <Plus size={20} color="rgb(0, 110, 255)" strokeWidth={1.75} />
      </button>

      </div>
    </>
  );
};

export default AnswerList;
