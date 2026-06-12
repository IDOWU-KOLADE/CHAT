import Link from "next/link";

export function ChatHeader({ name, isOnline }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
      {/* Left — back + avatar + info */}
      <div className="flex items-center gap-3">
        <Link href="/conversations" className="text-slate-500 hover:text-slate-900 transition-colors mr-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        {/* Avatar */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-xs font-semibold text-slate-600">{initials}</span>
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>

        {/* Name + status */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900">{name}</span>
          <span className={`text-xs ${isOnline ? "text-green-500" : "text-slate-400"}`}>
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Three dot menu */}
      <button className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="5" r="1.2" fill="currentColor"/>
          <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
          <circle cx="12" cy="19" r="1.2" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}