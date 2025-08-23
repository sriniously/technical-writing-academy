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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6 sm:mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/book">Book</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/book/part-${partNumber}`}>
              Part {partNumber}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Chapter {chapterNumber}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Chapter Header */}
      <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-border">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Part {partNumber} • Chapter {chapterNumber}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{title}</h1>
        </div>
      </header>

      {/* Chapter Content */}
      <article className="prose prose-lg max-w-none">{children}</article>

      {/* Navigation */}
      <nav className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <Link
            href={`/book/part-${partNumber}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Part {partNumber} Introduction
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-0">
          {prevChapter !== null ? (
            <Link
              href={prevChapter?.href || ""}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group p-3 sm:p-0 border border-border rounded-md sm:border-0 min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-xs">Previous</p>
                <p className="font-medium truncate">{prevChapter?.title}</p>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextChapter !== null ? (
            <Link
              href={nextChapter?.href || ""}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group text-right p-3 sm:p-0 border border-border rounded-md sm:border-0 min-h-[44px]"
            >
              <div className="min-w-0">
                <p className="text-xs">Next</p>
                <p className="font-medium truncate">{nextChapter?.title}</p>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </nav>
    </div>
  );
}
