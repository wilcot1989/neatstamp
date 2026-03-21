import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Startups | NeatStamp",
  description:
    "How startups build credible, on-brand email signatures that impress investors, win early customers, and look like a real company — even before you've fully figured out what the company is.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-startup" },
};

const faqs = [
  {
    q: "Should a pre-revenue startup bother with a professional email signature?",
    a: "Yes, especially at the pre-revenue stage. When you have no product revenue, no press mentions, and no brand recognition, your email signature is doing real credibility work on every cold outreach email, every investor introduction, and every early customer conversation. A polished signature with a real domain, a real website, and a clear company name and your role signals that you take this seriously. A generic Gmail signature with your name and nothing else signals the opposite. The cost is zero. The upside is meaningful.",
  },
  {
    q: "What should a startup founder's email signature include?",
    a: "At minimum: your full name, your title (Co-Founder & CEO, or Founder — be specific), your company name, your direct phone number, and your website URL. Add your LinkedIn and any relevant social links. If you're actively raising, a 'Learn more about [Company]' link to your one-pager or a deck request page is worth including. Don't include your investors in the signature unless they're well known and have explicitly agreed to be listed — it can come across as name-dropping if the relationship is new.",
  },
  {
    q: "How should a startup handle email signatures across a small team?",
    a: "Set up a shared template early — even if your team is three people. The discipline of having consistent signatures across the founding team signals organizational maturity to investors and partners. Create the template in NeatStamp, export the HTML, and give each team member a version with their name and title pre-filled. Revisit the template at each major milestone: rebrand, funding round, new product launch. It takes less than an hour to roll out and keeps everyone consistent.",
  },
  {
    q: "Should a startup include their funding stage or investors in their email signature?",
    a: "Only if it's meaningfully credibility-building for the specific audience. 'Backed by Y Combinator' in a startup email signature is legitimate and widely recognized — it opens doors with investors and enterprise customers. A seed round from a less-known angel syndicate is usually not worth listing. Never include funding amounts unless they've been publicly announced and are significant. The test: would a knowledgeable reader in your target audience recognize the investor or stage and think better of you for it? If yes, include it. If unsure, leave it out.",
  },
  {
    q: "What's the right domain for a startup email signature?",
    a: "Your company domain. Not Gmail, not Outlook.com, not your personal domain. If you're still sending from a personal email address, fixing that should be your first step. A company domain costs $15/year and takes an afternoon to set up with Google Workspace or Microsoft 365. Every email you send from firstname@yourcompany.com instead of firstname@gmail.com is a better first impression. Get your company email sorted before you optimize anything else in your signature.",
  },
  {
    q: "Can a startup's email signature help with investor outreach?",
    a: "It's a supporting detail, not a magic button. But for cold investor outreach, your signature contributes to the overall credibility of the email. An investor getting a cold email from a founder with a company domain, a clean signature, a website link, and a clear title is more likely to take the next step than one getting an email from a Gmail address with no context. If you're actively fundraising, consider adding a link to your pitch deck or a calendar booking link to reduce friction on the response. Every unnecessary step you remove from the 'schedule a call' process improves your response rate.",
  },
  {
    q: "How do you build a startup email signature on a tight budget?",
    a: "NeatStamp is free for individuals and low-cost for teams — it's built specifically for the constraint you're describing. Beyond the tool cost: get your company logo from whoever designed it, or make a clean text-based wordmark if you don't have a logo yet (Figma has free tiers). Keep the signature simple: name, title, company, phone, website, LinkedIn. A clean, simple signature on a company domain is more credible than an over-designed signature with stock graphics and mismatched fonts. Don't let 'we don't have a real brand yet' become an excuse to skip the basics.",
  },
  {
    q: "When should a startup update their email signature?",
    a: "Immediately after any of these: a product launch, a funding announcement, a rebrand, a title change, a new company website going live, adding new team members, or a significant customer win you can reference publicly. During fundraising, consider adding a calendar link or a brief 'currently raising our seed round' line if your investors have approved that approach. The more active your company's trajectory, the more your signature should reflect it. A startup that won a significant award six months ago and still hasn't added it to their signature is leaving credibility on the table.",
  },
];

