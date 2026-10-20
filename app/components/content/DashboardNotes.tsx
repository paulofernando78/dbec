import { Card } from "@/components/ui/Card";
import { TextArea } from "@/components/ui/TextArea";

type DashboardNotesProps = {
  title: string;
  value: string;
  readOnly?: boolean;
  onChange: (value: string) => void;
  onSave: () => void;
};

export const DashboardNotes = ({
  title,
  value,
  readOnly = false,
  onChange,
  onSave,
}: DashboardNotesProps) => {
  return (
    <Card title={title} className="min-w-0 flex-1">
      <TextArea
        rows={10}
        value={value}
        readOnly={readOnly}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onSave}
      />
    </Card>
  );
};
