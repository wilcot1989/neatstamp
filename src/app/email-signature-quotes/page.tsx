import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "100+ Email Signature Quotes by Profession (2026)",
  description:
    "100+ email signature quotes by profession and tone — professional, funny, for teachers, sales, and leaders. Plus when they work.",
  alternates: {
    canonical: "https://neatstamp.com/email-signature-quotes",
  },
};

const faqs = [
  {
    q: "Are quotes in email signatures professional?",
    a: "It depends on your field and the quote. In creative, startup, and educational contexts, a well-chosen quote reads as personality. In legal, financial, medical, and corporate enterprise contexts, it often reads as unprofessional or out of place. The safest rule: if you'd be embarrassed for a senior partner or CEO to see it, leave it out. If you're in a context where personality is an asset, a good quote is fine.",
  },
  {
    q: "How long should a quote in an email signature be?",
    a: "One to two lines at most — roughly 80–120 characters. If a quote needs three lines to display, it's too long for a signature. Longer quotes add significant length to every email you send and tend to get skipped entirely by recipients.",
  },
  {
    q: "Can I use a famous quote in my email signature?",
    a: "Yes. Famous quotes don't have copyright protection in their short, commonly circulated form — the expression of an idea can be copyrighted, but a brief attributed quote is considered fair use in nearly all jurisdictions. Just make sure the attribution is accurate. Misattributed quotes (especially those falsely credited to Churchill, Lincoln, or Einstein) are more common than most people realize.",
  },
  {
    q: "Should I change my email signature quote regularly?",
    a: "If you include a quote, updating it every few months keeps it from going stale for people who email you frequently. Some professionals rotate them seasonally or when they're reading something new. Others set one they like and leave it. Either approach works — just don't leave a seasonal quote up year-round.",
  },
  {
    q: "Can I write my own quote for my email signature?",
    a: "You can, but it rarely goes well. Original quotes in signatures tend to read as either motivational-poster generic or unintentionally pretentious. If you want something that sounds like you, consider using a line from something you've actually written professionally — a blog post, a talk, a published piece.",
  },
  {
    q: "Should I attribute the quote in my email signature?",
    a: "Always. An unattributed quote looks like you wrote it, which is either misleading or sets up an awkward correction. Attribution also shows you know the source, which matters if the recipient does too.",
  },
  {
    q: "What's the right font size for a quote in an email signature?",
    a: "11–12px in a lighter color — something like #64748b or #94a3b8 against a white background. The quote should be clearly secondary to your contact information. If it's the same size and weight as your name and title, the visual hierarchy is off.",
  },
  {
    q: "How do I add a quote to my NeatStamp email signature?",
    a: "In the NeatStamp editor, use a custom text field below your contact details to add your quote. You can set the font size to 11px and use a lighter gray color to keep it visually secondary. Add a thin divider above it to separate it from your contact block if you want a clean visual break.",
  },
];

