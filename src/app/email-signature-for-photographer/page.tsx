import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Photographers — Portfolio in Every Email | NeatStamp",
  description:
    "How photographers should use email signatures as mini-portfolios — portfolio links, Instagram, booking links, style specialty, and what not to include.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-photographer" },
};

const faqs = [
  {
    q: "Should photographers include a sample photo in their email signature?",
    a: "A single, carefully chosen image can work well for photographers — it's one of the few professions where including a visual in the signature is genuinely on-brand and adds value. If you include one, keep it small (500–600px wide, under 100KB), make it clickable to your portfolio, and design the signature to still read clearly when images are blocked. One strong hero image is better than a gallery strip. Choose something that represents your best and most bookable work, not just your personal favorite.",
  },
  {
    q: "How important is Instagram for a photographer's email signature?",
    a: "Very important, more than for most professions. Instagram functions as an active portfolio for photographers — it shows recent work, demonstrates your style consistently, and provides an immediately browsable gallery to prospective clients. Many clients will check your Instagram before they check your website. Link to your professional photography account, not a personal mixed account. Make sure the account is public, active, and representative of the work you want to book.",
  },
  {
    q: "Should photographers link Behance, 500px, or Flickr in their signature?",
    a: "Only if the platform is actively maintained and shows genuinely great work. 500px and Flickr have declined in relevance as primary portfolio platforms — they were significant five to eight years ago and many profiles are now stale. A link to an outdated 500px profile with photos from 2017 doesn't help you. Your own website and Instagram are almost always the stronger choices. Behance is more relevant for photographers who do commercial or editorial work where the creative direction story matters.",
  },
  {
    q: "What photography specialty information should go in an email signature?",
    a: "Be specific enough to be useful — your specialty helps prospective clients self-select. 'Wedding & Engagement Photography' is immediately useful to someone planning a wedding. 'Commercial Product Photography | E-commerce & Lifestyle' signals exactly who to call for a product shoot. 'Editorial Portrait Photography' tells an art director what to expect. Avoid 'Photography' or 'Photographer' alone — it's too broad. If you genuinely work across multiple areas, list your top two: 'Wedding | Boudoir' or 'Commercial | Architecture.'",
  },
  {
    q: "Should photographers include their booking software link in their email signature?",
    a: "Yes, if it creates a better client experience. A Calendly link for consultation calls, or a link to your booking page in HoneyBook, Dubsado, or whatever client management software you use, can significantly reduce the back-and-forth that precedes a booking. For wedding and portrait photographers especially, a 'Book a free consultation call' Calendly link is a high-value addition. For commercial photographers whose projects require custom scoping conversations, a general booking link may be less appropriate than a direct email response.",
  },
  {
    q: "How should a photographer handle their signature differently for wedding clients vs. commercial clients?",
    a: "Multiple signatures are the practical answer here. Wedding clients are often in an emotional, personal purchase process — a warmer, slightly more personal signature with your headshot and a 'Request a consultation' CTA works well. Commercial clients (agencies, art directors, brands) are in a professional procurement mindset — a cleaner, portfolio-forward signature with your specialty and rate sheet link (or website) is more appropriate. Gmail and Outlook both support multiple signatures; the 5 minutes of setup pays off.",
  },
  {
    q: "What should photographers NOT include in their email signature?",
    a: "Camera gear specifications ('Shot on Canon R5, 85mm f/1.4'). This reads as amateur — clients don't hire cameras, they hire photographers. Pricing in the signature itself — rates change, and pricing belongs in a proposal or pricing guide, not in your footer. Excessive award mentions — one significant recognition is fine, a list of six photography contest placements is noise. And personal social accounts — keep your signature links to professional photography accounts only.",
  },
  {
    q: "Does a photographer's email signature need a physical address?",
    a: "Usually not, unless you have a studio with a physical location that clients visit. Most photographers work on-location, at client sites, or in rented studios — there's no fixed address that's useful contact information. If you're based in a city and it helps clients understand your availability for local bookings, listing your city and state ('Based in Austin, TX | Available worldwide') is more useful than a full mailing address.",
  },
];

export default function EmailSignatureForPhotographerPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Photographers",
            url: "https://neatstamp.com/email-signature-for-photographer",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Photographers
              <span className="block text-3xl mt-2 text-primary">Put Your Portfolio in Every Email</span>
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Every email you send to a prospective client is a chance to give them a glimpse
              of your work before they've even clicked over to your website. A photographer's
              email signature can do more than just share your phone number — it can be a
              soft portfolio moment built into every single message.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Photography Signature — Free
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
            <p className="mt-3 text-sm text-muted">No account needed. Free forever for individuals.</p>
          </div>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              I've worked with photographers ranging from solo wedding shooters to commercial
              studios, and the email signature conversation almost always uncovers the same
              missed opportunity: they have a beautiful portfolio, an active Instagram full of
              stunning work, and a professional website — but their email signature sends people
              to none of it. Or worse, it links to an outdated profile that doesn't represent
              their current style.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The stakes are higher for photographers than for most professions because the
              hiring decision is almost entirely visual. A corporate lawyer's client wants to
              know their credentials; a wedding client wants to see their work and feel the
              emotional resonance of their style. Your signature is the first visual touchpoint
              in an email conversation — and for photographers, visual touchpoints matter.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers what to include, how to use Instagram effectively in your
              signature, whether to include a sample image, how to handle specialty disclosure,
              and how to set up booking links that actually convert inquiry emails into
              consultations. For the freelance business angles,
              {" "}<Link href="/email-signature-for-freelancers" className="text-primary underline underline-offset-2">the freelancer signature guide</Link>{" "}
              covers independent practice considerations that apply directly.
            </p>
            <p className="text-muted leading-relaxed">
              For logo and image handling specifics — which are particularly relevant for
              photographers who may want to include their watermark or studio logo — the
              {" "}<Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">email signature with logo guide</Link>{" "}
              covers file format and sizing in detail.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your photographer email signature
            </h2>

            <div className="space-y-5">
              {[
                {
                  field: "Name and photography specialty",
                  required: "Always",
                  notes:
                    "'Wedding & Portrait Photographer,' 'Commercial Product Photography,' 'Editorial & Lifestyle Photographer' — specific enough that a prospective client immediately knows whether you're relevant to them. If you've positioned around a niche, name it: 'Documentary Wedding Photography' or 'Food & Beverage Photography | Restaurants & CPG Brands.'",
                },
                {
                  field: "Studio name (if applicable)",
                  required: "If you have one",
                  notes:
                    "Your studio or business name, if different from your personal name. 'Alex Kim Photography' is a personal brand. 'Prism Creative Studio' is a studio brand. Use whichever you've established and that clients know you by. Consistency matters — the same name on your signature, your website, your Instagram, and your contracts.",
                },
                {
                  field: "Portfolio website",
                  required: "Always — the highest priority link",
                  notes:
                    "Your portfolio is your primary sales tool. The link from your signature should go to the most visually impactful page of your site — ideally your best gallery rather than an 'about me' page or a contact form. If your site has a hero page that loads slowly or leads with text, consider linking directly to a specific gallery.",
                },
                {
                  field: "Instagram",
                  required: "Strongly recommended",
                  notes:
                    "For photographers, Instagram is effectively an active portfolio. Link to your professional account with your handle: '@alexkimphoto' or 'instagram.com/alexkimphoto.' Make sure the account is public, current (posting at least twice a week), and exclusively shows your photography work, not personal content.",
                },
                {
                  field: "Booking link",
                  required: "Recommended for consumer photographers",
                  notes:
                    "A Calendly link ('Book a consultation call') or a link to your HoneyBook/Dubsado inquiry page. For wedding and portrait photographers especially, removing the friction from the consultation booking process is high value. For commercial photographers, a more custom intake process is usually appropriate.",
                },
                {
                  field: "Sample portfolio image",
                  required: "Optional — see notes",
                  notes:
                    "A single hero image from your best and most representative work. Keep it under 100KB, 500–600px wide, and always link it to your portfolio. Design the signature to still read clearly without it — image blocking is common. One strong image is better than a grid of thumbnails.",
                },
                {
                  field: "Location or availability note",
                  required: "Recommended",
                  notes:
                    "'Based in Nashville, TN | Available Nationwide' or 'Chicago-based | Open to travel' answers a question clients frequently ask before they've even reached out. If you're based in a destination that's relevant to your specialty (Sedona for elopements, New York for commercial), your location can be part of your brand.",
                },
                {
                  field: "Direct phone or contact method",
                  required: "Recommended",
                  notes:
                    "A phone number for clients who prefer to call, or a dedicated inquiry email if you route clients through a specific address. Many photographers use a separate 'bookings@' email to keep client inquiries organized. Whichever you use, be consistent across all touchpoints.",
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

          {/* Example */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Example photographer email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Two versions — one for a wedding photographer, one for a commercial photographer.
              The audience, tone, and priorities differ meaningfully.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Wedding & elopement photographer</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Elena Vasquez</div>
                  <div className="text-muted">Documentary Wedding & Elopement Photographer</div>
                  <div className="text-muted">Based in Denver, CO | Available Worldwide</div>
                  <div className="text-muted mt-2">hello@elenavasquez.com | (720) 555-0167</div>
                  <div className="text-primary">elenavasquez.com</div>
                  <div className="text-primary">@elenavasquezphoto</div>
                  <div className="text-xs text-primary mt-2">📅 Check my availability → calendly.com/elenavasquez</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Commercial product photographer</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">James Adeyemi</div>
                  <div className="text-muted">Commercial Product & Lifestyle Photography</div>
                  <div className="text-muted">Adeyemi Creative | Chicago, IL</div>
                  <div className="text-muted mt-2">james@adeyemicreative.com | (312) 555-0193</div>
                  <div className="text-primary">adeyemicreative.com/commercial</div>
                  <div className="text-primary">@adeyemicreative</div>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mt-6">
              The wedding photographer's availability link is doing real sales work — it answers
              the first question a couple asks ("Are you available on our date?") and moves the
              conversation forward with zero back-and-forth. The commercial photographer points
              to a specific portfolio page rather than the homepage, since art directors and
              brand marketers want to immediately see commercial work, not a full portfolio of
              mixed work.
            </p>
          </section>

          {/* Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Photographer-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Instagram as a portfolio link: making it work
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The mistake I see most often is photographers linking their Instagram without
                  thinking about what a first-time client will see when they arrive there. If your
                  most recent posts are a mix of your dog, some food, a vacation photo, and two
                  photography shots — that's not a portfolio. It's a personal Instagram.
                </p>
                <p className="text-muted leading-relaxed mb-3">
                  A photography Instagram that earns a signature link should: be exclusively or
                  predominantly photography work, post consistently (at least weekly), show a
                  coherent aesthetic and style, and be arranged so the most recent work represents
                  your current quality and direction. If your personal Instagram doesn't meet this
                  bar, create a separate professional account and link that instead.
                </p>
                <p className="text-muted leading-relaxed">
                  Format the link clearly: '@elenavasquez' or 'instagram.com/elenavasquez' —
                  not just the URL with no label. Many recipients won't know what a bare Instagram
                  URL is pointing to without context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Including a hero image: the right way to do it
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  If you decide to include a portfolio image in your signature, a few technical
                  points matter. First: optimize it aggressively. A full-resolution photo file
                  from a professional camera can be 25–40MB. Your email signature image should be
                  under 100KB — use JPEG compression at 70–80% quality, and size it to exactly
                  the display dimensions you want (500–600px wide). Sending a multi-megabyte email
                  for every message you send is inconsiderate and will get you spam-flagged.
                </p>
                <p className="text-muted leading-relaxed">
                  Second: always add alt text to the image in your HTML ('alt="Wedding photography
                  by Elena Vasquez"') so it's descriptive when images are blocked. Third: link the
                  image directly to your portfolio — a clickable image is significantly more useful
                  than a decorative one. The
                  {" "}<Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">email signature image guide</Link>{" "}
                  covers the technical details of image hosting and retina display optimization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Seasonal availability signals
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Wedding photographers have a clear seasonality. If you're fully booked through
                  October and inquiries are coming in for that period, saying so in your signature
                  is useful information that manages expectations and can create urgency for the
                  next available season. "Currently booking 2026 weddings" or "Limited availability
                  for fall 2025" is information clients need and appreciate up front.
                </p>
                <p className="text-muted leading-relaxed">
                  Update this seasonally — at the very least, twice a year. An availability note
                  that's eight months out of date is confusing. If you use a Calendly link for
                  availability checks, the calendar will handle this automatically. If you use a
                  text note, build a reminder into your calendar to update it.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes photographers make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Listing camera gear",
                  why: "'Shot on Sony A7R V with 35mm f/1.4 GM' in an email signature reads as amateur to experienced clients. Clients hire photographers, not cameras. Gear discussions belong in behind-the-scenes content or in conversation with enthusiast clients who ask — not in every email you send.",
                },
                {
                  mistake: "Linking to an outdated or inactive portfolio",
                  why: "A portfolio website that hasn't been updated in two years, showing work that no longer represents your style, is actively hurting your bookings. Your signature's portfolio link should go to work you're currently proud of. If your website needs an update, prioritize that before sending another 500 emails.",
                },
                {
                  mistake: "Using a personal Instagram instead of a professional one",
                  why: "Linking an Instagram account that mixes personal posts with photography work undermines the professional impression. The test: if a prospective client you really wanted to impress followed your link, would they see a curated photography portfolio or a personal social account? If the latter, create a dedicated professional account.",
                },
                {
                  mistake: "Too many social links",
                  why: "A row of six icons for Instagram, Facebook, Pinterest, 500px, Behance, and Flickr presents a scattered professional identity. Choose the one or two platforms where your best work actually lives and that your target clients actually use. For most photographers in 2026, that's Instagram and your portfolio website.",
                },
                {
                  mistake: "Oversized images that increase email file size significantly",
                  why: "A 4MB image in every email signature is technically problematic — it slows delivery, increases spam score likelihood, and is inconsiderate of recipients with limited bandwidth. Optimize portfolio images to under 100KB. Hosting them externally (linked from a URL rather than attached) is better than embedding them.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-red-100 bg-red-50 p-5"
                >
                  <span className="text-red-500 text-lg font-bold flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.mistake}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to create */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to create your photography email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> and
              choose a template with space for an image if you want to include a portfolio photo.
              Fill in your name, specialty, studio name (if you have one), location, and contact
              information. Add your portfolio website and Instagram handle. If you're including a
              booking link, add your Calendly URL in the CTA field.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              If you're adding a portfolio image, prepare it first: resize to 500–600px wide,
              compress to under 100KB, and host it on your website so it loads from a URL rather
              than being embedded. The editor will let you link the image directly to your portfolio.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              For photographers managing wedding client emails versus commercial client emails,
              build two versions — the
              {" "}<Link href="/email-signature-for-freelancers" className="text-primary underline underline-offset-2">freelancer guide</Link>{" "}
              has context on managing multiple signature variants for different client types.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Photography Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "Studio logo, watermark, and portfolio image technical guide.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Email Signature for Freelancers",
                  desc: "Independent practice angles — booking, availability, client types.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The full framework for professional signatures.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Visual design principles — especially relevant for visual creatives.",
                },
                {
                  href: "/email-signature-for-designer",
                  title: "Email Signature for Designers",
                  desc: "Portfolio-forward signature approach for other visual creatives.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How images in email signatures actually work technically.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "For photographers who do creative direction or consulting work.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "For photography studio owners managing a team.",
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
              Build your photography signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Portfolio-forward, Instagram-ready, booking-link enabled.
              Free, no account required.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Photography Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
