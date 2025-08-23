import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-bold tracking-tight text-foreground mb-6",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8 first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight text-foreground mb-3 mt-6",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "scroll-m-20 text-lg font-semibold tracking-tight text-foreground mb-2 mt-4",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "leading-7 text-muted-foreground mb-4 [&:not(:first-child)]:mt-4",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn("my-6 ml-6 list-disc text-muted-foreground", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-2 border-border pl-6 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => {
      const isInPre =
        props.children?.toString().includes("\n") ||
        className?.includes("hljs");

      if (isInPre) {
        return (
          <code
            className={className}
            style={{
              color: "inherit",
              background: "transparent",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
            {...props}
          />
        );
      }

      return (
        <code
          className={cn(
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
            className
          )}
          {...props}
        />
      );
    },
    pre: ({
      className,
      children,
      ...props
    }: React.ComponentPropsWithoutRef<"pre">) => {
      return (
        <pre
          className={cn(
            "mb-4 mt-6 overflow-x-auto rounded-xl border p-6",
            "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800",
            "[&_code]:text-sm",
            className
          )}
          style={{
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            fontSize: "14px",
            lineHeight: "1.6",
            letterSpacing: "0.02em",
          }}
          {...props}
        >
          {children}
        </pre>
      );
    },
    strong: ({ className, ...props }) => (
      <strong
        className={cn("font-semibold text-foreground", className)}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
          className
        )}
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="my-4 border-border" {...props} />,
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn(
            "w-full border-collapse border border-border",
            className
          )}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("border-b border-border", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-border px-4 py-2 text-left font-bold text-foreground bg-muted",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border border-border px-4 py-2 text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}