export default function EmailSignatureForStartupPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Startups",
            url: "https://neatstamp.com/email-signature-for-startup",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Startups
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Before you have press coverage, a recognizable brand, or a long customer list,
              your email signature is doing credibility work on every single email. Here's how
              to build one that makes investors, customers, and partners take you seriously.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Startup Signature — Free
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-muted">No account needed. Free forever for individuals.</p>
          </div>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Most startup founders are meticulous about their pitch deck and careless about
              their email signature. That's backwards. You can't control when someone reads your
              deck. You can absolutely control what every single email you send looks like —
              and you send a lot of them.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              A startup's email signature problem is unique. You're often not yet well-known
              enough for your company name to carry recognition value on its own. You may not
              have a polished brand yet. Your team is tiny, your titles are informal, and you're
              emailing audiences who've never heard of you — investors, potential customers,
              potential hires, journalists, partners. Each one is making a rapid judgment about
              whether you're worth their time.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Your email signature contributes to that judgment. It's not the most important
              factor — the content of your email is — but it's a supporting signal. A polished,
              complete signature with a company domain, a real website, and a clear title nudges
              that judgment toward "this is a real company worth responding to." A bare-bones
              Gmail signature does the opposite.
            </p>
            <p className="text-muted leading-relaxed">
              This guide covers what to include, how to handle it across a founding team,
              what to do for investor outreach specifically, and the mistakes that make a
              startup look less credible than it actually is. For the general principles,
              the{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional email signature guide
              </Link>{" "}
              covers the fundamentals. This page covers what's different for startups.
            </p>
          </section>

          {/* Why startups need it */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Why your startup's email signature matters at every stage
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              First impressions happen in email, not just on your website
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              An investor who gets a cold email from a founder doesn't immediately go to your
              website. They read the email. They look at the signature. They might click LinkedIn.
              They might click your website. In that order. Your signature is often the second
              thing they look at. If it's incomplete or looks thrown together, it introduces
              doubt before they've even clicked through.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The same applies to enterprise sales. A procurement manager at a larger company
              evaluating a startup vendor is thinking about risk. Your email signature — company
              domain, proper title, phone number, company website — tells them you're a real
              business, not a freelancer operating under a business name. These signals matter
              more for startups than for established companies because you don't have brand
              recognition to carry that weight for you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Building brand identity before you have a brand
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Every time your company name, logo, and brand colors appear consistently —
              across your website, your pitch deck, your emails — you're building brand
              recognition incrementally. Startups often focus brand consistency efforts
              on external marketing and forget that internal communication carries the same
              brand. Your investors, advisors, and early customers are seeing your email
              signature repeatedly. Make sure it's consistently representing your brand,
              not whatever each team member set up individually on their first day.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Consistent team signatures are a signal of operational maturity. An investor
              who gets emails from three co-founders — all with different signature formats —
              clocks that as a company that isn't on top of the basics. It's a small signal,
              but it's a real one. Fixing it costs an hour.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Fundraising is a long communication process
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              A fundraising round involves dozens or hundreds of emails: introductions, follow-ups,
              due diligence requests, reference checks, term sheet discussions. Every one of
              those emails carries your signature. During an active raise, your signature
              can do specific work: a link to your one-pager, a calendar booking link to
              reduce scheduling friction, or a brief mention of notable traction or backing
              if it's genuinely impressive and you've been advised it's appropriate to include.
            </p>
            <p className="text-muted leading-relaxed">
              The goal isn't to cram your pitch into your signature. It's to make the next
              step easier for the investor. If every email requires them to search for your
              deck link again or figure out how to schedule a call, you're adding friction
              to a process that's already high-friction. Your signature can quietly remove
              some of that friction. See the{" "}
              <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                business email signature guide
              </Link>{" "}
              for how to think about audience-specific signature variations.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Growth signals belong in your signature
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Once you have traction worth mentioning — a significant funding announcement,
              a notable customer, a TechCrunch feature, an award — your email signature is
              a natural place to surface it. Not with a wall of text, but with one well-chosen
              line or a small badge. "Backed by Y Combinator" or "As seen in TechCrunch" or
              a small logo for a well-known customer (with their permission) does real work
              in outbound email where the recipient hasn't yet looked you up.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              What to include in a startup email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Here's what each element does and when to include it.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name + title",
                  required: "Always",
                  notes: "Be specific. 'Founder & CEO' is clear. 'Co-Founder & CTO' is clear. 'Founder' alone works for a solo founder. Avoid vague titles like 'Head of Growth' or 'Lead' without context for the company — they don't communicate enough to someone who's never heard of you. Your title should tell the reader both your role and your seniority at a glance.",
                },
                {
                  field: "Company name + logo",
                  required: "Always",
                  notes: "Your company name should be exactly your legal or operating name — no abbreviations, no taglines in this field. Your logo (even a simple wordmark) makes every email a brand impression. If you don't have a designed logo yet, a clean text-based company name in your brand font is fine — it's more credible than placeholder graphics or a generic icon.",
                },
                {
                  field: "Company domain email + website",
                  required: "Always — this is non-negotiable",
                  notes: "Sending from @yourcompany.com instead of @gmail.com is the single most important credibility signal in your signature. Set up Google Workspace or Microsoft 365 for your domain. Link to your website — if your site isn't live yet, this is the prompt you needed. A 404 or coming-soon page is worse than no link; make sure whatever you link to is actually working.",
                },
                {
                  field: "Direct phone number",
                  required: "Strongly recommended",
                  notes: "Include a number where you can actually be reached. Investors and customers will call it. Don't use a virtual number that goes to voicemail you never check. A real mobile number signals accessibility and seriousness. Label it clearly: 'M: (415) 555-0133'.",
                },
                {
                  field: "LinkedIn profile",
                  required: "Strongly recommended",
                  notes: "Your LinkedIn is where investors, potential hires, and customers go to verify who you are and whether your background is relevant. A complete, current LinkedIn profile linked from your signature removes one step from their due diligence. Make sure your profile reflects your current role and company.",
                },
                {
                  field: "Calendar booking link",
                  required: "Recommended during fundraising or sales",
                  notes: "A Calendly or Cal.com link in your signature during active fundraising or sales reduces scheduling friction. Instead of a three-email back-and-forth to find a meeting time, the interested party can book directly. Label it simply: 'Book a 30-min call' or 'Schedule a demo.' Remove it or replace it when not actively in a sales or fundraising cycle.",
                },
                {
                  field: "Funding/backing badge",
                  required: "Include only if genuinely impressive to your audience",
                  notes: "'Backed by Y Combinator' or 'Sequoia-backed' are worth including because these names are broadly recognized as credibility signals. A seed round from angels your audience won't recognize isn't worth listing. The test: would a knowledgeable reader in your space recognize the name and be impressed? If yes, one line is appropriate.",
                },
                {
                  field: "Social/product links",
                  required: "Selective",
                  notes: "LinkedIn is almost always relevant. Twitter/X is worth including if you're active and your audience is there. Product Hunt, GitHub, or app store links may be relevant depending on your product and audience. Keep it to two or three links maximum — a long list of social icons reads as noise.",
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
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Example startup email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Three examples: early stage pre-funding, active fundraise, and post-Series A.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Early stage, pre-funding:</p>
                <div className="rounded-xl border-l-4 border-border bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Jordan Reeves</div>
                  <div className="text-muted">Co-Founder & CEO</div>
                  <div className="text-muted font-semibold">Stackwise</div>
                  <div className="text-muted mt-2">M: (415) 555-0117</div>
                  <div className="text-primary">stackwise.io</div>
                  <div className="text-primary">linkedin.com/in/jordanreeves</div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Active seed fundraise (YC-backed):</p>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Jordan Reeves</div>
                  <div className="text-muted">Co-Founder & CEO</div>
                  <div className="text-muted font-semibold">Stackwise — Backed by Y Combinator</div>
                  <div className="text-muted mt-2">M: (415) 555-0117</div>
                  <div className="text-primary">stackwise.io</div>
                  <div className="text-primary">linkedin.com/in/jordanreeves</div>
                  <div className="text-primary text-xs mt-2">Book a 30-min call → calendly.com/jreeves</div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Post-Series A, growing team:</p>
                <div className="rounded-xl border-l-4 border-border bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Jordan Reeves</div>
                  <div className="text-muted">CEO & Co-Founder</div>
                  <div className="text-muted font-semibold">Stackwise</div>
                  <div className="text-muted text-xs mt-1">Series A • 45-person team • SF + NYC</div>
                  <div className="text-muted mt-2">D: (415) 555-0117</div>
                  <div className="text-primary">stackwise.io</div>
                  <div className="text-primary">linkedin.com/in/jordanreeves</div>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mt-6">
              Each version is appropriate to the stage. The pre-funding version is clean and
              professional without overclaiming. The fundraise version adds the YC badge and
              calendar link to do specific work during that stage. The post-Series A version
              adds light growth signals (team size, locations) without being boastful. Browse{" "}
              <Link href="/examples" className="text-primary underline underline-offset-2">
                signature examples
              </Link>{" "}
              to see these with visual layouts applied.
            </p>
          </section>

          {/* Step-by-step */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              How to build your startup signature with NeatStamp
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              You can have a polished startup signature ready in under 15 minutes.
            </p>

            <ol className="space-y-5">
              {[
                {
                  step: "Sort out your company email domain first",
                  detail: "Before you build a signature, make sure you're emailing from yourname@yourcompany.com. If you're still on Gmail, set up Google Workspace (starts at $6/user/month) or use Cloudflare Email Routing to forward a custom domain to your existing Gmail. This is the most important step.",
                },
                {
                  step: "Open NeatStamp and choose a clean template",
                  detail: "Go to the NeatStamp editor and pick a template. For most startups, 'Modern' or 'Minimal' works best — they're clean, contemporary, and don't look like a corporate law firm's template. Adjust the primary color to match your brand color.",
                },
                {
                  step: "Add your logo or wordmark",
                  detail: "Upload your company logo as a PNG with a transparent background. If you only have a JPEG, the white background will show up in emails. If you don't have a designed logo yet, use your company name in a clean font as a text-based wordmark — it's more credible than a placeholder graphic.",
                },
                {
                  step: "Fill in your information",
                  detail: "Enter your name, title, company name, phone number, and website URL. Add your LinkedIn URL. If you're in an active fundraising or sales period, add your Calendly or Cal.com link. If you have a meaningful backer, add one line for that.",
                },
                {
                  step: "Set up a team template if you have co-founders",
                  detail: "If you have co-founders or early employees, create the master template once and export it as HTML. Share the HTML file with each person and tell them exactly which three fields to update: name, title, phone. Everyone gets a consistent signature in 10 minutes.",
                },
                {
                  step: "Export and install",
                  detail: "Download the HTML and install it in your email client. The editor has guides for Gmail and Outlook. For Gmail, go to Settings > See all settings > General > Signature. Paste in the HTML. Test by sending yourself a test email to make sure it renders correctly.",
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
                Create Your Startup Signature — Free
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
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Common mistakes startups make with their email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Emailing from a personal Gmail address",
                  why: "This is the most credibility-damaging mistake a founder can make. firstname.lastname2024@gmail.com reads as 'this person doesn't have a company yet.' A company domain email costs $6/month and is the highest-ROI credibility investment you can make. Fix this before anything else.",
                },
                {
                  mistake: "Vague or informal titles",
                  why: "\"Startup guy\" or \"CEO/Janitor\" is fine for Twitter bios. For investor emails and enterprise sales, you need a clear, credible title. 'Co-Founder & CEO' is specific enough to communicate your role and your seniority at a glance. Informal titles read as casual in contexts where you want to be taken seriously.",
                },
                {
                  mistake: "Different signatures across the founding team",
                  why: "When three co-founders are emailing the same investor and each has a different signature format, it signals that you don't have basic operational consistency. Create one template, roll it out, and update it together when your company stages change. The discipline matters.",
                },
                {
                  mistake: "Adding investor names you're not supposed to list",
                  why: "Some angel investors explicitly ask not to be listed in portfolio company materials until they've decided to make a public commitment. Listing them prematurely can damage the relationship. Ask before you include any investor name, fund, or accelerator in your signature.",
                },
                {
                  mistake: "Never updating the signature as the company grows",
                  why: "A founder who raised a Series A six months ago and still has a pre-funding signature is leaving a traction signal on the table. Every major milestone — funding round, notable customer, team size milestone — is worth a signature update during that period. Don't set it once and forget it for years.",
                },
                {
                  mistake: "Too much in the signature",
                  why: "Some founders try to put their entire pitch in their signature: funding stage, team size, revenue, customer names, three social links, a tagline, and a banner image. It reads as insecure. Pick the one or two strongest signals and present them cleanly. Restraint is more credible than a wall of claims.",
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
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Pro tips for startup founders
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Stage-match your signature</h3>
                <p className="text-muted leading-relaxed">
                  Your signature should reflect where you actually are, not where you want to be.
                  At pre-seed: clean and minimal. During fundraise: add the calendar link and any
                  notable backer. Post-funding: add the growth signal. Post-launch with real customers:
                  a subtle traction line. Investors read hundreds of founder emails. They notice when
                  a signature feels inflated. They also notice when a strong company undersells itself.
                  Match the stage.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Test how your signature renders in Outlook</h3>
                <p className="text-muted leading-relaxed">
                  Most enterprise companies run Outlook. If you're selling to enterprises or meeting
                  with institutional investors, your email signature will be rendered in Outlook on
                  someone's screen. Gmail's rendering engine and Outlook's are different. Send
                  yourself a test email through a colleague with Outlook or use an email testing
                  tool to confirm your signature renders correctly. The{" "}
                  <Link href="/email-signature-outlook" className="text-primary underline underline-offset-2">
                    Outlook signature guide
                  </Link>{" "}
                  covers exactly what breaks and how to fix it.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Your signature is part of your first impression system</h3>
                <p className="text-muted leading-relaxed">
                  Think about what happens when someone gets your email: they read the subject line,
                  they read the email, they look at who sent it (your email address and name), they
                  look at your signature, and then they might click LinkedIn or your website. Your
                  signature is the bridge between the email and your deeper presence. It should have
                  everything a skeptical reader needs to take the next step. See what makes a
                  signature genuinely credible in the{" "}
                  <Link href="/blog/email-signature-best-practices" className="text-primary underline underline-offset-2">
                    email signature best practices guide
                  </Link>.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Don't neglect mobile rendering</h3>
                <p className="text-muted leading-relaxed">
                  A significant portion of investor and customer emails are read on phones.
                  A signature that looks perfect in desktop Gmail can render as a broken mess
                  on mobile — oversized logos, unclickable phone numbers, misaligned columns.
                  Check your signature on your own phone after installing it. NeatStamp
                  templates are mobile-tested, but always verify with a real device.
                </p>
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/professional-email-signature", title: "Professional Email Signature", desc: "The fundamentals of a signature that builds credibility with any audience." },
                { href: "/email-signature-for-business", title: "Email Signature for Business", desc: "How to roll out consistent signatures across a founding team." },
                { href: "/email-signature-with-logo", title: "Email Signature with Logo", desc: "Getting your startup logo to render correctly in every email client." },
                { href: "/email-signature-gmail", title: "Gmail Signature Setup", desc: "How to install your signature in Google Workspace Gmail." },
                { href: "/email-signature-outlook", title: "Outlook Signature Setup", desc: "Testing and installing for enterprise Outlook recipients." },
                { href: "/email-signature-for-sales", title: "Email Signature for Sales", desc: "CTA placement, calendar links, and response rate tips." },
                { href: "/templates", title: "Signature Templates", desc: "Modern, minimal templates that fit startup brand aesthetics." },
                { href: "/examples", title: "Signature Examples", desc: "See startup signature examples with different branding approaches." },
                { href: "/blog/email-signature-best-practices", title: "Email Signature Best Practices", desc: "What works and what doesn't in 2026." },
                { href: "/email-signature-for-hr", title: "Email Signature for HR", desc: "For your first HR hire setting up recruiting signatures." },
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
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4 text-center">
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
              Build your startup signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Professional, on-brand, renders correctly everywhere.
              Free to start, no account required, done in 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Startup Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
