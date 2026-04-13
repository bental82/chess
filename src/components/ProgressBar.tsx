interface ProgressBarProps {
  solved: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ solved, total, label }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((solved / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs text-stone-600 mb-1">
        <span>{label ?? 'Progress'}</span>
        <span>
          {solved} / {total}
        </span>
      </div>
      <div className="h-2 bg-stone-200 rounded overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
