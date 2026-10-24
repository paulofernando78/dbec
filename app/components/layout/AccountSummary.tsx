type AccountSummaryProps = {
  name: string;
  subtitle: string;
  className?: string;
};

export const AccountSummary = ({ name, subtitle, className }: AccountSummaryProps) => (
  <div className={`flex min-w-0 items-center gap-3 ${className}`}>
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-200 font-bold text-gray-800">
      {name.charAt(0).toUpperCase()}
    </span>

    <div className="min-w-0 leading-tight">
      <p className="truncate text-[clamp(0.55rem,3.5cqw,0.875rem)] font-semibold text-gray-800">
        {name}
      </p>
      <p className="truncate text-[clamp(0.45rem,3cqw,0.75rem)] text-gray-500">
        {subtitle}
      </p>
    </div>
  </div>
);
