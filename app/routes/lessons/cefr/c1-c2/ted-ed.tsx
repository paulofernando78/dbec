import { Link } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";

// export const metadata = {
//   title: "Advanced | TED-Ed",
//   description: "Lessons based on YouTube videos.",
// };

const links = [
  {
    href: "/cefr/c1-c2/ted-ed/what-causes-constipation",
    label: "What causes constipation?",
    description:
      "Learn what causes constipation and how the digestive system moves food through the body.",
  },
  {
    href: "/cefr/c1-c2/ted-ed/how-your-memory-works",
    label: "How Your Memory Works",
    description:
      "Learn how memories are formed, stored, and retrieved, and why forgetting can be useful.",
  },
  {
    href: "/cefr/c1-c2/ted-ed/when-will-the-next-ice-age-happen",
    label: "When will the next ice age happen? ",
    description:
      "Explore how Earth's orbit, climate cycles, and human activity may influence the next ice age.",
  },
  {
    href: "/cefr/c1-c2/ted-ed/the-ancient-origins-of-beer",
    label: "The ancient origins of beer",
    description:
      "Discover the ancient history of beer and how one of the world's oldest drinks began.",
  },
];

export default function AdvancedYoutube() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="TED-Ed"
        description="Lessons based on TED-Ed videos."
      />

      <ul className="space-y-4">
        {links.map((item) => (
          <li key={item.href} >
            <Link to={item.href} className="font-bold">{item.label}</Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
