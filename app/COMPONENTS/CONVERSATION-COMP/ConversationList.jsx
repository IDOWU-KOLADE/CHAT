import { ConversationsHeader } from "./ConversationHeader";
import { ConversationsSearch } from "./Conversationsearch";
import { ConversationItem } from "./ConversationItem";
import { ConversationsEmptyState } from "./ConversationEmptyState";

// Placeholder data — will be replaced with real Supabase data later
const conversations = [
  { id: 1, name: "Alex Johnson", status: "Online", isOnline: true },
  { id: 2, name: "Maria Garcia", status: "Online", isOnline: true },
  { id: 3, name: "Rohan Patel", status: "Yesterday", isOnline: false },
  { id: 4, name: "Emma Wilson", status: "Monday", isOnline: false },
  { id: 5, name: "Daniel Kim", status: "Sunday", isOnline: false },
];

export function ConversationsList() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ConversationsHeader />
      <ConversationsSearch />

      {/* List */}
      <div className="bg-white mt-2">
        {conversations.length > 0 ? (
          conversations.map((c) => (
            <ConversationItem
              key={c.id}
              name={c.name}
              status={c.status}
              isOnline={c.isOnline}
            />
          ))
        ) : (
          <ConversationsEmptyState />
        )}
      </div>

      {/* Empty state always shown below for reference — remove when wiring real data */}
      <ConversationsEmptyState />
    </div>
  );
}