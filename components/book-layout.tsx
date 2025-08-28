import type React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BookLayoutProps {
  children: React.ReactNode;
  title: string;
  partNumber: number;
  chapterNumber: number;
  prevChapter?: { href: string; title: string } | null;
  nextChapter?: { href: string; title: string } | null;
}

export function BookLayout({
  children,
  title,
  partNumber,
  chapterNumber,
  prevChapter,
  nextChapter,
}: BookLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="mb-12 text-sm text-muted-foreground">
        <Link href="/book" className="hover:text-foreground transition-colors">
          Book
        </Link>
        <span className="mx-2">→</span>
        <Link href={`/book/part-${partNumber}`} className="hover:text-foreground transition-colors">
          Part {partNumber}
        </Link>
        <span className="mx-2">→</span>
        <span>Chapter {chapterNumber}</span>
      </nav>

      <header className="mb-12">
        <div className="space-y-3">
          <p className="text-muted-foreground ui-font">
            Part {partNumber}, Chapter {chapterNumber}
          </p>
          <h1 className="text-3xl sm:text-4xl font-normal leading-tight">{title}</h1>
        </div>
      </header>

      <article className="prose max-w-none">{children}</article>

      <nav className="mt-16 pt-8 border-t border-border/30 space-y-6">
        <div className="text-center">
          <Link
            href={`/book/part-${partNumber}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors ui-font"
          >
            ← Back to Part {partNumber}
          </Link>
        </div>
        
        <div className="flex justify-between items-center">
          {prevChapter !== null ? (
            <Link
              href={prevChapter?.href || ""}
              className="text-muted-foreground hover:text-foreground transition-colors group text-left ui-font"
            >
              <p className="text-xs uppercase tracking-wide mb-1">Previous</p>
              <p className="text-sm">{prevChapter?.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {nextChapter !== null ? (
            <Link
              href={nextChapter?.href || ""}
              className="text-muted-foreground hover:text-foreground transition-colors group text-right ui-font"
            >
              <p className="text-xs uppercase tracking-wide mb-1">Next</p>
              <p className="text-sm">{nextChapter?.title}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}
