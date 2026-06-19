import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { List } from "@/components/content/List";

import { thimbleweedPark } from "@/data/cefr/advanced/games/thimbleweed-park";

export const metadata = {
  title: "Advanced | Thimbleweed Park",
  description: [
    "In Thimbleweed Park, a dead body is the least of your problems. Switch between five playable characters to uncover the surreal secrets of this strange town in a modern mystery adventure game from the creators of Monkey Island and Maniac Mansion. The deeper you go, the weirder it gets.",
  ],
};

export default function ThimbleweedPark() {
  return (
    <>
      <Whiteboard
        title={thimbleweedPark.whiteboard.title}
        subtitle={thimbleweedPark.whiteboard.subtitle}
        descriptions={thimbleweedPark.whiteboard.descriptions}
        date={thimbleweedPark.whiteboard.date}
      />

      <PageSections>
        <Section id="part-one-•-the-meeting" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partOne.items} />
        </Section>
        <Section id="part-Two-•-the-body" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partTwo.items} />
        </Section>
        <Section id="part-three-•-the-arrest" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partThree.items} />
        </Section>
        <Section id="part-four-•-the-will" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partFour.items} />
        </Section>
        <Section id="part-five-•-the-reading" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partFive.items} />
        </Section>
        <Section id="part-six-•-the-factory" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partSix.items} />
        </Section>
        <Section id="part-seven-•-the-madness" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partSeven.items} />
        </Section>
        <Section id="part-eight-•-the-escape" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partEight.items} />
        </Section>
        <Section id="part-nine-•-the-deleting" heading={3}>
          <List type="checkbox" items={thimbleweedPark.partNine.items} />
        </Section>
      </PageSections>
    </>
  );
}
