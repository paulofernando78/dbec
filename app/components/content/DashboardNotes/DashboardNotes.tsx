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
    <div className="w-full">
      <h2
        className="px-2 pt-1 pb-0.5 text-lg font-bold bg-gray-300 border-t border-r border-l border-gray-300 rounded-t-lg
        "
      >
        {title}
      </h2>
      <TextArea
        rows={5}
        value={value}
        readOnly={readOnly}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onSave}
        className=" border-r border-b border-l border-gray-300 rounded-t-none
      "
      />
    </div>
  );
};
