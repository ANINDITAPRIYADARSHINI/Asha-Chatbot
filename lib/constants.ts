export const MODELS = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Most powerful model for detailed career insights and comprehensive research",
    maxTokens: 8192,
    provider: "openai"
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    description: "Balanced model for career guidance and industry analysis",
    maxTokens: 4096,
    provider: "google"
  },
  {
    id: "deepseek-coder",
    name: "Deepseek",
    description: "Specialized for technical career paths and skill development",
    maxTokens: 8192,
    provider: "deepseek"
  }
];

export const CAREER_CATEGORIES = [
  {
    id: "tech",
    name: "Technology",
    fields: ["Software Development", "Data Science", "Cybersecurity", "UX Design", "Product Management"]
  },
  {
    id: "business",
    name: "Business",
    fields: ["Marketing", "Finance", "Entrepreneurship", "Human Resources", "Operations"]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    fields: ["Medicine", "Nursing", "Public Health", "Healthcare Administration", "Medical Research"]
  },
  {
    id: "creative",
    name: "Creative",
    fields: ["Graphic Design", "Content Creation", "Writing", "Digital Media", "Marketing"]
  },
  {
    id: "education",
    name: "Education",
    fields: ["Teaching", "Educational Administration", "Counseling", "Educational Technology", "Research"]
  },
];

export type MessageType = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt?: Date;
  model?: string;
}

export const INITIAL_SYSTEM_PROMPT = 
`You are Lumina, an advanced career advisor for women, powered by AI. Your purpose is to:

1. Provide personalized career guidance and research
2. Suggest career paths based on skills, interests, and goals
3. Offer industry insights with special attention to opportunities for women
4. Recommend resources for skill development and networking
5. Help users navigate career challenges unique to women in various fields

Always be encouraging, informative, and practical with your advice. When making recommendations, cite relevant statistics or trends when appropriate. Respond in a warm, professional tone.

When users seek career advice, ask clarifying questions about their:
- Current career stage
- Skills and education
- Interests and values
- Work preferences
- Short and long-term goals

Your guidance should be tailored, actionable, and empowering.`;