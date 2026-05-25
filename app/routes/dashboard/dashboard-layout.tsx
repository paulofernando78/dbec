import { Outlet } from "react-router";
import { NavBar } from "@/components/layout/NavBar";

import styles from "./dashboard-layout.module.css";

export default function DashBoardLayout() {
  return (
    <div className={styles.dashboardLayout}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
