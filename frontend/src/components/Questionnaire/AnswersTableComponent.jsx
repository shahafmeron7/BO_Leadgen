import React from 'react'
import styles from './AnswersTableComponent.module.css'
const AnswersTableComponent = ({answers}) => {
    return (
        <div className={styles.answersTable}>
          <div className={styles.tableHeadersWrapper}>
            <div className={styles.tableHeaders}>
              <div className={styles.tableCell}>#</div>
              <div className={styles.tableCell}>Description</div>
              <div className={styles.tableCell}>Funnel ID</div>
            </div>
          </div>
          <div className={styles.tableBody}>
            {answers.map((answer, index) => (
              <div key={index} className={styles.answerDetailsItemContainer}>
                <div className={styles.tableCell}>{index + 1}.</div>
                <div className={styles.tableCell}>{answer.text}</div>
                {/* Assuming each answer could have a related funnel ID you would replace the static "Funnel ID" text with {answer.funnelId} or similar */}
                <div className={styles.tableCell}>{answer.funnelId}</div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default AnswersTableComponent