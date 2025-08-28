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
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="space-y-12">
        <section className="space-y-6">
          <h1 className="text-3xl font-normal">Reading List</h1>
          <div className="prose max-w-none">
            <p>
              Books that have shaped my thinking about technical communication and writing. 
              Some focus specifically on documentation, others on the broader art of clear communication.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          {books.map((book, index) => (
            <article key={index} className="space-y-3 pb-6 border-b border-border/20 last:border-b-0 last:pb-0">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{book.title}</h3>
                <p className="text-muted-foreground ui-font">by {book.author}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed opacity-90">
                {book.description}
              </p>
              <span className="inline-block text-xs text-muted-foreground uppercase tracking-wide ui-font">
                {book.category}
              </span>
            </article>
          ))}
        </section>

        <section className="pt-8 border-t border-border/30">
          <div className="prose max-w-none">
            <p className="text-muted-foreground italic">
              This list will grow over time as I discover more resources that contribute to better technical writing. 
              Each book here has influenced how I think about communication in meaningful ways.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
