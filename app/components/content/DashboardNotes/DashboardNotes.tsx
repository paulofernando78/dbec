import { TextArea } from "@/components/ui/TextArea";

type DashboardNotesProps = {
  title: string;
  storageKey?: string;
};

export const DashboardNotes = ({
  title,
  storageKey = "dashboard-notes",
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
        storageKey={storageKey}
        className=" border-r border-b border-l border-gray-300 rounded-t-none
      "
      />
    </div>
  );
};
