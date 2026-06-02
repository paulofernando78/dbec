import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonObjective } from "@/components/content/LessonObjective";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { content, portuguese } from "@/helpers/content";
import { Collapsible } from "@/components/content/Collapsible";

import { lesson } from "@/data/lessons/cefr/a1/hi-my-names-laura";

export default function Introduction() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Hi, my name’s Laura."
        description="What's your name? I’m Laura. Nice to meet you."
      />

      <div className="lie-break">
        <LessonObjective
          value={[
            ...content({
              parts: [lesson.objective[0]],
            }),
          ]}
        />
        <PageSections>
          <Section id="introduction" heading={3}>
          
          </Section>

          <Section id="Presention" heading={3}>
           
          </Section>

          <Section id="Language Focus" heading={3}>
          
          </Section>

          <Section id="Practice" heading={3}>
  
          </Section>

          <Section id="Production" heading={3}>
           
          </Section>
        </PageSections>
      </div>
    </>
  );
}
