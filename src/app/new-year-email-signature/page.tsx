import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "New Year Email Signature — Start 2027 Right | NeatStamp",
  description:
    "Update your email signature for the New Year — what to change, when to switch back, and fresh-start templates for January 2027.",
  alternates: {
    canonical: "https://neatstamp.com/new-year-email-signature",
  },
};

const faqs = [
  {
    q: "When should I switch to a New Year email signature?",
    a: "January 1st or your first working day back — typically January 2nd or 3rd. A New Year signature makes most sense in the first one to two weeks of January, when 'Happy New Year' greetings still feel timely rather than belated. After January 15th, switch to your standard signature.",
  },
  {
    q: "What's the difference between a New Year signature and a holiday signature?",
    a: "A holiday signature typically covers the December festive period and combines Christmas and New Year messaging. A New Year signature is specifically for the first weeks of January — it uses a forward-looking tone rather than festive December imagery. It's a transitional signature between the holiday period and your regular year-round signature.",
  },
  {
    q: "Should I say 'Happy New Year' in my email signature?",
    a: "It works for the first two weeks of January and reads as warm and professional in most contexts. After that it starts to feel outdated. If you're not sure when you'll update it, stick with 'Wishing you a successful 2027' — it's forward-looking enough that it doesn't expire as quickly as a direct 'Happy New Year' greeting.",
  },
  {
    q: "What practical things should I update in my signature at the New Year?",
    a: "Several things may need updating: the copyright year if it appears in your signature footer, your job title if you were promoted or changed roles, your headshot if it's more than a couple of years old, your phone number or email if those changed, and any links (Calendly, portfolio, website) that may have changed. The New Year is a natural time to audit all of these.",
  },
  {
    q: "How long should I keep my New Year signature up?",
    a: "Two weeks is the practical maximum. January 1st to January 15th covers the window when 'Happy New Year' greetings still make sense. Most people go back to their standard signature during the second week of January. January 20th with a New Year greeting in your signature reads as forgetting rather than extending the celebration.",
  },
  {
    q: "Can I combine a New Year signature with holiday closure information?",
    a: "Yes, but only if you're not yet back at work. Once you're back in the office, remove the closure notice immediately — it's confusing to receive an email from someone while they're telling you their office is closed. The closure notice should disappear on your first working day back; the New Year greeting can stay for a couple more weeks.",
  },
  {
    q: "What should a New Year email signature banner look like?",
    a: "Clean and forward-looking rather than heavily festive. Think navy or deep blue with gold accents, a simple '2027' or 'Happy New Year' text treatment, and your company name or logo. Less tinsel-and-stars than a Christmas banner — more like a clean year-in-review aesthetic. Keep it under 500px wide, under 150px tall, and under 100KB.",
  },
];

