"use client";

import { useRef, useEffect } from "react";
import { Message } from "ai";
import { ChatMessage } from "./message";
import { MessageType } from "@/lib/constants";

interface ChatListProps {
  messages: MessageType[];
  isLoading?: boolean;
}

export function ChatList({ messages, isLoading }: ChatListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!messages.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-0 overflow-y-auto scroll-smooth"
    >
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          isLoading={isLoading && messages[messages.length - 1].id === message.id}
        />
      ))}
    </div>
  );
}