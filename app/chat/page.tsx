import { ChatPanel } from "@/components/chat/chat-panel";

export default function ChatPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Lumina AI Assistant</h1>
          <p className="text-muted-foreground">
            Your personalized career guide powered by multiple AI models
          </p>
        </div>
        <ChatPanel />
      </div>
    </div>
  );
}