import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import {
  PenLine,
  FilePlus2,
  UploadCloud,
  CheckCircle2,
  Mail,
} from "lucide-react";

const Authors = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // TODO: Wire this up to your backend/email service.
    // For now we just build a helpful mailto fallback so it's functional.
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const manuscript = data.get("manuscript");
    const message = data.get("message");

    const subject = encodeURIComponent("Author Enquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nManuscript/Link: ${
        manuscript || "-"
      }\n\nMessage:\n${message}`
    );

    setSubmitting(true);
    // Replace with your info address if you have one configured.
    window.location.href = `mailto:hello@barakabooksellers.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero + Form */}
        <section className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
            {/* 1) Intro Text */}
            <div className="order-1 md:order-1">
              <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                <span className="block">Welcome</span>
                <span className="block">Authors</span>
              </h1>

              <p className="mt-6 max-w-xl text-muted-foreground">
                Happy to help you share your story with the world. Whether you’re
                experienced or new to publishing, we offer professional support
                for print and digital formats—so you can reach a global audience.
              </p>
            </div>

            {/* 2) Image / Visual  (mobile: after intro; desktop: right column; match form height) */}
            <div className="order-2 md:order-2 md:row-span-2">
              {/* Mobile: keep tall portrait; Desktop: stretch to full height of the two rows */}
              <div className="relative mx-auto aspect-[3/4] md:aspect-auto md:h-full w-full max-w-[720px] overflow-hidden rounded-xl border border-border shadow-sm">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1190,fit=crop/A0xwa3nL22teM7ow/pexels-dariaobymaha-1684151-dOqyKLrkolCBOLE5.jpg"
                  alt="Notebook, coffee and a phone on a desk"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3) Form  (mobile: after image; desktop: under intro in left column) */}
            <div className="order-3 md:order-3">
              <Card className="mt-0 md:mt-8">
                <CardContent className="pt-6">
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">
                        Your email<span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message">
                        Message<span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us briefly about your book, genre, and timelines..."
                        className="min-h-[140px]"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        We respond within 1–2 business days.
                      </div>
                      <Button type="submit" disabled={submitting} className="px-6">
                        {submitting ? "Sending..." : "Click to send your request"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Authors;
