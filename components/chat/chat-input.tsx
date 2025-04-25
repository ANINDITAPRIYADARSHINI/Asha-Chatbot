"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

interface ChatInputProps {
  onSubmit: (content: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isLoading) return;
    
    onSubmit(content);
    setContent("");
    
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    
    // Auto-resize the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <div className="flex items-end gap-2">
        <Textarea
          ref={textareaRef}
          placeholder="Ask about career paths, skills, or industry insights..."
          className="min-h-[60px] w-full resize-none rounded-lg p-3 focus-visible:ring-primary"
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={1}
        />
        <Button 
          size="icon" 
          type="submit" 
          disabled={!content.trim() || isLoading}
          className="shrink-0 h-[60px] w-[60px] rounded-lg bg-primary hover:bg-primary/90 transition-colors"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Powered by multiple AI models to provide accurate career guidance and insights.
      </p>
    </form>
  );
}