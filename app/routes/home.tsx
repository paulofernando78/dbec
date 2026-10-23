import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Image } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button/Button";

export function meta({}: Route.MetaArgs) {
  const title = "Daily Basis English Course | Aulas particulares de inglês";
  const description =
    "Aulas particulares de inglês com foco em conversação, compreensão auditiva, leitura e escrita.";
  const url = "https://dbec.com.br/";
  const image = "https://dbec.com.br/media/images/og.png";

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

export default function Home() {
  const navigate = useNavigate();
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
    <div className="flex min-h-full flex-col">
      <div className="mt-12 flex flex-col gap-10">
        <BrandLogo heading className="mx-auto" />
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
        <p className="mx-[min(100px,max(10px,calc((100vw-360px)*0.135)))]">
          <b>O DAILY BASIS ENGLISH COURSE</b> oferece aulas de inglês
          especializadas e focadas nas quatro habilidades linguísticas
          fundamentais: Fala (com ênfase em conversação), Escuta (compreensão
          auditiva), Leitura e Escrita.
        </p>
        <div className="mx-auto">
          <Button onClick={() => navigate("/dashboard")} className="uppercase">
            Start for free
          </Button>
        </div>
        <div className="w-max mx-auto">
          <Contact />
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Footer />
      </div>
    </div>
  );
}
