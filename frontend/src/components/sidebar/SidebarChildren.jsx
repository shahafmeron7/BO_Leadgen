import React from "react";
import styles from './Sidebar.module.css';
import { NavLink } from "react-router-dom";
function SidebarChildren({ sidebarItems, expanded }) {
    return (
      <ul className={styles.navList}>
        {sidebarItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              `${styles.listItem} ${isActive ? styles.active : ""}`
            }
          >
            {item.icon}
            <span
              className={`${styles.listItemText} ${
                expanded ? styles.listItemExpanded : styles.notExpanded
              }`}
            >
              {item.text}
            </span>
            {!expanded && (
              <div className={styles.listItemHidden}>{item.text}</div>
            )}
          </NavLink>
        ))}
      </ul>
    );
  }
export default SidebarChildren;  