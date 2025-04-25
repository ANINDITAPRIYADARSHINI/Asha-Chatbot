import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophia Chen",
    role: "Software Engineer",
    avatar: "SC",
    content:
      "Lumina helped me navigate my transition from a junior to senior role. The AI provided insights on specific skills I needed to develop and helped me create a realistic timeline for advancement.",
    company: "Tech Innovations Inc.",
  },
  {
    name: "Maya Patel",
    role: "Marketing Director",
    avatar: "MP",
    content:
      "As a woman in marketing looking to pivot to a more data-focused role, Lumina provided targeted advice that acknowledged the unique challenges I faced. The resources and learning paths were exceptionally helpful.",
    company: "Global Brands Group",
  },
  {
    name: "Zoe Washington",
    role: "Healthcare Administrator",
    avatar: "ZW",
    content:
      "The industry insights from multiple AI models gave me a comprehensive view of emerging trends in healthcare administration. This helped me position myself for a promotion that aligned with future organizational needs.",
    company: "Metropolitan Health Systems",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Success Stories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Hear from women who have transformed their careers with Lumina's AI-powered guidance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}