import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Lawyers & Attorneys (2026) | NeatStamp",
  description:
    "What belongs in a lawyer's email signature — bar number, credentials, disclaimers, and firm branding. Practical guide with real examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-lawyer" },
};

const faqs = [
  {
    q: "Do lawyers need to include their bar number in an email signature?",
    a: "It depends on the state. Some state bars require it; others don't. California, for example, doesn't mandate it in email signatures, but many California attorneys include it anyway because clients sometimes ask for verification. Texas is similar. Check your specific state bar's rules on attorney advertising and communications — that's usually where email signature requirements live. When in doubt, include it. It takes up two lines and adds credibility.",
  },
  {
    q: "Is a confidentiality disclaimer legally required in attorney email signatures?",
    a: "No jurisdiction I know of legally mandates a confidentiality disclaimer in email signatures. But most law firms include one anyway, for good reason. The disclaimer doesn't create attorney-client privilege on its own, but it does put recipients on notice that the content is intended only for the addressed party. If an email is sent to the wrong person, that notice matters. It's also standard industry practice, and clients expect to see it.",
  },
  {
    q: "Should a lawyer's email signature include a headshot?",
    a: "It's more common in litigation and solo/small firm practice than in BigLaw, where signatures tend to be more formal and uniform. A professional headshot — studio quality, appropriate attire — can humanize your emails, especially if clients are going through a stressful situation like a divorce or a lawsuit. Skip it if your firm has a house style that doesn't include photos, or if you practice in a formal transactional area where the formality mismatch would feel odd.",
  },
  {
    q: "Can I list multiple bar admissions in my signature?",
    a: "Yes, and you should if it's relevant to your practice. If you're admitted in New York and New Jersey and regularly practice in both, list both. Format it cleanly: 'Admitted: NY, NJ' or 'Licensed in: New York, New Jersey' rather than listing each one as a separate line. If you have a large number of admissions (some litigators have 5+), consider listing only the primary ones and adding 'and others' or putting the full list on your firm bio page.",
  },
  {
    q: "Should I list my practice areas in my email signature?",
    a: "For solo attorneys and small firms, yes — practice areas are genuinely useful context for recipients who may not know your specialty. Keep it to two or three areas maximum: 'Personal Injury | Medical Malpractice | Wrongful Death' rather than a list of ten. For attorneys at large firms, your practice group is usually enough, since the firm's website handles the detailed breakdown. For transactional attorneys, deal types can work well: 'M&A | Private Equity | Securities'.",
  },
  {
    q: "How should a law firm standardize email signatures across attorneys?",
    a: "Create a master template with firm branding — logo, colors, font — and leave placeholder fields for name, title, bar number, and direct line. Roll it out through your IT department or have your office manager send instructions to each attorney and paralegal individually. Consistency matters because clients often email multiple people at the same firm; mismatched signatures erode the impression of a well-run operation. See the guide on email signatures for businesses for rollout advice that applies directly to law firms.",
  },
  {
    q: "Should paralegals and legal assistants have the same signature format as attorneys?",
    a: "Same template, different content. Paralegals should not use the word 'attorney' or 'Esq.' or list a bar number — that would be misleading about their credentials. Their title should be accurate: 'Paralegal,' 'Legal Assistant,' 'Law Clerk,' etc. The firm logo, colors, and contact format should be identical to the attorney signatures. Some firms also note the supervising attorney in the paralegal's signature: 'Paralegal to John Smith, Partner.'",
  },
  {
    q: "What's the right length for a law firm email signature?",
    a: "Shorter than most attorneys think. Name, credentials, title, firm name, phone, email, website, bar admission, and a brief disclaimer is plenty. I see lawyer signatures that are 15 lines long with every award, every bar association membership, and every speaking engagement listed. That information belongs on your bio page, not your signature. The signature is contact information and professional identification — not your resume. Aim for 6–8 lines of content plus the disclaimer.",
  },
];

export default function EmailSignatureForLawyerPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Lawyers",
            url: "https://neatstamp.com/email-signature-for-lawyer",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Lawyers & Attorneys
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Attorneys send a lot of email. Between client correspondence, opposing counsel,
              court communications, and firm-internal threads, your signature is appearing
              dozens of times a day in contexts that range from deeply personal to
              formally adversarial. Getting it right matters.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Attorney Signature — Free
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
              I've worked with dozens of attorneys on their professional profiles and communications,
              and the email signature is almost always an afterthought — set up on day one at the firm
              and never revisited. That's a problem, because a lawyer's signature carries specific
              professional obligations that most other professions don't have: bar admission disclosure,
              credential accuracy, and in many cases a confidentiality disclaimer that serves a real
              legal purpose.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              There's also the reality that your clients are often in stressful, high-stakes situations.
              The email they're reading from you may be about a custody dispute, a business acquisition,
              or a criminal charge. Your signature is part of how you present your professional authority
              in that moment. A polished, complete signature reinforces that they're working with a
              competent professional. A poorly formatted one doesn't.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers exactly what to include, how to handle the bar number and disclaimer
              questions that come up repeatedly, and what the actual best practices look like across
              different practice areas. If you're at a large firm with a standardized template, some
              of this will be familiar. If you're solo or at a small firm where you're setting your
              own format, this is your complete reference.
            </p>
            <p className="text-muted leading-relaxed">
              For the broader professional signature principles that apply across industries,
              the <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link> is
              worth reading first. This page goes deeper on the attorney-specific pieces.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your lawyer email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Attorney signatures have a few mandatory fields and several that are strongly recommended.
              Here's how to think about each one.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name + credentials",
                  required: "Always",
                  notes:
                    "Use your professional name followed by your degree: 'Sarah J. Mitchell, J.D.' or 'Sarah J. Mitchell, Esq.' Use one or the other, not both — 'Esq.' and 'J.D.' together is redundant. 'Esq.' is more traditional in the U.S.; 'J.D.' is increasingly common and immediately clear to non-lawyers. Bold your name — it's the primary identifier.",
                },
                {
                  field: "Title and firm name",
                  required: "Always",
                  notes:
                    "Partner, Associate, Of Counsel, Managing Partner, Solo Practitioner — be accurate. Your firm name should match the exact registered name. If you're solo, 'Law Office of Sarah J. Mitchell' or 'Mitchell Law, PLLC' as applicable. This isn't the place for creative shortcuts.",
                },
                {
                  field: "State bar number",
                  required: "State-dependent — check your bar",
                  notes:
                    "Some states require it in attorney communications. Many do not. Regardless, including it is good practice — it provides instant professional verification and signals transparency. Format: 'State Bar No. 123456' or 'CA Bar #123456'. If admitted in multiple states, list the primary one or all of them if space permits.",
                },
                {
                  field: "Practice areas",
                  required: "Recommended for solo/small firm",
                  notes:
                    "Keep it to 2–3 core areas. 'Family Law | Estate Planning | Probate' tells a prospective client immediately whether you can help them. For large-firm attorneys, your practice group name is usually enough. Avoid listing 10 practice areas — it looks like you're trying to be all things to all clients.",
                },
                {
                  field: "Direct phone number",
                  required: "Always",
                  notes:
                    "Your direct line, not just the main firm number. Clients need to reach you specifically. If you have both office and mobile, list both — attorneys are expected to be reachable, and clients know this. Format numbers consistently: (212) 555-0142 or +1 212-555-0142.",
                },
                {
                  field: "Fax number",
                  required: "Practice-dependent",
                  notes:
                    "Courts, government agencies, and some opposing firms still use fax. If your practice involves court filings or regulatory agencies, include your fax number. If you're in a modern tech or startup practice, skip it — it's unnecessary noise.",
                },
                {
                  field: "Firm website",
                  required: "Recommended",
                  notes:
                    "Link to the firm homepage or, better, your individual attorney bio page. The bio page is more useful — it gives new contacts immediate access to your full credentials, practice history, and publications without them having to navigate from the homepage.",
                },
                {
                  field: "Confidentiality disclaimer",
                  required: "Strongly recommended",
                  notes:
                    "Not legally required in most jurisdictions, but standard professional practice. Keep it brief: 'This email and any attachments are confidential and intended solely for the addressee. If you received this in error, please notify the sender immediately and delete all copies.' Place it below a visual divider in 10–11px gray font.",
                },
                {
                  field: "Professional headshot",
                  required: "Optional — context-dependent",
                  notes:
                    "More appropriate for solo/small firm attorneys who want to build personal rapport with clients. Less common in BigLaw, where signatures tend to be uniform and formal. If you include one, use a professional photo — not a conference selfie. Keep it 80×80px to 100×100px.",
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
              Example lawyer email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here's what a well-structured attorney signature looks like in practice. This example
              is for a litigation partner at a mid-size firm — adjust the fields to your practice area
              and firm size.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">James R. Holloway, Esq.</div>
              <div className="text-muted">Partner | Commercial Litigation</div>
              <div className="text-muted">Hartwell & Burke LLP</div>
              <div className="text-muted mt-2">D: (212) 555-0189 | M: (917) 555-0234</div>
              <div className="text-muted">F: (212) 555-0190</div>
              <div className="text-primary">hartwellburke.com/attorneys/holloway</div>
              <div className="text-muted text-xs mt-2">NY Bar No. 4521890 | NJ Bar No. 089231</div>
              <div className="text-muted text-xs mt-1">Admitted: New York, New Jersey, D.C.</div>
              <div className="border-t border-border mt-4 pt-3">
                <div className="text-muted text-xs italic leading-relaxed">
                  CONFIDENTIALITY NOTICE: This email and any attachments are confidential and
                  privileged. They are intended solely for the use of the named addressee(s).
                  If you are not the intended recipient, please notify the sender immediately,
                  destroy all copies, and do not disclose the contents to any other person.
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Notice what's not here: no motivational quotes, no list of every bar association
              membership, no awards. The signature does one job — tells the recipient who this
              person is, how to reach them, and establishes professional credibility. The bar numbers
              are on their own line in a smaller weight, present but not dominant.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              For a solo practitioner in family law or personal injury, the format would be similar
              but you might add a brief "Practice Areas" line and possibly a headshot. For a
              transactional attorney at a large firm, you'd typically remove the fax, keep the
              disclaimer, and the firm's brand template would handle the logo and colors.
            </p>
            <p className="text-muted leading-relaxed">
              The <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">business email signature guide</Link> covers
              how to create department-wide templates if you're rolling this out across a full firm.
              The same rollout logic applies whether you have 5 attorneys or 500.
            </p>
          </section>

          {/* Profession-specific tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Attorney-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The confidentiality disclaimer: what it actually does and doesn't do
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The mistake I see most often is attorneys treating the confidentiality disclaimer
                  as a magic shield. It isn't. A disclaimer doesn't create attorney-client privilege
                  where none exists. It doesn't prevent a waiver if the email was sent to the wrong
                  person through negligence. And courts have been skeptical of disclaimer language
                  in situations involving obvious errors.
                </p>
                <p className="text-muted leading-relaxed">
                  What it does do: it puts the recipient on notice. If an email is misdirected,
                  the disclaimer is evidence that the sender intended confidentiality. It also signals
                  professionalism and reinforces to clients that their communications with you are
                  treated as sensitive. Keep the language clear and brief — legalese-heavy disclaimers
                  that run 200 words are counterproductive. The shorter version works just as well.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Different signatures for different contexts
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Most email clients let you set up multiple signatures. Consider having at least two:
                  one for external communications (full signature with all fields) and one for internal
                  firm emails (just name and direct line — your colleagues don't need your bar number
                  every time you reply to a thread).
                </p>
                <p className="text-muted leading-relaxed">
                  Some litigators also maintain a separate signature for court-related emails that
                  includes additional detail like their PACER registration or court-specific contact
                  preferences. This level of customization is easy to set up in Gmail or Outlook and
                  takes about five minutes once you have your base template built.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Attorney advertising rules and your signature
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  In most states, an email signature is a form of attorney advertising and is
                  subject to the same rules as your website and marketing materials. This matters
                  for a few things: you generally can't include superlatives like "Best Attorney
                  in Chicago" without required disclaimers, and some states have specific rules
                  about how awards and rankings must be referenced.
                </p>
                <p className="text-muted leading-relaxed">
                  Super Lawyers, Best Lawyers, and similar recognition are generally fine to mention,
                  but check your state bar's advertising rules. In Florida, for example, peer-reviewed
                  rankings have specific disclosure requirements. The safest approach: keep awards
                  on your bio page rather than in your signature, where they can be properly
                  contextualized with the required disclosures.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Of Counsel and contract attorneys: how to handle your title
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  "Of Counsel" is a specific relationship with distinct ethical implications — it
                  suggests a formal, ongoing relationship with the firm. If you're genuinely Of
                  Counsel, use the title. If you're a contract attorney working on a project basis
                  without that formal affiliation, don't use "Of Counsel" — it misrepresents the
                  relationship to clients.
                </p>
                <p className="text-muted leading-relaxed">
                  Contract attorneys typically use their own signature with their own firm name
                  (or a practice name) and may note that they're "Of Counsel to [Firm]" only if
                  that designation has been formally established. When in doubt, consult your state
                  bar's ethics guidance on Of Counsel relationships — several bars have issued
                  specific opinions on this.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Linking your attorney bio page instead of the firm homepage
                </h3>
                <p className="text-muted leading-relaxed">
                  This is a small change with a real impact. When you link to your individual
                  attorney bio page rather than the firm homepage, you give new contacts immediate
                  access to your specific credentials, practice history, publications, and speaking
                  engagements. They don't have to navigate from a firm page that leads with partners
                  in alphabetical order. For client development purposes, the bio page link is
                  meaningfully better than the homepage. Make sure your bio page is current — an
                  outdated bio is worse than no link at all.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes lawyers make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Using 'Esq.' and 'J.D.' together",
                  why: "These mean the same thing in U.S. practice. 'Sarah Mitchell, J.D., Esq.' is redundant. Pick one. 'Esq.' is more traditional; 'J.D.' is increasingly standard and clearer to non-lawyers who may not know what 'Esq.' means.",
                },
                {
                  mistake: "Listing every bar association membership",
                  why: "The American Bar Association, your state bar, the county bar, a specialty section, the alumni bar association — this becomes a list of six items that takes up more space than your contact information. That stuff belongs on your bio page. Keep your signature focused on how to reach you and verify your credentials.",
                },
                {
                  mistake: "Forgetting to update after a job change",
                  why: "This one is more common than you'd think. An attorney who moved from a firm to a public defender's office two years ago is still sending emails with the old firm's branding because they set it once and forgot. Every email you send with outdated firm information is a small credibility hit.",
                },
                {
                  mistake: "Including motivational quotes",
                  why: "A quote from Abraham Lincoln or a Latin legal maxim below your contact information reads as unprofessional in legal correspondence. The context of most attorney email is serious — a pithy quote undercuts the tone. Save that energy for your LinkedIn.",
                },
                {
                  mistake: "Using an image-only signature",
                  why: "Some attorneys create their signature as a single graphic file — name, contact info, and logo all baked into one image. It looks polished but is functionally broken: recipients can't click the phone number, copy the email address, or search the text. Images also get blocked by corporate email clients. Use real text for contact information.",
                },
                {
                  mistake: "Skipping the disclaimer because 'everyone knows emails are confidential'",
                  why: "They don't. Most people don't think carefully about email confidentiality at all. The disclaimer costs you two lines at the bottom of your signature. The professional signaling and the minor legal protection it provides are worth those two lines.",
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
              How to create your attorney email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> and
              select a professional template. Fill in your name, credentials, title, firm name, phone
              numbers, and website. Add your bar number in the secondary information field. The editor
              generates clean, table-based HTML that renders consistently in Gmail, Outlook, and Apple
              Mail — the three clients that cover the vast majority of legal correspondence.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Add your confidentiality disclaimer in the footer text field — keep it under 60 words.
              The editor will size and style it appropriately. If your firm has a logo, upload it at
              2× resolution for retina displays and the editor will constrain it to the right
              display size.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Once you're satisfied, download the HTML file and follow the installation instructions
              for your email client. The whole process takes about 10 minutes. If you're rolling this
              out across a firm, the <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">business signature guide</Link> has
              a step-by-step rollout process that works well for law firms of any size.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Attorney Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The full breakdown of what makes a signature actually professional.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "How to roll out consistent signatures across a firm or team.",
                },
                {
                  href: "/email-signature-disclaimer",
                  title: "Email Signature Disclaimer",
                  desc: "How to write a confidentiality notice that actually works.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "Logo sizing, file formats, and placement for firm branding.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Typography, color, layout, and mobile rendering.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signatures",
                  desc: "Admin deployment for Microsoft 365 — common in law firms.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How the underlying code works and why it matters for rendering.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "Relevant if you do consulting work alongside or after legal practice.",
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
              Build your attorney signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Professional, properly formatted, works in every major email client.
              Free, no account required, ready to install in under 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Lawyer Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
