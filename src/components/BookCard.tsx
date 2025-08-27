import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  featured?: boolean;
}

const BookCard = ({ 
  title, 
  author, 
  price, 
  image, 
  category, 
  rating = 4.5, 
  featured = false 
}: BookCardProps) => {
  return (
    <Card className="book-card group cursor-pointer border-border overflow-hidden">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button size="sm" className="btn-hero">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {featured && (
              <Badge className="bg-accent text-accent-foreground font-medium">
                Featured
              </Badge>
            )}
            {category && (
              <Badge variant="secondary" className="bg-white/90 text-foreground">
                {category}
              </Badge>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>

        {/* Book Info */}
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-3 text-sm">
            by {author}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">
                Ksh{price.toLocaleString()}
              </span>
            </div>
            
            <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;