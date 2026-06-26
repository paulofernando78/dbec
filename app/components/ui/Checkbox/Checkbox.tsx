import { Check } from "lucide-react";

type CheckboxProps = {
  className: string
}

export const Checkbox = ({ className }: CheckboxProps) => {
  return (
    <label className="group cursor-pointer">
      <input type="checkbox" className="peer hidden" />

      <span
        className={`relative top-px
          flex h-5 w-5 min-w-5 items-center justify-center
          rounded border border--slate-400
          bg-white
          peer-checked:bg-green-700
          [&_svg]:opacity-0
          peer-checked:[&_svg]:opacity-100
          peer-checked:[&_svg]:text-white
          ${className}`}
      >
        <Check size={14} />
      </span>
    </label>
  );
};
