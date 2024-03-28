import React from 'react'
import styles from './InfoField.module.css'
const InfoField = ({ icon: Icon, label, details,children }) => {
  return (
    <div className={styles.infoFieldWrapper}>
    <div><Icon size={16} strokeWidth={1.5} /></div>
    <div className={styles.detailsFieldContainer}>
    {label && <p className={styles.infoLabelText}>{label}</p>}
        {details && <span className={styles.infoLabelDetails}>{details}</span>}
        {children}
    </div>
  </div>  )
}

export default InfoField

