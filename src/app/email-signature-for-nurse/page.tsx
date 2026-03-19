import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Nurses — RN, BSN, NP & More | NeatStamp",
  description:
    "How nurses should display RN, BSN, MSN, NP, and APRN credentials in email signatures. Includes license number guidance, hospital affiliation, and examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-nurse" },
};

const faqs = [
  {
    q: "How should a nurse display credentials after their name in an email signature?",
    a: "The standard nursing credential order is: highest academic degree first (BSN, MSN, DNP, PhD), then licensure (RN), then most relevant national certification, then any additional certifications or designations. So 'Maria Santos, DNP, RN, FNP-BC' is properly ordered. The most common mistake is putting RN first — RN is licensure, which comes after academic degrees in the standard credential order established by the American Nurses Credentialing Center.",
  },
  {
    q: "Do nurses need to include their license number in their email signature?",
    a: "No jurisdiction requires it in email signatures. It's more common in certain clinical documentation contexts than in email. That said, some nurses in advanced practice or independent practice roles include their RN license number as a transparency measure. NPs who practice independently sometimes include their APRN license number alongside their NPI. If your employer doesn't require it and you're communicating primarily with patients or colleagues internally, you can safely omit it.",
  },
  {
    q: "Should nurse practitioners include their NPI number?",
    a: "NPs who practice in clinical roles — particularly those with prescribing authority or who bill insurance independently — should include their NPI. It's publicly available information and makes it easier for pharmacies, other providers, and insurance staff to quickly reference your credentials. If you're in a purely administrative or management nursing role without direct clinical billing, the NPI is less relevant to include.",
  },
  {
    q: "What's the difference between RN and APRN in a signature, and does it matter?",
    a: "APRN (Advanced Practice Registered Nurse) is an umbrella designation covering NPs, CNSs, CRNAs, and CNMs. If you hold one of these roles, listing your specific designation (FNP-BC, CRNA, CNM) is more informative than just APRN. RN covers all registered nurses without advanced practice credentials. The distinction matters because it communicates your scope of practice to other healthcare providers and, increasingly, to patients who are becoming more sophisticated about credential differences.",
  },
  {
    q: "Should I include my shift or schedule in my email signature?",
    a: "Not your shift — the debate in nursing is real, and most email communication advice lands firmly on 'no.' Your specific shift (Night Shift, 7p-7a) in your signature creates several problems: it tells people when you're asleep, it implies you may not respond promptly, and in many healthcare environments it's irrelevant because email goes through a shared unit inbox anyway. What's more useful is an expected response time note: 'I respond within 24-48 hours — for urgent matters, please call the unit.' That's genuinely helpful without the downsides.",
  },
  {
    q: "Can traveling nurses use a signature that doesn't name a specific hospital?",
    a: "Yes, and it's often more practical than trying to update a hospital-specific signature at every assignment. A traveling nurse's signature can list your staffing agency, your license state, your credentials, and your contact information without naming the current assignment hospital — especially for personal email. If you're using a hospital's provided email for assignment-related correspondence, they may give you a template to use.",
  },
  {
    q: "How should a charge nurse or nurse manager set up their signature differently?",
    a: "Charge nurses and nurse managers are still RNs, but the title distinction communicates additional responsibility. 'Charge RN, Cardiac ICU' or 'Nurse Manager, Oncology Unit' should be the title line. Your department and unit are important context. If you manage a team and people need to reach you specifically (not just the unit), your direct extension or email is more important than for bedside nursing roles where the unit number routes correctly.",
  },
  {
    q: "What HIPAA considerations apply to nurses sending email?",
    a: "The same considerations as for any healthcare provider. Nurses should use institutional, HIPAA-compliant email for any patient-related communication — not personal Gmail or Yahoo. Most hospital systems handle this through their IT infrastructure. For emails that may contain patient identifiers, a brief confidentiality notice in your signature is appropriate standard practice. The notice doesn't make non-compliant email compliant, but it's an appropriate procedural safeguard in a HIPAA-compliant system.",
  },
];

