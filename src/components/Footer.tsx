import { Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Baraka Booksellers</h3>
                <p className="text-primary-foreground/80 text-sm">Celebrating African Literature</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your premier destination for authentic African literature, 
              connecting readers with the rich storytelling traditions of the continent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#authors" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Authors
                </a>
              </li>
              <li>
                <a href="#categories" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fiction" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Historical Fiction
                </a>
              </li>
              <li>
                <a href="#contemporary" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contemporary
                </a>
              </li>
              <li>
                <a href="#romance" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Romance & Drama
                </a>
              </li>
              <li>
                <a href="#biography" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Biography & Memoir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact & Delivery</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Judy - Delivery Coordinator</p>
                  <p className="text-primary-foreground/80">07223334456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80">info@barakabooksellers.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-primary-foreground/80">Nairobi, Kenya</p>
                  <p className="text-primary-foreground/70 text-sm">Delivery available nationwide</p>
                </div>
              </div>
            </div>

            <Button 
              variant="secondary" 
              className="mt-4 w-full bg-accent text-primary hover:bg-accent/90"
            >
              Contact for Delivery
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Baraka Booksellers. Powered by Loresho Digital Centre. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2">
            Celebrating African voices, one book at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;