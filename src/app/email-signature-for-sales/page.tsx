import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Sales Professionals | NeatStamp",
  description:
    "How sales professionals should design their email signature — CTA, Calendly link, phone number placement, and signals that improve response rates.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-sales" },
};

const faqs = [
  {
    q: "Should a sales email signature include a Calendly or booking link?",
    a: "Yes, and it's one of the highest-value elements in a sales signature. A direct booking link eliminates the back-and-forth of scheduling — 'Are you free Tuesday?' 'No, how about Thursday?' — which costs real time and can let deals go cold. Every email you send is a soft invitation to book time with you. The link should be prominent, with clear anchor text: 'Book a 20-minute call' or 'Schedule time with me.' Track your booking conversion over a month after adding it — most sales professionals see a meaningful increase in inbound scheduling.",
  },
  {
    q: "What's the most important element in a sales email signature?",
    a: "Your phone number. Make it large, make it the first contact detail, make it a clickable tel: link on mobile. In sales, accessibility is everything. A prospect who's been thinking about your product and picks up your email at 6pm on a Tuesday should be able to tap your number and call you with one touch. A signature that buries the phone number or doesn't include it at all is leaving calls — and deals — on the table. Phone first, then email, then booking link.",
  },
  {
    q: "Should sales signatures include social proof or customer logos?",
    a: "Only if it's genuinely impressive and recent. A line like 'Trusted by 500+ SaaS companies' or a row of 3 recognizable customer logos can create a credibility boost in cold outreach. But weak social proof — 'Used by teams of all sizes' or logos that nobody recognizes — does the opposite. It reads as padding. If you have strong, specific social proof, include it. If you're not sure whether it's strong enough, leave it out. Your message and your offer close deals; the signature is a supporting element.",
  },
  {
    q: "How often should a sales person update their email signature?",
    a: "Every quarter at minimum. Sales professionals change territories, quotas, titles, and companies more frequently than most. An outdated signature with your old company, an old product name, or an expired promotional link is actively damaging. Sales professionals who track their CTA performance — how many times the booking link gets clicked — also benefit from updating and testing different CTA text periodically. Treat your signature the same way you'd treat any other sales asset: review it, test it, update it.",
  },
  {
    q: "What CTA should a sales email signature include?",
    a: "The best CTA is specific and low-commitment. 'Book a 15-minute demo' outperforms 'Let's connect' because it's concrete and fast. 'See how [Company] cut churn by 40%' outperforms 'Visit our website' because it's specific and interesting. Match the CTA to where the prospect is in the buying process if you can — cold outreach signatures benefit from low-barrier CTAs (short call, relevant case study), while follow-up signatures can include demo booking or trial signup links.",
  },
  {
    q: "Should SDRs and AEs have the same signature format?",
    a: "Same format, different content. SDRs typically include a lighter CTA focused on discovery calls; AEs can include demo booking links or case study references. Both should have the same brand elements — logo, colors, company name. Consistency in format matters for brand impressions; the CTA and title are what should vary by role. If your sales team is large, work with marketing or ops to build role-specific templates that share the same visual structure.",
  },
  {
    q: "Can you A/B test email signature CTAs?",
    a: "Yes, and it's worth doing. Split your outreach sequences into two groups — same email body, different signature CTA. Track Calendly booking rates or click-through on the linked pages. Run the test for at least 4 weeks and 100+ emails per variant to get meaningful data. Common tests: 'Book a 15-minute call' vs. 'See the demo' vs. 'Read the case study.' You'll often find meaningful differences — 20–30% variation in click rates is common between strong and weak CTA variants.",
  },
  {
    q: "What's the ideal length for a sales email signature?",
    a: "Short enough that the CTA is visible without scrolling on mobile. Most sales emails are read on phones, and if your signature pushes the CTA below the fold, it doesn't exist. Aim for 5–7 lines: name, title, company, phone number, booking link, and optionally one line of social proof. If you're including a company logo (recommended), that counts as one visual element. Don't include your full quote or your entire sales pitch in the signature — that belongs in the email body.",
  },
];

