import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonObjective } from "@/components/content/LessonObjective"


export default function Introduction() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Introductions"
        description="What's your name? I’m Laura. Nice to meet you."
      />

      <div className="lie-break">
        <LessonObjective>
          By the end of this class, students will be able to greet someone, say
          their name, ask for basic personal information, and introduce
          themselves clearly.
        </LessonObjective>
      </div>
    </>
  );
}
