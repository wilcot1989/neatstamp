import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Real Estate Agents — Close More Deals | NeatStamp",
  description:
    "Real estate email signatures need your license number, headshot, brokerage, and a Calendly link. Here's the complete guide with examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-real-estate" },
};

const faqs = [
  {
    q: "Do real estate agents need their license number in their email signature?",
    a: "In most U.S. states, yes — it's a legal requirement for all marketing and advertising materials, which typically includes email communications. The exact requirements vary by state, so check with your state's real estate commission if you're unsure. California (CalDRE), Texas (TREC), New York (NYDOS), and Florida (FREC) all have specific disclosure requirements. Your broker can confirm what's required in your jurisdiction.",
  },
  {
    q: "Should I include a headshot in my real estate email signature?",
    a: "Yes, strongly. Real estate is a relationship business. A professional headshot in your signature helps clients put a face to a name before they've met you in person, builds familiarity over time, and differentiates your emails from generic communications. Use the same photo as your MLS profile and business cards. Make it square, around 80–100px display size, and use a clean background.",
  },
  {
    q: "Can I promote current listings in my email signature?",
    a: "Yes, and it's one of the most effective uses of the signature space. A banner image (600×120px) below your main signature linking to your current listings page, a new development, or an open house event can drive real traffic. The key is keeping it updated — a banner for an open house that already happened actively undermines trust. Commit to updating it whenever the information changes.",
  },
  {
    q: "Should I use two phone numbers in my real estate signature?",
    a: "Yes, if you have both a mobile and an office number that you actually answer. Real estate clients call at all hours — they need to be able to reach you. Format them clearly: 'M: +1 (310) 555-0187 | O: +1 (310) 555-0100'. If you only reliably answer your mobile, use just that rather than listing a number you don't check.",
  },
  {
    q: "How should I handle my brokerage logo vs. my personal brand in a signature?",
    a: "This depends on your brokerage's policies. Many brokerages (Compass, Keller Williams, RE/MAX, etc.) have specific branding guidelines that require their logo to be displayed in a certain way alongside your name. Check your brokerage's standards first. If you've built a strong personal brand, you may be able to use your personal logo as well — but always include the brokerage affiliation as required.",
  },
  {
    q: "How do I make my signature work on my phone when I'm out at showings?",
    a: "The challenge with mobile is that iOS Mail and Android Gmail don't install HTML signatures the same way desktop clients do. For iOS: Settings → Mail → Signature → paste plain text (formatting won't carry over). The workaround is to install your HTML signature via a desktop browser in Gmail web or Outlook web, then access your email from your phone through the same account — the signature will appear correctly in the web view. See the Apple Mail guide and Gmail guide for specifics.",
  },
  {
    q: "What's the right format for my Realtor® designation in a signature?",
    a: "Use 'Realtor®' (with the registered trademark symbol) if you're a member of the National Association of Realtors. If you have additional designations (CRS, ABR, GRI, etc.), include the most relevant one or two after your title. 'Realtor® | CRS' is clean. A long string of designations — 'Realtor® | CRS | ABR | GRI | SFR | e-PRO' — is usually more noise than signal; clients don't know what most of them mean.",
  },
];

export default function EmailSignatureForRealEstatePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Real Estate Agents",
            url: "https://neatstamp.com/email-signature-for-real-estate",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Real Estate Agents
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Real estate runs on relationships, and email is still the primary channel for most
              of those relationships. A well-built signature supports every deal — by making you
              easy to reach, visually professional, and legally compliant.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build My Real Estate Signature — Free
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
            <p className="mt-3 text-sm text-muted">No account needed. Works in Gmail, Outlook, and Apple Mail.</p>
          </div>

          {/* Email is #1 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why email still drives real estate deals
            </h2>
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Real estate has a lot of flashy digital tools — social media, video tours,
              CRM automations, digital signing platforms. But the channel where most actual
              deal communication happens is still email. Contracts, counteroffers, inspection
              reports, disclosures, financing updates — almost all of it moves through email.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              That means your email signature appears at the bottom of legally significant
              communications, not just casual notes. In that context, what your signature
              communicates matters. A professional, complete signature says: this agent is
              organized, compliant, and takes their business seriously. A bare-bones or
              inconsistent signature says the opposite — and in a transaction involving
              hundreds of thousands of dollars, the impression you leave in every email
              carries real weight.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Beyond deal communications, email is often where clients first encounter you
              from a buyer or seller referral, how you follow up after an open house, and
              how you stay in touch with past clients for repeat business. Your signature
              appears in every one of those contexts.
            </p>
            <p className="text-muted leading-relaxed">
              There are also legal requirements specific to real estate that most other
              professions don't have — particularly around license number disclosure.
              Getting your signature right means being compliant from day one.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What belongs in a real estate email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Real estate signatures need a few specific elements that most other professions
              don't. Here's the full list, with notes on each.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name",
                  required: "Always",
                  notes: "Your professional name — first and last. Bold it. If you use a team name (e.g., 'The Martinez Team'), include it as a secondary line below your name.",
                },
                {
                  field: "Real estate designation",
                  required: "Always",
                  notes: "'Realtor®', 'Real Estate Broker', 'Real Estate Agent' — use the correct term for your license type. If you have earned designations (CRS, ABR, GRI), include the one or two most relevant to your business.",
                },
                {
                  field: "Brokerage name",
                  required: "Always",
                  notes: "Your brokerage affiliation is legally required in most marketing materials and is expected in email signatures. Include the full, official name: 'Compass', 'Keller Williams Greater LA', 'Coldwell Banker Realty'. Check your brokerage's branding guidelines.",
                },
                {
                  field: "License number",
                  required: "Legally required in most states",
                  notes: "In California, Texas, Florida, New York, and most other states, your license number must appear in advertising materials — which includes email. Include it clearly: 'CalDRE #01234567' or 'DRE License #01234567'. If you're unsure of your state's requirements, check with your broker.",
                },
                {
                  field: "Headshot",
                  required: "Strongly recommended",
                  notes: "A 80–100px square headshot builds familiarity before a first meeting. Real estate is a face-to-face business — helping clients recognize you before they meet you is genuinely valuable. Use the same photo as your MLS profile and business cards.",
                },
                {
                  field: "Phone number(s)",
                  required: "Always",
                  notes: "Both mobile and office, if you have both. Real estate clients call at unpredictable hours. Format clearly: 'M: +1 (310) 555-0187 | O: +1 (310) 555-0100'. A direct number is more useful than a general brokerage phone.",
                },
                {
                  field: "Calendly / scheduling link",
                  required: "Strongly recommended",
                  notes: "A booking link for property viewings or buyer/seller consultations removes significant friction. Label it specifically: 'Book a home tour →' or 'Schedule a free consultation →'. This is one of the highest-converting elements you can add.",
                },
                {
                  field: "Website / listings page",
                  required: "Recommended",
                  notes: "Your personal real estate website or your listings page. Clients searching for properties after an initial inquiry will often start here. Make sure the site is current — an agent website with sold listings marked 'active' loses trust immediately.",
                },
                {
                  field: "Promotional banner",
                  required: "Optional but effective",
                  notes: "A 600×120px image below your signature for an open house, a new listing, or a seasonal market update can drive real engagement. Commit to updating it when the event passes or the listing closes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-5"
                >
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

          {/* Real examples */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Real estate email signature examples
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Here are concrete examples for different real estate contexts. Use these as
              starting points and adapt them to your brokerage's branding requirements.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Buyer's agent
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">James Ortega</div>
                  <div className="text-muted">Realtor® | Compass Beverly Hills</div>
                  <div className="text-muted">CalDRE #01234567</div>
                  <div className="text-muted">M: +1 (310) 555-0187 | O: +1 (310) 555-0100</div>
                  <div className="text-primary">jamesortega.compass.com</div>
                  <div className="mt-2 text-xs text-primary">📅 Book a home search consultation →</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Clean, compliant, and actionable. The CalDRE number satisfies California's
                  disclosure requirements. Both phone numbers are present. The Calendly link
                  is labeled specifically for buyer consultations, which converts better than
                  a generic "book a call."
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Listing agent with active open house
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Maria Santos</div>
                  <div className="text-muted">Real Estate Broker | Santos Realty Group</div>
                  <div className="text-muted">NYDOS License #10401234567</div>
                  <div className="text-muted">M: +1 (212) 555-0143</div>
                  <div className="text-primary">mariasantos.com | LinkedIn</div>
                  <div className="mt-2 text-xs text-muted italic border-t border-border pt-2">🏡 Open House: 24 Oak Lane, Brooklyn — Sunday 1–4pm →</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  The open house banner below the main signature is a natural fit for a listing
                  agent. It's non-intrusive — it sits below the main content — but every email
                  becomes a soft promotional touchpoint. The New York license number follows
                  NYDOS format. Update the banner immediately after the open house.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Team leader or lead agent
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">The Rodriguez Team</div>
                  <div className="text-muted">Ana Rodriguez, Team Lead | Keller Williams Austin</div>
                  <div className="text-muted">TREC License #00567890</div>
                  <div className="text-muted">M: +1 (512) 555-0198 | team@rodriguezrealestate.com</div>
                  <div className="text-primary">rodriguezrealestate.com</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Team signatures put the team brand first while still identifying the individual.
                  The team email address (rather than just a personal one) reinforces the team
                  infrastructure. Texas TREC license number is present. See the{" "}
                  <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                    business email signature guide
                  </Link>{" "}
                  for more on managing consistent signatures across a team.
                </p>
              </div>

            </div>
          </section>

          {/* Seasonal updates */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Seasonal updates and campaign banners
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              One of the smartest things a real estate agent can do with their email signature
              is treat the banner space as rotating marketing real estate. Every email you send
              is an opportunity to direct someone's attention to something relevant.
            </p>

            <div className="grid gap-5 md:grid-cols-2 mb-6">
              {[
                {
                  season: "Spring market",
                  idea: "\"Thinking of selling this spring? Get a free home valuation →\" — link to your CMA request form.",
                },
                {
                  season: "Open house",
                  idea: "\"Open House: [address], [date] [time] →\" — link to the listing. Remove immediately after.",
                },
                {
                  season: "Year-end recap",
                  idea: "\"[Year] in review: sold 42 homes, average 12 days on market →\" — link to your testimonials or press mentions.",
                },
                {
                  season: "Market update",
                  idea: "\"March market report: what's happening in [neighborhood] →\" — link to your blog or market report.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-semibold text-foreground text-sm mb-2">{item.season}</div>
                  <p className="text-sm text-muted italic leading-relaxed">{item.idea}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted leading-relaxed">
              The banner should be a JPG or PNG image (600px wide, 100–150px tall) with a direct
              link. A plain text CTA also works but is less visually compelling. See the full
              guide on{" "}
              <Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">
                email signatures with logos and images
              </Link>{" "}
              for the technical details of adding images correctly.
            </p>
          </section>

          {/* Mobile */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Making your signature work on mobile
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Real estate agents live on their phones. You're at showings, in cars, at
              closings — you're not always at a desktop. Here's how to handle your signature
              on mobile effectively.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Gmail on Android or iOS</h3>
                <p className="text-sm text-muted leading-relaxed">
                  The Gmail mobile app uses the same signature you set up in Gmail web (via
                  Settings → See all settings → General → Signature on desktop). Your HTML
                  signature should render correctly in Gmail mobile as long as it was set up
                  through the web interface. Set it up on a desktop browser and it will appear
                  in your mobile Gmail automatically.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">iPhone / iOS Mail</h3>
                <p className="text-sm text-muted leading-relaxed">
                  iOS Mail only supports plain text signatures set via Settings → Mail →
                  Signature. If you want a formatted signature on your iPhone, the best approach
                  is to access your email through Gmail.com or Outlook.com in your phone's
                  browser rather than the native Mail app. For more detail, see the{" "}
                  <Link href="/email-signature-apple-mail" className="text-primary underline underline-offset-2">
                    Apple Mail signature guide
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Keep it readable at small sizes</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Your signature will be read on 5-inch screens. Use a minimum font size of
                  13px for your name and 12px for contact details. Don't use tiny fonts for
                  anything critical (like your phone number or license number). Your{" "}
                  <Link href="/email-signature-design" className="text-primary underline underline-offset-2">
                    email signature design
                  </Link>{" "}
                  should prioritize legibility.
                </p>
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-maker",
                  title: "Email Signature Maker",
                  desc: "Build your real estate signature in 60 seconds.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The full breakdown of what makes a signature genuinely professional.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "How to add your headshot and brokerage logo correctly.",
                },
                {
                  href: "/email-signature-examples-with-logo",
                  title: "Signature Examples with Logo",
                  desc: "10+ real examples including headshot and logo combinations.",
                },
                {
                  href: "/email-signature-gmail",
                  title: "Gmail Signature Setup",
                  desc: "Installing your signature in Gmail — desktop and mobile.",
                },
                {
                  href: "/email-signature-apple-mail",
                  title: "Apple Mail Signature Setup",
                  desc: "Mac and iPhone instructions, including HTML workarounds.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Business Email Signatures",
                  desc: "Managing consistent signatures across your team or brokerage.",
                },
                {
                  href: "/small-business-email-signature",
                  title: "Small Business Email Signatures",
                  desc: "Relevant for independent agents and small real estate teams.",
                },
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
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-primary p-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Build a signature that closes deals
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Professional, compliant, and easy to install in Gmail, Outlook, or Apple Mail.
              Free to build. No watermarks.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create My Real Estate Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
