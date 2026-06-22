import { Whiteboard } from "@/components/content/Whiteboard";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle="Student's Name"
        descriptions={["..."]}
      />
      <div >
          <p>Notes</p>
          <textarea name="" id="" className="w-full h-20 p-2 overflow-auto bg-white border rounded-lg"></textarea>
          <p>Dates</p>
      </div>
    </>
  );
}
