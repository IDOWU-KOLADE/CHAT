export function ConversationsHeader() {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-slate-200">
      {/* Hamburger */}
      <button className="flex flex-col gap-[5px] w-9 h-9 justify-center" aria-label="Menu">
        <span className="block h-[1.5px] w-5 bg-slate-800" />
        <span className="block h-[1.5px] w-4 bg-slate-800" />
        <span className="block h-[1.5px] w-5 bg-slate-800" />
      </button>
      {/* Title */}
      <h1 className="text-base font-bold text-slate-900">BrainBridge</h1>

      {/* Edit icon */}
      <button className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors" aria-label="New conversation">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}