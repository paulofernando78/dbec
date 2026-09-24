import { useEffect, useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { Check, Crown, LogIn, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
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

const freeFeatures = [
  "A1 and selected A2 lessons",
  "Essential audio and practice",
  "Daily goal, streak, and XP",
  "Basic learning progress",
];

const premiumFeatures = [
  "Complete learning path from A1 to C1",
  "Personalized review of your mistakes",
  "Vocabulary and pronunciation practice",
  "Real-life simulations and progress reports",
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
    <main className="mx-auto w-[calc(100%_-_32px)] max-w-[900px] py-12 max-[620px]:w-[calc(100%_-_20px)]">
      <section className="mb-24 w-full text-center max-[620px]:mb-16">
        <div className="mb-4 font-luckiest-guy text-gray-400 [-webkit-text-stroke:10px_#000] [paint-order:stroke_fill]">
          <h2 className="text-[3.12rem] font-black uppercase text-edge-cap text-trim-both">
            daily basis
          </h2>
          <h2 className="translate-y-3 text-4xl font-black uppercase">
            english course
          </h2>
        </div>
        <p className="mb-16 text-lg text-slate-500 dark:text-slate-400">
          Short, practical lessons that turn English into a daily habit.
        </p>

        <p
          className="font-luckiest-guy text-[clamp(1.5rem,4vw,2.25rem)] transition-opacity duration-300"
          style={{ opacity: greetingOpacity }}
        >
          {greetingsList[greetingIndex]}
        </p>
      </section>

      <section aria-labelledby="plans-title">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-xl font-black tracking-[0.16em] uppercase">
            Choose your journey
          </h2>
          {/* <h2 id="plans-title" className="text-3xl font-black">
            Learn for free. Go further when you’re ready.
          </h2> */}
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-400">
            Start building your English habit now. Premium features will be
            available later for learners who want the complete experience.
          </p>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-5 max-[700px]:grid-cols-1">
          <article className="flex flex-col rounded-2xl border-2 border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
              <Sparkles aria-hidden="true" />
            </div>
            <p className="text-sm font-black tracking-wider text-amber-500 uppercase">
              Free
            </p>
            <h3 className="mt-1 text-2xl font-black">Build the habit</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Everything you need to start learning a little every day.
            </p>

            <ul className="my-6 grid gap-3 text-left text-sm">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 stroke-green-500 stroke-[3]"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              icon={<LogIn />}
              className="mt-auto w-full!"
              onClick={() => window.dispatchEvent(new Event("dbec:open-login"))}
            >
              Start for free
            </Button>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-950/30">
            <span className="absolute top-4 right-4 rounded-full bg-purple-200 px-3 py-1 text-xs font-black tracking-wide text-purple-800 uppercase dark:bg-purple-800 dark:text-purple-100">
              Coming soon
            </span>
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-purple-200 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              <Crown aria-hidden="true" />
            </div>
            <p className="text-sm font-black tracking-wider text-purple-600 uppercase dark:text-purple-400">
              Premium
            </p>
            <h3 className="mt-1 text-2xl font-black">Complete the journey</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              More guidance, more practice, and the full path to advanced
              English.
            </p>

            <ul className="my-6 grid gap-3 text-left text-sm">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 stroke-purple-500 stroke-[3]"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex h-[30px] items-center justify-center rounded-lg bg-purple-200 px-3 text-sm font-black text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              Premium is coming soon
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
