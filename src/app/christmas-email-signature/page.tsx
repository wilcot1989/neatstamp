import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Christmas Email Signature — Templates & Ideas (2026) | NeatStamp",
  description:
    "How to add a festive Christmas signature without looking unprofessional. When to switch, what to change, office closure wording, examples for corporate and casual contexts, and the most common mistakes.",
  alternates: {
    canonical: "https://neatstamp.com/christmas-email-signature",
  },
};

const faqs = [
  {
    q: "When should I switch to a Christmas email signature?",
    a: "The first of December is a safe start date for most professional contexts — it's clearly within the festive window and doesn't feel premature. Some companies switch during the week of the office Christmas party or after sending their Christmas newsletter. The latest you should switch it back is January 3rd or 4th (the first working week of the new year). Leaving a Christmas signature up in February is a common and avoidable mistake.",
  },
  {
    q: "Is a Christmas email signature unprofessional?",
    a: "Not if it's done well. A subtle seasonal banner or a brief 'Wishing you a wonderful Christmas' line in your signature reads as warm and human. What looks unprofessional is an animated snowfall GIF, a signature in red and green Comic Sans, or a blinking 'MERRY CHRISTMAS!!!' banner. Restraint is the difference.",
  },
  {
    q: "Can I use animated GIFs in my Christmas email signature?",
    a: "Technically yes, but it's not recommended. Animated GIFs add file size to every email you send during the period. They can be blocked by corporate email clients and security gateways. And in most professional contexts, an animated signature reads as unprofessional or distracting. A static seasonal banner is a better choice.",
  },
  {
    q: "How do I include office closure dates in my signature?",
    a: "Add a brief notice below your main contact details, above the disclaimer if you have one. Keep it factual: 'Our office closes on December 24th and reopens on January 2nd.' Don't pad it with wishes and extra text — just the dates. Remove it as soon as you're back.",
  },
  {
    q: "Should I use 'Merry Christmas' or 'Happy Holidays' in my signature?",
    a: "It depends on your context and audience. 'Merry Christmas' is specific and appropriate if you know your recipients celebrate Christmas or if your business is based in a predominantly Christian context. 'Happy Holidays' is broader and acknowledges that not all recipients celebrate Christmas. If you email a globally diverse client base, the broader greeting is more considerate. See our holiday email signature guide for the fuller discussion.",
  },
  {
    q: "What colors should I use for a Christmas signature?",
    a: "Deep green (#1a5c2e or similar) and burgundy red (#8b1a1a) look more sophisticated than bright red and green. Gold (#b8860b) works as an accent. Dark navy can also work as an alternative to green. Avoid neon or oversaturated Christmas colors — they look fine on a Christmas card but unprofessional in a business email.",
  },
  {
    q: "Can I add a Christmas banner image to my email signature?",
    a: "Yes, and a well-designed banner is one of the cleanest ways to add a festive element. Keep it under 500px wide, under 150px tall, and under 100KB in file size. Use a static JPEG or PNG. Make sure it doesn't dominate the signature — it should feel like a tasteful seasonal accent, not a Christmas card.",
  },
  {
    q: "How do I update my Christmas signature in NeatStamp?",
    a: "In the NeatStamp editor, you can add a seasonal banner image, update your name line to include a seasonal greeting, or add a custom field with your office closure dates. Once you have the Christmas version, save it separately so you can easily switch back to your standard signature in January.",
  },
];

export default function ChristmasEmailSignaturePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Christmas Email Signature",
            url: "https://neatstamp.com/christmas-email-signature",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Christmas Email Signature
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              How to make your email signature festive for the Christmas period
              without it looking like you sent your business emails through
              a greetings card shop.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build My Christmas Signature — Free
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

          {/* Timing */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              When to switch — and when to switch back
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Getting the timing right matters more than most people think.
              A Christmas signature that goes up too early looks eager; one that
              stays up too long looks like you forgot.
            </p>
            <div className="space-y-4">
              {[
                {
                  period: "Before December 1st",
                  label: "Too early",
                  color: "red",
                  detail:
                    "November Christmas anything reads as premature in most business contexts. The Christmas season, commercially speaking, starts in November — but professionally, most people draw the line at December.",
                },
                {
                  period: "December 1st–23rd",
                  label: "Correct window",
                  color: "green",
                  detail:
                    "This is when a Christmas signature makes sense. Three to four weeks is the right window. Most recipients will be in their own festive communication mindset by this point.",
                },
                {
                  period: "December 24th–January 2nd",
                  label: "Office closure period",
                  color: "blue",
                  detail:
                    "If your office closes, your out-of-office is doing the work. Your Christmas signature can stay up, but the closure dates in it should be accurate. Remove the closure notice once you're back.",
                },
                {
                  period: "January 3rd–4th (first working week)",
                  label: "Switch back",
                  color: "green",
                  detail:
                    "Back to your standard signature as soon as you're back at work. Some people do this before they leave for Christmas — that's even better. The worst outcome is 'Wishing you a wonderful Christmas!' appearing in emails during the third week of January.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-5 ${
                    item.color === "green"
                      ? "border-green-200 bg-green-50"
                      : item.color === "red"
                      ? "border-red-100 bg-red-50"
                      : "border-blue-100 bg-blue-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-foreground">{item.period}</h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.color === "green"
                          ? "bg-green-100 text-green-700"
                          : item.color === "red"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What to change */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What to actually change in your signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              You don't need to rebuild your entire signature for Christmas —
              you're making targeted seasonal adjustments. Here are the four
              elements worth updating:
            </p>
            <div className="space-y-5">
              {[
                {
                  element: "Banner image",
                  effort: "Most impact",
                  detail:
                    "A seasonal banner at the top or bottom of your signature is the cleanest single change. A good banner — something tasteful with seasonal imagery, your company name, and a brief greeting — immediately signals the festive period without touching your contact information. Keep it under 500px wide and 150px tall.",
                },
                {
                  element: "Color accents",
                  effort: "Subtle but effective",
                  detail:
                    "Swapping your standard accent color (usually blue) for a deep green, burgundy, or gold for the Christmas period is subtle enough to not look garish but noticeable enough to feel seasonal. The key is using muted, sophisticated shades rather than bright Christmas colors.",
                },
                {
                  element: "Seasonal greeting line",
                  effort: "Low effort, personal",
                  detail:
                    "Adding a single line — 'Wishing you and your family a wonderful Christmas' or 'Happy Christmas from the team at [Company]' — in smaller text below your standard contact details. Keep it to one line and under 15 words.",
                },
                {
                  element: "Office closure notice",
                  effort: "Practical information",
                  detail:
                    "If your office closes, include the dates clearly and briefly. 'Closed December 24th – January 2nd. We'll respond to your message on our return.' This is the most practically useful change you can make — it sets expectations and reduces follow-up emails.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.element}</h3>
                    <span className="text-xs text-muted bg-border px-2 py-0.5 rounded-full">
                      {item.effort}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Examples */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Christmas email signature examples
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Here's what the three main tones look like in practice. All of them
              keep the core{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional signature
              </Link>{" "}
              structure intact.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Corporate Christmas — minimal and professional
                </h3>
                <div className="rounded-xl border-l-4 border-[#1a5c2e] bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Sarah Chen</div>
                  <div className="text-muted">Marketing Manager | Fieldstone Media</div>
                  <div className="text-muted">+1 (212) 555-0134 | fieldstone.co</div>
                  <div className="mt-3 text-xs text-[#1a5c2e] italic">
                    Wishing you a peaceful Christmas and a successful New Year.
                  </div>
                  <div className="mt-1 text-xs text-muted italic">
                    Our office closes December 24th and reopens January 2nd.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  The green accent replaces the standard blue. The greeting and
                  closure notice are in a smaller italic font. The core contact
                  information is unchanged. This works in financial services, law,
                  consulting, and any formal professional context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Warm Christmas — for client-facing and relationship roles
                </h3>
                <div className="rounded-xl border-l-4 border-[#8b1a1a] bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold" style={{ color: "#8b1a1a" }}>
                    James Ortega
                  </div>
                  <div className="text-muted">Real Estate Advisor | Compass</div>
                  <div className="text-muted">M: +1 (310) 555-0187</div>
                  <div className="text-[#8b1a1a] text-xs">jamesortega.compass.com</div>
                  <div className="mt-3 border-t border-[#8b1a1a] pt-3 text-xs text-muted italic">
                    Thank you for your trust this year. Merry Christmas to you
                    and yours — I look forward to working together in 2027.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  The warm tone works in sales, real estate, financial advisory,
                  and any role where personal relationships are central. The
                  specific reference to "this year" makes it feel personal rather
                  than templated. See our{" "}
                  <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                    business email signature guide
                  </Link>{" "}
                  for more on client-facing signature strategy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Subtle Christmas — for those who want minimal change
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Alex Rivera</div>
                  <div className="text-muted">Senior Product Designer | Lumio</div>
                  <div className="text-muted">alex@lumio.io</div>
                  <div className="mt-2 text-xs text-muted">🎄 Happy Christmas</div>
                </div>
                <p className="text-sm text-muted">
                  A single emoji and two words. This is appropriate in informal
                  startup or tech contexts where people are comfortable with emoji
                  in professional communication. In more formal industries, even
                  this would be too casual.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Team or company-wide signature with closure dates
                </h3>
                <div className="rounded-xl border-l-4 border-[#1a5c2e] bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Marcus Webb</div>
                  <div className="text-muted">Head of Sales | Archway Software</div>
                  <div className="text-muted">
                    +1 (415) 555-0187 | archway.io | LinkedIn
                  </div>
                  <div className="mt-3 text-xs text-muted leading-relaxed">
                    ─────────────────────────────<br />
                    The Archway team closes December 24th and returns January 2nd.<br />
                    Happy Christmas from all of us.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  A horizontal rule separates the closure notice visually. The
                  team message feels warmer than individual messaging while
                  being appropriate for external communications.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Common mistakes with Christmas signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Most of these come up every year. Some are about aesthetics;
              others have practical consequences.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Forgetting to switch back in January",
                  detail:
                    "This is the most common mistake. A Christmas signature in January sends an unintentional signal about how organized you are. If you're going to use a seasonal signature, build the discipline of switching it back — or set yourself a calendar reminder for January 3rd.",
                },
                {
                  title: "Animated GIFs and snowfall effects",
                  detail:
                    "Animated signatures are distracting, add file size, and are frequently blocked by corporate email security. A static banner achieves the same effect without the problems.",
                },
                {
                  title: "Bright, oversaturated Christmas colors",
                  detail:
                    "Neon red and bright green are for Christmas jumpers, not business communication. Deep green, burgundy, or gold read as seasonal and professional rather than festive and frivolous.",
                },
                {
                  title: "Wrong or outdated closure dates",
                  detail:
                    "If you include closure dates, get them right. 'We close December 22nd' when you actually close December 24th is confusing, and it means recipients won't contact you during a window when you're actually available.",
                },
                {
                  title: "Making the signature significantly longer",
                  detail:
                    "Adding a seasonal banner, a greeting, and closure dates to an already-long signature creates a signature that's longer than some emails. The standard principle applies: keep it as short as it needs to be and no longer. See the email signature design guide for length guidance.",
                },
                {
                  title: "Using 'Merry Christmas' when emailing across cultures",
                  detail:
                    "If you're sending externally to recipients who may not celebrate Christmas — particularly in the Middle East, East Asia, or to observant Jewish or Muslim contacts — 'Season's Greetings' or 'Happy Holidays' is more appropriate. The broader greeting is about awareness, not political correctness.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-red-100 bg-red-50 p-5"
                >
                  <span className="text-red-500 text-lg font-bold flex-shrink-0 mt-0.5">
                    ✗
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Office closure wording */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Office closure wording that actually works
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              If you're including office closure information, here are four
              approaches from most to least formal:
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Minimal",
                  text: "Office closed December 24th – January 2nd.",
                },
                {
                  label: "Informative",
                  text: "Our office closes December 24th and reopens January 2nd. We'll respond to your message on our return.",
                },
                {
                  label: "Warm",
                  text: "We're closing for Christmas on December 24th and will be back on January 2nd. Thanks for your message — we'll be in touch on our return.",
                },
                {
                  label: "Team",
                  text: "The [Company] team will be taking a break from December 24th and returning January 2nd. Happy Christmas from all of us.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-4">
                  <span className="text-xs font-medium text-primary mb-2 block">{item.label}</span>
                  <p className="font-mono text-sm text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              For a more thorough out-of-office setup, see our{" "}
              <Link href="/holiday-email-signature" className="text-primary underline underline-offset-2">
                holiday email signature guide
              </Link>
              , which covers out-of-office integration alongside your signature changes.
            </p>
          </section>

          {/* How to update in NeatStamp */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to update your signature in NeatStamp for Christmas
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The quickest approach:
            </p>
            <ol className="space-y-3 mb-6">
              {[
                "Open your existing signature in the NeatStamp editor.",
                "Add a seasonal banner image at the top of the signature — use a pre-made Christmas banner or create one in Canva or similar.",
                "Optionally, update your accent color to a deep green or burgundy in the color settings.",
                "Add a custom text field at the bottom for your greeting and closure dates.",
                "Export the HTML and reinstall in your email client.",
                "Save the Christmas version separately — you'll want to revert quickly in January.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
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
                  href: "/holiday-email-signature",
                  title: "Holiday Email Signature",
                  desc: "Broader holiday coverage — inclusive greetings, seasonal banners, and out-of-office integration.",
                },
                {
                  href: "/new-year-email-signature",
                  title: "New Year Email Signature",
                  desc: "What to update in January — and how to start 2027 with a fresh signature.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Colors, banners, and formatting — getting the design right.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Company-wide signatures and brand consistency across the team.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What the core of a good signature looks like before any seasonal updates.",
                },
                {
                  href: "/editor",
                  title: "Signature Editor",
                  desc: "Build your Christmas signature now — free, no account needed.",
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
              Build your Christmas signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Free. No account needed. Works in Gmail, Outlook, and Apple Mail.
              Takes about 3 minutes to set up.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create My Christmas Signature
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
