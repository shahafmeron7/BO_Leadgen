import React from "react";
import { useForm } from "../Context/FormContext";
import DetailsContainer from "../Layouts/DetailsContainer";
import LayoutComponent from "../Layouts/LayoutComponent";
import NewQuestionsList from "./NewQuestionsList";
import InfoField from "../UI/InfoField";
import styles from './QuestionnaireMultiForm.module.css'
import { NotebookText,LayoutGrid,Hash} from "lucide-react";
const ReviewQuestionnaireStep = () => {
  const { formData } = useForm();

  return (
    <DetailsContainer>
      <LayoutComponent label="Details">
          <div className={styles.detailsItemsRow}>
            <InfoField
              icon={NotebookText}
              label="Questionnaire Name"
              details={formData.questionnaireName}
            />
            <InfoField
              icon={LayoutGrid}
              label="Portal Name"
              details={formData.portalName}
            />
          </div>
          <div className={styles.detailsItemsRow}>
         <InfoField
              icon={Hash}
              label="Questions"
              details={formData.questions.length}
            />
         </div>
        
      </LayoutComponent>
      <LayoutComponent label="Questions">
        <NewQuestionsList />
      </LayoutComponent>
    </DetailsContainer>
  );
};

export default ReviewQuestionnaireStep;
