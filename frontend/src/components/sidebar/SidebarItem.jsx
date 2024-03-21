import React, { useContext } from 'react'
import styles from './SidebarItem.module.css'
import { SideBarContext } from './Sidebar';

export const SidebarItem = ({icon, text}) => {
  const {expanded} = useContext(SideBarContext);

  return (
    
    <li
      className={styles.listItem}
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