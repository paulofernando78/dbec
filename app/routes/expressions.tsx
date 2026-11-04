import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Navigate, useNavigate, useParams } from "react-router";

const businessExpressionLinks = [
  ["Lesson 1", "Talking About a New Project", "speak-business-english-like-an-american-lesson-1"],
  ["Lesson 2", "Talking About Financial Issues", "speak-business-english-like-an-american-lesson-2"],
  ["Lesson 3", "Discussing a New Ad Campaign", "speak-business-english-like-an-american-lesson-3"],
  ["Lesson 4", "Talking About Manufacturing", "speak-business-english-like-an-american-lesson-4"],
  ["Lesson 5", "Talking About Company Strategy", "speak-business-english-like-an-american-lesson-5"],
  ["Lesson 6", "Discussing Good Results", "speak-business-english-like-an-american-lesson-6"],
  ["Lesson 7", "Discussing Bad Results", "speak-business-english-like-an-american-lesson-7"],
  ["Lesson 8", "Discussing a Difficult Decision", "speak-business-english-like-an-american-lesson-8"],
  ["Lesson 9", "Dealing With a Dissatisfied Customer", "speak-business-english-like-an-american-lesson-9"],
  ["Lesson 10", "Discussing a Difficult Request", "speak-business-english-like-an-american-lesson-10"],
  ["Lesson 11", "Motivating Co-Workers", "speak-business-english-like-an-american-lesson-11"],
  ["Lesson 12", "Running a Meeting", "speak-business-english-like-an-american-lesson-12"],
  ["Lesson 13", "Discussing a Mistake", "speak-business-english-like-an-american-lesson-13"],
  ["Lesson 14", "Taking Credit for Good Results", "speak-business-english-like-an-american-lesson-14"],
  ["Lesson 15", "Shifting Blame", "speak-business-english-like-an-american-lesson-15"],
  ["Lesson 16", "Politely Disagreeing With Someone", "speak-business-english-like-an-american-lesson-16"],
  ["Lesson 17", "Telling Somebody Off", "speak-business-english-like-an-american-lesson-17"],
  ["Lesson 18", "Discussing Office Scandals", "speak-business-english-like-an-american-lesson-18"],
  ["Lesson 19", "Complaining About a Co-Worker", "speak-business-english-like-an-american-lesson-19"],
  ["Lesson 20", "Talking About a Brown-Noser", "speak-business-english-like-an-american-lesson-20"],
  ["Lesson 21", "Explaining That You're Feeling Overworked", "speak-business-english-like-an-american-lesson-21"],
  ["Lesson 22", "Calling In Sick", "speak-business-english-like-an-american-lesson-22"],
  ["Lesson 23", "Requesting a Bank Loan", "speak-business-english-like-an-american-lesson-23"],
  ["Lesson 24", "Negotiating a Purchase", "speak-business-english-like-an-american-lesson-24"],
  ["Lesson 25", "Conducting a Performance Review", "speak-business-english-like-an-american-lesson-25"],
  ["Lesson 26", "Promoting an Employee", "speak-business-english-like-an-american-lesson-26"],
  ["Lesson 27", "Firing Somebody", "speak-business-english-like-an-american-lesson-27"],
  ["Lesson 28", "Job Interview 1", "speak-business-english-like-an-american-lesson-28"],
  ["Lesson 29", "Job Interview 2", "speak-business-english-like-an-american-lesson-29"],
  ["Lesson 30", "Negotiating a Salary Offer", "speak-business-english-like-an-american-lesson-30"],
] as const;

const businessExpressionGroups = [
  { title: "Lessons 1–5", links: businessExpressionLinks.slice(0, 5) },
  { title: "Lessons 6–10", links: businessExpressionLinks.slice(5, 10) },
  { title: "Lessons 11–15", links: businessExpressionLinks.slice(10, 15) },
  { title: "Lessons 16–20", links: businessExpressionLinks.slice(15, 20) },
  { title: "Lessons 21–25", links: businessExpressionLinks.slice(20, 25) },
  { title: "Lessons 26–30", links: businessExpressionLinks.slice(25, 30) },
] as const;

