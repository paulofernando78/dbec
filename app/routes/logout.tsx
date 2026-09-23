import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { destroyLoginSession } from "@/utils/auth.server";

export async function loader({}: LoaderFunctionArgs) {
  throw redirect("/");
}

export async function action({ request }: ActionFunctionArgs) {
  return destroyLoginSession(request);
}

export default function Logout() {
  return null;
}
