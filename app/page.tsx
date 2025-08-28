export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 py-12 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl font-medium text-muted-foreground">
                SR
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
              Hi, I'm Srini. I write about making technical things clear.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After years of working at the intersection of code and
              communication, I'm putting together everything I've learned into a
              comprehensive guide. This is where I share whatever much I managed
              to learn about writing through the years.
            </p>
          </div>
        </div>
      </header>

      <section className="px-6 py-8 max-w-4xl mx-auto">
        <div className="border-l-4 border-blue-500 pl-8 py-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h2 className="text-xl font-medium text-foreground mb-3">
                What I'm working on right now
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The book is taking shape. I am still experimenting with
                different formats and structures. But I'll be sharing the
                progress here.
              </p>
              <p className="text-muted-foreground text-sm">
                Currently writing: Part 1 - Foundations of technical
                communication
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-muted/30 border border-border rounded-lg p-8">
          <h2 className="text-xl font-medium text-foreground mb-4">
            About this academy
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            This space is dedicated to exploring the skill of technical writing.
            Whether you're a developer documenting your code, a technical writer
            looking to level up, or someone who believes that great
            documentation is what separates good software from great software,
            you'll find something here, that I promise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The book covers everything from cognitive science principles to
            practical templates, from narrative structures to organizational
            change. It's about turning documentation from a chore into a
            strategic capability that helps learning and encourages innovation.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
          >
            Start Reading the Book
          </a>
          <a
            href="/author"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors"
          >
            Learn More About Me
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 max-w-4xl mx-auto border-t border-border mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Technical Writing Academy
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Making complex things clearer, one word at a time.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://x.com/sriniously/"
              className="hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/k-srinivas53168/"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://sriniously.xyz/"
              className="hover:text-foreground transition-colors"
            >
              Personal Site
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
