import type { Metadata } from "next";
import Link from "next/link";
import { bookIntro, bookParts } from "./book-structure";

export const metadata: Metadata = {
  title: "The Complete Guide to Technical Writing Excellence",
  description:
    "Practical patterns for creating engaging, effective technical documentation. A comprehensive guide covering foundations, core techniques, advanced methods, and specialized applications.",
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-12">
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            The Complete Guide to Technical Writing Excellence
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Practical patterns for creating engaging, effective technical
            documentation. Learn to transform complex ideas into clear,
            actionable content that empowers users.
          </p>
        </section>

        <section className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground text-center">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {bookIntro.map((intro, index) => (
              <Link
                key={index}
                href={intro.href}
                className="p-4 sm:p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors group min-h-[80px] flex flex-col justify-center gap-2"
              >
                <h3 className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {intro.title}
                </h3>
                {intro.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {intro.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6 sm:space-y-8">
          {bookParts.map((part) => (
            <div
              key={part.part}
              className="border border-border rounded-lg p-4 sm:p-6 hover:bg-muted/30 transition-colors"
            >
              {part.disabled ? (
                <div className="block group cursor-not-allowed">
                  <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground/60 mb-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <span>
                      Part {part.part}: {part.title}
                    </span>
                    <span className="text-xs sm:text-sm font-normal bg-muted px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </h2>
                  {part.description && (
                    <p className="text-sm text-muted-foreground/60 mb-4 leading-relaxed">
                      {part.description}
                    </p>
                  )}
                </div>
              ) : (
                <Link href={`/book/part-${part.part}`} className="block group">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Part {part.part}: {part.title}
                  </h2>
                  {part.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {part.description}
                    </p>
                  )}
                </Link>
              )}
              <div className="space-y-2 sm:space-y-3">
                {part.chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 py-2"
                  >
                    <span className="text-sm text-muted-foreground font-mono flex-shrink-0 mt-0.5">
                      {part.part}.{index + 1}
                    </span>
                    <div className="flex-1">
                      {chapter.disabled ? (
                        <div>
                          <span className="text-muted-foreground/60 cursor-not-allowed text-sm sm:text-base leading-relaxed">
                            {chapter.title}{" "}
                            <span className="text-xs">(Coming Soon)</span>
                          </span>
                          {chapter.description && (
                            <p className="text-xs text-muted-foreground/50 mt-1 leading-relaxed">
                              {chapter.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={chapter.href}
                          className="group block"
                        >
                          <span className="text-foreground group-hover:text-primary cursor-pointer transition-colors text-sm sm:text-base leading-relaxed">
                            {chapter.title}
                          </span>
                          {chapter.description && (
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                              {chapter.description}
                            </p>
                          )}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
