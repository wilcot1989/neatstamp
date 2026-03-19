import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature Examples with Logo — 10+ Real Designs | NeatStamp",
  description:
    "10+ described email signature examples with logos. Different placements, professions, and styles — with notes on what makes each one work.",
  alternates: { canonical: "https://neatstamp.com/email-signature-examples-with-logo" },
};

const faqs = [
  {
    q: "Where should I put my logo in an email signature — left or right?",
    a: "Left alignment is the most common and tends to read most naturally, because Western readers scan left-to-right. A logo in the left column with name and contact details to the right is a layout that works well in nearly every email client and across screen sizes. Right-aligned logos work too, but they can feel slightly unbalanced. Center-aligned logos (often stacked above the name and details) work well for personal brands or when you want a formal, symmetrical look.",
  },
  {
    q: "How big should a logo be in an email signature?",
    a: "For a logo displayed inline with text (side by side in a two-column layout), 120–150px wide is the sweet spot. For a standalone logo row (centered above or below the main content), you can go up to 200px wide. Upload the image at 2× the intended display size for retina sharpness, then constrain with HTML width and height attributes. Keep the file size under 80KB regardless of dimensions.",
  },
  {
    q: "Should I use a headshot or a company logo?",
    a: "Use a headshot if your work involves direct personal relationships — real estate, consulting, sales, coaching, financial advising. The signature represents you as a person. Use a company logo if you're representing a brand rather than an individual — when the company identity matters more than your face. Some contexts work well with both: a headshot on the left and a small company logo on the right, or a headshot with the company name styled as a logo treatment in text.",
  },
  {
    q: "What file format should I use for my email signature logo?",
    a: "PNG with a transparent background is best for logos. Transparency means the logo works on both white and dark email backgrounds. Use JPG only for photos (headshots, banner images) where file size matters. Avoid SVG in email signatures — most email clients don't render SVG. GIF works for static images but offers worse quality than PNG at the same file size.",
  },
  {
    q: "Can I have both a headshot and a logo in the same email signature?",
    a: "Yes, and it's a common setup for real estate agents, consultants, and small business owners who want both personal recognition and brand presence. The key is proportion: keep both images small enough that they don't dominate the layout. A headshot at 70×70px and a logo at 100px wide side by side is a balanced combination. Larger than that and the signature starts to look like a flyer.",
  },
  {
    q: "Why does my logo appear blurry in my email signature?",
    a: "Usually because you uploaded a small image and it's being displayed at a larger size, or because you uploaded a large image without specifying exact dimensions and some email clients are scaling it incorrectly. Fix: upload your logo at exactly 2× the intended display size (e.g., 300px wide for a 150px display), then add width='150' and height attributes to the <img> tag. This keeps it sharp on retina screens without scaling artifacts.",
  },
];

export default function EmailSignatureExamplesWithLogoPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature Examples with Logo",
            url: "https://neatstamp.com/email-signature-examples-with-logo",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature Examples with Logo
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Here are 10+ email signature examples showing different approaches to logo
              placement — what works, why it works, and how to replicate it. Each example
              describes a real-world use case.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build a Signature Like These — Free
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
            <p className="mt-3 text-sm text-muted">No account needed. Pick a style, customize it, get the HTML.</p>
          </div>

          {/* Logo placement overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              The main logo placement options, and when to use each
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Before the examples, here's a quick reference for the common logo layouts.
              Each has a use case where it performs best.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-4">
              {[
                {
                  layout: "Logo left, text right",
                  best: "Corporate, B2B, agencies",
                  why: "Most common layout. Clean two-column structure. Logo provides brand recognition on the first scan; text provides contact details. Works well in every email client.",
                },
                {
                  layout: "Headshot left, text right",
                  best: "Real estate, consulting, sales, personal brands",
                  why: "The personal version of the logo-left layout. Puts a face to the name before a first meeting. Higher trust signal in relationship-driven industries.",
                },
                {
                  layout: "Logo centered above name",
                  best: "Professional services, formal contexts",
                  why: "More formal, symmetrical layout. Logo commands attention as the first element. Works well when the logo is square or near-square.",
                },
                {
                  layout: "Logo right, text left",
                  best: "Minimal designs, brands with right-aligned logos",
                  why: "Less common but works well when the text content is brief (name + title only). Can feel slightly unbalanced if there are many contact details.",
                },
                {
                  layout: "Headshot + logo combination",
                  best: "Real estate teams, franchise agents, financial advisors",
                  why: "Personal headshot + company/brokerage logo in the same signature. Headshot on the left, logo smaller on the right (or below). Communicates both individual identity and brand affiliation.",
                },
                {
                  layout: "Small icon / wordmark in minimal signature",
                  best: "Tech, startups, developers",
                  why: "A very small logo or styled wordmark (the company name as a graphic) used without a full logo image. Keeps the signature extremely clean. Works when the brand is recognizable by name.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-semibold text-foreground text-sm mb-1">{item.layout}</div>
                  <div className="text-xs text-primary mb-2">Best for: {item.best}</div>
                  <p className="text-xs text-muted leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The 10+ examples */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              10+ email signature examples with logos
            </h2>

            <div className="space-y-12">

              {/* Example 1 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">01</span>
                  <h3 className="text-lg font-semibold text-foreground">Corporate — logo left, text right</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-10 bg-primary rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">LOGO</div>
                    <div className="border-l border-border pl-4">
                      <div className="text-foreground font-bold text-sm">Sarah Chen</div>
                      <div className="text-muted text-xs">VP of Marketing | Fieldstone Inc.</div>
                      <div className="text-muted text-xs">D: +1 (212) 555-0134</div>
                      <div className="text-primary text-xs">fieldstone.com | LinkedIn</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> The two-column
                  structure is the most tested layout in email clients. The logo (left) provides
                  instant brand context. The divider line between logo and text gives visual
                  separation without taking up space. This format holds up in every major email
                  client including classic Outlook. Good for any corporate use case.{" "}
                  <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                    See the full business signature guide
                  </Link>{" "}
                  for rollout advice.
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">02</span>
                  <h3 className="text-lg font-semibold text-foreground">Real estate agent — circular headshot</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xs text-muted flex-shrink-0 border-2 border-primary">Photo</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">James Ortega</div>
                      <div className="text-muted text-xs">Realtor® | Compass Beverly Hills</div>
                      <div className="text-muted text-xs">CalDRE #01234567</div>
                      <div className="text-muted text-xs">M: +1 (310) 555-0187</div>
                      <div className="text-primary text-xs">📅 Book a home tour →</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> The circular
                  crop on the headshot is a subtle design choice that feels personal rather than
                  corporate. In real estate, clients are buying from a person — the face on the
                  left communicates that before anything else. The Calendly link removes scheduling
                  friction for property tours. The license number (required by California law) is
                  placed below the brokerage, not at the top.{" "}
                  <Link href="/email-signature-for-real-estate" className="text-primary underline underline-offset-2">
                    Full real estate signature guide here.
                  </Link>
                </div>
              </div>

              {/* Example 3 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">03</span>
                  <h3 className="text-lg font-semibold text-foreground">Agency / creative studio — logo above name</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3 font-mono text-sm">
                  <div className="flex justify-center mb-2">
                    <div className="h-8 w-32 bg-foreground rounded flex items-center justify-center text-white text-xs font-bold">STUDIO LOGO</div>
                  </div>
                  <div className="border-t border-border pt-2 text-center">
                    <div className="text-foreground font-bold">Marcus Webb</div>
                    <div className="text-muted text-xs">Creative Director | Webb Studio</div>
                    <div className="text-primary text-xs mt-1">webbstudio.co | Dribbble | LinkedIn</div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> The centered
                  stacked layout gives the logo visual prominence without making it dominate.
                  Good choice when the studio brand is the primary identity (rather than the
                  individual). The centered layout is symmetrical and formal — appropriate for
                  creative agencies sending proposals to clients. Keep the logo under 200px wide
                  in this format.
                </div>
              </div>

              {/* Example 4 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">04</span>
                  <h3 className="text-lg font-semibold text-foreground">Financial advisor — headshot + firm logo combo</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-muted flex-shrink-0">Photo</div>
                    <div className="flex-1">
                      <div className="text-foreground font-bold text-sm">Yuki Tanaka, CFP®</div>
                      <div className="text-muted text-xs">Senior Financial Advisor</div>
                      <div className="text-muted text-xs">M: +1 (312) 555-0194 | D: +1 (312) 555-0100</div>
                      <div className="text-primary text-xs">tanakaadvisory.com | SEC Reg # 12345678</div>
                    </div>
                    <div className="w-16 h-8 bg-gray-100 border border-border rounded flex items-center justify-center text-xs text-muted flex-shrink-0">Firm logo</div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> Financial services
                  benefit from both personal trust (headshot, CFP® designation) and institutional
                  credibility (firm logo). The firm logo on the right is smaller than the headshot,
                  keeping the personal identity primary. The SEC registration number satisfies
                  regulatory disclosure requirements. Two phone numbers make sense here — clients
                  in different contexts (office hours vs. urgent calls) need different numbers.
                </div>
              </div>

              {/* Example 5 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">05</span>
                  <h3 className="text-lg font-semibold text-foreground">Tech startup — minimal with small wordmark</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Dev Patel</div>
                  <div className="text-muted text-xs">Head of Engineering</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-bold text-sm">●</span>
                    <span className="text-foreground font-semibold text-xs">lumio</span>
                    <span className="text-muted text-xs">| lumio.io | github.com/devpatel</span>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> When the company
                  brand is a simple wordmark rather than a graphic logo, you can represent it inline
                  with a small colored dot or icon — keeping the signature very lean. This works best
                  for startups and tech companies where the recipient audience understands and appreciates
                  minimalism. GitHub is more relevant than a phone number for a head of engineering
                  emailing developers or investors.
                </div>
              </div>

              {/* Example 6 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">06</span>
                  <h3 className="text-lg font-semibold text-foreground">Law firm — logo + mandatory disclaimer</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-20 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">LAW FIRM</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Elena Vasquez</div>
                      <div className="text-muted text-xs">Associate Attorney | Bar #CA123456</div>
                      <div className="text-muted text-xs">T: +1 (212) 555-0167 | evasquez@vasquezlaw.com</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-2">
                    <p className="text-xs text-muted italic">This communication is confidential and may be legally privileged. If you are not the intended recipient, please notify the sender immediately...</p>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> Law firm signatures
                  need to balance professionalism with the legal disclaimer requirement. The disclaimer is
                  separated visually by a divider line and uses a smaller, italic font — present but not
                  dominating. The firm logo is dark (navy or black is common in legal branding). The Bar
                  number is present without being overly prominent. See the{" "}
                  <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                    professional signature guide
                  </Link>{" "}
                  for more legal industry examples.
                </div>
              </div>

              {/* Example 7 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">07</span>
                  <h3 className="text-lg font-semibold text-foreground">Small business owner — logo + CTA banner</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">LOGO</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Ana Rodriguez</div>
                      <div className="text-muted text-xs">Owner | Bright Bloom Florist</div>
                      <div className="text-muted text-xs">T: +1 (503) 555-0112</div>
                      <div className="text-primary text-xs">brightbloompdx.com | Instagram</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-2 text-center">
                    <div className="text-xs text-muted italic bg-pink-50 border border-pink-200 rounded p-2">🌷 Spring arrangements now booking — order before April 15 →</div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> For a small business
                  with seasonal demand, the promotional banner is doing real work. Every email sent during
                  the busy spring season mentions the seasonal offer. Instagram is the right social link
                  for a florist — it's where their portfolio lives. The square logo at 70×70px is the right
                  size for a standalone business brand.{" "}
                  <Link href="/small-business-email-signature" className="text-primary underline underline-offset-2">
                    See the full small business guide.
                  </Link>
                </div>
              </div>

              {/* Example 8 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">08</span>
                  <h3 className="text-lg font-semibold text-foreground">Freelance designer — portfolio-forward</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-muted flex-shrink-0">Photo</div>
                    <div>
                      <div className="text-foreground font-bold">Priya Nair</div>
                      <div className="text-muted text-xs">Brand Designer | priya.design</div>
                      <div className="text-primary text-xs">Behance | LinkedIn</div>
                      <div className="mt-1 text-xs text-muted italic">Currently: rebrand for Acme Corp →</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> The portfolio link
                  (priya.design as the domain itself is the brand) is displayed as the primary identity
                  below her name — not a secondary link. Behance is the right platform for a brand designer.
                  The "currently working on" line provides social proof without being braggy — it signals
                  active, in-demand work.{" "}
                  <Link href="/email-signature-for-freelancers" className="text-primary underline underline-offset-2">
                    More freelance signature advice here.
                  </Link>
                </div>
              </div>

              {/* Example 9 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">09</span>
                  <h3 className="text-lg font-semibold text-foreground">Executive — logo only, no headshot</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-10 bg-foreground rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">ARCHWAY</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Jordan Rivera</div>
                      <div className="text-muted text-xs">CEO</div>
                      <div className="text-primary text-xs">archway.io</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> The simplest
                  effective layout. Logo on the left asserts brand identity. CEO title needs no
                  explanation. Website link is sufficient — the brevity of this signature is itself
                  a statement. No phone number, no social links, no CTA. This only works because
                  the title provides sufficient authority context; a more junior role would need
                  more information. The logo here is dark (black or navy wordmark), clean, at 150×40px.
                </div>
              </div>

              {/* Example 10 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">10</span>
                  <h3 className="text-lg font-semibold text-foreground">Healthcare / medical practice — compliant and clean</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xs text-muted flex-shrink-0">Photo</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Dr. Michael Torres, MD</div>
                      <div className="text-muted text-xs">Cardiologist | Westside Heart Center</div>
                      <div className="text-muted text-xs">Office: +1 (310) 555-0188 | Fax: +1 (310) 555-0189</div>
                      <div className="text-primary text-xs">westsideheart.com</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-2">
                    <p className="text-xs text-muted italic">This email may contain protected health information (PHI) covered by HIPAA privacy regulations...</p>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> Medical signatures
                  have regulatory requirements (HIPAA disclosure) that must appear. A fax number is
                  still operationally important in healthcare — including it is correct here. The headshot
                  is appropriate for a patient-facing role. The credential (MD, Cardiologist) is the most
                  relevant identifier after the name. The HIPAA notice is smaller, separated visually,
                  and doesn't crowd the main content.
                </div>
              </div>

              {/* Example 11 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">11</span>
                  <h3 className="text-lg font-semibold text-foreground">Nonprofit — mission-forward</h3>
                </div>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-12 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">ORG</div>
                    <div>
                      <div className="text-foreground font-bold text-sm">Sofia Park</div>
                      <div className="text-muted text-xs">Program Director | Bright Future Foundation</div>
                      <div className="text-muted text-xs">T: +1 (206) 555-0145</div>
                      <div className="text-primary text-xs">brightfuture.org | LinkedIn</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-2 text-center">
                    <div className="text-xs text-muted italic">💚 Our 2025 Annual Report is live — see the impact →</div>
                  </div>
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">What makes it work:</strong> Nonprofits can
                  use the banner space effectively for impact communication — a link to the annual
                  report, a current campaign, or a donation page. The green color scheme is aligned
                  with the org's environmental mission. The banner at the bottom doesn't feel
                  salesy — it feels informational, which matches the tone of a nonprofit communication.
                </div>
              </div>

            </div>
          </section>

          {/* Logo sizing reference */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Quick reference: logo sizing for email signatures
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Layout</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Display size</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Upload at (for retina)</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Max file size</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Inline with text (two-column)", "120–150px wide", "240–300px wide", "60KB"],
                    ["Centered above/below text", "160–200px wide", "320–400px wide", "80KB"],
                    ["Square logo (like an avatar)", "60–80px each side", "120–160px each side", "40KB"],
                    ["Headshot (circular or square)", "70–90px each side", "140–180px each side", "50KB"],
                    ["Promotional banner (full width)", "600px wide", "1200px wide", "120KB"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 border border-border text-muted text-xs">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              For the full guide on adding logos to signatures — including file formats, hosting,
              and the HTML attributes that keep images sharp — see the{" "}
              <Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">
                email signature with logo guide
              </Link>
              .
            </p>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-maker",
                  title: "Email Signature Maker",
                  desc: "Build any of these styles. Free, no account needed.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "The complete guide to logo sizing, formats, and placement.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Color, typography, and layout principles.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What content a professional signature needs.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Business Email Signatures",
                  desc: "Rolling out consistent signatures across a team.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Freelance Email Signatures",
                  desc: "Signature strategies for independent professionals.",
                },
                {
                  href: "/email-signature-for-real-estate",
                  title: "Real Estate Email Signatures",
                  desc: "Headshots, license numbers, and CTAs for agents.",
                },
                {
                  href: "/small-business-email-signature",
                  title: "Small Business Email Signatures",
                  desc: "Signatures for restaurants, salons, agencies, and more.",
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
              Build a signature like any of these examples
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Pick the layout that matches your context, add your details and logo, and get
              clean HTML that works in every email client. Free, no account needed.
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
