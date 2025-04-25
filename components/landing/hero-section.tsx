import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pb-20 pt-24 md:pb-32 md:pt-36">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background via-background to-background/50 dark:from-background dark:via-background dark:to-background/80"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/tight">
                Empower Your Career Journey with{" "}
                <span className="text-primary">AI-Driven Guidance</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lumina combines multiple AI models to provide personalized career research, 
                insights, and guidance tailored specifically for women's professional development.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/chat">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span>GPT-4o</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Gemini Pro</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <span>Deepseek</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Woman working on her career development"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-semibold">Personalized Career Insights</h3>
                <p className="opacity-90">Advanced AI research to guide your professional journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}