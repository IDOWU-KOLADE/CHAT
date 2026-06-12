export function ChatBubble({ message, time, isSent }) {
  return (
    <div className={`flex flex-col ${isSent ? "items-end" : "items-start"} mb-4`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isSent
            ? "bg-indigo-600 text-white rounded-br-sm"
            : "bg-white text-slate-900 rounded-bl-sm shadow-sm border border-slate-100"
        }`}
      >
        {message}
      </div>

      {/* Timestamp + ticks */}
      <div className="flex items-center gap-1 mt-1 px-1">
        <span className="text-[11px] text-slate-400">{time}</span>
        {isSent && (
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5l3 3 5-7" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 5l3 3 5-7" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
}