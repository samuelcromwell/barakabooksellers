// src/components/FeaturedBooks.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BookCard from "./BookCard";
import { books } from "@/data/books"; // uses books with { slug }

const FeaturedBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section id="featured-books" className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              All <span className="text-gradient">Products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Discover our handpicked selection of exceptional African literature, 
              from award-winning novels to emerging voices that define our cultural narrative.
            </p>

            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for a book..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full bg-muted/30 border-border focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {books
              .filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((book) => (
                <Link
                  key={book.id}
                  to={`/${book.slug}`} // <-- slug-only path
                  className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                >
                  <BookCard {...book} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Image Section with White Background */}
      <section className="py-8 bg-white">
        <div className="text-center">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=131,fit=crop/A0xwa3nL22teM7ow/bb-pwrd-by-amzn-YKb6QBErgzcy0gPN.png"
            alt="Powered by Amazon"
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default FeaturedBooks;
