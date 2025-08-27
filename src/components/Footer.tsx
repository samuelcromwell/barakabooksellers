import { Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="w-128 h-16">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/A0xwa3nL22teM7ow/bb-logo-final-web-m5KLL26WO7t0vrD5.png"
                alt="Loresho Digital Centre Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <br></br>
            <h2>Loresho Digital Centre</h2>
            <br></br>
            <p className="text-primary-foreground/80 mb-4">
              LDC empowers the generation of tomorrow for a brighter future and hope for every individual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
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
                  <p className="text-primary-foreground/80">info@ldckenya.com</p>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Loresho Digital Centre. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2">
            Empowering the generation of tomorrow for a brighter future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
