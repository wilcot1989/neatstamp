import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Doctors & Medical Pros",
  description:
    "What belongs in a physician's email signature — MD/DO credentials, NPI, hospital affiliation, HIPAA considerations, and specialty. With examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-doctor" },
};

const faqs = [
  {
    q: "Should doctors include their NPI number in an email signature?",
    a: "NPI numbers are public — they're in the National Provider Identifier registry and anyone can look them up. Including yours in your signature is a transparency signal, not a privacy risk. It's most useful in clinical contexts where other providers or insurance staff might need to reference it. For patient-facing emails, it's less relevant but not harmful. Academic physicians might omit it in correspondence unrelated to clinical care, like research or conference emails.",
  },
  {
    q: "Do doctor email signatures need a HIPAA disclaimer?",
    a: "Strictly speaking, HIPAA doesn't mandate a specific disclaimer in email signatures. But most healthcare organizations include one as a matter of policy and risk management. The disclaimer puts recipients on notice that they may have received protected health information and instructs them on what to do if they received the email in error. It doesn't create HIPAA compliance on its own — your organization's email security practices (encryption, access controls) are what actually matters for HIPAA. The disclaimer is a procedural safeguard.",
  },
  {
    q: "What credentials should come after a doctor's name in an email signature?",
    a: "List your highest medical degree first: MD or DO. Then any board certifications relevant to your practice: FACC for cardiologists, FACS for surgeons, etc. Then administrative or academic titles if applicable: FAAP for pediatricians who are fellows of the American Academy of Pediatrics. Keep it reasonable — three to four credential abbreviations after your name is readable; eight starts to look like an alphabet soup. Full credential details belong on your hospital or practice bio page.",
  },
  {
    q: "Can I use a personal email address for patient communication?",
    a: "You should not use a personal Gmail or Yahoo account for patient communication if you want to be HIPAA-compliant. Your hospital or practice should provide a HIPAA-compliant email system. If you're in private practice and setting up your own email, look into HIPAA-compliant email providers that offer encryption and Business Associate Agreements (BAA). Your signature should reflect your professional email address, and you should be sending from that address.",
  },
  {
    q: "Should my email signature include my office address?",
    a: "If you're in private practice or a standalone clinic where patients need to find you physically, yes — include your office address. If you practice out of a large hospital system with multiple locations, linking to a 'Locations' page on the hospital website is cleaner than listing one address that might not be where the patient is going. For academic physicians whose correspondence is primarily with other providers or researchers, the department mailing address is often enough.",
  },
  {
    q: "How should a physician handle email signatures when working at multiple hospitals?",
    a: "This is genuinely tricky. Most hospital systems prefer you use their branded email for correspondence related to that institution. Practically, many physicians maintain one primary signature reflecting their primary affiliation, and note secondary affiliations in a smaller line: 'Also affiliated with Memorial Hospital, Department of Cardiology.' Some email clients let you set up multiple signatures — use the appropriate one depending on which capacity you're writing in.",
  },
  {
    q: "Should I include my photo in a medical email signature?",
    a: "In direct patient-facing practice, a professional headshot can genuinely help — patients often feel more comfortable when they can match a face to the name on their emails. In academic or research contexts, it's less conventional. In provider-to-provider email, it's optional but not out of place. If you include one, use a professional photo in clinical attire. The casual vacation photo is obviously wrong here, but so is a photo in a lab coat if you're primarily a researcher.",
  },
  {
    q: "What's the difference between MD and DO in a signature, and does it matter?",
    a: "Both are full physician licenses. MD (Doctor of Medicine) and DO (Doctor of Osteopathic Medicine) holders have equivalent prescribing authority and hospital privileges in the United States. List whichever degree you hold — it's accurate credential disclosure, not a hierarchy. Some DO physicians also note their osteopathic designation with FAAO if they're fellows. The choice between 'John Smith, MD' and 'John Smith, DO' is simply a matter of accuracy, not preference.",
  },
];

export default function EmailSignatureForDoctorPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Doctors",
            url: "https://neatstamp.com/email-signature-for-doctor",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Doctors & Medical Professionals
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Physicians deal with email in three very different contexts: clinical correspondence
              with patients, provider-to-provider communication, and academic or administrative
              email. Your signature needs to hold up in all three — and navigate some
              HIPAA-adjacent territory along the way.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Medical Signature — Free
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
              I've worked with physicians across a range of specialties on their professional
              communications, and the email signature conversation almost always goes the same way:
              "I just use whatever my hospital IT set up." That default is understandable — you're
              busy, and this feels like a low-priority detail. But your email signature is often
              the first thing a patient or a referring physician sees when they open your message,
              and in healthcare, first impressions carry more weight than in most fields.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              There are also specific fields that matter in medicine that don't apply elsewhere.
              Your NPI number, your board certifications, your hospital affiliation, and your
              specialty all communicate things to both patients and colleagues that a generic
              signature doesn't. And the HIPAA considerations — while often misunderstood — are
              real enough to warrant some thought.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers what physicians at different career stages and practice types
              should include, how to handle the credential display question, and what common
              mistakes derail otherwise solid signatures. For nurses and mid-level providers,
              the <Link href="/email-signature-for-nurse" className="text-primary underline underline-offset-2">nurse email signature guide</Link> covers
              those credential-specific details.
            </p>
            <p className="text-muted leading-relaxed">
              The <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link> is
              worth reading for the general principles that apply here, though the medical-specific
              considerations are distinct enough to warrant their own treatment.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your doctor email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Medical signatures have more required fields than most professions. Here's how each
              one works and when it applies.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name + primary degree",
                  required: "Always",
                  notes:
                    "Use your professional name followed by your highest degree: 'Jennifer K. Walsh, MD' or 'Michael Torres, DO'. Bold your name. The degree abbreviation comes immediately after — no comma needed between name and degree in modern medical convention, though some institutions use one. Follow your hospital's house style if there is one.",
                },
                {
                  field: "Board certifications and fellowship status",
                  required: "Recommended",
                  notes:
                    "FACC, FACS, FACP, FAAP — board certification and fellowship status are meaningful signals to other providers and to patients who know what they mean. List no more than three or four after your name. If you have more, choose the ones most relevant to your primary practice. The full list lives on your hospital or practice bio page.",
                },
                {
                  field: "Specialty",
                  required: "Always",
                  notes:
                    "'Internal Medicine,' 'Pediatric Cardiology,' 'Emergency Medicine,' 'Orthopedic Surgery' — your specialty tells the recipient immediately what kind of physician they're dealing with. For patients, this is orienting information. For referring physicians, it's essential context. Keep it precise rather than broad.",
                },
                {
                  field: "Hospital or practice name",
                  required: "Always",
                  notes:
                    "Your primary institutional affiliation. If you're at an academic medical center, use the full name: 'Department of Internal Medicine, University of Michigan Medicine.' For private practice, use the practice name: 'Riverside Family Medicine.' For multi-site situations, list the primary location.",
                },
                {
                  field: "NPI number",
                  required: "Clinical contexts — recommended",
                  notes:
                    "Your National Provider Identifier is public information. Including it in clinical correspondence is a convenience for other providers and administrative staff who may need to reference it. Format: 'NPI: 1234567890'. In purely academic or research correspondence, it's optional.",
                },
                {
                  field: "Office phone number",
                  required: "Always",
                  notes:
                    "Your office or clinic line. Avoid listing your personal mobile — in medicine, boundary-setting around direct patient contact is important, and routing through the office is the professional standard. If you have a nurse line or scheduling line that patients should call, list that.",
                },
                {
                  field: "Pager or secure messaging",
                  required: "Provider-to-provider contexts",
                  notes:
                    "Many hospitals still use pagers. In provider-to-provider email, including your pager number or your secure messaging platform handle (Epic's In Basket, TigerConnect, etc.) can speed up clinical communication significantly. Omit this from patient-facing signatures.",
                },
                {
                  field: "HIPAA/confidentiality disclaimer",
                  required: "Recommended for patient-facing email",
                  notes:
                    "A brief notice that the email may contain protected health information and instructions for recipients who received it in error. Not legally mandated by HIPAA itself, but standard practice at most healthcare organizations. Keep it under 60 words and style it smaller than your main signature text.",
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
              Example doctor email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here's a well-structured signature for a cardiologist at an academic medical center.
              The format works for most clinical physicians — adjust the credentials and affiliation
              to match your situation.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">Sarah K. Okonkwo, MD, FACC</div>
              <div className="text-muted">Associate Professor of Medicine | Cardiology</div>
              <div className="text-muted">Division of Cardiovascular Medicine</div>
              <div className="text-muted">Stanford University Medical Center</div>
              <div className="text-muted mt-2">Office: (650) 555-0134</div>
              <div className="text-muted">Pager: 4521 | Secure: TigerConnect @s.okonkwo</div>
              <div className="text-primary">stanfordhealthcare.org/physicians/okonkwo</div>
              <div className="text-muted text-xs mt-2">NPI: 1234567890</div>
              <div className="border-t border-border mt-4 pt-3">
                <div className="text-muted text-xs italic leading-relaxed">
                  CONFIDENTIALITY NOTICE: This email may contain protected health information
                  intended only for the named recipient. If you received this in error, please
                  notify the sender immediately and delete all copies. Unauthorized disclosure
                  is prohibited.
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              For a private practice physician, the format is the same but simpler — no academic
              title, no department hierarchy, and the practice name and website replace the medical
              center information. A solo family medicine physician might look like:
            </p>

            <div className="rounded-xl border-l-4 border-border bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">David Reyes, MD</div>
              <div className="text-muted">Family Medicine | Preventive Care</div>
              <div className="text-muted">Hillcrest Family Medicine</div>
              <div className="text-muted mt-2">P: (512) 555-0287 | scheduling@hillcrestfm.com</div>
              <div className="text-primary">hillcrestfm.com</div>
              <div className="text-muted text-xs mt-1">NPI: 9876543210</div>
            </div>

            <p className="text-muted leading-relaxed">
              Notice the private practice version drops the pager (a nurse or answering service
              handles after-hours), keeps the NPI, and uses a scheduling email so that appointment
              requests don't land in the physician's inbox directly. The <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link> covers
              additional template options if you want different layouts.
            </p>
          </section>

          {/* Profession-specific tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Physician-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The HIPAA question: what your signature actually needs to do
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The mistake I see most often is physicians treating a disclaimer in their email
                  signature as their HIPAA compliance strategy. It isn't. HIPAA compliance happens
                  at the system level: encrypted email servers, access controls, business associate
                  agreements with your email provider, audit logging. The disclaimer in your signature
                  is a procedural safeguard — it doesn't make an unencrypted Gmail account compliant.
                </p>
                <p className="text-muted leading-relaxed">
                  If your hospital IT has set up your email, they've (presumably) handled the
                  compliance infrastructure. If you're in private practice and managing your own email,
                  you need a HIPAA-compliant email provider with a BAA in place before you use email
                  for patient communication at all. Once that's in order, the disclaimer in your
                  signature is an appropriate additional layer — not a substitute for the underlying
                  compliance work.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Credentials after your name: how to order them
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The standard convention is: highest medical degree first (MD or DO), then board
                  certification designations (FACC, FACS, etc.), then other professional designations
                  (MBA, MPH, PhD if relevant to your practice). So "Jennifer Walsh, MD, PhD, FACP"
                  is properly ordered; "Jennifer Walsh, FACP, PhD, MD" is not.
                </p>
                <p className="text-muted leading-relaxed">
                  For academic physicians with multiple advanced degrees, use judgment. If your
                  PhD is central to your identity and your correspondence is primarily research-oriented,
                  "Jennifer Walsh, MD, PhD" makes sense. If you're a clinician who happens to have a
                  master's degree, you might omit the MPH from the signature and keep it on your bio
                  page where there's room for context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Resident and fellow signatures: what to include
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Residents and fellows should use their degree (MD or DO) and note their program
                  clearly: "Resident Physician, PGY-2, Department of Internal Medicine" or
                  "Cardiology Fellow." Residents should not use title language that implies attending
                  status. Most hospitals provide residents with institutional email that has a
                  pre-configured signature template — use it. If you need to customize it, do so
                  without changing the institutional information.
                </p>
                <p className="text-muted leading-relaxed">
                  Medical students on clinical rotations typically sign as "Medical Student" and use
                  whatever email address the school or rotation site has provided. Students should
                  not imply physician status in their signatures.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Linking your hospital bio versus your practice website
                </h3>
                <p className="text-muted leading-relaxed">
                  Hospital bio pages are often beautifully designed and carry institutional authority.
                  They're the best link to include if you're primarily a hospital-employed physician.
                  If you're in private practice, your practice website is appropriate. If you have
                  both — you're a private practice physician with hospital privileges — the practice
                  website is usually the better choice for patient-facing correspondence, since that's
                  where scheduling and contact information lives. For provider-to-provider email,
                  the hospital bio page provides more clinical context.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes doctors make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Listing credentials that aren't current",
                  why: "Board certifications expire. Fellowship statuses change. A cardiologist who lists FACC but whose AHA membership has lapsed is misrepresenting their credentials. Review your signature annually and update credentials as they change.",
                },
                {
                  mistake: "Using a personal email for patient communication",
                  why: "A Gmail account is not HIPAA-compliant by default (though Google Workspace for Healthcare with a BAA can be). Personal email accounts create real compliance exposure. Use your institutional email or a verified HIPAA-compliant email service.",
                },
                {
                  mistake: "Including your personal mobile number",
                  why: "Patients will call it. At 11pm on a Friday. Boundary-setting in medicine is important, and listing your personal number in your email signature removes a natural barrier. Use your office line and let the answering service handle after-hours calls.",
                },
                {
                  mistake: "Credential overload that no one can decode",
                  why: "'Michael Chen, MD, DO, MBA, FACC, FACS, FACEP, FAAP, FAAN' is technically impressive but practically unreadable for most patients. Three to four post-name credentials is the readable limit. Full credential details belong on your bio page.",
                },
                {
                  mistake: "Not updating affiliation after a job change",
                  why: "A physician who left a hospital two years ago but still has that hospital's logo in their email signature is creating confusion — and potentially misrepresentation. Update your signature within the first week at any new position.",
                },
                {
                  mistake: "Omitting the specialty line",
                  why: "Patients who are cc'd on their own care emails, or referring physicians who receive consultations, need to immediately understand your specialty. 'John Smith, MD' without a specialty line makes them work to find out what kind of doctor they're dealing with.",
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
              How to create your physician email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Use the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> to
              build a clean, properly formatted signature in about 10 minutes. Select a professional
              template, fill in your name and credentials, add your specialty, hospital, NPI, and
              contact information. The editor generates HTML that renders correctly in Outlook,
              Gmail, and Apple Mail — the three clients you'll most commonly encounter in healthcare
              settings.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Add your confidentiality notice in the footer field. If your hospital has a logo you're
              authorized to use, upload it — keep the width at 120–160px. Download the HTML file and
              install it in your email client following the client-specific instructions in our setup
              guides.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              If your hospital's IT department has mandated a specific signature format, work within
              their template. But if you have discretion, a well-structured signature from
              NeatStamp is a significant step up from the plain-text defaults most physicians
              are currently using.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Medical Signature — Free
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
                  desc: "The complete guide to professional signatures across all fields.",
                },
                {
                  href: "/email-signature-for-nurse",
                  title: "Email Signature for Nurses",
                  desc: "RN, BSN, NP, APRN credential display and signature tips.",
                },
                {
                  href: "/email-signature-disclaimer",
                  title: "Email Signature Disclaimer",
                  desc: "How to write a HIPAA-appropriate confidentiality notice.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Rolling out consistent signatures across a practice or health system.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "Hospital logo sizing, file formats, and placement.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signatures",
                  desc: "Most hospital systems run on Microsoft 365 — this covers admin deployment.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Layout, typography, and mobile rendering for medical signatures.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "Relevant for physicians doing consulting, expert witness, or advisory work.",
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
              Build your physician email signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Properly formatted, credential-ready, works in Outlook and Gmail.
              Free and takes about 10 minutes to set up.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Doctor Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
