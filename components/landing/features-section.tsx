import {
  BookOpen,
  Compass,
  GraduationCap,
  LayoutGrid,
  LineChart,
  MapPin,
  MessageSquare,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Multi-LLM Assistant",
    description:
      "Access the power of GPT-4o, Gemini Pro, and Deepseek for comprehensive career guidance tailored to women's professional development.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Career Path Discovery",
    description:
      "Explore personalized career path recommendations based on your unique skills, interests, and professional goals.",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Industry Insights",
    description:
      "Access up-to-date industry trends and forecasts to make informed decisions about your career trajectory.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Skill Development",
    description:
      "Receive targeted recommendations for courses, resources, and learning paths to build the skills you need for success.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Career Roadmaps",
    description:
      "Visualize your professional journey with milestone tracking and progress indicators tailored to your goals.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Networking Strategies",
    description:
      "Learn effective approaches to build meaningful professional connections and find mentorship opportunities.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Resource Library",
    description:
      "Access a curated collection of articles, books, courses, and tools specifically chosen to support women's career advancement.",
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Personalization",
    description:
      "Get increasingly relevant guidance as Lumina learns about your preferences, goals, and career journey.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering Your Career Journey
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Discover how Lumina's powerful features can help you navigate your professional path
              with confidence and clarity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}