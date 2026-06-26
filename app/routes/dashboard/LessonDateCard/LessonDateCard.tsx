import { Card } from "@/components/ui/Card";
import { TextArea } from "@/components/ui/TextArea";

export const LessonDateCard = () => {
  return (
    <div className="pt-[1.1rem] px-4 pb-[.1rem] bg-gray-100 border border-gray-300 rounded-lg">
      <div>
        <div className="flex gap-[.95rem] mb-4">
          <input
            type="date"
            className="w-38 px-2 pt-1 pb-[.1rem] border bg-white border-gray-300 rounded-md"
          />
  
          <select className="w-max pt-[.1rem] px-1 bg-white border border-gray-300 rounded-md">
            <option value="">...</option>
            <option value="OK">OK</option>
            <option value="SC">SC</option>
            <option value="TC">TC</option>
            <option value="R">R</option>
            <option value="ROK">ROK</option>
            <option value="H">H</option>
          </select>
        </div>
        <span className="block font-bold">Class Notes</span>
      <TextArea />
      </div>
    </div>
  );
};