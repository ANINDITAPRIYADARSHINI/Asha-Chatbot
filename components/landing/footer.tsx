import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Lumina</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering women's career journeys with AI-driven guidance and insights.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Features</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Career Paths
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Skill Development
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Industry Insights
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Resource Library
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Success Stories
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lumina. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}