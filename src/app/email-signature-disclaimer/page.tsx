import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature Disclaimer — Templates & Guide",
  description:
    "Email signature disclaimer templates for confidentiality, GDPR, HIPAA, and liability. When you actually need one and whether disclaimers hold up legally.",
  alternates: {
    canonical: "https://neatstamp.com/email-signature-disclaimer",
  },
};

const faqs = [
  {
    q: "Is an email signature disclaimer legally required?",
    a: "In most jurisdictions, no — there's no general law requiring disclaimers on business emails. There are exceptions: Germany requires certain company registration details; the UK requires registered company number, registered office address, and place of registration for limited companies; several other EU countries have similar requirements. Some regulated industries (law, healthcare, financial services) have disclosure requirements that often get incorporated into the disclaimer. Outside of those specific cases, disclaimers are standard practice but not strictly mandated.",
  },
  {
    q: "Are email signature disclaimers actually enforceable?",
    a: "The honest answer is: mostly not, in the way most people assume. A confidentiality disclaimer at the bottom of an email does not create a legally binding obligation on a stranger who receives your email by accident. Courts in the US and UK have generally not treated these as enforceable contracts. They can have some evidentiary value — they show intent and put recipients on notice — but the widespread belief that 'this disclaimer protects us legally' overstates what they actually do.",
  },
  {
    q: "Do I need a GDPR disclaimer in my email signature?",
    a: "Not necessarily. GDPR requires that you process personal data lawfully and inform people how you use their data, but this obligation is usually met through a privacy policy rather than an email signature disclaimer. However, some organizations include a brief GDPR notice because they process the recipient's email address and want to acknowledge it. It's a reasonable belt-and-suspenders approach, but it's not a strict requirement for all businesses.",
  },
  {
    q: "My disclaimer is very long. Is that a problem?",
    a: "Yes, if it's longer than the actual content of your emails. Long disclaimers — sometimes several hundred words — are counterproductive: recipients ignore them completely, they add file size to every email sent, and they can get more scrutiny in litigation precisely because they're so long. A tight, well-drafted 50–80 word disclaimer is more defensible and more readable than a 300-word one. If yours is long, talk to a lawyer about what actually needs to be there.",
  },
  {
    q: "Should the disclaimer be the same size as the rest of the signature?",
    a: "No. The disclaimer should be clearly secondary — 10–11px in a lighter gray (#94a3b8 or similar), ideally separated from the main signature content by a thin divider or some extra spacing. The contact details should remain easy to read; the disclaimer should be there if needed but not compete for attention.",
  },
  {
    q: "Can I use these disclaimer templates without a lawyer reviewing them?",
    a: "For a basic confidentiality notice on general business emails, yes — these are standard templates used widely and don't make claims beyond what's conventional. For industry-specific disclaimers (HIPAA, financial services, legal professional privilege), you should have a qualified professional review them. These templates are starting points, not legal advice.",
  },
  {
    q: "What disclaimer do lawyers need in their email signatures?",
    a: "Solicitor and attorney email signatures typically need: a confidentiality notice, a professional privilege claim, and (depending on jurisdiction) a note about professional indemnity insurance, regulatory body, and the firm's registration details. Bar association requirements vary by country and state. See the full email signature for lawyers guide for profession-specific requirements.",
  },
  {
    q: "What happens if someone ignores my confidentiality disclaimer?",
    a: "Practically, very little in most cases. If someone receives an email sent to them in error and shares the contents, your disclaimer is evidence that you marked it confidential — but it doesn't create a strong legal obligation on a third party. You're better off ensuring sensitive information is sent to the right people in the first place than relying on a disclaimer to remedy mistakes.",
  },
];

