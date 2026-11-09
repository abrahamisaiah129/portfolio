export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  gallery: string[];
};

export const blogs: BlogPost[] = [
  {
    slug: "shipping-quality-software-faster",
    title: "Shipping quality software faster",
    excerpt: "A practical approach to using AI-assisted engineering without losing product judgment or code quality.",
    category: "Engineering",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "from-[#4E7390] to-[#182B3A]",
    gallery: ["from-[#D97745] to-[#7C3423]", "from-[#7B8C6F] to-[#2D4036]", "from-[#8876A8] to-[#34264D]"],
    content: [
      "Speed in software is not about typing faster. It comes from reducing uncertainty before implementation, keeping feedback loops short, and making the next decision obvious.",
      "AI-assisted engineering is most useful when it supports that process. I use it to explore unfamiliar APIs, generate test cases, review edge cases, and remove repetitive work. The final decisions still belong to the engineer: architecture, trade-offs, security, and the experience a user actually receives.",
      "The result is a workflow where tools accelerate execution while strong product thinking protects quality. That balance is what lets teams ship quickly without creating a maintenance problem for the future.",
    ],
  },
  {
    slug: "designing-systems-that-scale",
    title: "Designing systems that scale with the product",
    excerpt: "The small interface and architecture decisions that make complex products easier to extend.",
    category: "Product",
    date: "September 4, 2026",
    readTime: "4 min read",
    image: "from-[#7B8C6F] to-[#263B2A]",
    gallery: ["from-[#63889A] to-[#243F4B]", "from-[#B58A68] to-[#684633]", "from-[#4E7390] to-[#182B3A]"],
    content: [
      "A product system is more than a component library or a folder structure. It is a shared language for making decisions consistently as a product grows.",
      "I start with the repeatable patterns: loading states, errors, empty states, navigation, and the data boundaries behind each screen. When those foundations are clear, new features can feel native instead of becoming one-off exceptions.",
      "Good systems create room for change. They make the common path simple while keeping the uncommon path visible and intentional.",
    ],
  },
  {
    slug: "from-brief-to-production",
    title: "From brief to production",
    excerpt: "Lessons from turning ambiguous product requirements into dependable shipped software.",
    category: "Process",
    date: "July 18, 2026",
    readTime: "6 min read",
    image: "from-[#8876A8] to-[#34264D]",
    gallery: ["from-[#B58A68] to-[#684633]", "from-[#D97745] to-[#7C3423]", "from-[#668A61] to-[#263B2A]"],
    content: [
      "Most product briefs begin with a desired outcome, not a complete specification. The work is to turn that outcome into a sequence of decisions that can be tested and delivered.",
      "I break the work into user journeys, identify the riskiest assumptions, and prototype those first. This keeps conversations grounded in behavior rather than guesses about implementation.",
      "A clear delivery plan does not remove uncertainty. It gives the team a reliable way to discover it early, respond to it, and keep moving.",
    ],
  },
  {
    slug: "the-details-users-feel",
    title: "The details users feel",
    excerpt: "Why accessible states, responsive feedback, and calm interfaces are engineering concerns too.",
    category: "UX",
    date: "May 22, 2026",
    readTime: "4 min read",
    image: "from-[#B58A68] to-[#684633]",
    gallery: ["from-[#4E7390] to-[#182B3A]", "from-[#8876A8] to-[#34264D]", "from-[#7B8C6F] to-[#263B2A]"],
    content: [
      "Users notice the moments between the main moments: the button that confirms an action, the message that explains an error, and the layout that remains clear on a smaller screen.",
      "These details are not decoration. They are part of the product's communication system, and they deserve the same care as the primary feature.",
      "When software responds clearly and respectfully, it feels more trustworthy. That trust is built one thoughtful state at a time.",
    ],
  },
];
