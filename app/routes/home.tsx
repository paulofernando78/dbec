import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

import { Contact } from "@/components/layout/Contact";
import { Image } from "@/components/ui/Image";

export function meta({}: Route.MetaArgs) {
  const title = "Daily Basis English Course | Aulas particulares de inglês";
  const description =
    "Aulas particulares de inglês com foco em conversação, compreensão auditiva, leitura e escrita.";
  const url = "https://dbec.com.br/";
  const image = "https://dbec.com.br/assets/img/og.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Daily Basis English Course" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
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
  fontFamily: "var(--font-luckiest-guy)",
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
    <div className="mt-12 flex flex-col gap-10">
      <div className="w-max mx-auto">
        <div style={dbecCSS} className=" leading-14">
          <h1 className="text-[3rem]">
            DAILY BASIS
            <span className="block text-[2.26rem]">ENGLISH COURSE</span>
          </h1>
        </div>
        <span className="block text-3xl font-edu text-right">private</span>
      </div>
      <ul className="w-max mx-auto">
        <li
          className="font-walter text-2xl mt-3 transition-opacity duration-500 ease-in-out"
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
      <p className="mx-[min(100px,max(0px,calc((100vw-360px)*0.135)))]">
        <b>O DAILY BASIS ENGLISH COURSE</b> oferece aulas de inglês
        especializadas e focadas nas quatro habilidades linguísticas
        fundamentais: Fala (com ênfase em conversação), Escuta (compreensão
        auditiva), Leitura e Escrita.
      </p>
      <div className="w-max mx-auto">
        <Contact />
      </div>
    </div>
  );
}
