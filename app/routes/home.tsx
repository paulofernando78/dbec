import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

import { Contact } from "@/components/layout/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daily Basis English Course" },
    { name: "description", content: "Private English Classes" },
  ];
}

const greetingsList = [
  "Hi there!",
  "How are you?",
  "How are you doing?",
  "How are you feeling?",
  "How's it going?",
  "How are things with you?",
  "What's up?",
];

const dbecCSS = {
  fontFamily: "var(--font-anton)",
  color: "#222222",
  WebkitTextStroke: "12px var(--gray-2)",
  paintOrder: "stroke fill" as const,
  filter: "drop-shadow(2px 2px 1px var(--gray-4))",
  textShadow: "1px 1px 1px var(--gray-4)",
};

export default function Home() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setOpacity(0); // fade out

      timeout = setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);
        setOpacity(1); // to fade in
      }, 500);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  });

  return (
    <div className="mt-[50px] flex flex-col gap-[40px]">
      <div className="w-max mx-auto leading-[1.13]">
        <h1 style={dbecCSS} className="text-[4rem]">
          DAILY BAISIS
        </h1>
        <h1 style={dbecCSS} className="text-[3.06rem]">
          ENGLISH COURSE
        </h1>
      </div>
      <ul className="w-max mx-auto">
        <li
          className="font-luckiest-guy text-[1.5rem] m-5 transition-opacity duration-500 ease-in-out"
          style={{ opacity }}
        >
          {greetingsList[greetingIndex]}
        </li>
      </ul>
      <p className="mx-[min(100px,max(0px,calc((100vw-360px)*0.135)))]">
        <b>DAILY BASIS ENGLISH COURSE</b> offers specialized English classes
        focused on the four core language skills: Speaking (with an emphasis on
        conversation), Listening (listening comprehension), Reading, and
        Writing. On this web site, you’ll find a variety of useful learning
        materials. Please use them wisely.
      </p>
      <div className="w-max mx-auto">
        <Contact />
      </div>
    </div>
  );
}
