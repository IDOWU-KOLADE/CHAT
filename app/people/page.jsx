"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function PeoplePage() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  // Fetch current user + all other users
  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setCurrentUser(user);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user.id);

      if (error) {
        console.log("Error:", error.message);
        setLoading(false);
        return;
      }

      setUsers(data);
      setFiltered(data);
      setLoading(false);
    };

    init();
  }, []);

  // Filter users as search input changes
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(users);
      return;
    }
    const lower = search.toLowerCase();
    setFiltered(users.filter((u) => u.full_name?.toLowerCase().includes(lower)));
  }, [search, users]);

  // Start or find conversation then navigate to it
  const handleStartChat = async (otherUser) => {
    // Step 1 — find existing conversation between the two users
    const { data: myConversations } = await supabase
      .from("conversation_members")
      .select("conversation_id")
      .eq("user_id", currentUser.id);

    const { data: theirConversations } = await supabase
      .from("conversation_members")
      .select("conversation_id")
      .eq("user_id", otherUser.id);

    // Step 2 — check if any conversation ID appears in both lists
    const myIds = myConversations?.map((c) => c.conversation_id) || [];
    const theirIds = theirConversations?.map((c) => c.conversation_id) || [];
    const existing = myIds.find((id) => theirIds.includes(id));

    // Step 3 — if conversation exists, go to it
    if (existing) {
      router.push(`/conversations/${existing}`);
      return;
    }

    // Step 4 — if not, create a new conversation
    const { data: newConversation, error: convError } = await supabase
      .from("conversations")
      .insert({})
      .select()
      .single();

    if (convError) {
      console.log("Error creating conversation:", convError.message);
      return;
    }

    // Step 5 — add both users to conversation_members
    await supabase.from("conversation_members").insert([
      { conversation_id: newConversation.id, user_id: currentUser.id },
      { conversation_id: newConversation.id, user_id: otherUser.id },
    ]);

    // Step 6 — go to the new conversation
    router.push(`/conversations/${newConversation.id}`);
  };

  const getInitials = (name) =>
    name?.split(" ").map((n) => n[0]).join("").toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-slate-200">
        <button onClick={() => router.back()} className="text-slate-500 hover:text-slate-900 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-base font-bold text-slate-900">People</h1>
        <div className="w-6" />
      </div>

      {/* Search */}
      <div className="px-5 py-3 bg-white border-b border-slate-100">
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-400 shrink-0">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Users list */}
      <div className="bg-white mt-2">
        {loading ? (
          <p className="text-sm text-slate-400 text-center py-10">Loading...</p>
        ) : filtered.length > 0 ? (
          filtered.map((user) => (
            <button
              key={user.id}
              onClick={() => handleStartChat(user)}
              className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors"
            >
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-slate-600">
                  {getInitials(user.full_name)}
                </span>
              </div>
              {/* Name */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-slate-900">{user.full_name}</span>
                <span className="text-xs text-slate-400">Tap to start chatting</span>
              </div>
            </button>
          ))
        ) : (
          <p className="text-sm text-slate-400 text-center py-10">No users found</p>
        )}
      </div>

    </div>
  );
}