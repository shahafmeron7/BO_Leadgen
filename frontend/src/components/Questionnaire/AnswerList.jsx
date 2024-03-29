import React from "react";
import { useForm } from "../Context/FormContext";
import { Trash2, Plus,CircleHelp} from "lucide-react";
import styles from "./QuestionnaireMultiForm.module.css";
import errStyle from '../UI/InputWrapper.module.css'
import InputWrapper from "../UI/InputWrapper";
const AnswerList = () => {
  const {
    currentAnswers,
    updateAnswerField,
    removeAnswerField,
    addAnswerField,
    errors,
  } = useForm();

  return (
    <>
      <div className={styles.answersList}>
        {currentAnswers.map((answer, index) => (
          <div key={index} className={styles.answerFieldWrapper}>
            <div className={styles.answerItem}>
              <InputWrapper
                label={'Answer Text'}
                value={answer.text}
                onChange={(value) => updateAnswerField(index, 'text', value)} // Directly passing value
                placeholder={`Answer ${index + 1}`}
                error={(errors.answers && errors.answers[index] && errors.answers[index].text) || ''}
                />

              <InputWrapper
                icon={CircleHelp}
                label={'Funnel ID'}
                value={answer.funnelId.toString()} // Ensuring the value is a string
                onChange={(value) => updateAnswerField(index, 'funnelId', parseInt(value, 10) || 0)} // Parsing to int, defaulting to 0 if empty
                error={(errors.answers && errors.answers[index] && errors.answers[index].funnelId) || ''}
                placeholder="e.g 301"
                isNum={true}
                tooltipType="answer"
                />

              <div className={styles.trashBtnWrapper}>
                <button
                  className={styles.trashBtn}
                  type="button"
                  onClick={() => removeAnswerField(index)}
                >
                  <Trash2 size={18} color="#e16573" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {errors.answers?.general && (
        <div className={errStyle.errMsg} style={{marginBottom:'1rem'}}>{errors.answers.general}</div>
      )}
      <div className={styles.btnContainer}>
        <button
          className={styles.addAnswerBtn}
          type="button"
          onClick={addAnswerField}
        >
          <Plus size={20} color="#fff"  />
        </button>
      </div>
    </>
  );
};

export default AnswerList;
