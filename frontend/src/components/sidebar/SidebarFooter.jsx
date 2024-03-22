import React from "react";
import styles from './Sidebar.module.css'

function SidebarFooter({ expanded }) {
    return (
      <div className={styles.navFooter}>
        <img
          className={styles.avatar}
          src="https://ui-avatars.com/api/?name=Shahaf%20Meron&background=c7d2fe&bold=true"
          alt=""
        />
        <div
          className={`${styles.userInfo} ${
            expanded ? styles.userInfoExpanded : styles.notExpanded
          }`}
        >
          <div className={styles.userInfoWrapper}>
            <h4 className={styles.userName}>Shahaf M</h4>
            <span className={styles.userEmail}>sh@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
export default SidebarFooter;  