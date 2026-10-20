import { Outlet, useLocation, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

type LayoutContext = {
  isNavBarOpen: boolean;
  closeNavBar: () => void;
};

export default function Layout() {
  const { isNavBarOpen, closeNavBar } = useOutletContext<LayoutContext>();
  const location = useLocation();
  const isLessonPage =
    /^\/course\/[^/]+\/unit\//.test(location.pathname) ||
    /^\/travel\/unit\//.test(location.pathname);

  return (
    <div className="flex-1 grid h-full min-h-0 grid-cols-[270px_minmax(0,1fr)] overflow-hidden max-[700px]:grid-cols-1">
      <aside
        className={`z-20 h-full min-h-0 transition-transform duration-500 ease-in-out max-[700px]:absolute max-[700px]:w-65 max-[700px]:-translate-x-70 ${isNavBarOpen ? "max-[700px]:translate-x-0" : ""}`}
      >
        <NavBar closeNavBar={closeNavBar} />
      </aside>
      <main
        className="min-h-0 w-full overflow-x-hidden overflow-y-auto p-4"
        data-scroll-container
      >
        <Outlet />
        {!isLessonPage && <ScrollToTop />}
      </main>
    </div>
  );
}
