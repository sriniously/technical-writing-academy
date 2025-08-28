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
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="space-y-12">
        <section className="space-y-6">
          <h1 className="text-3xl font-normal">
            The Complete Guide to Technical Writing Excellence
          </h1>
          <div className="prose max-w-none">
            <p>
              This book is my attempt to capture everything I've learned about
              making technical concepts accessible.
            </p>
            <p>
              I've structured it as a journey from foundations to mastery, but
              feel free to jump around. Each chapter stands on its own, and
              actual learning happens when you connect ideas in your own way.
            </p>
          </div>
        </section>

        <section className="space-y-6 pt-8 border-t border-border/30">
          <h2 className="text-xl font-medium">Start here</h2>
          <div className="space-y-4">
            {bookIntro.map((intro, index) => (
              <Link
                key={index}
                href={intro.href}
                className="block space-y-2 p-4 hover:bg-muted/30 transition-colors border-l-2 border-transparent hover:border-l-primary"
              >
                <h3 className="font-medium ui-font">{intro.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {intro.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="prose max-w-none">
            <p className="text-muted-foreground">
              The book is organized into eight parts, moving from foundational
              concepts to advanced techniques. Parts marked as "coming soon" are
              actively being written, this is very much a work in progress.
            </p>
          </div>

          {bookParts.map((part) => (
            <div key={part.part} className="space-y-4">
              <div className="space-y-3">
                {part.disabled ? (
                  <div>
                    <h2 className="text-xl font-medium text-muted-foreground/70 flex items-center gap-3">
                      Part {part.part}: {part.title}
                      <span className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 uppercase tracking-wide ui-font">
                        Coming Soon
                      </span>
                    </h2>
                    {part.description && (
                      <p className="text-muted-foreground/60 leading-relaxed">
                        {part.description}
                      </p>
                    )}
                  </div>
                ) : (
                  <Link
                    href={`/book/part-${part.part}`}
                    className="block group"
                  >
                    <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                      Part {part.part}: {part.title}
                    </h2>
                    {part.description && (
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {part.description}
                      </p>
                    )}
                  </Link>
                )}
              </div>

              <div className="ml-6 space-y-3">
                {part.chapters.map((chapter, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-xs text-muted-foreground ui-font font-mono w-8 flex-shrink-0 mt-1">
                      {part.part}.{index + 1}
                    </span>
                    <div className="flex-1">
                      {chapter.disabled ? (
                        <div className="space-y-1">
                          <span className="text-muted-foreground/60 text-sm leading-relaxed block">
                            {chapter.title}
                            <span className="text-xs ml-2 text-muted-foreground/40">
                              (draft)
                            </span>
                          </span>
                          {chapter.description && (
                            <p className="text-xs text-muted-foreground/50 leading-relaxed">
                              {chapter.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={chapter.href}
                          className="group block space-y-1"
                        >
                          <span className="text-foreground group-hover:text-primary text-sm leading-relaxed transition-colors block">
                            {chapter.title}
                          </span>
                          {chapter.description && (
                            <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
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

        <section className="pt-8 border-t border-border/30">
          <div className="prose max-w-none">
            <p className="text-muted-foreground italic">
              This book grows as I learn. If you find something unclear or
              missing, that's valuable feedback. The goal isn't perfection, it's
              progress toward better understanding.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
