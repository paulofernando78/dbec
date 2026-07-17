
import { Outlet, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";

import styles from "./layout.module.css";

type LayoutContext = {
  isNavBarOpen: boolean
  closeNavBar: () => void
}

export default function Layout() {
  const { isNavBarOpen, closeNavBar } =
  useOutletContext<LayoutContext>()
  
  return (
    <div className={styles.layout}>
      <aside className={`${styles.aside} ${isNavBarOpen ? styles.open : ""}`}>
        <NavBar closeNavBar={closeNavBar}/>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
