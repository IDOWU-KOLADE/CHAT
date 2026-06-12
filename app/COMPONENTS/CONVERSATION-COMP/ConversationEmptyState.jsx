export function ConversationsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      {/* Chat bubble icon */}
      <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="10" r="1" fill="#4F46E5"/>
          <circle cx="12" cy="10" r="1" fill="#4F46E5"/>
          <circle cx="15" cy="10" r="1" fill="#4F46E5"/>
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">Select a user to start chatting</h3>
      <p className="text-xs text-slate-400 leading-relaxed">
        Choose from your list of connections and start a conversation.
      </p>
    </div>
  );
}