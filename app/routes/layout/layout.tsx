import { Outlet, useLocation, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import styles from "./layout.module.css";

type LayoutContext = {
  isNavBarOpen: boolean;
  closeNavBar: () => void;
};

export default function Layout() {
  const { isNavBarOpen, closeNavBar } = useOutletContext<LayoutContext>();
  const location = useLocation();
  const isLessonPage = /^\/levels\/[^/]+\/unit\//.test(location.pathname);

  return (
    <div className={styles.layout}>
      <aside className={`${styles.aside} ${isNavBarOpen ? styles.open : ""}`}>
        <NavBar closeNavBar={closeNavBar} />
      </aside>
      <main className={styles.main} data-scroll-container>
        <Outlet />
        {!isLessonPage && <ScrollToTop />}
      </main>
    </div>
  );
}
