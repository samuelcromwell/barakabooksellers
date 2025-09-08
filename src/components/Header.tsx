import { useMemo, useState } from "react";
import { Search, Menu, X, Phone, ShoppingBag, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

// A tiny demo cart type. Replace with your real cart state/props later.
type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  image?: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Demo local cart state. Plug in your store/ctx when ready.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalQty = useMemo(
    () => cartItems.reduce((sum, it) => sum + it.qty, 0),
    [cartItems]
  );
  const subtotal = useMemo(
    () => cartItems.reduce((sum, it) => sum + it.qty * it.price, 0),
    [cartItems]
  );

  const removeItem = (id: string) =>
    setCartItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <>
      {/* Contact Banner */}
      {/* <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          FOR PICK UP AND DELIVERIES CONTACT - JUDY 07223334456
        </div>
      </div> */}

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95 py-8">
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
              <a href="#advertisers" className="text-muted-foreground hover:text-primary transition-colors">
                Advertisers
              </a>
            </nav>

            {/* Search Bar */}
            {/* REPLACED (kept here as requested): The desktop search bar has been replaced by the Shopping Bag (Cart) trigger.
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
            */}

            {/* Shopping Bag (Cart) - hidden on mobile, visible desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative"
                    aria-label="Open shopping bag"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {/* Badge */}
                    <span
                      className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold leading-none text-primary-foreground"
                      aria-hidden={totalQty === 0}
                      style={{ display: totalQty === 0 ? "none" : undefined }}
                    >
                      {totalQty}
                    </span>
                    <span className="ml-2 hidden sm:inline text-sm font-medium">
                      Shopping bag
                    </span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5" />
                      Shopping bag
                    </SheetTitle>
                  </SheetHeader>

                  {/* Empty state */}
                  {cartItems.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-lg font-semibold text-foreground">
                        Shopping bag is empty
                      </p>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col">
                      <ScrollArea className="flex-1 pr-3">
                        <div className="space-y-4 py-4">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 rounded-lg border border-border p-3"
                            >
                              <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : null}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Qty: {item.qty}
                                </p>
                              </div>
                              <div className="text-sm font-semibold">
                                KES {(item.price * item.qty).toLocaleString()}
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.title}`}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>

                      {/* Summary */}
                      <div className="space-y-3 border-t border-border pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">
                            KES {subtotal.toLocaleString()}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <SheetClose asChild>
                            <Button variant="outline" className="w-full">
                              Continue shopping
                            </Button>
                          </SheetClose>
                          <Button className="w-full">Checkout</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button (visible on mobile) */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Search */}
          {/* REMOVED per instruction: Mobile search input should not appear anymore.
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
          */}

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
                <a href="#advertisers" className="text-muted-foreground hover:text-primary transition-colors">
                  Advertisers
                </a>

                {/* Shopping bag inside the mobile dropdown */}
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-left"
                      aria-label="Open shopping bag"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="font-medium">Shopping bag</span>
                      </span>
                      {/* Badge */}
                      <span
                        className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold leading-none text-primary-foreground"
                        aria-hidden={totalQty === 0}
                        style={{ display: totalQty === 0 ? "none" : undefined }}
                      >
                        {totalQty}
                      </span>
                    </button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        Shopping bag
                      </SheetTitle>
                    </SheetHeader>

                    {cartItems.length === 0 ? (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-lg font-semibold text-foreground">
                          Shopping bag is empty
                        </p>
                      </div>
                    ) : (
                      <div className="flex h-full flex-col">
                        <ScrollArea className="flex-1 pr-3">
                          <div className="space-y-4 py-4">
                            {cartItems.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center gap-3 rounded-lg border border-border p-3"
                              >
                                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                                  {item.image ? (
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : null}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Qty: {item.qty}
                                  </p>
                                </div>
                                <div className="text-sm font-semibold">
                                  KES {(item.price * item.qty).toLocaleString()}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                  aria-label={`Remove ${item.title}`}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>

                        <div className="space-y-3 border-t border-border pt-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-semibold">
                              KES {subtotal.toLocaleString()}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <SheetClose asChild>
                              <Button variant="outline" className="w-full">
                                Continue shopping
                              </Button>
                            </SheetClose>
                            <Button className="w-full">Checkout</Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
