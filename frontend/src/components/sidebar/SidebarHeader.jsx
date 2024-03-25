
import React from "react";
import styles from './Sidebar.module.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

function SidebarHeader({ expanded, setExpanded }) {
    return (
      <div className={styles.navHeader}>
        <img
          className={`${styles.logo} ${
            expanded ? styles.logoExpanded : styles.notExpanded
          }`}
          src="https://img.logoipsum.com/296.svg"
          alt="logo"
        />
        <button
          className={styles.expandButton}
          onClick={() => setExpanded((curr) => !curr)}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
    );
  }
  
  export default SidebarHeader;