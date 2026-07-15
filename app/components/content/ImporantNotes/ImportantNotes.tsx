import { TextArea } from "@/components/ui/TextArea";

type ImportantNotesProps = {
  storageKey?: string;
};

export const ImportantNotes = ({
  storageKey = "dashboard-important-notes",
}: ImportantNotesProps) => {
  return (
    <div className="mb-4">
      <h2
        className="
        px-2
        py-1
        text-lg
        font-bold
        bg-gray-300
        border-t
        border-r
        border-l
        border-gray-300
        rounded-t-lg
        "
      >
        Important Notes
      </h2>
      <TextArea
        storageKey={storageKey}
        className="
        border-r
        border-b
        border-l
      border-gray-300
        rounded-t-none
      "
      />
    </div>
  );
};
