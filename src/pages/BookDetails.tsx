// src/pages/BookDetails.tsx
import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { books, normalizeSlug, slugify } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ShoppingBag } from "lucide-react";

const BookDetails = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const book = useMemo(() => {
    const wanted = normalizeSlug(slug);
    let found = books.find((b) => normalizeSlug(b.slug) === wanted);
    if (!found) {
      found = books.find((b) => slugify(b.title) === wanted);
    }
    return found || null;
  }, [slug]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-2">Product not found</h1>
            <p className="text-muted-foreground mb-6">
              We couldn’t find the book you were looking for.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="border border-border rounded-xl overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                {book.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                A {book.category} title by{" "}
                <span className="font-medium">{book.author}</span>
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(book.rating)
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {book.rating.toFixed(1)} / 5
                </span>
              </div>

              <div className="mt-6 text-xl font-semibold">
                Ksh{book.price.toLocaleString("en-KE")}
              </div>

              <div className="mt-6">
                <Button
                  className="px-6"
                  onClick={() => {
                    // Dispatch a global "add to cart" event the Header listens to
                    window.dispatchEvent(
                      new CustomEvent("cart:add", {
                        detail: {
                          id: book.id,
                          title: book.title,
                          price: book.price,
                          image: book.image,
                          qty: 1,
                        },
                      })
                    );
                  }}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to bag
                </Button>
              </div>

              {/* Spaced paragraphs for description */}
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                {(book.description ?? "No description available yet.")
                  .split(/\n{2,}/)
                  .map((para, idx) => <p key={idx}>{para}</p>)}
              </div>

              <div className="mt-10">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const el = document.getElementById("featured-books");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetails;
