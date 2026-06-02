import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

type ObjectiveProps = {
  value?: InlineRichContentValue[];
};

export const LessonObjective = ({ value = [] }: ObjectiveProps) => {
  return (
    <Card className="mt-10 mb-5 bg-amber-100 border">
      <p>
        <InlineRichContent value={value} />
      </p>
    </Card>
  );
};
