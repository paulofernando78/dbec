import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { InlineRichContentValue } from "@/components/content/InlineRichContent";
import { Card } from "@/components/ui/Card";

type ObjectiveProps = {
  value?: InlineRichContentValue[];
};

export const Objective = ({ value = [] }: ObjectiveProps) => {
  return (
    <Card className="my-10">
      <p>
        <InlineRichContent value={value} />
      </p>
    </Card>
  );
};
