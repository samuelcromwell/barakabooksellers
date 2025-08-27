import { useState } from "react";
import { Search, Menu, X, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Contact Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          FOR PICK UP AND DELIVERIES CONTACT - JUDY 07223334456
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-128 h-16">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/A0xwa3nL22teM7ow/bb-logo-final-web-m5KLL26WO7t0vrD5.png"
                alt="Baraka Booksellers Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Homepage
              </a>
              <a href="#authors" className="text-muted-foreground hover:text-primary transition-colors">
                Authors
              </a>
              <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">
                Categories
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for a book..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/30 border-border focus:border-primary"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for a book..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/30 border-border focus:border-primary w-full"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Homepage
                </a>
                <a href="#authors" className="text-muted-foreground hover:text-primary transition-colors">
                  Authors
                </a>
                <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
