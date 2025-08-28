"use client";

import Link from "next/link";
import { bookParts } from "@/app/book/book-structure";

interface PartLayoutProps {
  partNumber: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PartLayout({
  partNumber,
  title,
  description,
  children,
}: PartLayoutProps) {
  const currentPart = bookParts.find((p) => p.part === partNumber);
  const prevPart =
    partNumber > 1 ? bookParts.find((p) => p.part === partNumber - 1) : null;
  const nextPart =
    partNumber < bookParts.length
      ? bookParts.find((p) => p.part === partNumber + 1)
      : null;

  // For Part 1, previous should go to Introduction
  const hasPrevIntro = partNumber === 1;

  const firstChapter = currentPart?.chapters.find((ch) => !ch.disabled);
  const isPartDisabled = currentPart?.disabled;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <nav className="mb-12 text-sm text-muted-foreground ui-font">
        <Link href="/book" className="hover:text-foreground transition-colors">
          Book
        </Link>
        <span className="mx-2">→</span>
        <span>Part {partNumber}</span>
      </nav>

      <header className="mb-12 space-y-4">
        <div className="space-y-2">
          <p className="text-muted-foreground ui-font text-sm">
            Part {partNumber}
            {isPartDisabled && (
              <span className="ml-2 text-xs bg-muted/50 text-muted-foreground px-2 py-1 uppercase tracking-wide">
                Coming Soon
              </span>
            )}
          </p>
          <h1 className="text-3xl font-normal leading-tight">{title}</h1>
        </div>
        {description && (
          <div className="prose max-w-none">
            <p className="text-muted-foreground">{description}</p>
          </div>
        )}
      </header>

      <div className="prose max-w-none mb-16">{children}</div>

      {currentPart && (
        <section className="mb-16 space-y-6">
          <h2 className="text-xl font-medium">Chapters in this part</h2>
          <div className="space-y-4">
            {currentPart.chapters.map((chapter, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-xs text-muted-foreground ui-font font-mono w-8 flex-shrink-0 mt-1">
                  {partNumber}.{index + 1}
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
                      className="group block space-y-1 p-2 -m-2 hover:bg-muted/30 transition-colors"
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

          {firstChapter && !isPartDisabled && (
            <div className="pt-6 border-t border-border/30">
              <Link
                href={firstChapter.href}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors ui-font text-sm"
              >
                Start with Chapter 1 →
              </Link>
            </div>
          )}
        </section>
      )}

      <nav className="pt-8 border-t border-border/30">
        <div className="flex justify-between items-center">
          <div>
            {hasPrevIntro && (
              <Link
                href="/book/introduction"
                className="text-muted-foreground hover:text-foreground transition-colors ui-font text-sm"
              >
                ← Introduction
              </Link>
            )}
            {prevPart && !prevPart.disabled && (
              <Link
                href={`/book/part-${prevPart.part}`}
                className="text-muted-foreground hover:text-foreground transition-colors ui-font text-sm"
              >
                ← Part {prevPart.part}
              </Link>
            )}
          </div>

          <Link
            href="/book"
            className="text-muted-foreground hover:text-foreground transition-colors ui-font text-sm"
          >
            Book Overview
          </Link>

          <div>
            {nextPart && !nextPart.disabled && (
              <Link
                href={`/book/part-${nextPart.part}`}
                className="text-muted-foreground hover:text-foreground transition-colors ui-font text-sm"
              >
                Part {nextPart.part} →
              </Link>
            )}
            {nextPart && nextPart.disabled && (
              <span className="text-muted-foreground/50 ui-font text-sm">
                Part {nextPart.part} (coming soon)
              </span>
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}
