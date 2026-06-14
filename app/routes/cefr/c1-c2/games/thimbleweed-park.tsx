import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { List } from "@/components/content/List";

import { thimbleweedPark } from "@/data/lessons/cefr/advanced/games/thimbleweed-park";

export const metadata = {
  title: "Advanced | Thimbleweed Park",
  description: "...",
};

export default function HowYourMemoryWorks() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="How Your Memory Works"
        description="Watch the video, understand how memory works, and discuss why forgetting is important."
      />

      <PageSections>
        <Section id="part-one-•-the-meeting" heading={3}>
          <List
            items={thimbleweedPark.partOne.items}
          />
        </Section>
        <Section id="part-Two-•-the-body" heading={3}>
          <List
            items={thimbleweedPark.partTwo.items}
          />
        </Section>
        <Section id="part-three-•-the-arrest" heading={3}>
          <List
            items={thimbleweedPark.partThree.items}
          />
        </Section>
        <Section id="part-four-•-the-will" heading={3}>
          <List
            items={thimbleweedPark.partFour.items}
          />
        </Section>
        <Section id="part-five-•-the-reading" heading={3}>
          <List
            items={thimbleweedPark.partFive.items}
          />
        </Section>
        <Section id="part-six-•-the-factory" heading={3}>
          <List
            items={thimbleweedPark.partSix.items}
          />
        </Section>
        <Section id="part-seven-•-the-madness" heading={3}>
          <List
            items={thimbleweedPark.partSeven.items}
          />
        </Section>
        <Section id="part-eight-•-the-escape" heading={3}>
          <List
            items={thimbleweedPark.partEight.items}
          />
        </Section>
        <Section id="part-nine-•-the-deleting" heading={3}>
          <List
            items={thimbleweedPark.partNine.items}
          />
        </Section>
      </PageSections>
    </>
  );
}