const expressionThemes = [
  {
    id: "everyday-conversation",
    title: "Everyday conversation",
    expressions: [
      "Better late than never",
      "So far, so good",
      "Speak of the devil",
    ],
  },
  {
    id: "opinions-and-agreement",
    title: "Opinions and agreement",
    expressions: [
      "If the shoe fits, wear it",
      "You can say that again",
      "To each their own",
    ],
  },
  {
    id: "problems-and-decisions",
    title: "Problems and decisions",
    expressions: [
      "Bite the bullet",
      "Back to square one",
      "It's not the end of the world",
    ],
  },
  {
    id: "work-and-progress",
    title: "Work and progress",
    expressions: [
      "Get the ball rolling",
      "Learn the ropes",
      "Go the extra mile",
    ],
  },
  {
    id: "feelings-and-relationships",
    title: "Feelings and relationships",
    expressions: [
      "Break the ice",
      "On the same wavelength",
      "Give someone the benefit of the doubt",
    ],
  },
] as const;

export default function Expressions() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (category && category !== "business") {
    return <Navigate to="/expressions" replace />;
  }

  if (category === "business") {
    const createBusinessItem = (
      [eyebrow, title, slug]: (typeof businessExpressionLinks)[number],
    ) => {
      const internalLesson = slug.match(/lesson-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30)$/)?.[1];

      return {
        id: slug,
        eyebrow,
        title,
        description:
          internalLesson === "1"
            ? "Carl, Greg, and Anne work for WaterSonic Corporation. Recently, the company has come up with an idea for a new electric toothbrush."
            : internalLesson === "2"
              ? "Juan and Diane work in the finance department of Delicious Delights, a company that makes snack foods. Here, they're discussing the financial projections for a new product line."
              : internalLesson === "3"
                ? "Ted works for an advertising agency. He's presenting to Sam and Lisa, who work for Pacific Beer Company."
                : internalLesson === "4"
                  ? "Mike and Dan work for Swift Shoes, a manufacturer of sneakers. Mike is in charge of manufacturing. Dan is trying to push Mike to get some new shoes ready quickly."
                  : internalLesson === "5"
                    ? "Andy and Laura work for Saltonica, a maker of cell phones. Sales have been slow lately, so Andy is recommending that the company adopt a new strategy."
                    : internalLesson === "6"
                      ? "Peter, Linda, and Todd work as managers at Capital City Bank, a retail bank. Linda's creative idea for attracting new customers to the bank has generated lots of new business."
                      : internalLesson === "7"
                        ? "Ron, Alex, and Pam work for Brooklyn Brewski, a company that brews and distributes beer throughout New York. The company's recent results have been terrible."
                        : internalLesson === "8"
                          ? "Anna, Lynn, and Jeff are thinking about moving their manufacturing facilities from the United States to China. Jeff is having trouble deciding what to do."
                          : internalLesson === "9"
                            ? "John hired Kevin's web design firm to design a website for his company, but John is not satisfied with the end result."
                            : internalLesson === "10"
                              ? "Tanya is a head of R&D in a laboratory for Sudsco, a company that makes shampoo. Here she meets with colleagues John and Andy to discuss a request from the marketing department."
                              : internalLesson === "11"
                                ? "Greg, Stan, and Donna work for Pack-It, a maker of trash bags and other consumer goods. After disappointing sales results, they discuss exiting the trash bag business. But a fresh new idea gives them hope for the future."
                                : internalLesson === "12"
                                  ? "Julia is running a meeting. When Larry and Sally start arguing, Julia has to bring the meeting back under control."
                                  : internalLesson === "13"
                                    ? "Chris and Todd work for Alpine Design, a furniture manufacturer. When Todd accidentally orders the wrong amount of wood, his boss Chris warns him to be more careful in the future."
                                    : internalLesson === "14"
                                      ? "When United Supply Company launches their website three weeks ahead of schedule, there's more than one person ready to take credit."
                                      : internalLesson === "15"
                                        ? "Rick and Ellen work for Attic Treasures Antiques, an antique shop. Max is the owner of the shop. Recently, a woman came in and sold them $10,000 worth of “antique” jewelry. Max takes one look at the jewelry and realizes it's fake."
                                        : internalLesson === "16"
                                          ? "If Kroll Enterprises doesn't take action soon, the company is going to be in financial trouble. Joel and Kathy have different opinions on how to cut costs at the company."
                                          : internalLesson === "17"
                                            ? "Doug and Joe work at the reception desk of the Boston Empire Hotel, a large hotel. Kara, the hotel manager, yells at Doug for being late to work every day."
                                            : internalLesson === "18"
                                              ? "With his naughty behavior, Bill Swing provides plenty of material for office gossip. Cindy and Steve discuss his latest move and review his other recent insensitive behavior."
                                              : internalLesson === "19"
                                                ? "Justin, from the marketing department, is complaining to Mary about Joe. Joe is always nasty to Justin and Justin is sick of it. Mary advises Justin not to let Joe bother him."
                                                : internalLesson === "20"
                                                  ? "Nearly every office has one: the brown noser. He or she will do just about anything to win favor with the boss. Here Tony, Karen, and Nancy complain about their local brown noser, Mitch."
                                                  : internalLesson === "21"
                                                    ? "Mary is feeling overwhelmed between commitments at home and at work. Dan advises her to be patient and stay focused. Things will improve once their busy period at the office is over."
                                                    : internalLesson === "22"
                                                      ? "Maria calls her boss, Scott, to tell him she's not feeling well, and she's going to have to take a sick day. Fortunately, Scott is an understanding boss."
                                                      : internalLesson === "23"
                                                        ? "Ivan meets with Gina, a loan officer at L&S Bank, about getting a loan to start a new coffee shop. When Gina reviews his financial forecasts and suggests some changes, Ivan is angry at first but then decides to go along with it."
                                                        : internalLesson === "24"
                                                          ? "Jack, owner of Jack's Party Store, is negotiating to buy an advertisement in the Newport Times. Dave is an ad salesman with the newspaper."
                                                          : internalLesson === "25"
                                                            ? "It's annual performance review time. John meets with his boss to go over his performance for the past year, hear about his strengths and weaknesses, and find out about his salary increase."
                                                            : internalLesson === "26"
                                                              ? "Steve is meeting with his boss, Kurt, to review his performance. Kurt promotes Steve to the position of marketing director."
                                                              : internalLesson === "27"
                                                                ? "Kurt has the difficult task of firing Dan. Dan's been with the company since the beginning and is a friend of Kurt's. Dan is surprised and upset with the news."
                                                                : internalLesson === "28"
                                                                  ? "Donna, a Human Resources Manager, is interviewing Marina for a sales position."
                                                                  : internalLesson === "29"
                                                                    ? "Sam currently runs his own company selling used office furniture online. He's tired of running his own business and wants to get a job with a big company."
                                                                    : internalLesson === "30"
                                                                      ? "Donna calls Marina to tell her the good news — she got the job. Marina wisely decides to negotiate for a higher salary."
                    : "Material coming soon.",
        isCompleted: false,
        isLocked: !internalLesson,
        ariaLabel: internalLesson
          ? `Open ${eyebrow}: ${title}`
          : `Locked ${eyebrow}: ${title}`,
        onClick: internalLesson
          ? () => navigate(`/expressions/business/lesson-${internalLesson}`)
          : undefined,
      };
    };

    return (
      <div>
        <PageHeader title="Business 1" />
        <div className="grid gap-4">
          {businessExpressionGroups.map((group) => (
            <ProgressCollectionCard
              key={group.title}
              title={group.title}
              completedCount={0}
              totalCount={group.links.length}
              resetAriaLabel={`Reset ${group.title} progress`}
              onReset={() => {}}
              disableResetWhenEmpty
              items={group.links.map(createBusinessItem)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Expressions" />

      <PageSections subtitle="Expressions by theme">
        {expressionThemes.map((theme) => (
          <Section
            key={theme.id}
            id={theme.id}
            label={theme.title}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={theme.title}>
              <ul className="list-disc space-y-2 pl-5">
                {[...theme.expressions]
                  .sort((a, b) =>
                    a.localeCompare(b, "en", { sensitivity: "base" }),
                  )
                  .map((expression) => (
                    <li key={expression}>{expression}</li>
                  ))}
              </ul>
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
