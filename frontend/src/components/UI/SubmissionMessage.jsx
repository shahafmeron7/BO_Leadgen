import React from "react";
import { NavLink } from "react-router-dom";
import { Check, CircleX } from "lucide-react";

const SubmissionMessage = ({ message, onNewQuestionnaire, isSuccess }) => {
  const iconWrapperStyle = {
    height: "2.5rem",
    width: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    borderRadius: "50%",
    fontWeight: "500",
    backgroundColor: isSuccess ? "green" : "red", // Conditional background color
  };
  return (
    <>
      <div style={iconWrapperStyle}>
        {isSuccess ? <Check size={20} />: <CircleX size={20}/>}
      </div>
      <h4>{message}</h4>
      <div className={""}>
        <NavLink to="/questionnaires" className="button">
          Review Questionnaire
        </NavLink>
        <button onClick={onNewQuestionnaire}>Create New Questionnaire</button>
      </div>
    </>
  );
};

export default SubmissionMessage;
