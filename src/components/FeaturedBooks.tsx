import { useState } from "react"; // Import useState hook for search functionality
import { Search } from "lucide-react"; // Import the Search icon
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import BookCard from "./BookCard";

const featuredBooks = [
  {
    id: "1",
    title: "A Child Of The Universe",
    author: "Prof. Joseph Kamara",
    price: 1500,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/49e86cae-03de-4ef3-86b6-69507be677c4.png",
    category: "Contemporary",
    rating: 4.6,
    featured: true,
  },
  {
    id: "2",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    price: 1200,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187954637-thingsfallapart.png",
    category: "Classic Fiction",
    rating: 4.8,
    featured: true,
  },
  {
    id: "3",
    title: "Arrow of God",
    author: "Chinua Achebe",
    price: 1300,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187914265-arrowofgod.png",
    category: "Historical Fiction",
    rating: 4.7,
    featured: true,
  },
  {
    id: "4",
    title: "A Grain of Wheat",
    author: "Ngugi wa Thiong'o",
    price: 1400,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187469923-agrainofwheat.png",
    category: "Historical Fiction",
    rating: 4.9,
    featured: true,
  },
  {
    id: "5",
    title: "Kill me Quick",
    author: "Meja Mwangi",
    price: 1000,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745186333920-killmequick.png",
    category: "Thriller",
    rating: 4.3,
    featured: true,
  },
  {
    id: "6",
    title: "Trapped In History",
    author: "Nicholas Rankin",
    price: 900,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1743477135109-trappedinhistory.jpeg",
    category: "Historical Fiction",
    rating: 4.5,
    featured: true,
  },
  {
    id: "7",
    title: "The Snow Girls",
    author: "Amina Ali",
    price: 1300,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1736183762141-SnowGirls.jpeg",
    category: "Romance",
    rating: 4.2,
    featured: true,
  },
  {
    id: "8",
    title: "The Trident",
    author: "John Okoye",
    price: 1800,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732900738284-TheTrident.png",
    category: "Adventure",
    rating: 4.8,
    featured: true,
  },
  {
    id: "9",
    title: "Frontier Lawman",
    author: "K. R. Solomon",
    price: 950,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732900805048-FrontierLawman.png",
    category: "Western",
    rating: 4.4,
    featured: true,
  },
  {
    id: "10",
    title: "Stanley P.",
    author: "Ademola Bello",
    price: 1400,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901293015-StanleyP..png",
    category: "Drama",
    rating: 4.7,
    featured: true,
  },
  {
    id: "11",
    title: "The Prime of Miss Jean Brodie",
    author: "Muriel Spark",
    price: 1000,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901343994-ThePrimeofMiss.png",
    category: "Fiction",
    rating: 4.6,
    featured: true,
  },
  {
    id: "12",
    title: "The Games book",
    author: "Hugh Atkinson",
    price: 1300,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901398995-TheGamesbook.png",
    category: "Adventure",
    rating: 4.7,
    featured: true,
  },
  {
    id: "13",
    title: "The Saracen",
    author: "Frank Yerby",
    price: 1450,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901449906-Thesaracen.png",
    category: "Historical Fiction",
    rating: 4.9,
    featured: true,
  },
  {
    id: "14",
    title: "Billy Budd",
    author: "Herman Melville",
    price: 1320,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901493915-BillyBudd.png",
    category: "Classic Fiction",
    rating: 4.8,
    featured: true,
  },
  {
    id: "15",
    title: "Audacity and Sacrifice",
    author: "Grace Ntale",
    price: 1500,
    image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732904972453-AudacityandSacrifice.jpeg",
    category: "Biography",
    rating: 4.6,
    featured: true,
  },
];

const FeaturedBooks = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing search query

  return (
    <>
      <section className="py-16 bg-gradient-subtle">
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
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
            {featuredBooks
              .filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
              ) // Filter books based on search query
              .map((book) => (
                <BookCard key={book.id} {...book} />
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
