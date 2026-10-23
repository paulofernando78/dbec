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
    <div className="w-full min-w-0 rounded-xl bg-(--background) p-4">
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <TextArea
        rows={10}
        value={value}
        readOnly={readOnly}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onSave}
      />
    </div>
  );
};
