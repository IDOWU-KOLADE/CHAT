"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ConversationsHeader } from "./ConversationHeader";
import { ConversationsSearch } from "./Conversationsearch";
import { ConversationItem } from "./ConversationItem";
import { ConversationsEmptyState } from "./ConversationEmptyState";

export function ConversationsList() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Step 1 — get logged in user
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      // Step 2 — get their profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      setCurrentUser(profile);

      // Step 3 — get all conversation IDs this user belongs to
      const { data: memberships } = await supabase
        .from("conversation_members")
        .select("conversation_id")
        .eq("user_id", user.id);

      if (!memberships || memberships.length === 0) {
        setLoading(false);
        return;
      }

      const conversationIds = memberships.map((m) => m.conversation_id);

      // Step 4 — for each conversation, get the OTHER user's profile
      const { data: otherMembers } = await supabase
        .from("conversation_members")
        .select("conversation_id, user_id, profiles(full_name)")
        .in("conversation_id", conversationIds)
        .neq("user_id", user.id);

      setConversations(otherMembers || []);
      setLoading(false);
    };

    init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <ConversationsHeader user={currentUser} />
      <ConversationsSearch />

      <div className="bg-white mt-2">
        {loading ? (
          <p className="text-sm text-slate-400 text-center py-10">Loading...</p>
        ) : conversations.length > 0 ? (
          conversations.map((c) => (
            <ConversationItem
              key={c.conversation_id}
              id={c.conversation_id}
              name={c.profiles?.full_name || "Unknown"}
              isOnline={false}
              status="Tap to chat"
            />
          ))
        ) : (
          <ConversationsEmptyState />
        )}
      </div>
    </div>
  );
}