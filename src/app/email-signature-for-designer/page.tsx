import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Graphic Designers & Creatives | NeatStamp",
  description:
    "How designers should balance creativity and professionalism in email signatures — portfolio links, Behance, Dribbble, and showing work without overdoing it.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-designer" },
};

const faqs = [
  {
    q: "Should a designer's email signature demonstrate their design skills?",
    a: "To a degree, yes — but the email signature is a constrained format, not a canvas. It should look polished and reflect that you have a design eye: consistent typography, good use of space, thoughtful color choice. What it should not do is try to be a showcase of complex visual design. A signature that loads slowly, renders poorly in Outlook, or uses five font weights to prove a point is doing the opposite of what you want. The signature shows you understand constraints — which is also a design skill.",
  },
  {
    q: "Should I link to Behance, Dribbble, or my own portfolio website?",
    a: "Ideally your own portfolio website first, then one or two platform profiles if relevant to your work. Your personal domain (yourname.com) carries more professional weight than a Behance URL and shows you've invested in your own brand. That said, Dribbble and Behance are genuinely useful for visual work because recipients can immediately browse examples — a portfolio link that requires navigating through a website to find actual work is worse than a Dribbble profile that shows work immediately. Include both if you maintain both well.",
  },
  {
    q: "Can I use a custom font in my email signature?",
    a: "Custom web fonts won't render in email — email clients fall back to system fonts. Your carefully chosen Neue Haas Grotesk will display as Arial or Helvetica for most recipients. Design your signature with system fonts in mind: Arial, Helvetica, Georgia, Times New Roman, Verdana. You can still create a beautiful, well-typeset signature using these — the constraint just means you can't rely on a specific typeface to carry the design. NeatStamp's templates are built with this limitation in mind.",
  },
  {
    q: "Should I include my logo or a personal monogram in my signature?",
    a: "If you're a freelance designer or run a design studio, yes — your studio's logo or your personal mark belongs in your signature. It's a branding opportunity and a direct demonstration of your visual identity work. Keep it at 80–120px wide. If you're an in-house designer at a company, use the company logo (or follow their signature guidelines) rather than your personal mark — the company branding takes precedence.",
  },
  {
    q: "How many portfolio links are too many in an email signature?",
    a: "Two is usually the right number — your main portfolio and one platform link. Three is the absolute maximum. Beyond that, you're presenting options rather than making a recommendation, and recipients rarely click through multiple links. Decide which link is most representative of your best work for the context you're emailing in, make that one primary, and list the second as supplementary.",
  },
  {
    q: "Should a designer include their specialty or niche in their signature?",
    a: "Yes, if it's specific enough to be useful. 'Graphic Designer' is less informative than 'Brand Identity Designer' or 'UI/UX Designer — SaaS Products.' Specificity helps clients self-select: the person who needs packaging design work immediately knows whether you're relevant to them. If you do genuinely generalist work across several areas, listing two or three is fine: 'Brand Identity | Editorial Design | Motion.'",
  },
  {
    q: "How should a designer at a design agency set up their signature differently from a freelancer?",
    a: "Agency designers should follow the agency's brand guidelines — the agency's identity takes precedence over personal style. Your signature should match the agency's template: their logo, their colors, their font choices (within email client limitations). You can add your direct contact information and a link to your specific agency profile, but don't override the agency's visual identity with your personal brand. Freelancers have full latitude, which is where the personal mark and portfolio links become more relevant.",
  },
  {
    q: "What's the right image format for a designer's headshot in an email signature?",
    a: "PNG for images with transparency (logos, marks), JPEG for headshots. Upload at 2× the display size for retina sharpness — a 160px display headshot should be uploaded as a 320px image file. Keep file size under 100KB for headshots. Some corporate email clients block external images by default, so design your signature to work even if the image doesn't load: your name and contact information should be real text, not embedded in an image.",
  },
];

export default function EmailSignatureForDesignerPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Designers",
            url: "https://neatstamp.com/email-signature-for-designer",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Graphic Designers & Creatives
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Your email signature is, in a small but real way, a piece of design work — and
              people will notice if it doesn't reflect your standards. But the constraints
              of email HTML are brutal, and the gap between what you want to design and what
              actually renders in Outlook is significant.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Designer Signature — Free
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
              I've worked with a lot of designers on their professional presence, and the email
              signature conversation usually starts in one of two places. Either "I keep meaning
              to fix my signature but it never feels important enough" — which is understandable,
              though it's wrong — or "I've been experimenting with a custom HTML signature but it
              breaks in half my clients' inboxes" — which is a real and frustrating problem.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The core tension for designers is the same one that affects every constrained design
              problem: the medium has hard limitations (email HTML is notoriously inconsistent
              across clients), and the audience expectation is that a designer's work should
              look good. Working within those constraints elegantly is, arguably, a demonstration
              of design skill rather than a compromise of it.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              There are also the practical questions specific to creative professionals: portfolio
              links and which ones to prioritize, whether to link Behance or Dribbble or both,
              whether a personal mark or logo belongs in the signature, and how much specialty
              information to include. This guide covers all of that.
            </p>
            <p className="text-muted leading-relaxed">
              For the technical details of how email HTML actually works and why your beautiful
              custom signature breaks in Outlook, the
              {" "}<Link href="/html-email-signature" className="text-primary underline underline-offset-2">HTML email signature guide</Link>{" "}
              is essential reading. For the freelance business context,
              {" "}<Link href="/email-signature-for-freelancers" className="text-primary underline underline-offset-2">the freelancer signature guide</Link>{" "}
              covers the independent practice angle.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your designer email signature
            </h2>

            <div className="space-y-5">
              {[
                {
                  field: "Name and design specialty",
                  required: "Always",
                  notes:
                    "Your name, bold. Then your specialty: 'Brand Identity Designer,' 'UI/UX Designer,' 'Motion Designer & Art Director,' 'Graphic Designer — Packaging & Print.' Specificity helps clients and collaborators immediately understand what kind of work you do. 'Designer' alone is too broad.",
                },
                {
                  field: "Portfolio website",
                  required: "Always",
                  notes:
                    "Your own domain is the priority — yourname.com or yourstudio.com. If your portfolio is on a platform like Cargo, Squarespace, or Webflow and lives at a custom domain, that's still your portfolio and that's the right link. Avoid linking to a free-tier platform URL (behance.net/yourname as the primary link) when you have a proper domain.",
                },
                {
                  field: "Behance or Dribbble",
                  required: "If active and current",
                  notes:
                    "Include one or both if your profile is current and representative of your best work. An outdated Dribbble with three shots from 2019 does more harm than good. An active Behance with well-documented case studies is genuinely valuable. Be honest about whether your profile is worth linking.",
                },
                {
                  field: "Studio name or personal brand",
                  required: "Freelancers and studio owners — yes",
                  notes:
                    "If you operate under a studio name ('Smith Design Co.' or 'Aperture Studio'), use that as your company name. Your personal brand identity — mark, logo, monogram — can appear as the logo in your signature. Keep it at 80–100px if it's a square mark, 120–150px if it's a horizontal lockup.",
                },
                {
                  field: "Instagram",
                  required: "If relevant to your work",
                  notes:
                    "For designers whose Instagram is a curated design portfolio (which many are), linking it is entirely appropriate. If your Instagram is a mix of personal content and design work, it's better to link a dedicated design account or not at all. The professional standard: only link accounts that you'd be comfortable showing to any client.",
                },
                {
                  field: "Direct contact",
                  required: "Always",
                  notes:
                    "Your professional email address. A phone number if you're client-facing and take calls. For freelancers, a booking link for project consultations (Calendly, cal.com) can replace or supplement a phone number.",
                },
                {
                  field: "Agency name (for in-house designers)",
                  required: "Always",
                  notes:
                    "If you're employed by an agency or in-house creative team, your employer's name and branding take precedence. Follow their signature guidelines. Your personal portfolio and platform links may or may not be appropriate depending on the agency's policy — check before including them.",
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
              Example designer email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here's a signature for a freelance brand identity designer. Clean, focused,
              every link earns its place.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">Alex Kim</div>
              <div className="text-muted">Brand Identity & Visual Systems</div>
              <div className="text-muted mt-2">hello@alexkimstudio.com</div>
              <div className="text-primary">alexkimstudio.com</div>
              <div className="flex gap-4 mt-2">
                <span className="text-primary">Behance</span>
                <span className="text-muted">·</span>
                <span className="text-primary">Instagram @alexkimstudio</span>
              </div>
              <div className="text-xs text-primary mt-2">📅 Available for projects in Q3 — Book a call →</div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              The availability line is worth noting — "Available for projects in Q3" is a
              light-touch scarcity signal that's entirely appropriate for a freelance designer.
              It answers a question clients are always silently asking: can you take my project?
              Update it seasonally. When you're fully booked, "Currently at capacity — get on
              the waitlist" does the same work.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              For an in-house designer at a tech company, the format would shift: company logo,
              company name, your design title, direct contact. The personal portfolio link may
              or may not be appropriate depending on company policy — check. The agency signature
              should reflect the company's brand first.
            </p>
            <p className="text-muted leading-relaxed">
              The
              {" "}<Link href="/email-signature-design" className="text-primary underline underline-offset-2">email signature design guide</Link>{" "}
              covers the visual principles — spacing, color hierarchy, font choices — in more
              detail. Designers will find the technical constraints section especially useful.
            </p>
          </section>

          {/* Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Designer-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Working within email HTML constraints (without losing your mind)
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The mistake I see most often from designers is trying to do too much with
                  email HTML. CSS positioning doesn't work reliably. Flexbox doesn't render
                  consistently. Web fonts fall back to system fonts. A heavily styled signature
                  that looks perfect in your browser will break in Outlook, which still uses
                  Microsoft Word's rendering engine for HTML email.
                </p>
                <p className="text-muted leading-relaxed mb-3">
                  The tools that actually work: table-based layout, inline CSS, system-safe fonts,
                  properly sized and hosted images. These constraints aren't a creative failure —
                  they're the brief. Designing a signature that looks clean and intentional within
                  these constraints is the same challenge as designing for a complex legacy system
                  or an unusual substrate.
                </p>
                <p className="text-muted leading-relaxed">
                  NeatStamp generates table-based HTML that renders correctly across clients,
                  including Outlook. If you want to understand why and how, the
                  {" "}<Link href="/html-email-signature" className="text-primary underline underline-offset-2">HTML email signature guide</Link>{" "}
                  explains the technical details that matter for rendering.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Custom fonts: the real story
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Email clients don't load web fonts reliably. Google Fonts, Adobe Fonts, or your
                  custom typeface — none of them render consistently in email. The receiving client
                  substitutes its fallback font, which is usually Arial or Helvetica. This is a
                  hard constraint, not a workaround.
                </p>
                <p className="text-muted leading-relaxed">
                  The design solution is to choose a system font that you can live with, and do
                  the visual work through spacing, weight, and color rather than typeface. Helvetica
                  Neue (which is Arial, effectively) at a well-chosen size with good line spacing and
                  thoughtful color use can look better than a custom font that renders as something
                  else for 60% of your recipients.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  When to include a sample of your work
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Some designers include a small image in their signature — a recent project,
                  a portfolio sample, or a styled preview. This can work, but it has real risks:
                  image-blocking is common in corporate email clients, and a broken image tag
                  looks worse than no image. The image also adds load time and file size to every
                  email you send.
                </p>
                <p className="text-muted leading-relaxed">
                  If you include work samples, keep them to a single small image (under 100KB),
                  always link it to your portfolio, and make sure the signature reads well even
                  when images are disabled. Your portfolio link is doing the real work anyway —
                  the sample just needs to create enough curiosity to make someone click.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The creative-vs-professional balance
                </h3>
                <p className="text-muted leading-relaxed">
                  There's a spectrum in how designers present themselves professionally. On one end,
                  a highly expressive, personality-driven signature that says "I'm a creative person."
                  On the other, a clean, minimal signature that says "I run a professional design
                  practice." Neither is wrong — the right choice depends on your target clientele.
                  Enterprise clients and established agencies tend to favor the professional end.
                  Startups, small businesses, and creative agencies often respond better to
                  personality. Know your clients and calibrate accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes designers make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Using a signature image instead of real HTML text",
                  why: "Some designers render their entire signature as an image — name, contact info, links, all embedded in a PNG. It renders beautifully in their client and breaks everywhere else. Text within images isn't clickable, isn't searchable, and disappears entirely when images are blocked. Use real HTML text for all contact information.",
                },
                {
                  mistake: "Linking to outdated or sparse portfolio profiles",
                  why: "A Behance profile with three projects from 2018 makes you look less active than having no Behance link. An Instagram with a mix of food photos and design work is not a portfolio link. Only link platforms you're actively maintaining with current, representative work.",
                },
                {
                  mistake: "Over-designing — trying to make the signature do too much visually",
                  why: "A signature with custom horizontal rules, gradient color blocks, and multiple font sizes is usually trying too hard. The brief is: clear, professional, on-brand. Restraint is the harder and more impressive design choice in this format.",
                },
                {
                  mistake: "Not optimizing the portfolio link itself",
                  why: "You send someone to yourportfolio.com from your email signature — and the homepage has a 10-second loading animation and then shows your process work before any visuals. Optimize the destination. The signature link should go to a page that immediately shows your best work.",
                },
                {
                  mistake: "Using social icon fonts that render as squares",
                  why: "Icon fonts (Font Awesome, etc.) don't render in email. Your carefully placed social media icons become empty squares. Use inline SVG icons within a permitted range, hosted image icons, or just text links like 'Behance' and 'Dribbble' — they're actually cleaner than icons in most cases.",
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
              How to create your designer email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> and
              select a template that fits your design sensibility — minimal and clean tends to age
              best for designers. Fill in your name, specialty, portfolio URL, and contact information.
              Upload your personal mark or logo if you have one. Add your Behance or Dribbble links.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The editor generates table-based HTML that renders consistently across email clients —
              including Outlook, which has broken many custom designer signatures. Test in at least
              two clients before settling on your final version. The most common breakage point is
              images not loading, so always check that your signature reads clearly without images.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              For freelance designers, also see the
              {" "}<Link href="/email-signature-for-freelancers" className="text-primary underline underline-offset-2">freelancer signature guide</Link>{" "}
              which covers additional considerations for independent practitioners — availability
              signals, booking links, and managing signatures across multiple client contexts.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Designer Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Typography, color, layout — the full visual design guide.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Email Signature for Freelancers",
                  desc: "Business development angles for independent creative practitioners.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "Why email HTML is constrained and how to work within it.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "Personal mark and studio logo sizing and file format guide.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The core framework for professional signatures in any field.",
                },
                {
                  href: "/email-signature-for-photographer",
                  title: "Email Signature for Photographers",
                  desc: "Portfolio-forward signature approach for visual creatives.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "For designers who also do strategy or creative consulting.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Relevant for design agency owners managing team signatures.",
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
              Build your designer signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Clean HTML that actually renders in Outlook. Free, no account required,
              portfolio-ready in minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Designer Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
