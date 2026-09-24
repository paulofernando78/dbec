import type { LoaderFunctionArgs } from "react-router";
import { Outlet, useOutletContext } from "react-router";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { requireLoggedInUser } from "@/utils/auth.server";

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
    <div className="grid h-full min-h-0 flex-1 grid-cols-[280px_minmax(0,1fr)] overflow-hidden max-[700px]:grid-cols-1">
      <aside
        className={`z-20 h-full min-h-0 transition-transform duration-500 ease-in-out max-[700px]:absolute max-[700px]:w-[260px] ${
          isNavBarOpen
            ? "max-[700px]:translate-x-0"
            : "max-[700px]:-translate-x-[265px]"
        }`}
      >
        <NavBar closeNavBar={closeNavBar} />
      </aside>
      <main
        className="min-h-0 w-full overflow-y-auto p-2"
        data-scroll-container
      >
        <Outlet />
        <ScrollToTop />
      </main>
    </div>
  );
}
