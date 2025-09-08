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
    .replace(/[^a-z0-9\s-]/g, "") // remove punctuation
    .replace(/\s+/g, "-") // spaces -> dashes
    .replace(/-+/g, "-"); // collapse dashes

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
      "The author is a dedicated academic and restless thinker whose mind is always reaching for practical answers to public problems. His life’s work has been shaped by the conviction that ideas should serve communities—and that classrooms are launchpads for nation building, not ivory towers.\n\nThere are many ways to tell a life. Some write a strict, cradle-to-now chronology; others invite a witness to assemble the record. In A Child of the Universe, the author chooses a more eclectic path, weaving together pivotal moments and the lessons they taught him—about curiosity, integrity, and service.\n\nAcross these reflective vignettes, he shares insights meant to encourage students, educators, and policy makers to contribute more effectively to the growth of their country and community—an invitation to think widely, act boldly, and remain teachable.",
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
      "This arresting parable of a proud but powerless man witnessing the ruin of his people begins Achebe’s landmark trilogy charting the fate of one African community. Okonkwo is the greatest wrestler and warrior alive; his fame spreads like a bush-fire in the harmattan. But an accidental killing sets him on a path of exile, and when he returns, missionaries and colonial authorities have unsettled the world he fought to uphold.\n\nFirst published in 1958, this stark, clear-eyed novel reshaped African and world literature, selling millions of copies in dozens of languages. Its cool irony and moral courage illuminate a community at a turning point—and the personal cost of history.\n\n“His courage and generosity are made manifest in the work” — Toni Morrison. “The writer in whose company the prison walls fell down” — Nelson Mandela. “A great book, that bespeaks a great, brave, kind, human spirit” — John Updike.",
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
    description:
      "Ezeulu, headstrong chief priest of Ulu, presides over six villages that once moved as one body. But rivals within the community, the encroaching reach of colonial rule, and conflict inside his own household press hard upon his authority. Convinced that he is an arrow drawn taut in the bow of his god, Ezeulu hardens his stance—testing the limits of power, faith, and fate.\n\nSpare and powerful, Arrow of God is an unforgettable portrait of belief under siege and a community negotiating the terms of change. Continuing the world introduced in Things Fall Apart, this second volume of Achebe’s African trilogy is a masterwork of tragedy and vision.",
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
    description:
      "On the eve of Uhuru—Kenyan independence—the village of Thabai takes stock of what has been won and what has been lost. Kihika, the legendary rebel, was betrayed. Gikonyo came back from detention to a marriage frayed by absence. Mumbi bears wounds that do not show. And Mugo, hailed as a hero, keeps a secret that trembles beneath the celebrations.\n\nNgũgĩ wa Thiong’o weaves myth and memory into a haunting story of friendship, betrayal, and the cost of freedom. As allegiances shift and truths surface, the novel asks what kind of future can be built on compromised pasts—and what a single act of courage, or treachery, can mean to a people finding their way.",
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
    description:
      "Meja and Maina come to the city with certificates, confidence, and the promise that education is a ladder out of poverty. The rungs are missing. Jobs do not materialize; shelter gives way to the streets; hope yields to hustles that court danger.\n\nBrutally separated and reunited behind prison bars, the friends become mirrors to a society that both prizes and betrays its youth. With kinetic prose and unflinching wit, Mwangi crafts a charged portrait of ambition, survival, and the thin line between luck and loss in urban Kenya.",
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
    description:
      "Part history, part memoir, Trapped in History traces the British colonization of Kenya, the rise of African nationalism under Jomo Kenyatta, and the terrifying first strikes of the Mau Mau guerrilla fighters.\n\nThough defeated, Mau Mau hastened the end of empire. Rankin interlaces the public story with a private one—growing up as a child in the colony—and examines how the upheavals of a nation left their imprint on a life. The result is a lucid, personal meditation on the long afterlife of empire.",
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
    description:
      "During a winter festival in a remote northern town, sisters Clara and Evie vanish without a trace. As search parties fan out across the snow, a grieving mother, a relentless journalist, and a retired detective with an old regret begin to piece together a puzzle the town would rather leave buried.\n\nSecrets surface with the thaw: quiet feuds, broken promises, and loyalties stretched thin. Atmospheric and intimate, The Snow Girls explores the lengths we go to protect those we love—and the chilling consequences of the stories we tell ourselves.",
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
    description:
      "Major Willie Delamer returns from the Civil War to a ranch on the brink. The Trident, once a thriving spread, now faces raids from Comanche fighters defending their homelands and the stark demands of a nation learning to breathe again.\n\nTo keep his family and legacy alive, Willie must reckon with the past he carries, the enemies he’s made, and the uneasy alliances he must forge. In a land remade by conflict, survival will demand courage, humility, and a new definition of home.",
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
    description:
      "Marshal Eli Hart rides into Gray Butte with two rules: keep the peace and leave the past where it lies. But the railroad’s arrival draws outlaws, speculators, and old grudges, and soon the town’s law is written in dust and gun smoke.\n\nCaught between ranchers defending their range and a gang bent on owning the tracks, Hart must choose what justice looks like when every side claims it. Frontier Lawman blends high plains grit with a sharp moral question: when the line between right and wrong is trampled, who decides where to stand?",
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
    description:
      "Fresh out of university and hungry to prove himself, Stanley navigates Lagos boardrooms where deals are sealed with smiles and silence. Promotions promise escape; obligations to family and friends tug him home. When a scandal rocks his firm, he must decide whether success is measured by what you gain—or what you refuse to lose.\n\nA vivid, humane portrait of ambition, love, and the cost of compromise, Stanley P. asks what it takes to keep your name when the world keeps trying to rename you.",
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
    description:
      "At a conservative Edinburgh school, the charismatic Miss Jean Brodie cultivates a select set of girls—her crème de la crème—with lessons that blur into confession and control. Art, love, loyalty, and betrayal knot together as her pupils discover the price of being chosen.\n\nSpark’s razor-edged classic is both wickedly funny and quietly devastating, a study of influence and innocence that lingers long after the bell rings.",
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
    description:
      "Behind the spectacle of the world’s greatest sporting event, rivals jockey for advantage—political, personal, and financial. An injured champion, a cunning fixer, and a rookie reporter find their fates intertwined as a single rumor threatens to bring the whole stage crashing down.\n\nPart newsroom thriller, part arena drama, The Games Book races through locker rooms and corridors of power to ask what competition really costs—and who pays the bill.",
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
    description:
      "Sweeping from sun-struck Mediterranean ports to courts where alliances shift like sand, The Saracen follows a formidable outsider whose wits and sword earn him entry to worlds that would deny him a name. Love and loyalty pull against vengeance as empires rise and fall around him.\n\nYerby’s trademark pace and color bring to life a tale of identity and destiny set against the clash of cultures—where honor is a path you make with every step.",
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
    description:
      "A foundling sailor of uncommon grace is pressed into service aboard a British warship, where innocence meets suspicion in the tight confines of life at sea. When a false accusation sparks a tragic confrontation, the crew must reckon with duty, mercy, and the letter of the law.\n\nMelville’s late masterpiece is a taut, luminous meditation on justice and the fragile beauty of a good heart in a broken world.",
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
    description:
      "From a childhood of narrow margins to the front lines of advocacy, Grace Ntale’s journey is a testament to steadfast courage and the power of showing up. Her story moves from classrooms and clinics to courtrooms and cabinet halls, tracing a vocation shaped by conviction rather than convenience.\n\nWith candor and warmth, Audacity and Sacrifice illuminates the choices that define a life—what we fight for, what we give up, and how hope is built, one deliberate act at a time.",
  },
];
