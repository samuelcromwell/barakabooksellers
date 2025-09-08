import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[70svh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.goethe.de/resources/files/apps/dlp_tlm/data/jpeg1/vbild-leseempfehlung-c-pexels-v1-formatkey-webp-w1920r.jpeg"
        alt="African Warrior - Celebrating African Literature"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_30%]"
      />

      {/* Overlays for readability */}
      {/* Left vignette to make text area pop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      {/* Vertical fade so bottom content and header separators read well */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      {/* Optional subtle noise/glass feel without extra assets */}
      <div className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-6 mt-6">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              African Literature Collection
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
            Discover the <span className="text-gradient">Soul</span> of African{" "}
            <span className="text-gradient">Literature</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            From timeless classics to contemporary masterpieces, explore the rich tapestry
            of African storytelling that has shaped literature worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button size="lg" className="btn-hero group text-lg px-8 py-4 ring-1 ring-white/10">
              Browse Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 pb-16">
            <div className="flex flex-wrap gap-8 rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 p-4 md:p-6">
              <div className="text-center min-w-[9rem]">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/80">Books Available</div>
              </div>
              <div className="text-center min-w-[9rem]">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-white/80">African Authors</div>
              </div>
              <div className="text-center min-w-[9rem]">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-white/80">Countries Represented</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
