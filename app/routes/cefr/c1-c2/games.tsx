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
      "In Thimbleweed Park, a dead body is the least of your problems. Switch between five playable characters to uncover the surreal secrets of this strange town in a modern mystery adventure game from the creators of Monkey Island and Maniac Mansion. The deeper you go, the weirder it gets.",
      date: "30 Mar, 2017"
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
          <li key={item.href}>
            <Link to={item.href} className="font-bold">
              {item.label}
            </Link>
            <p>{item.description}</p>
            <span><em><b>Release Date:</b>{" "}{item.date}</em></span>
          </li>
        ))}
      </ul>
    </>
  );
}
