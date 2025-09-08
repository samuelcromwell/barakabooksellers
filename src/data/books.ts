// src/data/books.ts
export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  featured?: boolean;
  description?: string;
};

// Reusable slug normalizer (same rule everywhere)
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")      // remove punctuation
    .replace(/\s+/g, "-")              // spaces -> dashes
    .replace(/-+/g, "-");              // collapse dashes

export const normalizeSlug = (s: string) => slugify(decodeURIComponent(s || ""));

export const books: Book[] = [
  {
    id: "1",
    slug: "a-child-of-the-universe",
    title: "A Child Of The Universe",
    author: "Prof. Joseph Kamara",
    price: 1500,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/49e86cae-03de-4ef3-86b6-69507be677c4.png",
    category: "Contemporary",
    rating: 4.6,
    featured: true,
    description:
      "A reflective memoir that explores memory, mentorship, and meaning—capturing lessons from a life of study, service, and curiosity.",
  },
  {
    id: "2",
    slug: "things-fall-apart",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    price: 1200,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187954637-thingsfallapart.png",
    category: "Classic Fiction",
    rating: 4.8,
    featured: true,
    description:
      "A cornerstone of African literature charting tradition, change, and the human cost of colonial encounter.",
  },
  {
    id: "3",
    slug: "arrow-of-god",
    title: "Arrow of God",
    author: "Chinua Achebe",
    price: 1300,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187914265-arrowofgod.png",
    category: "Historical Fiction",
    rating: 4.7,
    featured: true,
  },
  {
    id: "4",
    slug: "a-grain-of-wheat",
    title: "A Grain of Wheat",
    author: "Ngugi wa Thiong'o",
    price: 1400,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745187469923-agrainofwheat.png",
    category: "Historical Fiction",
    rating: 4.9,
    featured: true,
  },
  {
    id: "5",
    slug: "kill-me-quick",
    title: "Kill me Quick",
    author: "Meja Mwangi",
    price: 1000,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1745186333920-killmequick.png",
    category: "Thriller",
    rating: 4.3,
    featured: true,
  },
  {
    id: "6",
    slug: "trapped-in-history",
    title: "Trapped In History",
    author: "Nicholas Rankin",
    price: 900,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1743477135109-trappedinhistory.jpeg",
    category: "Historical Fiction",
    rating: 4.5,
    featured: true,
  },
  {
    id: "7",
    slug: "the-snow-girls",
    title: "The Snow Girls",
    author: "Amina Ali",
    price: 1300,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1736183762141-SnowGirls.jpeg",
    category: "Romance",
    rating: 4.2,
    featured: true,
  },
  {
    id: "8",
    slug: "the-trident",
    title: "The Trident",
    author: "John Okoye",
    price: 1800,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732900738284-TheTrident.png",
    category: "Adventure",
    rating: 4.8,
    featured: true,
  },
  {
    id: "9",
    slug: "frontier-lawman",
    title: "Frontier Lawman",
    author: "K. R. Solomon",
    price: 950,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732900805048-FrontierLawman.png",
    category: "Western",
    rating: 4.4,
    featured: true,
  },
  {
    id: "10",
    slug: "stanley-p",
    title: "Stanley P.",
    author: "Ademola Bello",
    price: 1400,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901293015-StanleyP..png",
    category: "Drama",
    rating: 4.7,
    featured: true,
  },
  {
    id: "11",
    slug: "the-prime-of-miss-jean-brodie",
    title: "The Prime of Miss Jean Brodie",
    author: "Muriel Spark",
    price: 1000,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901343994-ThePrimeofMiss.png",
    category: "Fiction",
    rating: 4.6,
    featured: true,
  },
  {
    id: "12",
    slug: "the-games-book",
    title: "The Games book",
    author: "Hugh Atkinson",
    price: 1300,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901398995-TheGamesbook.png",
    category: "Adventure",
    rating: 4.7,
    featured: true,
  },
  {
    id: "13",
    slug: "the-saracen",
    title: "The Saracen",
    author: "Frank Yerby",
    price: 1450,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901449906-Thesaracen.png",
    category: "Historical Fiction",
    rating: 4.9,
    featured: true,
  },
  {
    id: "14",
    slug: "billy-budd",
    title: "Billy Budd",
    author: "Herman Melville",
    price: 1320,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732901493915-BillyBudd.png",
    category: "Classic Fiction",
    rating: 4.8,
    featured: true,
  },
  {
    id: "15",
    slug: "audacity-and-sacrifice",
    title: "Audacity and Sacrifice",
    author: "Grace Ntale",
    price: 1500,
    image:
      "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=scale-down,q=100/cdn-ecommerce/store_01JDWBYDP2KK1V36AM6NHAPSWK/assets/1732904972453-AudacityandSacrifice.jpeg",
    category: "Biography",
    rating: 4.6,
    featured: true,
  },
];
