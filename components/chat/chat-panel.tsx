"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ChatInput } from "./chat-input";
import { ChatList } from "./chat-list";
import { ModelSelector } from "./model-selector";
import { CareerCategorySelector } from "./career-category-selector";
import { Message } from "ai";
import { createMessage } from "@/lib/utils";
import { INITIAL_SYSTEM_PROMPT, MessageType } from "@/lib/constants";

export function ChatPanel() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "system-1",
      role: "system",
      content: INITIAL_SYSTEM_PROMPT
    },
    {
      id: "assistant-1",
      role: "assistant",
      content: "Hello! I'm Lumina, your AI career guide. I'm here to help you navigate your career journey with personalized advice and insights. What would you like to explore today? You can ask about career paths, skill development, industry trends, or any career challenges you might be facing.",
      model: "gpt-4o"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage = createMessage("user", content);
    setMessages((prev) => [...prev, userMessage]);
    
    setIsLoading(true);

    try {
      // This is a simulation - in a real app, you would call the API here
      setTimeout(() => {
        // Simulate AI response
        const aiResponse = createMessage(
          "assistant", 
          generateAIResponse(content, selectedCategory)
        );
        
        // Add additional properties
        aiResponse.model = selectedModel;
        aiResponse.createdAt = new Date();
        
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  // This is just a simple simulation function
  const generateAIResponse = (userMessage: string, category: string | null): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hello! How can I help with your career questions today?";
    }
    
    if (lowerCaseMessage.includes("career path") || lowerCaseMessage.includes("career advice")) {
      return `Based on your interest in ${category || 'career development'}, I recommend focusing on these key areas:
      
1. **Skills Assessment**: Identify your core strengths and areas for development
2. **Industry Research**: Explore companies with strong diversity initiatives
3. **Networking**: Connect with women's professional groups in your field
4. **Mentorship**: Find mentors who can provide guidance specific to women's career advancement

Would you like me to elaborate on any of these areas?`;
    }
    
    if (lowerCaseMessage.includes("skill") || lowerCaseMessage.includes("learn")) {
      return `Developing these critical skills can significantly boost your career prospects:

- **Technical competencies** specific to your field
- **Leadership abilities** even before you're in management roles
- **Negotiation skills** which are particularly valuable for salary discussions
- **Public speaking** to increase your visibility
- **Network building** to create valuable professional relationships

What specific skills are you most interested in developing right now?`;
    }
    
    return `Thank you for your question. 

To provide you with the most helpful guidance, could you share a bit more about:

1. Your current career stage
2. Your educational background
3. The specific industry or field you're interested in
4. Any particular challenges you're facing

This will help me tailor my advice specifically to your situation and goals.`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <ModelSelector selectedModel={selectedModel} onModelChange={setSelectedModel} />
        </div>
        <div className="w-full md:w-1/2">
          <CareerCategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[60vh] overflow-hidden flex flex-col">
        <ChatList messages={messages} isLoading={isLoading} />
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </CardFooter>
    </Card>
  );
}