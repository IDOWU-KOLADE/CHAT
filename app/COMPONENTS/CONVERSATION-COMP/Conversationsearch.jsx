export function ConversationsSearch() {
  return (
    <div className="px-5 py-3 bg-white border-b border-slate-100">
      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-400 shrink-0">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search users..."
          className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-full"
        />
      </div>
    </div>
  );
}