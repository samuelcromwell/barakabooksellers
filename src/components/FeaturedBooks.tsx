import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import book images
import thingsFallApart from "@/assets/books/things-fall-apart.jpg";
import childUniverse from "@/assets/books/child-universe.jpg";
import arrowGod from "@/assets/books/arrow-god.jpg";
import grainWheat from "@/assets/books/grain-wheat.jpg";

const featuredBooks = [
  {
    id: "1",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    price: 1200,
    image: thingsFallApart,
    category: "Classic Fiction",
    rating: 4.8,
    featured: true,
  },
  {
    id: "2",
    title: "A Child of the Universe",
    author: "Prof. Joseph Kamara",
    price: 1500,
    image: childUniverse,
    category: "Contemporary",
    rating: 4.6,
    featured: true,
  },
  {
    id: "3",
    title: "Arrow of God",
    author: "Chinua Achebe",
    price: 1300,
    image: arrowGod,
    category: "Historical Fiction",
    rating: 4.7,
    featured: true,
  },
  {
    id: "4",
    title: "A Grain of Wheat",
    author: "Ngugi wa Thiong'o",
    price: 1400,
    image: grainWheat,
    category: "Historical Fiction",
    rating: 4.9,
    featured: true,
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional African literature, 
            from award-winning novels to emerging voices that define our cultural narrative.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="btn-hero group">
            View All Books
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;