import { MessageType } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  message: MessageType;
  isLoading?: boolean;
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 p-4",
        message.role === "user" ? "bg-muted/50" : "bg-background"
      )}
    >
      <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        {message.role === "user" ? (
          <User className="size-4" />
        ) : (
          <Bot className="size-4" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="space-y-2 text-sm">
          {isLoading && message.role === "assistant" ? (
            <div className="h-4 w-5 animate-pulse rounded bg-muted"></div>
          ) : (
            <ReactMarkdown 
              className="prose prose-neutral dark:prose-invert break-words prose-p:leading-relaxed prose-pre:p-0"
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
        {message.model && (
          <div className="text-xs text-muted-foreground">
            <span className="rounded-sm bg-muted px-1 py-0.5">
              {message.model}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}