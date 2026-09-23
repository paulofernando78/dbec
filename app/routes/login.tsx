import { useEffect, useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
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
  return null;
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
    <main className="mx-auto flex w-[calc(100%_-_32px)] max-w-[760px] items-center justify-center py-12 max-[620px]:w-[calc(100%_-_20px)]">
      <section className="w-full text-center">
        <h2 className="mb-2 text-4xl font-black">Learn a little every day.</h2>
        <p className="mb-20 text-lg">
          Short, practical lessons that turn English into a daily habit.
        </p>

        <p
          className="font-luckiest-guy text-[clamp(1.5rem,4vw,2.25rem)] transition-opacity duration-300"
          style={{ opacity: greetingOpacity }}
        >
          {greetingsList[greetingIndex]}
        </p>
      </section>
    </main>
  );
}
