import { Image } from "@/components/ui/Image";
import { LineBreak } from "@/components/content/LineBreak";
import { Section } from "@/components/content/Section";

const formation = [
  {
    institution:
      "ACBEU - Associação Cultural Brasil Estados Unidos, Salvador – BA",
    period: "Março 2017 – Outubro 2017",
    program: "Teacher Training Course TTC",
  },
  {
    institution: "Los Angeles Music Academy (LAMA), Pasadena – CA",
    period: "Setembro 2000 – Março 2001",
    program: "Majoring in Drums",
  },
  {
    institution: "Intrax English Institute, San Diego – CA",
    period: "Março 2000 – Agosto 2000",
    program: "Intensive Course",
  },
  {
    institution: "UEC, Universal English Course, Salvador – BA",
    period: "Dezembro 1998.",
    program: "Grammar Research and Oral (GROW)",
  },
  {
    institution: "UEC, Universal English Course, Salvador – BA",
    period: "Janeiro 1996 – Fevereiro 1998",
    program: "Basic Course",
  },
];

const experience = [
  {
    institution: "Seven Idiomas",
    period: "Julho 2019 - Janneiro 2024",
    program:
      "Aulas em escola de inglês para turmas de todas as idades e níveis.",
  },
  {
    institution: "DAILY BASIS ENGLISH COURSE",
    period: "Janeiro 2008 – até o momento",
    program:
      "Aulas em empresas de grande porte, estabelecimentos comerciais e residências, ministradas presencialmente ou por videoconferência.",
  },
  {
    institution:
      "MANHATTAN VILLAGE (Market Leader Business English), São Paulo – SP",
    period: "Novembro, 2006 – Agosto, 2007",
    program:
      "Aulas particulares presenciais em empresas de diversos segmentos.",
  },
  {
    institution: "AIMHIGH Idiomas (Callan Method), São Paulo – SP",
    period: "Abril 2005 – Dezembro 2008",
    program:
      "Aulas particulares presenciais em empresas de diversos segmentos e em domicílios.",
  },
  {
    institution: "Osborn English School, São Paulo – SP",
    period: "Março 2005 – Abril 2005",
    program:
      "Aulas em escola de ingles direcionadas para o publico adolescente.",
  },
  {
    institution: "House Teacher, Salvador – BA",
    period: "Fevereiro 2002 – Setembro 2002",
    program:
      "Aulas em escola de ingles para turmas de todas as idades e níveis.",
  },
];

export default function About() {
  return (
    <div className="mx-[min(200px,max(0px,calc((100vw-380px)*0.135)))]">
      <div className="flex flex-col items-center gap-[30px]">
        <Image
          src="/assets/img/about/me.png"
          alt="My picture"
          width={150}
          height={150}
          className="rounded-full border-[5px] border-[var(--slate-3)]"
        />
        <p className="text-justify mb-4">
          Fundador do <b>Daily Basis English Course</b>, é apaixonado pelos
          estudos da língua inglesa desde 96. Começou a lecionar aulas de inglês
          particulares em meados de 2004. Já morou nos EUA - Califórnia. Estuda
          web development e programação desde 2022 com o objetivo de criar a sua
          própria plataforma de ensino.
        </p>
      </div>
      <LineBreak />
      <Section id="background" label="FORMAÇÃO" heading={2}>
        <ul>
          {formation.map((item, index) => (
            <>
              <li key={index} className="mb-2">
                <strong>{item.institution}</strong>
                <span className="block">{item.period}</span>
                <span className="block">{item.program}</span>
              </li>
            </>
          ))}
        </ul>
      </Section>
      <Section id="background" label="EXPERIÊNCIA" heading={2}>
        <ul>
          {experience.map((item, index) => (
            <>
              <li key={index}>
                <strong>{item.institution}</strong>
                <span className="block">{item.period}</span>
                <span className="block">{item.program}</span>
              </li>
            </>
          ))}
        </ul>
      </Section>
    </div>
  );
}
