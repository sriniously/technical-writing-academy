import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to Technical Writing Excellence",
  description:
    "Practical patterns for creating engaging, effective technical documentation. Learn to transform complex ideas into clear, actionable content that empowers users.",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            The Complete Guide to Technical Writing Excellence
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Practical Patterns for Creating Engaging, Effective Technical
            Documentation
          </p>
        </section>

        <section className="text-center space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            Ready to Write?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              Start Reading the Book
            </a>
            <a
              href="/reading-list"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors min-h-[44px]"
            >
              Explore Reading List
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
