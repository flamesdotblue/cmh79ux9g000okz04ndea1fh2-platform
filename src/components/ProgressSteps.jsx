export default function ProgressSteps({ current = 1, total = 3 }) {
  const ratio = Math.max(0, Math.min(1, (current - 1) / (total - 1 || 1)));
  return (
    <div className="w-48">
      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
        <span>Step {current} of {total}</span>
        <span>{Math.round(ratio * 100)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${ratio * 100}%`, backgroundColor: '#1A1F71' }} />
      </div>
    </div>
  );
}
