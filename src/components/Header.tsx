import { useEffect, useMemo, useState } from "react";
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

  // Local cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // Control the sheet so BookDetails can open it programmatically
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Listen for "cart:add" events dispatched from anywhere (e.g., BookDetails)
  useEffect(() => {
    const onAdd = (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        id: string;
        title: string;
        price: number;
        image?: string;
        qty?: number;
      };
      if (!detail?.id) return;

      setCartItems((prev) => {
        const idx = prev.findIndex((p) => p.id === detail.id);
        if (idx === -1) {
          return [
            ...prev,
            {
              id: detail.id,
              title: detail.title,
              price: detail.price,
              image: detail.image,
              qty: detail.qty ?? 1,
            },
          ];
        }
        // increment quantity
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + (detail.qty ?? 1) };
        return next;
      });

      // open the sheet
      setIsCartOpen(true);
    };

    window.addEventListener("cart:add" as any, onAdd as any);
    return () => window.removeEventListener("cart:add" as any, onAdd as any);
  }, []);

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

  const decQty = (id: string) =>
    setCartItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it))
        .filter(Boolean) as CartItem[]
    );

  const incQty = (id: string) =>
    setCartItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );

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
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95 py-3 md:py-2">
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Homepage
              </a>
              <a href="/authors" className="text-muted-foreground hover:text-primary transition-colors">
                Authors
              </a>
              <a href="/advertisers" className="text-muted-foreground hover:text-primary transition-colors">
                Advertisers
              </a>
            </nav>

            {/* Logo */}
            <div className="w-128 h-16 md:h-36">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A0xwa3nL22teM7ow/bbs-logo2-AGBz9NV4M8uQ808L.png"
                alt="Baraka Booksellers Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shopping Bag (Cart) - hidden on mobile, visible desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
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

                <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col">
                  <div className="px-7 pt-6 pb-2">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2 text-2xl">
                        <ShoppingBag className="h-5 w-5" />
                        Shopping bag
                      </SheetTitle>
                    </SheetHeader>
                  </div>

                  {/* Empty state */}
                  {cartItems.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center px-7">
                      <p className="text-lg font-semibold text-foreground">
                        Shopping bag is empty
                      </p>
                    </div>
                  ) : (
                    <>
                      <ScrollArea className="flex-1 px-7">
                        <div className="space-y-4 py-2">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="rounded-xl border border-border p-3"
                            >
                              <div className="flex items-start gap-3">
                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                                  {item.image ? (
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : null}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-2">
                                    <div>
                                      <p className="truncate text-base font-semibold">
                                        {item.title}
                                      </p>
                                      <p className="text-sm text-muted-foreground mt-1">
                                        Ksh{item.price.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                                      </p>
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

                                  <div className="mt-3 flex items-center gap-3">
                                    <span className="text-sm text-muted-foreground">Qty:</span>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => decQty(item.id)}
                                        aria-label="Decrease quantity"
                                      >
                                        −
                                      </Button>
                                      <span className="px-2 text-sm font-medium">{item.qty}</span>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => incQty(item.id)}
                                        aria-label="Increase quantity"
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>

                      {/* Summary footer */}
                      <div className="border-t border-border mt-2 p-7">
                        <div className="flex items-center justify-between text-base font-semibold mb-4">
                          <span>Subtotal:</span>
                          <span>
                            Ksh{subtotal.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <Button className="w-full h-11">Checkout</Button>
                        <p className="mt-2 text-xs text-muted-foreground text-center">
                          🔒 Secure checkout
                        </p>
                      </div>
                    </>
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Homepage
                </a>
                <a href="/authors" className="text-muted-foreground hover:text-primary transition-colors">
                  Authors
                </a>
                <a href="/advertisers" className="text-muted-foreground hover:text-primary transition-colors">
                  Advertisers
                </a>

                {/* Shopping bag in mobile dropdown */}
                <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-left"
                      aria-label="Open shopping bag"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="font-medium">Shopping bag</span>
                      </span>
                      <span
                        className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold leading-none text-primary-foreground"
                        aria-hidden={totalQty === 0}
                        style={{ display: totalQty === 0 ? "none" : undefined }}
                      >
                        {totalQty}
                      </span>
                    </button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col">
                    <div className="px-7 pt-6 pb-2">
                      <SheetHeader>
                        <SheetTitle className="flex items-center gap-2 text-2xl">
                          <ShoppingBag className="h-5 w-5" />
                          Shopping bag
                        </SheetTitle>
                      </SheetHeader>
                    </div>

                    {cartItems.length === 0 ? (
                      <div className="flex-1 flex items-center justify-center px-7">
                        <p className="text-lg font-semibold text-foreground">
                          Shopping bag is empty
                        </p>
                      </div>
                    ) : (
                      <>
                        <ScrollArea className="flex-1 px-7">
                          <div className="space-y-4 py-2">
                            {cartItems.map((item) => (
                              <div key={item.id} className="rounded-xl border border-border p-3">
                                <div className="flex items-start gap-3">
                                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                                    {item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                      />
                                    ) : null}
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <p className="truncate text-base font-semibold">
                                          {item.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          Ksh{item.price.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                                        </p>
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

                                    <div className="mt-3 flex items-center gap-3">
                                      <span className="text-sm text-muted-foreground">Qty:</span>
                                      <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm" onClick={() => decQty(item.id)}>
                                          −
                                        </Button>
                                        <span className="px-2 text-sm font-medium">{item.qty}</span>
                                        <Button variant="outline" size="sm" onClick={() => incQty(item.id)}>
                                          +
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>

                        <div className="border-t border-border mt-2 p-7">
                          <div className="flex items-center justify-between text-base font-semibold mb-4">
                            <span>Subtotal:</span>
                            <span>
                              Ksh{subtotal.toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                            </span>
                          </div>
                          <SheetClose asChild>
                            <Button variant="outline" className="w-full h-11">
                              Continue shopping
                            </Button>
                          </SheetClose>
                          <Button className="w-full h-11 mt-2">Checkout</Button>
                          <p className="mt-2 text-xs text-muted-foreground text-center">
                            🔒 Secure checkout
                          </p>
                        </div>
                      </>
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
