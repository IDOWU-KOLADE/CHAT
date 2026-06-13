"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ConversationsHeader } from "./ConversationHeader";
import { ConversationsSearch } from "./Conversationsearch";
import { ConversationItem } from "./ConversationItem";
import { ConversationsEmptyState } from "./ConversationEmptyState";

export function ConversationsList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*");

      if (error) {
        console.log("Error fetching users:", error.message);
        setLoading(false);
        return;
      }

      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <ConversationsHeader />
      <ConversationsSearch />

      <div className="bg-white mt-2">
        {loading ? (
          <p className="text-sm text-slate-400 text-center py-10">Loading...</p>
        ) : users.length > 0 ? (
          users.map((user) => (
            <ConversationItem
              key={user.id}
              id={user.id}
              name={user.full_name || "Unknown"}
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