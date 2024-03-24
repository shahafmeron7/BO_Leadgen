import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Boxes, LayoutDashboard, Settings } from "lucide-react";

import SidebarChildren from "./SidebarChildren";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from './SidebarHeader'
function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const sidebarItems = [
    {
      id: "New Questionnaire",
      icon: <LayoutDashboard size={20} />,
      text: "New Questionnaire",
      to: "/create-new",
    },
    {
      id: "Questionnaires",
      icon: <Boxes size={20} />,
      text: "Questionnaires",
      to: "/questionnaires",
    },
    {
      id: "Settings",
      icon: <Settings size={20} />,
      text: "Settings",
      to: "/settings",
    },
  ];

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <SidebarHeader expanded={expanded} setExpanded={setExpanded} />
        <SidebarChildren sidebarItems={sidebarItems} expanded={expanded} />
        <SidebarFooter expanded={expanded} />
      </nav>
    </aside>
  );
}

export default Sidebar;


// import React, { createContext, useState } from "react";
// import { NavLink } from "react-router-dom";

// import styles from "./Sidebar.module.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Boxes, LayoutDashboard, Settings } from "lucide-react";


// function Sidebar() {
//   const [expanded, setExpanded] = useState(true);
//   const sidebarItems = [
//     {
//       id: "New Questionnaire",
//       icon: <LayoutDashboard size={20} />,
//       text: "New Questionnaire",
//       to: "/createquestionnaire",
//     },
//     {
//       id: "Questionnaires",
//       icon: <Boxes size={20} />,
//       text: "Questionnaires",
//       to: "/questionnaires",
//     },
//     {
//       id: "Settings",
//       icon: <Settings size={20} />,
//       text: "Settings",
//       to: "/settings",
//     },
//   ];
//   return (
//     <aside className={styles.aside}>
//       <nav className={styles.nav}>
//         {/* header */}
//         <div className={styles.navHeader}>
//           <img
//             className={`${styles.logo} ${
//               expanded ? styles.logoExpanded : styles.notExpanded
//             }`}
//             src="https://img.logoipsum.com/262.svg"
//             alt="logo"
//           />
//           <button
//             className={styles.expandButton}
//             onClick={() => setExpanded((curr) => !curr)}
//           >
//             {expanded ? <ChevronLeft /> : <ChevronRight />}
//           </button>
//         </div>
//         {/* children */}
//           <ul className={styles.navList}>
//             {sidebarItems.map((item) => (
//               <NavLink
//                 key={item.id}
//                 to={item.to}
//                 style={{ textDecoration: "none" }}
//                 className={({ isActive }) =>
//                   `${styles.listItem} ${isActive ? styles.active : ""}`
//                 }
//               >
//                 {item.icon}
//                 <span
//                   className={`${styles.listItemText} ${
//                     expanded ? styles.listItemExpanded : styles.notExpanded
//                   }`}
//                 >
//                   {item.text}
//                 </span>
//                 {!expanded && (
//                   <div className={styles.listItemHidden}>{item.text}</div>
//                 )}
//               </NavLink>
//             ))}
//           </ul>
//         {/* footer */}
//         <div className={styles.navFooter}>
//           <img
//             className={styles.avatar}
//             src="https://ui-avatars.com/api/?name=Shahaf%20Meron&background=c7d2fe&bold=true"
//             alt=""
//           />
//           <div
//             className={`${styles.userInfo} ${
//               expanded ? styles.userInfoExpanded : styles.notExpanded
//             }`}
//           >
//             <div className={styles.userInfoWrapper}>
//               <h4 className={styles.userName}>Shahaf M</h4>
//               <span className={styles.userEmail}>sh@gmail.com</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;
