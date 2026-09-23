import type { LoaderFunctionArgs } from "react-router";
import { Outlet, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { requireLoggedInUser } from "@/utils/auth.server";

import styles from "./layout.module.css";

type LayoutContext = {
  isNavBarOpen: boolean;
  closeNavBar: () => void;
};

export async function loader({ request }: LoaderFunctionArgs) {
  await requireLoggedInUser(request);
  return null;
}

export default function Layout() {
  const { isNavBarOpen, closeNavBar } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.layout}>
      <aside className={`${styles.aside} ${isNavBarOpen ? styles.open : ""}`}>
        <NavBar closeNavBar={closeNavBar} />
      </aside>
      <main className={styles.main} data-scroll-container>
        <Outlet />
        <ScrollToTop />
      </main>
    </div>
  );
}
