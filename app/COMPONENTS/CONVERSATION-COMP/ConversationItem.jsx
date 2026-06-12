import Link from "next/link";
export function ConversationItem({id, name, status, isOnline }) {
  // Get initials from name for avatar placeholder
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Link href={'/conversations/${id}'}>
    <div className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-sm font-semibold text-slate-600">{initials}</span>
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* Name + status */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900">{name}</span>
        <span className={`text-xs mt-0.5 ${isOnline ? "text-green-500" : "text-slate-400"}`}>
          {isOnline ? "Online" : status}
        </span>
      </div>
    </div>
    </Link>
  );
}