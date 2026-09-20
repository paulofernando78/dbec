import type { Route } from "./+types/home";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
  const homeRef = useRef<HTMLDivElement>(null);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) return;

    const animation = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.65, ease: "power3.out" },
      });

      timeline
        .from(".home-title-top", { x: -55, autoAlpha: 0 })
        .from(".home-title-bottom", { x: 55, autoAlpha: 0 }, "-=0.42")
        .from(".home-greeting", { y: 22, autoAlpha: 0 }, "-=0.2")
        .from(".home-description", { y: 18, autoAlpha: 0 }, "-=0.38")
        .from(
          ".home-contact li",
          {
            y: 16,
            scale: 0.7,
            autoAlpha: 0,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.28",
        );
    }, homeRef);

    return () => animation.revert();
  }, []);

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
  }, []);

  return (
    <div ref={homeRef} className="mt-12 flex flex-col gap-[40px]">
      <div className="mx-auto w-max leading-[1.13]">
        <h1 style={dbecCSS} className="home-title-top text-[4rem]">
          DAILY BAISIS
        </h1>
        <h1 style={dbecCSS} className="home-title-bottom text-[3.06rem]">
          ENGLISH COURSE
        </h1>
      </div>
      <ul className="mx-auto w-max">
        <li
          className="home-greeting mt-3 font-luckiest-guy text-[1.5rem] transition-opacity duration-500 ease-in-out"
          style={{ opacity }}
        >
          {greetingsList[greetingIndex]}
        </li>
      </ul>
      {/* <p className="mx-[min(100px,max(0px,calc((100vw-360px)*0.135)))]">
        <b>DAILY BASIS ENGLISH COURSE</b> offers specialized English classes
        focused on the four core language skills: Speaking (with an emphasis on
        conversation), Listening (listening comprehension), Reading, and
        Writing. On this web site, you’ll find a variety of useful learning
        materials. Please use them wisely.
      </p> */}
      <p className="home-description mx-[min(100px,max(0px,calc((100vw-360px)*0.135)))]">
        <b>O DAILY BASIS ENGLISH COURSE</b> oferece aulas de inglês
        especializadas e focadas nas quatro habilidades linguísticas
        fundamentais: Fala (com ênfase em conversação), Escuta (compreensão
        auditiva), Leitura e Escrita. Utilizamos o{" "}
        <span className="underline">Google Classroom</span> como nossa
        plataforma de aprendizagem.
      </p>
      <div className="home-contact mx-auto w-max">
        <Contact />
      </div>
    </div>
  );
}
