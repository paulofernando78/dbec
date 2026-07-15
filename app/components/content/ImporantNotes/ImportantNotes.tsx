import { TextArea } from "@/components/ui/TextArea";

export const ImportantNotes = () => {
  return (
    <>
      <h2
        className="
        text-lg
        px-2
        py-1
        bg-gray-300
        border-t-2
        border-r-2
        border-b
        border-l-2
        border-gray-400
        rounded-t-lg
        "
      >
        Important Notes
      </h2>
      <TextArea storageKey="dashboard-important-notes" className="
        border-r-2
        border-b-2
        border-l-2
      border-gray-400
        rounded-t-none
      " />
    </>
  );
};
