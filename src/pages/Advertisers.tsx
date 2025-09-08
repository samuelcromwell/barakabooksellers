// #src/pages/Advertisers.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Advertisers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <h1 className="text-center font-extrabold tracking-tight leading-[1.05] text-5xl md:text-7xl">
            <span className="block">Advertise</span>
            <span className="block">with us.</span>
          </h1>

          <div className="mt-8 md:mt-10 max-w-3xl mx-auto text-center text-muted-foreground">
            <p>
              Reach a targeted audience of passionate readers, writers, and book lovers
              through our publishing portal. Whether you’re promoting a product, service,
              or event, our platform offers the perfect space to connect with your ideal
              customers.
            </p>
            <p className="mt-5">
              By advertising on our platform, you’ll boost your brand’s visibility while
              supporting a vibrant community of storytellers and book enthusiasts. Let’s
              create a partnership that drives meaningful connections and results.
            </p>
          </div>
        </section>

        {/* Image Section with White Background */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6">
              {/* Amazon Kindle badge */}
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=131,fit=crop/A0xwa3nL22teM7ow/bb-pwrd-by-amzn-YKb6QBErgzcy0gPN.png"
                alt="Powered by Amazon"
                className="mx-auto w-[280px] md:w-[460px] h-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Advertisers;
