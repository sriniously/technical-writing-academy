import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List - Technical Writing Academy",
  description:
    "Curated recommendations for books and resources to enhance your technical writing skills.",
};

export default function ReadingListPage() {
  const books = [
    {
      title: "The Elements of Style",
      author: "William Strunk Jr. and E.B. White",
      description:
        "A timeless guide to writing clearly and effectively. Essential for understanding the fundamentals of good prose.",
      category: "Writing Fundamentals",
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      description:
        "While focused on web usability, this book offers valuable insights into creating user-friendly documentation.",
      category: "User Experience",
    },
    {
      title: "The Sense of Style",
      author: "Steven Pinker",
      description:
        "A modern take on writing style that bridges the gap between traditional grammar and contemporary communication.",
      category: "Writing Style",
    },
    {
      title: "Docs for Developers",
      author:
        "Jared Bhatti, Zachary Sarah Corleissen, Jen Lambourne, David Nunez, Heidi Waterhouse",
      description:
        "A comprehensive guide specifically for creating technical documentation in software development.",
      category: "Technical Documentation",
    },
    {
      title: "The Pyramid Principle",
      author: "Barbara Minto",
      description:
        "Learn to structure your thinking and writing logically, essential for clear technical communication.",
      category: "Information Architecture",
    },
    {
      title: "Made to Stick",
      author: "Chip Heath and Dan Heath",
      description:
        "Understand what makes ideas memorable and how to communicate complex concepts effectively.",
      category: "Communication",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-12">
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Curated Reading List
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Essential books and resources to enhance your technical writing
            skills.
          </p>
        </section>

        {/* Books Section */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground border-b border-border pb-2">
            Essential Books
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {books.map((book, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 sm:p-6 space-y-3"
              >
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    by {book.author}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {book.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
