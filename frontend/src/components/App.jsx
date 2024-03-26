import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateQuestionnairePage from "./Pages/CreateQuestionnairePage";
import QuestionnairePage from "./Pages/QuestionnairePage";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SettingsPage";
import SideNavbar from "./sidebar/Sidebar";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <SideNavbar className={styles.sidebar} />
      <div className={styles.content}>
        <div className={styles.pageChildContent}>
          <div className={styles.pageContentWrapper}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-new" element={<CreateQuestionnairePage />} />
              <Route path="/questionnaires" element={<QuestionnairePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
