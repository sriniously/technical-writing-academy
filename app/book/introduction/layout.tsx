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

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <BreadcrumbPage>Introduction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content */}
      <article className="prose prose-lg max-w-none">{children}</article>

      {/* Navigation */}
      <nav className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <Link
            href="/book"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Book Contents
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-0">
          <Link
            href="/book/foreword"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group p-3 sm:p-0 border border-border rounded-md sm:border-0 min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs">Previous</p>
              <p className="font-medium">Foreword</p>
            </div>
          </Link>

          <Link
            href="/book/part-1"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group text-right p-3 sm:p-0 border border-border rounded-md sm:border-0 min-h-[44px]"
          >
            <div className="min-w-0">
              <p className="text-xs">Next</p>
              <p className="font-medium">Part 1: Foundations</p>
            </div>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </div>
      </nav>
    </div>
  );
}