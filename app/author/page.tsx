import type { Metadata } from "next";
import { ExternalLink, MapPin, Twitter, Linkedin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Author - Technical Writing Academy",
  description:
    "K Srinivas Rao - Author of Technical Writing Academy.",
};

export default function AuthorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-12">
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Author
          </h1>
        </section>

        {/* Author Profile */}
        <section className="space-y-6 sm:space-y-8">
          <div className="border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                K Srinivas Rao
              </h2>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <a
                  href="https://x.com/sriniously/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors w-full"
                >
                  <Twitter className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-foreground">Twitter/X</p>
                    <p className="text-sm text-muted-foreground">@sriniously</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/k-srinivas53168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors w-full"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">k-srinivas53168</p>
                  </div>
                </a>
                
                <a
                  href="https://sriniously.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors w-full"
                >
                  <Globe className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-foreground">Personal Site</p>
                    <p className="text-sm text-muted-foreground">sriniously.xyz</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}