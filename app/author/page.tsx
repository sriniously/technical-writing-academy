import type { Metadata } from "next";
import { ExternalLink, MapPin, Twitter, Linkedin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Author - Technical Writing Academy",
  description: "K Srinivas Rao - Author of Technical Writing Academy.",
};

export default function AuthorPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="space-y-12">
        <section className="space-y-6">
          <h1 className="text-3xl font-normal">About the Author</h1>
          <div className="prose max-w-none">
            <p>Hi, I'm Srini.</p>
          </div>
        </section>

        <section className="space-y-6 pt-8 border-t border-border/30">
          <h2 className="text-xl font-normal">Get in touch</h2>
          <div className="space-y-3 max-w-sm">
            <a
              href="https://x.com/sriniously/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors ui-font"
            >
              <Twitter className="h-4 w-4" />
              <span>@sriniously</span>
            </a>

            <a
              href="https://www.linkedin.com/in/k-srinivas53168/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors ui-font"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://sriniously.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors ui-font"
            >
              <Globe className="h-4 w-4" />
              <span>sriniously.xyz</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
