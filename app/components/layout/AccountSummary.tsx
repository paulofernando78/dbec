type AccountSummaryProps = {
  name: string;
  subtitle: string;
  className?: string
};

export const AccountSummary = ({ name, subtitle, className }: AccountSummaryProps) => (
  <div className={`flex min-w-0 items-center gap-3 ${className}`}>
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-200 font-bold text-gray-800">
      {name.charAt(0).toUpperCase()}
    </span>

    <div className="min-w-0 leading-tight max-[489px]:hidden">
      <p className="truncate text-sm font-semibold text-gray-800">{name}</p>
      <p className="truncate text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);
