import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { books } from "@/data/books.ts";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ShoppingBag } from "lucide-react";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();

  const book = useMemo(() => books.find((b) => b.id === id), [id]);

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
            {/* Image */}
            <div className="border border-border rounded-xl overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                {book.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                A {book.category} title by <span className="font-medium">{book.author}</span>
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(book.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{book.rating.toFixed(1)} / 5</span>
              </div>

              <div className="mt-6 text-xl font-semibold">
                Ksh{book.price.toLocaleString("en-KE")}
              </div>

              <div className="mt-6">
                <Button className="px-6">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to bag
                </Button>
              </div>

              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>{book.description ?? "No description available yet."}</p>
              </div>

              <div className="mt-10">
                <Button variant="outline" asChild>
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to books
                  </Link>
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
