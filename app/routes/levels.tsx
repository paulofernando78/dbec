import { useNavigate } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";

type Level = {
  level: string;
  name: string;
  subtitle: string;
  description: string;
  background: string;
  textColor: string;
  unitCount?: number;
  href?: string;
};

const levels: Level[] = [
  {
    level: "A1",
    name: "Beginner",
    subtitle: "Start using English",
    description: "Learn to communicate in simple, everyday situations.",
    background: "bg-gradient-to-br from-amber-400 to-orange-500",
    textColor: "text-black",
    href: "/course/a1",
  },
  {
    level: "A2",
    name: "Elementary",
    subtitle: "Build everyday confidence",
    description: "Handle common situations and connect ideas with more detail.",
    background: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-white",
    href: "/course/a2",
  },
  {
    level: "A2–B1",
    name: "Pre-Intermediate",
    subtitle: "Handle real-life conversations",
    description:
      "Share experiences, explain ideas, and communicate with growing confidence.",
    background: "bg-gradient-to-br from-sky-500 to-blue-700",
    textColor: "text-white",
    href: "/course/a2-b1",
  },
  {
    level: "B1",
    name: "Intermediate",
    subtitle: "Communicate with precision",
    description:
      "Explain complex ideas, support opinions, and interact confidently.",
    background: "bg-gradient-to-br from-emerald-500 to-green-700",
    textColor: "text-white",
    href: "/course/b1",
  },
  {
    level: "B2",
    name: "Upper-Intermediate",
    subtitle: "Communicate independently and effectively",
    description:
      "Understand complex ideas, interact fluently, argue clearly, and mediate information and perspectives.",
    background: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
    textColor: "text-white",
    unitCount: 12,
    href: "/course/b2",
  },
  {
    level: "C1",
    name: "Advanced",
    subtitle: "Communication with sophistication",
    description:
      "Use flexible, nuanced English in social, academic, and professional contexts.",
    background: "bg-gradient-to-br from-indigo-500 to-violet-800",
    textColor: "text-white",
    unitCount: 12,
    href: "/course/c1",
  },
];

export default function Levels() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Course" />

      <div className="grid gap-4">
        {levels.map((item) => (
          <article
            key={item.level}
            className="rounded-xl border border-gray-300 bg-white p-2 shadows"
          >
            <div
              className={`relative min-h-60 overflow-hidden rounded-lg p-4 ${item.background} ${item.textColor}`}
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-32 rounded-full bg-white/15"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-20 right-8 size-40 rounded-full bg-white/15"
              />

              <div className="relative z-10 flex min-h-52 flex-col items-start">
                <h2 className="text-3xl font-black md:text-4xl">
                  {item.level} {item.name}
                </h2>
                <p className="text-xl md:text-2xl">{item.subtitle}</p>
                <p className="mb-5 text-base md:text-lg">{item.description}</p>
                <p className="mb-4 mt-auto text-sm font-semibold">
                  {item.unitCount ?? 16} units available
                </p>
                <Button
                  disabled={!item.href}
                  onClick={() => item.href && navigate(item.href)}
                  className="font-bold uppercase text-gray-500"
                >
                  Access
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
