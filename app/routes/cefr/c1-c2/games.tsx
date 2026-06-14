import { Link } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";

// export const metadata = {
//   title: "Advanced | TED-Ed",
//   description: "Lessons based on YouTube videos.",
// };

const links = [
  {
    href: "/cefr/c1-c2/games/thimbleweed-park",
    label: "Thimbleweed Park",
    description:
      "...",
  },
];

export default function Games() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="Games"
        description="Games Walkthrough"
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