export default function EmailSignatureForSalesPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Sales",
            url: "https://neatstamp.com/email-signature-for-sales",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Sales Professionals
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Your email signature is the last thing a prospect reads in every email you send.
              Make it do more work: a prominent phone number, a clear booking link, and the
              right trust signals can meaningfully improve your response rates and close rates.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Sales Signature — Free
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-muted">No account needed. Free forever for individuals.</p>
          </div>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Most sales email advice focuses on subject lines, opening sentences, and follow-up
              cadence. That's all important. But the signature — which appears on every single
              email you send — is often neglected entirely, set up once and never revisited.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              That's a mistake, because a well-designed sales signature does specific things
              that other elements of your email can't: it makes your phone number immediately
              available, it removes the friction from booking a call, and it reinforces why the
              prospect should respond with a quick credibility signal. Done right, your signature
              is a passive CTA in every email you send.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers the specific elements that matter for sales — from SDR cold
              outreach to AE follow-up sequences to enterprise relationship management. The
              principles differ from a standard professional signature because your goals
              differ: you want calls booked, responses received, and deals advanced.
            </p>
            <p className="text-muted leading-relaxed">
              For a broader foundation on professional signature design, see the{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional email signature guide
              </Link>. This page goes deeper on the sales-specific elements.
            </p>
          </section>

          {/* Why sales needs a great signature */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why your sales email signature is a sales tool, not a formality
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Your signature appears on every touchpoint in the sales cycle
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              A typical outbound sales sequence might include 6–8 emails over 3–4 weeks. Your
              signature appears in every one of them. If you have a booking link in your
              signature and you send 80 cold emails a day, that's 80 daily impressions of your
              Calendly link — from prospects at various stages of awareness and interest. A
              prospect who wasn't ready to respond to your first email might click the booking
              link after your third or fourth follow-up.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This is the compounding effect of a good sales signature: it works across every
              email in every sequence, for every prospect, without any additional effort. The
              10 minutes you spend building it pays back across thousands of emails.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Reducing friction is one of the highest-leverage activities in sales
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Every additional step between "interested" and "booked" loses some percentage
              of prospects. The standard scheduling back-and-forth — two or three emails to
              find a time — probably loses 20–30% of prospects who were interested but not
              motivated enough to push through the friction. A Calendly link in your signature
              eliminates that friction entirely. The prospect can go from reading your email
              to having a call booked in under 60 seconds.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The same principle applies to your phone number. A prospect who wants to call
              you right now should be able to do it in one tap from their phone. If they have
              to search for your number or write back to ask for it, some percentage of them
              won't bother. Your phone number, formatted as a clickable link, in the most
              prominent position in your signature, removes that barrier.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Your signature builds familiarity over a long sales cycle
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              In enterprise sales, you might be emailing the same prospect for months before
              they're ready to buy. Your signature — with your photo, your name, and your
              consistent branding — is building visual familiarity with every interaction.
              By the time they're ready to evaluate your product seriously, you're already
              a familiar presence rather than a cold contact.
            </p>
            <p className="text-muted leading-relaxed">
              This is why the{" "}
              <Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">
                company logo
              </Link>{" "}
              and a professional photo matter in sales signatures more than in other contexts:
              they're building brand recognition across a long relationship-building process.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What to include in a sales email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Ordered by priority — if space or visual weight is a concern, drop elements
              from the bottom of this list first.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Phone number — make it BIG",
                  required: "Always — priority #1",
                  notes: "Your direct mobile or VOIP number. Format it as a tel: hyperlink so it's one-tap callable on mobile. Make it the first and most visually prominent contact detail. 13–14px, at minimum. Don't make prospects hunt for your number — the easier you are to reach, the more calls you get.",
                },
                {
                  field: "Booking link (Calendly/Chili Piper/HubSpot)",
                  required: "Always for outbound and SDR roles",
                  notes: "A direct link to your booking calendar with a specific, low-friction CTA: 'Book a 15-minute call' or 'Pick a time that works for you.' Use Calendly's short link format or your CRM's built-in scheduling tool. Don't just write 'Schedule time here' — specify the duration to set clear expectations.",
                },
                {
                  field: "Full name + professional photo",
                  required: "Always",
                  notes: "Sales is a relationship business. A professional headshot — studio quality, appropriate business attire, direct eye contact — makes your emails more human. Use an 80×80px to 100×100px circular or square crop. Update it if it's more than 3 years old or if it no longer looks like you.",
                },
                {
                  field: "Title and company with logo",
                  required: "Always",
                  notes: "Your title and the company logo establish trust. 'Account Executive, Salesforce' means something to a prospect; 'Account Executive' alone means less. The logo builds brand recognition across your entire outreach sequence. Keep it sized consistently — 130–160px wide.",
                },
                {
                  field: "CTA button or link",
                  required: "Recommended",
                  notes: "One additional CTA beyond the booking link: a case study link, a product page, a demo video, or a relevant piece of content for the prospect's industry. Make it specific: 'See how [similar company] saved 30% on procurement' outperforms 'Visit our website.' Change this CTA based on the sequence you're running.",
                },
                {
                  field: "Social proof line",
                  required: "Optional — only if strong and specific",
                  notes: "'Trusted by 800+ B2B teams' or 'Used by Slack, Stripe, and Notion' — one line of specific, impressive social proof can boost credibility in cold outreach. If you're targeting a specific vertical (SaaS, healthcare, finance), a vertical-specific proof point is more compelling: '200+ healthcare providers trust us for compliance.'",
                },
                {
                  field: "LinkedIn profile",
                  required: "Recommended",
                  notes: "Prospects who receive cold outreach often check whether you're a real person with a real background. A LinkedIn link makes that check frictionless and adds credibility. Make sure your LinkedIn profile is updated and reflects your current role and experience.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.field}</h3>
                    <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.required}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Example signature */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Example sales email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here's a strong outbound AE signature. Phone first, booking link prominent,
              social proof specific, and CTA relevant.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">Alex Reeves</div>
              <div className="text-muted">Account Executive, Mid-Market</div>
              <div className="text-muted font-semibold">Revflow</div>
              <div className="text-foreground font-semibold mt-2 text-base">(512) 555-0178</div>
              <div className="text-primary mt-1">📅 Book a 20-min call → calendly.com/alexreeves</div>
              <div className="text-primary mt-1">→ How Figma reduced sales cycle by 35% [case study]</div>
              <div className="text-muted text-xs mt-3">Trusted by 600+ SaaS revenue teams · linkedin.com/in/alexreeves</div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Notice the structure: the phone number gets bold treatment at the largest size,
              the booking link is the first click-able action, and the CTA is a specific and
              intriguing case study rather than a generic "visit our website." The social
              proof is specific (600+ SaaS teams, not just "hundreds of companies").
            </p>
            <p className="text-muted leading-relaxed">
              Browse{" "}
              <Link href="/examples" className="text-primary underline underline-offset-2">
                signature examples
              </Link>{" "}
              for more sales-focused layouts, or go to the{" "}
              <Link href="/editor" className="text-primary underline underline-offset-2">
                editor
              </Link>{" "}
              to build yours now.
            </p>
          </section>

          {/* Step-by-step */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to build your sales signature with NeatStamp
            </h2>

            <ol className="space-y-5">
              {[
                {
                  step: "Choose a template with photo support",
                  detail: "Open the NeatStamp editor and select a template that includes a headshot placeholder. For sales, the templates with a left-side photo and right-side contact info work particularly well — the photo humanizes the email while keeping the contact details clean and prominent.",
                },
                {
                  step: "Add your phone number in the primary position",
                  detail: "In the contact fields, put your phone number first. In NeatStamp's editor, phone numbers are automatically formatted as tel: links for mobile click-to-call. Use your direct mobile or VOIP number — not a main switchboard.",
                },
                {
                  step: "Add your Calendly or booking link",
                  detail: "In the CTA or link field, paste your Calendly URL. Use anchor text that specifies duration: 'Book a 15-minute call' or 'Schedule a 20-min demo.' If you're using HubSpot Meetings, Chili Piper, or another scheduling tool, the link works the same way — just paste the URL.",
                },
                {
                  step: "Upload your headshot",
                  detail: "Use a recent professional photo. Export it at 160×160px minimum (the editor will display it at 80–100px but needs a higher-res source for retina screens). PNG or JPG both work. A circular crop looks modern; square works well too. Avoid vacation photos, conference selfies, or photos where you're not clearly visible.",
                },
                {
                  step: "Add a specific CTA link",
                  detail: "If you have a relevant case study, a product demo video, or a specific landing page for your target market, add it as a second link below the booking CTA. Make the anchor text specific and intriguing — it's the secondary CTA for prospects who aren't ready to book a call yet.",
                },
                {
                  step: "Test on mobile before sending",
                  detail: "Most prospects read sales emails on their phones. Send a test email to yourself and open it on your phone. Check that the phone number is one-tap callable, the booking link is easy to click, and nothing is too small to read. Adjust font sizes or spacing if needed.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.step}</div>
                    <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/editor"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
              >
                Create Your Sales Signature — Free
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-base font-semibold text-foreground hover:border-primary transition-all"
              >
                Browse Templates
              </Link>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes sales professionals make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Burying the phone number",
                  why: "The phone number is the most important contact detail in a sales signature. Putting it below your email address, below your LinkedIn, or in small gray text signals the opposite of accessibility. Your phone number should be the most prominent contact element — larger, bolder, first. Every call you get from a curious prospect came from them being able to find your number easily.",
                },
                {
                  mistake: "No booking link",
                  why: "Adding a Calendly link to your signature is one of the highest-ROI changes you can make to your outreach. It eliminates the 2–3 email scheduling exchange and captures prospects who are interested but won't initiate. Sales professionals who add a booking link to their signature reliably report a 15–30% increase in booked meetings from signature clicks alone over the following month.",
                },
                {
                  mistake: "Generic CTA ('Visit our website')",
                  why: "'Visit our website' is one of the weakest CTAs you can include. It tells the prospect nothing about what they'll find or why they should go. Specific CTAs outperform: 'See how [Company] cut churn by 40%,' 'Watch a 3-min product demo,' 'Book a 15-min call this week.' Specificity and relevance drive clicks.",
                },
                {
                  mistake: "Using a photo that doesn't look like you",
                  why: "An outdated headshot — from five years ago, or from a clearly different stage of life — creates a small disconnect when you meet prospects in person or on video. It's a minor issue that's easy to fix. Update your photo annually or whenever there's a significant change in your appearance.",
                },
                {
                  mistake: "Stale or weak social proof",
                  why: "'Used by thousands of companies' is not social proof — it's vague marketing language. Specific numbers, specific company names (with permission), and specific outcomes ('saved an average of 8 hours per week') are what create credibility. If your social proof isn't specific and impressive, remove it rather than leave in something generic.",
                },
                {
                  mistake: "Not testing the signature on mobile",
                  why: "More than 60% of business email is read on mobile. A signature that looks great on your desktop and has a broken layout on mobile, tiny unclickable links, or a logo that doesn't load is actively hurting your response rates. Test on iPhone and Android before you finalize.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border border-red-100 bg-red-50 p-5">
                  <span className="text-red-500 text-lg font-bold flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.mistake}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pro tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pro tips for sales professionals</h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Rotate your CTA by campaign</h3>
                <p className="text-muted leading-relaxed">
                  If you're running a campaign targeting healthcare companies, change your CTA
                  to a healthcare-specific case study or use case. If you're running a Q4
                  urgency campaign, make the CTA 'Book before end of year — limited pricing.'
                  Gmail and Outlook both let you manage multiple signatures and switch between
                  them. Use that capability to keep your CTA relevant to the sequence you're
                  running at any given time.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Track your booking link clicks</h3>
                <p className="text-muted leading-relaxed">
                  Calendly and most scheduling tools show you how prospects find your booking
                  page. You can also add UTM parameters to your Calendly link to track it in
                  your CRM or analytics. Knowing how many prospects click your signature booking
                  link — versus ones who book from your email body or follow-up sequences —
                  tells you whether your signature is doing useful work. Run the test for 30
                  days and you'll have solid data.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Different signatures for different outreach stages</h3>
                <p className="text-muted leading-relaxed">
                  Consider two signature variants: one for cold outreach (booking link prominent,
                  social proof included, engaging CTA) and one for active opportunities (phone
                  number primary, relationship-building tone, fewer distracting links). Once
                  a deal is in active discussion, the goal shifts from generating interest to
                  advancing the conversation — a leaner signature fits that context better.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Check how your signature renders in Outlook</h3>
                <p className="text-muted leading-relaxed">
                  Most enterprise prospects use Outlook. If you're on Gmail and your target
                  market is enterprise, test your signature in Outlook before your next
                  outreach push. The{" "}
                  <Link href="/email-signature-outlook" className="text-primary underline underline-offset-2">
                    Outlook signature guide
                  </Link>{" "}
                  covers the specific quirks — button styles, font rendering, image handling
                  — that differ from Gmail. A broken signature in the client your prospects
                  use is a real problem worth preventing.
                </p>
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/professional-email-signature", title: "Professional Email Signature", desc: "The universal foundation for any business email signature." },
                { href: "/email-signature-for-business", title: "Email Signature for Business", desc: "Team-wide signature consistency for sales organizations." },
                { href: "/email-signature-gmail", title: "Gmail Signature Setup", desc: "How to install and manage multiple signatures in Gmail." },
                { href: "/email-signature-outlook", title: "Outlook Signature Setup", desc: "Installation guide for enterprise Outlook environments." },
                { href: "/email-signature-with-logo", title: "Email Signature with Logo", desc: "Logo sizing and brand consistency for sales teams." },
                { href: "/email-signature-mobile-friendly", title: "Mobile-Friendly Signatures", desc: "Making your signature clickable and readable on phones." },
                { href: "/templates", title: "Signature Templates", desc: "Professional templates with photo support for sales roles." },
                { href: "/examples", title: "Signature Examples", desc: "Real examples of effective sales signatures." },
                { href: "/blog/email-signature-best-practices", title: "Email Signature Best Practices", desc: "What works and what to avoid in 2026." },
                { href: "/alternative-to-wisestamp", title: "WiseStamp Alternative", desc: "How NeatStamp compares to other signature tools for sales teams." },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-border bg-surface p-4 hover:border-primary hover:bg-white transition-colors"
                >
                  <div className="font-semibold text-foreground text-sm">{link.title}</div>
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
                <details key={i} className="group rounded-lg border border-border bg-white">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-foreground">
                    {faq.q}
                    <svg className="h-5 w-5 text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-primary p-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Build your sales signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Phone-forward, booking-link ready, renders in Gmail and Outlook.
              Free, no account required, ready in under 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Sales Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
