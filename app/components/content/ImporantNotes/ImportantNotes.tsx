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
        border-t
        border-r
        border-l
        border-gray-300
        rounded-t-lg
        "
      >
        Important Notes
      </h2>
      <TextArea storageKey="dashboard-important-notes" className="
        border-r
        border-b
        border-l
      border-gray-300
        rounded-t-none
      " />
    </>
  );
};
