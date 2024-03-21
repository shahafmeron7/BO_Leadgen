import React, { useContext } from 'react'
import styles from './SidebarItem.module.css'
import { SideBarContext } from './Sidebar';

export const SidebarItem = ({icon, text, active, onClick, alert}) => {
  const {expanded} = useContext(SideBarContext);

  return (
    <li
      className={`${styles.listItem} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {icon}
      <span className={`${styles.listItemText} ${expanded ? styles.expanded : styles.notExpanded}`}>{text}</span>
      {!expanded && 
      (
        <div className={styles.listItemHidden}>
          {text}
        </div>
      )
      }
    </li>
  );
};