export default function EmailSignatureForNursePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Nurses",
            url: "https://neatstamp.com/email-signature-for-nurse",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Nurses
              <span className="block text-3xl mt-2 text-primary">RN, BSN, MSN, NP, APRN & More</span>
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Nursing credentials have their own ordering conventions, their own abbreviation logic,
              and their own professional norms. A nurse's email signature is not just a physician's
              signature with different letters — the credential display, the scope of practice
              context, and the communication considerations are distinct.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Nursing Signature — Free
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
              I've helped nurses across specialties think through their professional communications,
              and the credential ordering question comes up constantly. The American Nurses
              Credentialing Center has a standard — degree first, then licensure, then
              certifications — but many nurses learned it differently or work at institutions with
              their own conventions. Getting it right matters because other healthcare providers
              read those letters and they communicate your level of training and scope quickly.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              There's also the shift information debate, which is uniquely nursing. I've seen it
              both ways — nurses who include their shift because "it explains my response time" and
              nurses who'd never include it. The arguments against are more convincing, and I'll
              explain why below. But it's a real conversation happening in nursing communities,
              and it's worth addressing directly rather than pretending it's obvious.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers credential ordering in detail, the fields that matter for different
              nursing roles (bedside RN, NP, charge nurse, CNO), and the HIPAA-adjacent considerations
              that apply to nursing email generally. For physician-specific guidance, the
              {" "}<Link href="/email-signature-for-doctor" className="text-primary underline underline-offset-2">doctor email signature guide</Link>{" "}
              covers that side.
            </p>
            <p className="text-muted leading-relaxed">
              The general framework for professional healthcare signatures is in the
              {" "}<Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link> —
              this page goes deeper on the nursing-specific pieces.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your nursing email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              The right fields depend on whether you're a bedside nurse, an advanced practice
              provider, a nurse manager, or a CNO. Here's the breakdown by element.
            </p>

            <div className="mb-8 rounded-xl border border-primary/20 bg-blue-50 p-6">
              <h3 className="font-semibold text-foreground mb-3">Credential ordering: the right way</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The ANCC standard order is: <strong>Highest Academic Degree → Licensure → Most Relevant Certification → Additional Certifications</strong>
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-foreground">Maria Santos, MSN, RN, CCRN</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-foreground">James Liu, DNP, APRN, FNP-BC</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted line-through">Maria Santos, RN, MSN, CCRN (licensure before degree)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-muted line-through">James Liu, FNP-BC, DNP, APRN (certification before degree)</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  field: "Name + credentials (correctly ordered)",
                  required: "Always",
                  notes:
                    "Academic degree first (ADN, BSN, MSN, DNP, PhD/DNS), then RN or APRN licensure, then your most relevant certification (CCRN, FNP-BC, CEN, CNOR, etc.). Bold your name. Keep to your three most important credentials if you have more.",
                },
                {
                  field: "Title",
                  required: "Always",
                  notes:
                    "'Registered Nurse,' 'Staff Nurse,' 'Charge RN,' 'Nurse Practitioner,' 'Clinical Nurse Specialist,' 'Nurse Manager,' 'Director of Nursing' — use your accurate title, not a creative interpretation. This communicates your scope and responsibility level.",
                },
                {
                  field: "Department and unit",
                  required: "Clinical roles — always",
                  notes:
                    "'Medical-Surgical Unit, 4 North' or 'Cardiac ICU' or 'Oncology Outpatient Clinic' — this context helps other healthcare providers understand your clinical environment. For administrative nursing roles, the department name serves the same function.",
                },
                {
                  field: "Hospital or health system",
                  required: "Always",
                  notes:
                    "Your primary institutional affiliation. Use the official name. For nurses at large health systems with multiple hospitals, include the specific hospital name: 'St. Mary's Medical Center | Ascension Health' is clearer than just 'Ascension Health.'",
                },
                {
                  field: "NPI number",
                  required: "NPs and APRNs in clinical billing roles",
                  notes:
                    "Required for APRNs who bill independently. Optional for NPs working under physician billing. Not relevant for most staff RNs, charge nurses, or nurse managers whose role doesn't involve direct billing.",
                },
                {
                  field: "State license number",
                  required: "Optional — advanced practice roles",
                  notes:
                    "Not required in email signatures by any state board I know of. Some APRNs in independent practice include it as a transparency measure. Most hospital-employed nurses can omit it — your employer manages license verification through their own processes.",
                },
                {
                  field: "Contact information",
                  required: "Context-dependent",
                  notes:
                    "Unit phone extension for internal hospital email. A professional email address for external correspondence. No personal mobile number. For NPs in independent practice, an office line is appropriate.",
                },
                {
                  field: "Confidentiality notice",
                  required: "Recommended for patient-related email",
                  notes:
                    "Same recommendation as for physicians. A brief HIPAA-appropriate notice in smaller text below a divider. Use your institution's standard language if they've provided it.",
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
              Example nursing email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here are three examples for three different nursing roles — bedside RN, nurse
              practitioner, and nurse manager.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Bedside RN — Cardiac ICU</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Maria Santos, BSN, RN, CCRN</div>
                  <div className="text-muted">Staff Nurse | Cardiac Intensive Care Unit</div>
                  <div className="text-muted">Memorial Health System — Tower B, Unit 6C</div>
                  <div className="text-muted mt-2">Unit: (312) 555-0100 ext. 2614</div>
                  <div className="border-t border-border mt-3 pt-2">
                    <div className="text-muted text-xs italic">This message may contain protected health information. If received in error, please notify the sender and delete all copies.</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Nurse Practitioner — Family Practice</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">James Liu, DNP, APRN, FNP-BC</div>
                  <div className="text-muted">Family Nurse Practitioner</div>
                  <div className="text-muted">Riverside Family Health Clinic</div>
                  <div className="text-muted mt-2">P: (503) 555-0178 | scheduling@riversideFHC.com</div>
                  <div className="text-primary">riversideFHC.com</div>
                  <div className="text-muted text-xs mt-1">NPI: 1234567890 | APRN License: OR-AP-12345</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Nurse Manager — Oncology Unit</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Patricia Osei, MSN, RN, NEA-BC</div>
                  <div className="text-muted">Nurse Manager | Oncology Services</div>
                  <div className="text-muted">Northwest Medical Center</div>
                  <div className="text-muted mt-2">D: (206) 555-0244 | p.osei@nwmedical.org</div>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mt-6">
              Notice that the bedside nurse's signature routes through the unit number, not a personal
              extension. The NP in independent practice includes scheduling contact to route patient
              appointment requests away from her direct inbox. The nurse manager uses a direct line
              because her role requires it. One size doesn't fit all three situations.
            </p>
          </section>

          {/* Profession-specific tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Nursing-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The shift information debate: why most nurses should leave it out
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The argument for including shift information is simple: it explains why you might
                  not respond immediately. "Night Shift Nurse — I sleep during business hours" seems
                  like helpful context. And in some internal hospital cultures where colleagues all
                  work similar schedules, it makes sense.
                </p>
                <p className="text-muted leading-relaxed mb-3">
                  The arguments against are stronger. First, it tells anyone who reads your email
                  when you're asleep and presumably away from home — a genuine personal safety
                  consideration. Second, it can actually lower the professionalism perception of
                  your communication in external or administrative contexts where scheduling context
                  isn't relevant. Third, the right solution to response-time expectations is a
                  note like "I respond within 24 hours" or an out-of-office message — not a permanent
                  shift disclosure.
                </p>
                <p className="text-muted leading-relaxed">
                  There are exceptions: if you work a predictable schedule and are primarily
                  communicating internally with colleagues who need scheduling context, a brief note
                  like "Available by email: Mon–Wed" can be useful. But shift hours specifically?
                  Leave them out.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Traveling nurses and contract workers: signature options
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  If you change hospitals every 13 weeks, maintaining a hospital-specific signature
                  is impractical. The better approach: a base signature with your credentials, your
                  staffing agency if relevant, and your personal professional email. You can add the
                  current assignment location in a secondary line if your role requires it.
                </p>
                <p className="text-muted leading-relaxed">
                  Many travel nurses build a "career signature" with their credentials, specialty,
                  and contact information that works across assignments, and separately use
                  whatever institutional template the hospital provides for hospital-system email.
                  This dual approach covers both contexts without constant rebuilding.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  CRNAs: a special case
                </h3>
                <p className="text-muted leading-relaxed">
                  Certified Registered Nurse Anesthetists have a unique credential situation —
                  their CRNA designation carries significant independent practice authority in many
                  states, and it's important to display it prominently. The correct ordering is
                  CRNA after RN: 'David Kim, MSN, RN, CRNA.' Include your NPI as a practicing
                  CRNA — it's frequently needed by surgical schedulers, hospitals, and anesthesia
                  billing staff. Your practice setting (independent, group practice, hospital-employed)
                  affects whether additional affiliation information is appropriate.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes nurses make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Wrong credential order (RN before degree)",
                  why: "The ANCC standard is academic degree first, then licensure. 'Maria Santos, RN, BSN' is wrong; 'Maria Santos, BSN, RN' is correct. In healthcare, credential ordering is read by colleagues who know the conventions — getting it wrong signals either that you don't know the standard or that you prioritized the wrong credential.",
                },
                {
                  mistake: "Including shift information",
                  why: "See the dedicated section above. In most cases, the risks outweigh the benefits. Use response-time language instead: 'I typically respond within 24 hours.'",
                },
                {
                  mistake: "Using too many certification abbreviations",
                  why: "'Jennifer Walsh, BSN, RN, CCRN, CEN, CNRN, CMSRN' is hard to parse even for other nurses. Choose the two or three most relevant to your current role. The rest can live on your LinkedIn or a professional bio.",
                },
                {
                  mistake: "NPs omitting their NPI in clinical correspondence",
                  why: "If you're a prescribing NP, your NPI is practically useful to pharmacies, other providers, and billing staff. Omitting it from clinical correspondence means those parties have to look it up, which adds friction. For billing-relevant roles, include it.",
                },
                {
                  mistake: "Not distinguishing NP from RN in the title line",
                  why: "If your credential line says 'MSN, APRN, FNP-BC' but your title line just says 'Nurse,' patients and some non-clinical recipients won't understand your scope of practice. Your title should reflect your actual role: 'Family Nurse Practitioner' or 'Nurse Practitioner, Family Medicine.'",
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
              How to create your nursing email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> and
              select a clean professional template. Enter your name with correctly ordered credentials,
              your title, department, hospital, and contact information. If you're an NP in clinical
              practice, add your NPI number in the secondary fields.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Add a confidentiality notice in the footer field using your institution's standard
              language, or a brief general version if you don't have one. The editor generates HTML
              that renders correctly in both Outlook (used by most hospital systems) and Gmail.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Download the HTML and install it according to your email client's instructions. For
              hospital Outlook setups, your IT department may manage signatures centrally — check
              before customizing. For personal or practice email, install freely.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Nursing Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-for-doctor",
                  title: "Email Signature for Doctors",
                  desc: "Physician credential display, NPI, and HIPAA considerations.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The complete framework for professional signatures in healthcare.",
                },
                {
                  href: "/email-signature-disclaimer",
                  title: "Email Signature Disclaimer",
                  desc: "HIPAA-appropriate confidentiality notices for healthcare email.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Useful for nursing directors rolling out signatures department-wide.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signatures",
                  desc: "Most hospital systems use Microsoft 365 — admin deployment guide.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Clean layout and typography for healthcare professional signatures.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "Adding your health system's logo correctly.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How the underlying HTML works across email clients.",
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
              Build your nursing email signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Credentials displayed correctly, works in Outlook and Gmail,
              ready to install in minutes. Free, no account required.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Nursing Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
