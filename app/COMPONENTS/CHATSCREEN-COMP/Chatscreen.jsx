"use client";

import { useState } from "react";
import { ChatHeader } from "./Chatheader";
import { ChatBubble } from "./Chatbubble";
import { ChatInput } from "./Chatinput";

// Placeholder messages — will be replaced with real Supabase data
const initialMessages = [
  { id: 1, message: "Hey! How's the research going?", time: "10:30 AM", isSent: false },
  { id: 2, message: "Going great! Just finished the literature review.", time: "10:32 AM", isSent: true },
  { id: 3, message: "Nice! Can you share the paper references?", time: "10:33 AM", isSent: false },
  { id: 4, message: "Sure, I'll send them over.", time: "10:34 AM", isSent: true },
];

export function ChatScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      message: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSent: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Header */}
      <ChatHeader name="Alex Johnson" isOnline={true} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <ChatBubble
            key={m.id}
            message={m.message}
            time={m.time}
            isSent={m.isSent}
          />
        ))}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}