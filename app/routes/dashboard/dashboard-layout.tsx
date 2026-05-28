
import { Outlet, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";

import styles from "./dashboard-layout.module.css";

type DashboardContext = {
  isNavBarOpen: boolean
  closeNavBar: () => void
}

export default function DashBoardLayout() {
  const { isNavBarOpen, closeNavBar } =
  useOutletContext<DashboardContext>()
  
  return (
    <div className={styles.dashboardLayout}>
      <aside className={`${styles.sidebar} ${isNavBarOpen ? styles.open : ""}`}>
        <NavBar closeNavBar={closeNavBar}/>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