const quoteCategories = [
  {
    id: "professional",
    title: "Professional & Business",
    intro:
      "These work in general business contexts — straightforward, respected, and unlikely to alienate anyone. Good for sales, operations, management, and general corporate roles.",
    quotes: [
      {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        note: "Works in sales and project management contexts. Encourages action without being preachy.",
      },
      {
        text: "Quality is not an act, it is a habit.",
        author: "Aristotle",
        note: "Works especially well for quality assurance, operations, or manufacturing contexts.",
      },
      {
        text: "It's not what you look at that matters, it's what you see.",
        author: "Henry David Thoreau",
        note: "Good for strategy, consulting, or analytical roles.",
      },
      {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese proverb",
        note: "A bit long at 80 characters but works if you have room. Popular with financial advisors.",
      },
      {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
        note: "Honest and practical — avoids the hollow enthusiasm of most business quotes.",
      },
      {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        note: "A perennial favorite in product, design, and tech contexts.",
      },
      {
        text: "It is not the strongest of the species that survives, but the most adaptable.",
        author: "Charles Darwin",
        note: "Popular in change management and organizational consulting.",
      },
      {
        text: "Price is what you pay. Value is what you get.",
        author: "Warren Buffett",
        note: "Strong choice for sales, procurement, or financial roles.",
      },
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        note: "Self-deprecating and grounded — lands well in almost any professional context.",
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        note: "Overused but still respected. Consider whether your recipient has seen it fifty times.",
      },
      {
        text: "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin",
        note: "Excellent for training, education technology, or HR roles.",
      },
      {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
        note: "Nuanced enough to prompt thought without being motivational-poster obvious.",
      },
    ],
  },
  {
    id: "inspirational",
    title: "Inspirational",
    intro:
      "These are broader than professional context — they're about character and effort. Work well in coaching, nonprofit, leadership development, and values-driven organizations.",
    quotes: [
      {
        text: "The most courageous act is still to think for yourself. Aloud.",
        author: "Coco Chanel",
        note: "Cuts through without being aggressive. Popular in creative and communications roles.",
      },
      {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        note: "Short, credibly attributed, and genuinely useful in problem-solving contexts.",
      },
      {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        note: "Works across industries. Particularly strong in project completion or turnaround contexts.",
      },
      {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
        note: "Three short imperatives — reads cleanly even on mobile. Good for coaching and mentoring.",
      },
      {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        note: "A bit long, but frequently cited. Works best in counseling or life coaching contexts.",
      },
      {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        note: "Slightly playful while still motivational. Good for project management.",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        note: "Simple and well-attributed. Honest enough to avoid feeling hollow.",
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        note: "Works in nonprofit, education, and public sector contexts particularly well.",
      },
      {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        note: "Widely used in sales contexts. Gretzky attribution is accurate; the Michael Scott attribution is the joke.",
      },
      {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
        note: "Less-cited source means lower chance of it feeling clichéd. Works in coaching contexts.",
      },
      {
        text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        author: "James Baldwin",
        note: "Intellectually grounded. Works in change management and DEI roles.",
      },
    ],
  },
  {
    id: "funny",
    title: "Funny (and Actually Funny)",
    intro:
      "These only work in the right context — small agencies, startups, creative teams, and industries where humor is an asset. Not appropriate in healthcare, law, finance, or formal corporate settings. If you're unsure whether your context is the right one, it probably isn't.",
    quotes: [
      {
        text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde",
        note: "Self-deprecating enough to land well. Particularly good for writers and marketers.",
      },
      {
        text: "I can resist everything except temptation.",
        author: "Oscar Wilde",
        note: "Works as a standalone line that implies personality without spelling it out.",
      },
      {
        text: "The brain is a wonderful organ. It starts working the moment you get up and doesn't stop until you get into a meeting.",
        author: "Robert Frost",
        note: "A bit long, but gets genuine laughs in startup and tech contexts.",
      },
      {
        text: "A day without sunshine is like, you know, night.",
        author: "Steve Martin",
        note: "Dry, short, and works in almost any context that tolerates mild humor.",
      },
      {
        text: "I always wanted to be somebody, but now I realize I should have been more specific.",
        author: "Lily Tomlin",
        note: "Good in advertising, creative, and personal brand contexts.",
      },
      {
        text: "Hard work never killed anybody, but why take a chance?",
        author: "Edgar Bergen",
        note: "Works in agency and startup cultures. Be careful in contexts with workaholism issues.",
      },
      {
        text: "Two things are infinite: the universe and human stupidity. And I'm not sure about the universe.",
        author: "Albert Einstein",
        note: "Gets laughs but verges on misanthropic. Use only if your recipients know your sense of humor.",
      },
      {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        note: "Sits at the intersection of funny and genuinely useful. Strong for R&D and product roles.",
      },
      {
        text: "People who think they know everything are a great annoyance to those of us who do.",
        author: "Isaac Asimov",
        note: "Only works if you're clearly poking fun at yourself. Can read as arrogant in the wrong tone.",
      },
      {
        text: "My tastes are simple: I am easily satisfied with the best.",
        author: "Winston Churchill",
        note: "Good for luxury goods, high-end services, or anyone whose clients appreciate quality.",
      },
    ],
  },
  {
    id: "teachers",
    title: "For Teachers & Educators",
    intro:
      "These resonate in K–12, higher education, tutoring, corporate training, and learning and development roles. Education-focused quotes tend to emphasize curiosity and growth over achievement.",
    quotes: [
      {
        text: "The art of teaching is the art of assisting discovery.",
        author: "Mark Van Doren",
        note: "Clean and accurate — good for any teaching context from primary school to university.",
      },
      {
        text: "Education is not the filling of a pail, but the lighting of a fire.",
        author: "W.B. Yeats",
        note: "One of the most widely used education quotes. Still strong if you're comfortable with its ubiquity.",
      },
      {
        text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Xunzi (often misattributed to Benjamin Franklin)",
        note: "Particularly relevant for teachers who use project-based or experiential learning methods.",
      },
      {
        text: "The whole art of teaching is only the art of awakening the natural curiosity of young minds.",
        author: "Anatole France",
        note: "Works particularly well in primary and middle school contexts.",
      },
      {
        text: "Children must be taught how to think, not what to think.",
        author: "Margaret Mead",
        note: "Strong for progressive educators and anyone focused on critical thinking.",
      },
      {
        text: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
        author: "Albert Einstein",
        note: "A strong choice for arts and sciences teachers alike.",
      },
      {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        note: "Works well in international education, development, and nonprofit contexts.",
      },
      {
        text: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
        author: "William Arthur Ward",
        note: "A bit long for a signature but the structure makes it scan quickly. Works as a banner.",
      },
      {
        text: "One child, one teacher, one book, one pen can change the world.",
        author: "Malala Yousafzai",
        note: "Strong in international development and education equity contexts.",
      },
      {
        text: "The beautiful thing about learning is that nobody can take it away from you.",
        author: "B.B. King",
        note: "Unexpected source — works as a conversation starter and avoids the usual education-quote suspects.",
      },
    ],
  },
  {
    id: "sales",
    title: "For Sales Professionals",
    intro:
      "Sales-appropriate quotes emphasize persistence, relationships, and value — not aggressive winning language. The goal is to come across as someone the recipient would want to work with.",
    quotes: [
      {
        text: "Every sale has five basic obstacles: no need, no money, no hurry, no desire, no trust.",
        author: "Zig Ziglar",
        note: "Works in sales training and management contexts. Shows self-awareness about the profession.",
      },
      {
        text: "Don't find customers for your products, find products for your customers.",
        author: "Seth Godin",
        note: "Reframes sales as service. Good for relationship-based selling.",
      },
      {
        text: "If you are not taking care of your customer, your competitor will.",
        author: "Bob Hooey",
        note: "Direct and practical — works in customer success and account management.",
      },
      {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        note: "Relevant without being sales-clichéd. Works in any high-rejection-rate role.",
      },
      {
        text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi",
        note: "Works in quota-driven roles. Be mindful that it can read as slightly aggressive.",
      },
      {
        text: "Pretend that every single person you meet has a sign around their neck that says, 'Make me feel important.'",
        author: "Mary Kay Ash",
        note: "Works especially in B2C, real estate, and financial advisory roles.",
      },
      {
        text: "The key is not to call the decision-maker. The key is to have the decision-maker call you.",
        author: "Jeffrey Gitomer",
        note: "Specific enough to feel insider-knowledgeable. Good for senior sales roles.",
      },
      {
        text: "Either you run the day, or the day runs you.",
        author: "Jim Rohn",
        note: "Short, practical, non-aggressive. Works in both sales and general business contexts.",
      },
      {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
        note: "Punchy and short. One of the few original quotes that holds up in signatures.",
      },
      {
        text: "Make a customer, not a sale.",
        author: "Katherine Barchetti",
        note: "Only four words — clean, memorable, and demonstrates a client-first philosophy.",
      },
    ],
  },
  {
    id: "leaders",
    title: "For Leaders & Managers",
    intro:
      "Leadership quotes in email signatures work best when they signal something about your actual management philosophy — not just generic success language. These work for C-suite, VPs, team leads, and anyone managing people.",
    quotes: [
      {
        text: "A good leader takes a little more than his share of the blame, a little less than his share of the credit.",
        author: "Arnold H. Glasow",
        note: "Signals genuine leadership maturity. Particularly good for managers in high-pressure environments.",
      },
      {
        text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
        author: "Simon Sinek",
        note: "Widely read author in leadership circles — recipients in management will likely recognize it.",
      },
      {
        text: "You don't lead by pointing and telling people some place to go. You lead by going to that place and making a case.",
        author: "Ken Kesey",
        note: "Less expected for a leadership quote. Works well in hands-on or field management contexts.",
      },
      {
        text: "The task of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there.",
        author: "John Buchan",
        note: "Works in coaching, L&D, and people development contexts.",
      },
      {
        text: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        author: "John Quincy Adams",
        note: "A bit long but frequently cited. Works in nonprofit and mission-driven organizations.",
      },
      {
        text: "Management is doing things right; leadership is doing the right things.",
        author: "Peter Drucker",
        note: "Classic and still useful for distinguishing the two concepts. Good for senior executives.",
      },
      {
        text: "No man will make a great leader who wants to do it all himself or to get all the credit for doing it.",
        author: "Andrew Carnegie",
        note: "Signals collaborative leadership. Avoids the lone-genius narrative common in leadership quotes.",
      },
      {
        text: "A leader is one who knows the way, goes the way, and shows the way.",
        author: "John C. Maxwell",
        note: "Short, parallel structure — scans easily. Popular in executive coaching contexts.",
      },
      {
        text: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        note: "Extremely common but still works if the attribution is right and your context suits it.",
      },
      {
        text: "The key to being a good manager is keeping the people who hate me away from those who are still undecided.",
        author: "Casey Stengel",
        note: "Use only if your leadership style includes genuine self-deprecation. Gets genuine laughs from senior leaders.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "For Healthcare Professionals",
    intro:
      "Healthcare email signatures are generally kept minimal and professional. Quotes are less common than in other fields, but a short, well-chosen one can humanize communication, particularly for patient-facing or administrative roles.",
    quotes: [
      {
        text: "Wherever the art of medicine is loved, there is also a love of humanity.",
        author: "Hippocrates",
        note: "Classic attribution, appropriate for clinical and administrative healthcare roles.",
      },
      {
        text: "To cure sometimes, to relieve often, to comfort always.",
        author: "Edward Trudeau",
        note: "Short and precise — works in almost any clinical context without overpromising.",
      },
      {
        text: "The good physician treats the disease; the great physician treats the patient who has the disease.",
        author: "William Osler",
        note: "Works for physicians and advanced practice nurses. Emphasizes patient-centered care.",
      },
      {
        text: "Let food be thy medicine and medicine be thy food.",
        author: "Hippocrates",
        note: "Often misattributed, but Hippocratic in origin. Works for nutrition, dietetics, and integrative medicine.",
      },
      {
        text: "Caring for yourself is not self-indulgence, it is self-preservation.",
        author: "Audre Lorde",
        note: "Works especially well for mental health professionals and wellbeing-focused roles.",
      },
      {
        text: "The patient is the most important person in the hospital. He is not an interruption to our work — he is the purpose of it.",
        author: "Anonymous (often attributed to multiple sources)",
        note: "A bit long, but widely recognized in hospital settings. Good for patient experience and administration roles.",
      },
      {
        text: "Medicine is learned by the bedside and not in the classroom.",
        author: "William Osler",
        note: "Works well for medical education, residency programs, and teaching hospitals.",
      },
      {
        text: "The greatest medicine of all is teaching people how not to need it.",
        author: "Hippocrates",
        note: "Good for preventive care, public health, and community medicine contexts.",
      },
    ],
  },
  {
    id: "it",
    title: "For IT & Technology Professionals",
    intro:
      "Technology contexts favor precision and dry wit over inspiration. Quotes from engineers, computer scientists, or that reference the realities of technical work tend to land better than generic success quotes.",
    quotes: [
      {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
        note: "Strong for software engineers, code reviewers, and anyone who cares about maintainability.",
      },
      {
        text: "Debugging is like being the detective in a crime movie where you are also the murderer.",
        author: "Filipe Fortes",
        note: "Gets laughs in developer contexts. Don't use it in client-facing roles.",
      },
      {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
        note: "Short and practical. Works for developers, architects, and product managers.",
      },
      {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
        note: "Three-part structure that scans cleanly. Well-known in agile and XP communities.",
      },
      {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs",
        note: "Works for UX, QA, and frontend engineering roles.",
      },
      {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V. Berard",
        note: "Insider reference that works well in development contexts. Don't use with non-technical clients.",
      },
      {
        text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
        author: "Grace Hopper",
        note: "Works in IT transformation, DevOps, and engineering leadership roles.",
      },
      {
        text: "Software is a great combination between artistry and engineering.",
        author: "Bill Gates",
        note: "Generic enough to work in almost any tech context without narrowing too specifically.",
      },
      {
        text: "Without data, you're just another person with an opinion.",
        author: "W. Edwards Deming",
        note: "Strong for data engineering, analytics, and business intelligence roles.",
      },
      {
        text: "It's hardware that makes a machine fast. It's software that makes a fast machine slow.",
        author: "Craig Bruce",
        note: "Gets knowing laughs from experienced engineers. Use in internal communications.",
      },
    ],
  },
  {
    id: "creatives",
    title: "For Creative Professionals",
    intro:
      "Designers, copywriters, art directors, photographers, and creatives generally have more latitude with signature content. Quotes that reference craft, process, or the particular struggles of creative work tend to resonate.",
    quotes: [
      {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
        note: "Well-known but accurate — strong for product designers and UX professionals.",
      },
      {
        text: "Good design is obvious. Great design is transparent.",
        author: "Joe Sparano",
        note: "Short and quotable. Works for graphic design, UX, and brand design contexts.",
      },
      {
        text: "Creativity takes courage.",
        author: "Henri Matisse",
        note: "Three words. Hard to argue with. Works in any creative field.",
      },
      {
        text: "The details are not the details. They make the design.",
        author: "Charles Eames",
        note: "Strong for design, architecture, and craft-focused creative roles.",
      },
      {
        text: "Have no fear of perfection — you'll never reach it.",
        author: "Salvador Dalí",
        note: "Works in creative contexts where perfectionism is a recognized occupational hazard.",
      },
      {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso",
        note: "Short and open-ended — works in concept and ideation contexts.",
      },
      {
        text: "The role of the artist is to ask questions, not answer them.",
        author: "Anton Chekhov",
        note: "Good for creative directors, strategists, and anyone whose job is framing problems.",
      },
      {
        text: "In order to be irreplaceable one must always be different.",
        author: "Coco Chanel",
        note: "Works for brand strategists, creative directors, and copywriters.",
      },
      {
        text: "Art is not what you see, but what you make others see.",
        author: "Edgar Degas",
        note: "Works for illustrators, photographers, and visual communication roles.",
      },
      {
        text: "The worst enemy to creativity is self-doubt.",
        author: "Sylvia Plath",
        note: "Works in creative contexts where imposter syndrome is openly discussed.",
      },
      {
        text: "There is no such thing as a new idea. It is impossible.",
        author: "Mark Twain",
        note: "Cuts against the 'innovation' cliché. Good for creative professionals tired of being told to 'disrupt things.'",
      },
    ],
  },
];

export default function EmailSignatureQuotesPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature Quotes",
            url: "https://neatstamp.com/email-signature-quotes",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature Quotes
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Over 100 quotes organized by profession and tone, with honest notes
              on context — plus the straight answer on when quotes actually work
              in a signature and when they make things worse.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Add a Quote to My Signature
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-muted">No account needed.</p>
          </div>

          {/* When quotes work and when they don't */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              When a quote in your signature works — and when it doesn't
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Before choosing a quote, it's worth thinking through whether a quote
              makes sense for your context at all. The honest answer is that it
              depends a lot on your industry, your role, and who you're emailing.
            </p>
            <div className="grid gap-5 md:grid-cols-2 mb-8">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-semibold text-foreground mb-3">
                  Contexts where quotes work well
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Creative agencies and design studios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Coaching, mentoring, and training roles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Education and academic contexts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Startups and informal business cultures
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Nonprofit and mission-driven organizations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Internal emails in casual, open company cultures
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-semibold text-foreground mb-3">
                  Contexts where quotes don't work
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Law firms — reads as frivolous
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Financial services and investment banking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Medical and clinical contexts (usually)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    C-suite executives at large public companies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Government and public sector
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Any client-facing role where the client is very formal
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground mb-2">The test</h3>
              <p className="text-sm text-muted leading-relaxed">
                Ask yourself: would I be comfortable if a recruiter, a major
                client, or my most senior manager saw this quote in my signature?
                If you hesitate, leave it out. The goal of an email signature is
                to convey your contact information clearly — the quote is a bonus
                that should add something, not something that could subtract from
                your credibility.
              </p>
            </div>
          </section>

          {/* Quote categories */}
          {quoteCategories.map((category) => (
            <section key={category.id} className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {category.title}
              </h2>
              <p className="text-muted leading-relaxed mb-6">{category.intro}</p>
              <div className="space-y-4">
                {category.quotes.map((quote, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <blockquote className="text-foreground font-medium mb-1 leading-snug">
                      &ldquo;{quote.text}&rdquo;
                    </blockquote>
                    <p className="text-sm text-primary mb-2">— {quote.author}</p>
                    <p className="text-xs text-muted leading-relaxed">{quote.note}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* How to add in NeatStamp */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to add a quote to your signature in NeatStamp
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Adding a quote to your{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional email signature
              </Link>{" "}
              in NeatStamp takes about 30 seconds:
            </p>
            <ol className="space-y-3 mb-6">
              {[
                "Open the signature editor and fill in your name, title, and contact details.",
                "Scroll to the bottom of the field section and add a custom text field.",
                "Type your quote and attribution — format: \"Quote text\" — Author Name.",
                "Set the font size to 11px and choose a lighter gray color (e.g. #64748b) to keep it visually secondary.",
                "Optionally, add a thin divider above the quote to separate it from your contact block.",
                "Copy the HTML and install it in Gmail, Outlook, or your email client of choice.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-muted mb-6">
              For installation instructions, see the guides for{" "}
              <Link href="/email-signature-gmail" className="text-primary underline underline-offset-2">
                Gmail
              </Link>{" "}
              and{" "}
              <Link href="/email-signature-outlook" className="text-primary underline underline-offset-2">
                Outlook
              </Link>
              .
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Open the editor
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Related guides
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What belongs in a professional signature and what to cut.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Typography, colors, and layout — how to make it look right.",
                },
                {
                  href: "/email-signature-disclaimer",
                  title: "Email Signature Disclaimer",
                  desc: "Legal disclaimers — templates and whether they're actually enforceable.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Company-wide signatures, brand consistency, and policy.",
                },
                {
                  href: "/email-signature-examples-with-logo",
                  title: "Email Signature Examples",
                  desc: "Real examples across different industries and roles.",
                },
                {
                  href: "/editor",
                  title: "Signature Editor",
                  desc: "Build your signature now — free, no account needed.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-border bg-surface p-4 hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="font-semibold text-foreground text-sm">
                    {link.title}
                  </div>
                  <div className="mt-1 text-xs text-muted">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-border bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-foreground">
                    {faq.q}
                    <svg
                      className="h-5 w-5 text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-primary p-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Build your signature — with the perfect quote
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Free, no account needed. Works in Gmail, Outlook, and Apple Mail.
              Copy your HTML and install it in 60 seconds.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create My Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
