import { Outlet, useLocation, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StudentNotesPanel } from "@/components/content/StudentNotesPanel";

type LayoutContext = {
  isNavBarOpen: boolean;
  closeNavBar: () => void;
  isNotesOpen: boolean;
  toggleNotes: () => void;
};

export default function Layout() {
  const { isNavBarOpen, closeNavBar, isNotesOpen, toggleNotes } =
    useOutletContext<LayoutContext>();
  const location = useLocation();
  const hasNotes =
    /^\/course\/[^/]+\/unit\//.test(location.pathname) ||
    /^\/travel\/unit\//.test(location.pathname) ||
    /^\/authentic-content\/[^/]+\/[^/]+/.test(location.pathname);

  return (
    <div className="relative grid h-full min-h-0 flex-1 grid-cols-[max-content_minmax(0,1fr)] gap-4 overflow-hidden max-[700px]:grid-cols-1!">
      <aside
        className={`z-20 h-full min-h-0 transition-transform duration-500 ease-in-out max-[700px]:absolute max-[700px]:w-65 max-[700px]:-translate-x-70 ${isNavBarOpen ? "max-[700px]:translate-x-0" : ""}`}
      >
        <NavBar
          closeNavBar={closeNavBar}
          isNotesOpen={isNotesOpen}
          toggleNotes={toggleNotes}
        />
      </aside>
      <main className="relative min-h-0 w-full">
        <div
          className="h-full min-h-0 overflow-x-hidden overflow-y-auto pb-1.25"
          data-scroll-container
        >
          {hasNotes && (
            <div
              id="student-notes-panel-host"
              className="pointer-events-none sticky top-0 z-40 mx-auto h-0 w-[calc(100%_-_0.1rem)] max-w-4xl max-[700px]:mr-auto max-[700px]:ml-[0.05rem] max-[700px]:w-[calc(100%_-_4.8rem)]"
            />
          )}
          <Outlet />
        </div>
        <ScrollToTop />
        {hasNotes && (
          <StudentNotesPanel
            isOpen={isNotesOpen}
            onClose={toggleNotes}
          />
        )}
      </main>
    </div>
  );
}