const disclaimerTemplates = [
  {
    id: "confidentiality",
    title: "Standard Confidentiality Disclaimer",
    use: "General business emails — suitable for most professional contexts",
    template: `This email and any attachments are intended solely for the use of the named addressee(s) and may contain confidential or privileged information. If you have received this email in error, please notify the sender immediately, delete this message from your system, and do not copy, disclose, or use its contents. Unauthorized use, copying, or disclosure of this information is prohibited.`,
    wordCount: "57 words",
    notes:
      "The most commonly used template. It's concise, covers the basics, and is appropriate for most business contexts. It won't prevent all disclosure, but it clearly marks the intent and is standard enough that recipients expect it.",
  },
  {
    id: "legal-privilege",
    title: "Legal Professional Privilege Disclaimer",
    use: "Law firms, in-house legal teams, and legal professionals",
    template: `This communication is from a law firm and may contain information that is legally privileged, confidential, or protected by attorney-client privilege. It is intended exclusively for the individual or entity it is addressed to. If you are not the intended recipient, you are hereby notified that any dissemination, distribution, or copying of this communication is strictly prohibited. If you have received this communication in error, please notify the sender and destroy all copies.`,
    wordCount: "73 words",
    notes:
      "The attorney-client privilege claim is important for legal communications and protects confidential advice from disclosure in litigation. It should only be used for genuine legal communications, not every email from anyone at a law firm.",
  },
  {
    id: "gdpr",
    title: "GDPR Data Processing Notice",
    use: "EU-based businesses, or businesses processing EU residents' data",
    template: `By communicating with us via email, you acknowledge that we may process your personal data in accordance with our Privacy Policy, available at [your website/privacy]. We process personal data on the lawful basis of legitimate interest for business communications. You may withdraw consent or request data deletion at any time by contacting [data contact email].`,
    wordCount: "52 words",
    notes:
      "Replace bracketed elements with your actual URLs and contact details. This is a simplified notice — it does not replace a full privacy policy or GDPR compliance program, but it acknowledges data processing in the signature. Some DPOs consider this unnecessary overhead; others consider it best practice.",
  },
  {
    id: "hipaa",
    title: "HIPAA Confidentiality Notice",
    use: "US healthcare providers, health plans, healthcare clearinghouses, and their business associates",
    template: `This email may contain protected health information (PHI) as defined under the Health Insurance Portability and Accountability Act (HIPAA). The information is intended only for the individual or entity to which it is addressed and may be privileged and confidential. If you are not the intended recipient, you may not use, copy, disclose, or distribute this message or the information it contains. If you received this message in error, please immediately notify the sender and destroy this message.`,
    wordCount: "79 words",
    notes:
      "Required for covered entities and business associates under HIPAA when PHI may be transmitted via email. Note that email itself is generally not considered a secure channel for PHI under HIPAA — this disclaimer is a safeguard, not a substitute for encryption or secure messaging platforms. See our email signature for doctors guide for more on healthcare compliance.",
  },
  {
    id: "financial",
    title: "Financial Services Disclaimer",
    use: "Financial advisors, investment firms, banks, and regulated financial services",
    template: `This email does not constitute financial advice and is intended for informational purposes only. Any information contained herein is not a solicitation or offer to buy or sell securities. Past performance is not indicative of future results. Please review all disclosures available at [your website]. [Firm name] is registered with [regulator name]. Registration does not imply a certain level of skill or training.`,
    wordCount: "61 words",
    notes:
      "Replace bracketed items with your firm's actual registration details. Financial services disclaimers often need to be jurisdiction-specific and may need to reference specific regulatory registrations (SEC, FCA, ASIC, etc.). This is a starting template — have your compliance officer review it.",
  },
  {
    id: "no-advice",
    title: "No Professional Advice Disclaimer",
    use: "Consultants, coaches, and professionals who give advice but aren't regulated professionals",
    template: `The information contained in this email is provided for general informational purposes only and does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. For advice specific to your situation, please consult a qualified professional.`,
    wordCount: "43 words",
    notes:
      "Shorter and cleaner than most. Appropriate for management consultants, business coaches, marketing advisors, and others who provide recommendations that could be misinterpreted as professional advice without the right credentials.",
  },
  {
    id: "liability",
    title: "General Liability Limitation",
    use: "General business use where you want to limit contractual interpretations",
    template: `Nothing in this email constitutes a binding offer, contract, or guarantee unless expressly stated and confirmed in writing by an authorized representative of [Company Name]. This email and any attachments are confidential and intended solely for the named recipient(s).`,
    wordCount: "40 words",
    notes:
      "Useful in industries where emails might be treated as offers or contracts — procurement, negotiations, and sales. The shorter format means it's more likely to actually be read.",
  },
];

export default function EmailSignatureDisclaimerPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature Disclaimer",
            url: "https://neatstamp.com/email-signature-disclaimer",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature Disclaimer
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Templates for confidentiality, GDPR, HIPAA, and legal privilege —
              plus the actual answer to whether email disclaimers are legally
              enforceable (they're not, mostly, but here's why you still want one).
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Add a Disclaimer to My Signature
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

          {/* What a disclaimer is */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What an email signature disclaimer is and what it does
            </h2>
            <p className="text-muted leading-relaxed mb-4 text-lg">
              An email signature disclaimer is a block of legal-ish text that
              appears at the bottom of business emails, usually in small gray
              type below the contact details. You've seen them hundreds of times:
              "This email is confidential. If you received it in error, please
              delete it and notify the sender." That kind of thing.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The widespread assumption is that these disclaimers provide meaningful
              legal protection. The reality is more nuanced: they do serve some
              legitimate purposes, but not always the ones people assume.
            </p>
            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  What disclaimers actually do
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Signal intent — the sender marked the communication confidential
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Put recipients on notice that certain information is privileged
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Satisfy industry norms and may be required by your organization's policy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Meet certain statutory requirements (varies by country)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Provide some evidentiary support in disputes about email content
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  What disclaimers don't reliably do
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Create a binding contract with someone who received your email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Prevent a recipient from legally disclosing your email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Override GDPR or freedom of information rights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    Protect genuinely sensitive data in place of encryption
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              The clearest statement on this comes from UK law professor Chris
              Reed: "Contractual disclaimers in email signatures are of questionable
              legal validity because they are typically unseen or ignored by the
              recipient and are not agreed to." Courts in both the US and UK have
              been skeptical of blanket email disclaimers, particularly when the
              email was sent to the correct recipient.
            </p>
          </section>

          {/* Legal requirements by country */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Legal requirements by country
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The specific requirements vary more than most people realize. Here's
              a summary — though you should verify current requirements in your
              jurisdiction, as these change.
            </p>
            <div className="space-y-4">
              {[
                {
                  country: "United Kingdom",
                  requirement: "Mandatory for limited companies",
                  detail:
                    "Under the Companies Act 2006, all business emails from a registered limited company must include: the company's registered name, registered number, place of registration, and registered office address. This applies to all business emails, not just external ones.",
                },
                {
                  country: "Germany",
                  requirement: "Mandatory for commercial entities",
                  detail:
                    "The Impressumspflicht (imprint obligation) requires German businesses to include their registered address, managing directors' names, commercial register number, court of registration, and VAT ID in all business communications. This is more extensive than most countries.",
                },
                {
                  country: "European Union (general)",
                  requirement: "Partial requirements for some entity types",
                  detail:
                    "The EU E-Commerce Directive requires certain disclosures for e-commerce providers, but these are usually met by website footers rather than email signatures. GDPR compliance is a separate issue — see the GDPR template below.",
                },
                {
                  country: "United States",
                  requirement: "No general requirement, industry-specific rules apply",
                  detail:
                    "There's no federal law requiring email disclaimers for general business communications. Industry-specific regulations (HIPAA for healthcare, SEC rules for financial advisors, state bar rules for attorneys) create specific requirements. Some US states have requirements for specific entity types.",
                },
                {
                  country: "Australia",
                  requirement: "No general requirement",
                  detail:
                    "Australian businesses are not legally required to include disclaimers in email signatures for general use. Legal and financial professionals may have obligations from their regulatory bodies (ASIC, state law societies).",
                },
                {
                  country: "Canada",
                  requirement: "No general requirement, PIPEDA considerations",
                  detail:
                    "PIPEDA (Canada's privacy law) may suggest acknowledging data handling, but this is generally handled via a privacy policy rather than email disclaimers. Industry-specific bodies (Law Society, financial regulators) set their own standards.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-foreground">{item.country}</h3>
                    <span className="text-xs font-medium bg-blue-50 text-primary px-2 py-0.5 rounded-full">
                      {item.requirement}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted italic">
              This is a general summary, not legal advice. Confirm current requirements with a qualified professional in your jurisdiction.
            </p>
          </section>

          {/* Templates */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Copy-paste disclaimer templates
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Each template below can be used as a starting point. Items in
              [brackets] need to be replaced with your own details. These are
              standard-form templates — not customized legal advice.
            </p>
            <div className="space-y-8">
              {disclaimerTemplates.map((template) => (
                <div
                  key={template.id}
                  className="rounded-xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {template.title}
                    </h3>
                    <span className="text-xs text-muted font-mono bg-surface border border-border px-2 py-0.5 rounded">
                      {template.wordCount}
                    </span>
                  </div>
                  <p className="text-sm text-primary mb-4">
                    Use case: {template.use}
                  </p>
                  <div className="rounded-lg bg-surface border border-border p-4 mb-4 font-mono text-xs leading-relaxed text-muted">
                    {template.template}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{template.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to add in different clients */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to add a disclaimer to your email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The approach varies by email client. Here's a summary:
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">Gmail</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Add the disclaimer text at the bottom of your signature in
                  Gmail Settings → See all settings → Signature. Use the text
                  editor to reduce the font size and lighten the color. For HTML
                  signatures with precise formatting, the NeatStamp-generated HTML
                  gives you more control. See the full{" "}
                  <Link href="/email-signature-gmail" className="text-primary underline underline-offset-2">
                    Gmail signature guide
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">Outlook Desktop</h3>
                <p className="text-sm text-muted leading-relaxed">
                  In Outlook, go to File → Options → Mail → Signatures. Add your
                  disclaimer as a separate paragraph below your main signature
                  content, styled in a smaller font size and lighter color. See
                  the{" "}
                  <Link href="/email-signature-outlook" className="text-primary underline underline-offset-2">
                    Outlook signature guide
                  </Link>{" "}
                  for step-by-step instructions.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">Using NeatStamp</h3>
                <p className="text-sm text-muted leading-relaxed">
                  In the{" "}
                  <Link href="/editor" className="text-primary underline underline-offset-2">
                    NeatStamp editor
                  </Link>
                  , add your disclaimer text in the disclaimer field at the
                  bottom of the signature builder. It automatically applies the
                  correct smaller font size (11px) and lighter color to keep
                  it visually secondary to your contact information.
                </p>
              </div>
            </div>
          </section>

          {/* Industry-specific notes */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Industry-specific disclaimer requirements
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Certain professions have their own specific requirements beyond a
              generic confidentiality notice:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-for-lawyer",
                  title: "Lawyers & Solicitors",
                  desc: "Legal privilege notices, bar registration requirements, and professional indemnity disclosures by jurisdiction.",
                },
                {
                  href: "/email-signature-for-doctor",
                  title: "Doctors & Healthcare Providers",
                  desc: "HIPAA notices (US), GMC/NMC registration (UK), and patient confidentiality requirements.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Registered Businesses",
                  desc: "Mandatory company registration details for UK limited companies and German businesses.",
                },
                {
                  href: "/professional-email-signature",
                  title: "General Professional",
                  desc: "Confidentiality and liability limitation for general professional use.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-border bg-white p-4 hover:border-primary transition-colors"
                >
                  <div className="font-semibold text-foreground text-sm">
                    {link.title}
                  </div>
                  <div className="mt-1 text-xs text-muted">{link.desc}</div>
                </Link>
              ))}
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
                  href: "/email-signature-for-lawyer",
                  title: "Email Signature for Lawyers",
                  desc: "Legal privilege notices, bar registration, and firm requirements.",
                },
                {
                  href: "/email-signature-for-doctor",
                  title: "Email Signature for Doctors",
                  desc: "Healthcare-specific disclaimers and HIPAA compliance.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Company registration requirements and brand consistency.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What belongs in a professional signature — and what to cut.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "How to style a disclaimer so it's secondary but readable.",
                },
                {
                  href: "/editor",
                  title: "Signature Editor",
                  desc: "Build your signature with a formatted disclaimer — free.",
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
              Add a disclaimer to your signature
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              NeatStamp formats disclaimers correctly — small font, lighter color,
              properly separated from your contact details. Free, no account needed.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Build My Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