export default function NewYearEmailSignaturePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "New Year Email Signature",
            url: "https://neatstamp.com/new-year-email-signature",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              New Year Email Signature
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              The first emails you send in January create a first impression for
              the year. Here's how to update your signature for 2027 — what to
              change, what to check, and what to actually say.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build My New Year Signature — Free
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

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Most people spend December thinking about their Christmas signature
              and forget that January deserves attention too. The first week back
              at work, your email signature is doing double duty: it's still in
              the holiday transition zone, and it's also the first thing new or
              returning contacts see from you in the new year.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              A New Year email signature is the bridge between your holiday
              signature and your standard year-round signature. It doesn't need
              to be elaborate — but there are a few things worth updating before
              you start sending January emails in earnest.
            </p>
            <p className="text-muted leading-relaxed">
              For the December context that leads into this, see the{" "}
              <Link href="/holiday-email-signature" className="text-primary underline underline-offset-2">
                holiday email signature guide
              </Link>{" "}
              and the{" "}
              <Link href="/christmas-email-signature" className="text-primary underline underline-offset-2">
                Christmas email signature guide
              </Link>
              .
            </p>
          </section>

          {/* What to update */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What to actually update in January
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The new year is one of the few natural checkpoints when updating
              your signature doesn't feel arbitrary. Use it. Here's everything
              worth reviewing:
            </p>
            <div className="space-y-5">
              {[
                {
                  item: "Copyright year",
                  priority: "Always check",
                  detail:
                    "If your signature footer includes a copyright year — '© 2026 Archway Software' — update it to 2027. An outdated copyright year in January is an immediate signal that you haven't touched your signature in a while. Some signatures use dynamic copyright (auto-updating via JavaScript), but most don't.",
                },
                {
                  item: "Job title",
                  priority: "Check if you had changes",
                  detail:
                    "Did you get promoted, change roles, or take on new responsibilities at year-end? End-of-year performance reviews and promotions are common, and the new year is when new titles typically take effect. Update it now so you're not sending emails with a title that no longer reflects your role.",
                },
                {
                  item: "Headshot",
                  priority: "Check if it's outdated",
                  detail:
                    "A headshot that's more than two or three years old may no longer accurately represent you. If it's significantly different from how you look now, update it. The new year is a natural time to use a recent photo without it feeling like an odd mid-year change. See the email signature design guide for sizing specifications.",
                },
                {
                  item: "Phone number and email",
                  priority: "Verify",
                  detail:
                    "Did your direct line change? Did you move to a new email domain? Were you given a new company phone? These changes are common at year-end when organizations restructure. Verify that all contact details are current before you start sending January emails.",
                },
                {
                  item: "Website and portfolio links",
                  priority: "Check they still work",
                  detail:
                    "Click every link in your signature. Calendly links expire. Portfolio sites get rebuilt. Company website URLs change. A broken link in your signature is a minor but avoidable annoyance for recipients.",
                },
                {
                  item: "Seasonal greeting",
                  priority: "Add briefly, then remove",
                  detail:
                    "Add a brief New Year greeting for the first two weeks of January, then revert. 'Happy New Year' or 'Wishing you a great start to 2027' is appropriate for January 2nd–15th. After that, remove it.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.item}</h3>
                    <span className="text-xs text-muted bg-border px-2 py-0.5 rounded-full">
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* New Year greeting examples */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              New Year greeting examples for your signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              A New Year greeting in an email signature should be brief —
              one line at most. Here's what different tones look like in practice:
            </p>
            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Formal and professional
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Sarah Chen</div>
                  <div className="text-muted">Associate Attorney | Chen &amp; Associates LLP</div>
                  <div className="text-muted">T: +1 (212) 555-0134</div>
                  <div className="text-primary">s.chen@chenassociates.com</div>
                  <div className="mt-3 text-xs text-muted italic">
                    Wishing you a successful and productive 2027.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  Works in law, finance, and any context where a measured tone is expected.
                  "Successful and productive" is forward-looking without being effusive.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Warm and personal
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">James Ortega</div>
                  <div className="text-muted">Real Estate Advisor | Compass</div>
                  <div className="text-muted">M: +1 (310) 555-0187</div>
                  <div className="text-primary">james.ortega@compass.com</div>
                  <div className="mt-3 text-xs text-muted italic">
                    Happy New Year! I hope 2027 brings you and your family
                    everything you're hoping for.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  Works for real estate, financial advisory, and any role built
                  on personal relationships. The personal reference to family
                  makes it feel genuine rather than templated.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Brief and forward-looking
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Priya Nair</div>
                  <div className="text-muted">Senior Backend Engineer | Lumio</div>
                  <div className="text-primary">priya@lumio.io | github.com/priya-nair</div>
                  <div className="mt-2 text-xs text-muted">Happy New Year 2027.</div>
                </div>
                <p className="text-sm text-muted">
                  Four words. Clean, appropriate for tech contexts, and doesn't
                  overstay its welcome. The year is a useful reminder that this
                  is the current year's greeting, not a leftover.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Team or company voice
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Marcus Webb</div>
                  <div className="text-muted">Head of Sales | Archway Software</div>
                  <div className="text-muted">+1 (415) 555-0187 | archway.io</div>
                  <div className="mt-3 text-xs text-muted italic border-t border-border pt-2">
                    Happy New Year from the Archway team — looking forward to
                    working together in 2027.
                  </div>
                </div>
                <p className="text-sm text-muted">
                  The "from the team" phrasing works in client-facing roles where
                  the team relationship matters. Good for account managers and
                  customer success roles. See the{" "}
                  <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                    business email signature guide
                  </Link>{" "}
                  for more on company-voice signatures.
                </p>
              </div>
            </div>
          </section>

          {/* Timing */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Timing — when to switch and when to revert
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The New Year signature has a shorter natural window than the Christmas
              signature. Here's the practical calendar:
            </p>
            <div className="space-y-4">
              {[
                {
                  period: "Before January 1st",
                  guidance: "Christmas or holiday signature is still appropriate",
                  detail:
                    "Don't switch to a New Year signature before the year actually ends. Your December signature should stay up until December 31st.",
                },
                {
                  period: "January 1st–2nd",
                  guidance: "Switch on your first working day",
                  detail:
                    "Update to your New Year signature as you return to work. Remove any December closure notice immediately — it's confusing to receive an email from someone while their signature says they're closed.",
                },
                {
                  period: "January 2nd–15th",
                  guidance: "New Year greeting is appropriate",
                  detail:
                    "This is the window when 'Happy New Year' or 'Wishing you a great 2027' reads as timely. Most recipients are also returning from breaks and will be sending similar greetings.",
                },
                {
                  period: "January 15th onwards",
                  guidance: "Revert to standard signature",
                  detail:
                    "After the third week of January, any New Year reference starts to feel like you forgot. Switch back to your standard signature. The year's work has begun.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex-shrink-0 text-primary font-semibold text-sm min-w-[130px]">
                    {item.period}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">
                      {item.guidance}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Combining with closure */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Combining New Year messaging with holiday closure
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              If your office closure extends into January (common in many
              countries where the holiday period runs through January 1st or
              even later), you may want your signature to carry both the closure
              notice and a New Year greeting simultaneously. Here's how to handle
              the transition:
            </p>
            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  Pre-closure (December 24th or whenever you leave)
                </h3>
                <div className="rounded-lg bg-white border border-border p-3 font-mono text-xs text-muted">
                  Closed December 24th – January 2nd. Back in the new year —
                  happy Christmas and a peaceful new year from the team.
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  On return (January 2nd–3rd)
                </h3>
                <div className="rounded-lg bg-white border border-border p-3 font-mono text-xs text-muted">
                  Happy New Year — looking forward to working together in 2027.
                </div>
                <p className="text-xs text-muted mt-2">
                  Remove the closure notice immediately. Add the New Year greeting.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  After January 15th
                </h3>
                <div className="rounded-lg bg-white border border-border p-3 font-mono text-xs text-muted">
                  [Standard signature — no seasonal content]
                </div>
                <p className="text-xs text-muted mt-2">
                  Back to normal. The year has started.
                </p>
              </div>
            </div>
          </section>

          {/* Banner design */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              New Year signature banner — design notes
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              A New Year banner looks different from a Christmas banner. The
              tone is forward-looking and clean rather than festive and warm.
            </p>
            <div className="grid gap-5 md:grid-cols-2 mb-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-semibold text-foreground mb-3">
                  What works for New Year banners
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Deep navy, dark blue, or black backgrounds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Gold or silver typography for the year
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Clean, modern typefaces — no Christmas fonts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Minimal text: '2027' or 'Happy New Year' is enough
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Your logo integrated at small scale
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-semibold text-foreground mb-3">
                  What to avoid
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Fireworks animations (GIF issues apply here too)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Reusing your Christmas banner with '2027' pasted over it
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Overly busy confetti or balloon imagery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Banners taller than 150px that dominate the signature
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Using Christmas-specific imagery (holly, stars) in January
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted">
              For full banner sizing and image hosting guidance, see the{" "}
              <Link href="/email-signature-design" className="text-primary underline underline-offset-2">
                email signature design guide
              </Link>
              .
            </p>
          </section>

          {/* New Year checklist */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              New Year signature checklist
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Run through this when you return from the holiday break:
            </p>
            <div className="space-y-3">
              {[
                {
                  task: "Remove December holiday content",
                  detail: "Delete the Christmas greeting and any closure notice immediately on return.",
                },
                {
                  task: "Update the copyright year",
                  detail: "Change any '© 2026' references to '© 2027'.",
                },
                {
                  task: "Verify your job title",
                  detail: "Did your title change at year-end? Update it now.",
                },
                {
                  task: "Check all contact details",
                  detail: "Phone numbers, email address, and any other details that may have changed.",
                },
                {
                  task: "Click every link in your signature",
                  detail: "Calendly, portfolio, company website, social media links — verify they all work.",
                },
                {
                  task: "Add a New Year greeting",
                  detail: "One line, forward-looking, appropriate for your context.",
                },
                {
                  task: "Consider updating your headshot",
                  detail: "If it's more than two or three years old, this is a natural time to refresh it.",
                },
                {
                  task: "Set a reminder for January 15th",
                  detail: "To remove the New Year greeting and revert to your standard signature.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded border-2 border-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.task}</p>
                    <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/editor"
                className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
              >
                Update my signature in NeatStamp
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
            </div>
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
                  desc: "The December season — inclusive greetings and seasonal planning.",
                },
                {
                  href: "/christmas-email-signature",
                  title: "Christmas Email Signature",
                  desc: "Christmas-specific templates, timing, and what not to do.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The standard you return to after the holiday period.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Banners, sizing, and the visual details.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Company-wide signature updates at the new year.",
                },
                {
                  href: "/editor",
                  title: "Signature Editor",
                  desc: "Build or update your signature now — free.",
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
              Start 2027 with a signature that's actually up to date
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Free. No account needed. Takes five minutes. Works in Gmail,
              Outlook, and Apple Mail.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Update My Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
