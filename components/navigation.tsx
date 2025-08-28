"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/book", label: "Book" },
    { href: "/reading-list", label: "Reading List" },
    { href: "/author", label: "Author" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-normal text-foreground hover:text-muted-foreground transition-colors ui-font"
          >
            <span className="hidden sm:block">Technical Writing Academy</span>
            <span className="sm:hidden">TWA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-normal transition-colors hover:text-foreground ui-font",
                  pathname === item.href
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-foreground transition-colors ui-font"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    "text-base font-normal transition-colors hover:text-foreground py-2 ui-font",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
