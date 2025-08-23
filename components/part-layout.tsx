"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, BookOpen, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { bookParts } from "@/app/book/book-structure"

interface PartLayoutProps {
  partNumber: number
  title: string
  description?: string
  children: React.ReactNode
}

export function PartLayout({ partNumber, title, description, children }: PartLayoutProps) {
  const currentPart = bookParts.find(p => p.part === partNumber)
  const prevPart = partNumber > 1 ? bookParts.find(p => p.part === partNumber - 1) : null
  const nextPart = partNumber < bookParts.length ? bookParts.find(p => p.part === partNumber + 1) : null
  
  // For Part 1, previous should go to Introduction
  const hasPrevIntro = partNumber === 1
  
  const firstChapter = currentPart?.chapters.find(ch => !ch.disabled)
  const isPartDisabled = currentPart?.disabled

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 sm:mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <span>/</span>
          <Link href="/book" className="hover:text-primary transition-colors">
            Book
          </Link>
          <span>/</span>
          <span className="text-foreground">Part {partNumber}</span>
        </div>
      </nav>

      {/* Part Header */}
      <Card className="mb-6 sm:mb-8">
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Part {partNumber}: {title}
              {isPartDisabled && (
                <span className="block sm:inline-block sm:ml-3 mt-2 sm:mt-0 text-xs sm:text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded">
                  Coming Soon
                </span>
              )}
            </h1>
          </div>
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground">{description}</p>
          )}
        </CardContent>
      </Card>

      {/* Part Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        {children}
      </div>

      {/* Chapters in this Part */}
      {currentPart && (
        <Card className="mb-6 sm:mb-8">
          <CardContent className="pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Chapters in This Part</h2>
            <div className="space-y-1 sm:space-y-2">
              {currentPart.chapters.map((chapter, index) => (
                <div key={index}>
                  {chapter.disabled ? (
                    <div className="p-3 text-sm sm:text-base text-muted-foreground">
                      Chapter {index + 1}: {chapter.title} (Coming Soon)
                    </div>
                  ) : (
                    <Link
                      href={chapter.href}
                      className="p-3 rounded-lg hover:bg-accent transition-colors min-h-[44px] flex items-center"
                    >
                      <span className="text-sm sm:text-base">
                        <span className="font-medium">Chapter {index + 1}:</span> {chapter.title}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Separator className="my-6 sm:my-8" />

      {/* Navigation */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" asChild className="min-h-[44px]">
            <Link href="/book">
              <BookOpen className="mr-2 h-4 w-4" />
              Book Overview
            </Link>
          </Button>
          {firstChapter && !isPartDisabled && (
            <Button variant="outline" size="sm" asChild className="min-h-[44px]">
              <Link href={firstChapter.href}>
                Start Part {partNumber}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {isPartDisabled && (
            <Button variant="outline" size="sm" disabled className="min-h-[44px]">
              Part {partNumber} Coming Soon
            </Button>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          {hasPrevIntro && (
            <Button variant="outline" size="sm" asChild className="min-h-[44px]">
              <Link href="/book/introduction">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Introduction
              </Link>
            </Button>
          )}
          {prevPart && !prevPart.disabled && (
            <Button variant="outline" size="sm" asChild className="min-h-[44px]">
              <Link href={`/book/part-${prevPart.part}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Part {prevPart.part}
              </Link>
            </Button>
          )}
          {prevPart && prevPart.disabled && (
            <Button variant="outline" size="sm" disabled className="min-h-[44px]">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Part {prevPart.part} (Coming Soon)
            </Button>
          )}
          {nextPart && !nextPart.disabled && (
            <Button variant="default" size="sm" asChild className="min-h-[44px]">
              <Link href={`/book/part-${nextPart.part}`}>
                Part {nextPart.part}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {nextPart && nextPart.disabled && (
            <Button variant="outline" size="sm" disabled className="min-h-[44px]">
              Part {nextPart.part} (Coming Soon)
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}