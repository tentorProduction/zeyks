export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  pull: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "choosing-digital-foundation",
    category: "Technology",
    title: "Choosing the right digital foundation",
    description: "A practical framework for making technology decisions that still make sense two years from now.",
    date: "September 9, 2026",
    readingTime: "5 min read",
    featured: true,
    pull: "The best foundation is rarely the newest one—it's the one your team can still maintain when the hype moves on.",
    body: [
      "Every digital project starts with a decision that outlives the project: what to build on. Frameworks, platforms, hosting, data models—these choices are expensive to reverse, so they deserve more care than they usually get.",
      "We use a simple test. Will this choice still be defensible in two years? Not dominant, not fashionable—defensible. Can we hire for it, document it, debug it at 2am, and hand it to another team without a month of archaeology?",
      "Boring technology wins this test surprisingly often. The newest tool solves last year's problem with this year's complexity. The boring tool solves your problem with complexity you already understand.",
      "The second test is ownership. If the foundation disappears tomorrow—a company pivots, a service shuts down, a license changes—how much of your business goes with it? The less of your logic lives inside someone else's roadmap, the better you sleep.",
      "None of this argues against innovation. It argues for sequencing it: put new technology where the risk is contained and the upside is real, and keep the foundation underneath it deliberately dull.",
    ],
  },
  {
    slug: "useful-over-novel",
    category: "Product",
    title: "Useful is a stronger strategy than novel",
    description: "Why the best digital products begin with a precise problem rather than a fashionable feature.",
    date: "August 26, 2026",
    readingTime: "4 min read",
    pull: "Novelty gets a product noticed once. Usefulness gets it opened every day.",
    body: [
      "Products die in two ways: nobody notices them, or nobody needs them. Most teams fear the first and build for attention—launch videos, feature lists, a roadmap full of firsts.",
      "But attention is cheap and repeat use is not. The products that survive are the ones people return to without being asked, because the cost of doing the task without them is higher than the cost of opening them.",
      "That standard changes how you build. It favors finishing the second screen over shipping the tenth. It favors the boring reliability of core flows over the demo-friendly edge case.",
      "Novelty still matters—but as packaging, not strategy. A genuinely useful product with a fresh interface wins. A novel interface around an unnecessary product just fails interestingly.",
    ],
  },
  {
    slug: "case-for-building-slowly",
    category: "Business",
    title: "The case for building slowly",
    description: "Speed is a tactic. Endurance is a strategy. Knowing which one a moment calls for is the actual skill.",
    date: "August 12, 2026",
    readingTime: "4 min read",
    pull: "Fast is a feature. Lasting is a business model.",
    body: [
      "Digital culture rewards speed. Ship fast, break things, iterate. And for finding product-market fit, this is genuinely correct—speed of learning beats polish when you don't yet know what to build.",
      "But the same instinct, carried into the foundation years, quietly compounds into debt. Systems assembled at startup pace start to resist change precisely when the business needs to change direction.",
      "The discipline is knowing which mode you're in. Explore mode rewards speed and tolerates mess. Foundation mode rewards care: clean data models, documented decisions, interfaces that outlive their authors.",
      "We build products meant to be running in ten years, so we spend most of our time in foundation mode. It looks slower in any given month and faster across any five years—because the fastest thing a growing company can do is not stop to rebuild.",
    ],
  },
  {
    slug: "clarity-is-a-design-decision",
    category: "Design",
    title: "Clarity is a design decision",
    description: "Confusing interfaces aren't accidents—they're the accumulated result of decisions nobody made deliberately.",
    date: "July 29, 2026",
    readingTime: "4 min read",
    pull: "Every unclear screen is a decision someone avoided making.",
    body: [
      "When users describe a product as confusing, teams often reach for more: an onboarding tour, tooltips, a help center. But confusion is rarely a documentation problem. It's the residue of undecided design.",
      "Every interface answers questions silently. What is this? What can I do here? What happens if I press that? When no one decides the answers, the interface improvises—and users pay for the improvisation.",
      "Clarity, then, is not minimalism or clever copy. It's the practice of making every silent question a deliberate one: choosing what the screen is for, what deserves prominence, and what can be removed entirely.",
      "The test we use is blunt. Show the screen to someone with the job it supports and no context. If they hesitate, the screen isn't finished—more design, not more explanation, is the fix.",
    ],
  },
  {
    slug: "marketing-that-respects-attention",
    category: "Marketing",
    title: "Marketing that respects attention",
    description: "The loudest channel in the room is rarely the most trusted one. Consistency compounds where volume burns out.",
    date: "July 15, 2026",
    readingTime: "3 min read",
    pull: "People don't remember the campaign. They remember whether you were worth listening to.",
    body: [
      "Most marketing advice optimizes for the impression: more reach, more frequency, more noise. But attention doesn't scale the way media spend does—people have a fixed budget for who they listen to, and they defend it.",
      "The alternative is slow marketing: say true things, in your own voice, in places your audience already trusts, and keep saying them long after the campaign metrics have moved on.",
      "This approach is harder to measure week by week and easier to measure year by year. It shows up as branded search, as reply rates, as the moment a prospect says they've been reading you for months.",
      "For a family of companies like ours, consistency has a second benefit: every company's content teaches the market what the whole family stands for. The brand compounds across products, not just within them.",
    ],
  },
  {
    slug: "building-from-kathmandu",
    category: "Nepal",
    title: "Building world-class software from Kathmandu",
    description: "Distance is a fact; proximity is a choice. How we work with clients and products across time zones from Nepal.",
    date: "June 30, 2026",
    readingTime: "5 min read",
    pull: "The question isn't where a team sits. It's whether the work survives the distance.",
    body: [
      "Building a technology company in Nepal comes with a stack of assumptions to overcome—about talent, reliability, and time zones. We've found the assumptions age worse than the reality.",
      "The talent is real: Nepal's engineering and design community is young, hungry, and increasingly experienced with global products. What's scarce isn't skill; it's the environment that turns skill into judgment. Building that environment is the actual work.",
      "Time zones, handled deliberately, become an advantage. A team that structures its day around clear written communication, recorded decisions, and honest demos doesn't need to share an office with its clients—needn't even share its morning.",
      "What we've learned building Zeyks Book and client work from Kathmandu is that distance punishes vague processes, not remote teams. Write things down. Show work early. Keep promises small and kept.",
      "The goal was never to seem global. It was to be genuinely useful to anyone, anywhere—and to prove a Nepali company can set the standard others are measured against.",
    ],
  },
];

export const findArticle = (slug: string) => articles.find((article) => article.slug === slug);
