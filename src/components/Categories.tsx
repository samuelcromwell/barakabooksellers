import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Heart, 
  Award,
  Users,
  Sparkles
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All Products",
    description: "Browse our complete collection",
    icon: BookOpen,
    count: "500+ books",
    color: "bg-gradient-to-br from-primary/20 to-primary/5",
  },
  {
    id: "featured",
    name: "Featured",
    description: "Curated picks from our experts",
    icon: Award,
    count: "25 books",
    color: "bg-gradient-to-br from-accent/20 to-accent/5",
  },
  {
    id: "historical",
    name: "Historical Fiction",
    description: "Stories that shaped our past",
    icon: Clock,
    count: "150+ books",
    color: "bg-gradient-to-br from-primary-glow/20 to-primary-glow/5",
  },
  {
    id: "contemporary",
    name: "Contemporary",
    description: "Modern voices and fresh perspectives",
    icon: Sparkles,
    count: "200+ books",
    color: "bg-gradient-to-br from-secondary/40 to-secondary/10",
  },
  {
    id: "romance",
    name: "Romance & Drama",
    description: "Love stories from the heart of Africa",
    icon: Heart,
    count: "80+ books",
    color: "bg-gradient-to-br from-red-100 to-red-50",
  },
  {
    id: "biography",
    name: "Biography & Memoir",
    description: "Life stories of remarkable people",
    icon: Users,
    count: "65+ books",
    color: "bg-gradient-to-br from-blue-100 to-blue-50",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully organized collection of African literature across different genres and themes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium text-sm">
                      {category.count}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:text-primary hover:bg-primary/10"
                    >
                      Browse →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;