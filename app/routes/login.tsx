import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";
import {
  createLoginSession,
  getLoggedInUser,
  safeRedirect,
  verifyLogin,
} from "@/utils/auth.server";

const greetingsList = [
  "Hi there!",
  "How are you?",
  "How are you doing?",
  "How are you feeling?",
  "How's it going?",
  "How are things with you?",
  "What's up?",
];

export async function loader({ request }: LoaderFunctionArgs) {
  if (await getLoggedInUser(request)) throw redirect("/welcome");
  const url = new URL(request.url);
  return { redirectTo: safeRedirect(url.searchParams.get("redirectTo")) };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const redirectTo = safeRedirect(String(formData.get("redirectTo") ?? ""));

  if (!verifyLogin(email, password)) {
    return { error: "Email or password is incorrect." };
  }

  return createLoginSession(request, email, redirectTo);
}

export default function Login() {
  const { redirectTo } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingOpacity, setGreetingOpacity] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let changeGreeting: ReturnType<typeof setTimeout>;
    const interval = window.setInterval(() => {
      setGreetingOpacity(0);
      changeGreeting = setTimeout(() => {
        setGreetingIndex((current) =>
          current === greetingsList.length - 1 ? 0 : current + 1,
        );
        setGreetingOpacity(1);
      }, 300);
    }, 2500);

    return () => {
      window.clearInterval(interval);
      clearTimeout(changeGreeting);
    };
  }, []);

  return (
    <main className="mx-auto grid w-[calc(100%_-_32px)] max-w-[980px] grid-cols-[1.35fr_0.8fr] items-center gap-8 py-12 max-[760px]:grid-cols-1 max-[620px]:w-[calc(100%_-_20px)]">
      <section className="self-start">
        <header className="mb-8">
          <h2 className="mb-2 text-4xl font-black">
            DAILY BASIS ENGLISH COURSE
          </h2>
          <p className="max-w-[620px] text-[1.05rem] text-slate-500 dark:text-slate-300">
            Short, practical lessons that turn English into a daily habit.
          </p>
        </header>

        <div className="text-center dark:border-slate-600">
          <p
            className="m-0 font-luckiest-guy text-[clamp(1.5rem,4vw,2.25rem)] text-gray-800 transition-opacity duration-300 dark:text-gray-200"
            style={{ opacity: greetingOpacity }}
          >
            {greetingsList[greetingIndex]}
          </p>
        </div>
      </section>

      <section className="rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 dark:border-slate-600 dark:bg-slate-800 dark:shadow-none">
        <h2 className="mb-2 text-2xl font-black text-slate-800 dark:text-slate-100">
          Welcome
        </h2>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-300">
          Log in to continue your English journey.
        </p>

        <Form className="grid gap-4" method="post">
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <label className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-200">
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 font-normal transition outline-none focus:border-amber-400 dark:border-slate-600 dark:bg-slate-900"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-200">
            Password
            <input
              required
              type="password"
              name="password"
              autoComplete="current-password"
              className="rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 font-normal transition outline-none focus:border-amber-400 dark:border-slate-600 dark:bg-slate-900"
              placeholder="Enter your password"
            />
          </label>
          {actionData?.error && (
            <p
              className="m-0 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-300"
              role="alert"
            >
              {actionData.error}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-xl border-0 bg-amber-400 px-5 py-3 font-black text-amber-900 shadow-[0_4px_0_#d97706] transition active:translate-y-1 active:shadow-none disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </Form>
      </section>
    </main>
  );
}
