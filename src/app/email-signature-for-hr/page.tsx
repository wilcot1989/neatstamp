import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for HR Professionals | NeatStamp",
  description:
    "Build an HR email signature that reinforces company branding, supports recruiting, and works across roles. Guide with examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-hr" },
};

const faqs = [
  {
    q: "Should HR professionals use different signatures for recruiting vs. internal emails?",
    a: "Yes, and it's worth setting up both. Your recruiting signature needs more context for candidates who don't know you yet — company name, your role, a link to the careers page, and ideally a line about the company culture or a recent award. Your internal signature can be much shorter: name, title, phone, and direct line. Most email clients let you set multiple signatures and switch between them manually. The two-minute setup pays off every time you email a candidate who's evaluating multiple companies at once.",
  },
  {
    q: "What information does a recruiter's email signature need?",
    a: "At minimum: your full name, title (Recruiter, Talent Acquisition Specialist, Head of People — be specific), company name, direct phone number, and your LinkedIn URL. Add the company careers page link and any current employer branding assets — a 'We're Hiring' banner during active recruiting periods works well. Your email address is already visible in the email header, so you don't need to repeat it in the signature unless your display name differs from your actual email.",
  },
  {
    q: "How should HR handle email signatures for a large team with multiple people in different roles?",
    a: "Create a master template with your company logo, brand colors, and font locked in place. Leave variable fields for name, title, direct phone, and LinkedIn. Each team member fills in their own fields but can't change the branding elements. In practice, this means creating the template in NeatStamp, exporting the HTML, and distributing it to each team member with instructions for what to change. For companies with IT support, you can also manage signatures centrally through an email management platform — but for most HR teams, a shared HTML template works fine.",
  },
  {
    q: "Can an HR email signature support employer branding?",
    a: "Absolutely — and this is an underused opportunity. If your company has won a Best Places to Work award, add a small badge. If you're actively hiring, a 'View open roles' link turns every outbound HR email into a light recruiting touchpoint. If you have a specific employer brand tagline, it can sit under your company name. Keep it to one or two brand elements maximum — the goal is reinforcement, not a banner ad. The signature should still look professional and clean.",
  },
  {
    q: "Should I include my LinkedIn profile in my HR email signature?",
    a: "Yes, always. Candidates research the recruiters they're talking to. HR professionals who deal with external vendors, consultants, and partners — same thing. A LinkedIn link lets people verify you're a real person at the company, understand your background, and connect with you for future opportunities. It also adds a layer of credibility when reaching out to passive candidates who might be skeptical of a cold email. Use a clean short URL: linkedin.com/in/yourname rather than the long default LinkedIn URL.",
  },
  {
    q: "What's the right tone for an HR email signature — formal or approachable?",
    a: "It depends on your company culture and the audience. A recruiter at a startup communicating with engineering candidates can afford a slightly more casual design — maybe no formal title line, just name and company, with a short brand tagline. An HR director at a financial services firm sending compliance-related communications needs a more formal format. The rule of thumb: match your signature's visual tone to the culture your company presents to candidates and employees. If your company promotes itself as human and approachable, your signature should reflect that.",
  },
  {
    q: "How often should HR update their email signatures?",
    a: "Review every six months at minimum, and immediately after: a title change, a new employer branding award, a significant company milestone (rebrand, funding round, major hiring push), or a change in your direct phone number. HR is often the first external-facing contact for candidates, so an outdated signature — one that shows a role you left, a logo from two rebrands ago, or a dead link to the careers page — sends a bad signal about the company's operational quality.",
  },
  {
    q: "Should HR signatures include a confidentiality disclaimer?",
    a: "It depends on your industry and your legal team's preference. HR communications often involve sensitive employee data, compensation discussions, and performance information. A brief confidentiality notice — 'This email may contain confidential information. If received in error, please notify the sender and delete the message.' — is standard in regulated industries and large enterprises. For most small-to-mid-size companies without a legal mandate, it's optional. If your company's legal counsel recommends one, keep it to two sentences and render it in small gray text at the bottom.",
  },
];

export default function EmailSignatureForHRPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for HR Professionals",
            url: "https://neatstamp.com/email-signature-for-hr",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for HR Professionals
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              HR sends more email than almost any other function in a company. Every message to a
              candidate, a new hire, or an external partner carries your company brand with it.
              Here's how to make your signature work for you.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your HR Signature — Free
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-muted">No account needed. Free forever for individuals.</p>
          </div>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              HR professionals sit at an unusual intersection. You're internal employees, but you
              spend significant time communicating with people outside the company — candidates,
              staffing agencies, background check vendors, benefits providers, and offboarding
              contacts. Each of those audiences sees your email signature differently than an
              internal colleague would.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              For a candidate, your signature is often the first impression of how the company
              communicates. For a new hire on their first week, it's a signal of organizational
              clarity. For an external vendor, it's basic professional credibility. Getting the
              signature right across all these contexts matters more for HR than for most roles.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Most HR professionals I've spoken to have one signature for everything. They wrote it
              when they joined the company, maybe updated the phone number once, and haven't
              thought about it since. The result: a generic signature that does nothing for
              candidate experience, carries no employer branding, and often has an outdated title.
            </p>
            <p className="text-muted leading-relaxed">
              This guide covers what HR signatures should include, how to handle multiple roles
              or a team with different functions, how to use your signature to support recruiting,
              and what the most common mistakes look like. The{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional email signature guide
              </Link>{" "}
              gives you the universal principles — this page focuses on what's specific to HR.
            </p>
          </section>

          {/* Why HR needs a great signature */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              Why HR email signatures do more work than you think
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              HR touches every stage of the employee lifecycle: sourcing, recruiting, onboarding,
              performance management, offboarding. That's a lot of email, sent to a lot of
              different people. Here's why the signature matters at each stage.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Candidate experience starts before the interview
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              A candidate who receives a cold recruiting email is making a fast judgment call:
              is this a legitimate opportunity from a real company, or is it noise? Your email
              signature — with a recognizable company name, a real phone number, a LinkedIn
              profile, and a link to your careers page — answers that question before they've
              finished reading. A signature with just your name and a generic Gmail address
              raises doubts, even if the email content is excellent.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Candidates at the interview stage are evaluating whether they want to work for you,
              not just whether you want to hire them. Every touchpoint — including the logistics
              email about interview scheduling — contributes to their impression of your
              organization. A polished, consistent HR signature says the same thing a well-designed
              office does: this is a company that takes its presentation seriously.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Employer branding happens in every email
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Most companies invest real resources in their careers page, their social media
              presence, and their job postings — and then send recruiting emails with signatures
              that carry none of that brand energy. Your email signature is a low-cost extension
              of your employer brand. A current Best Places to Work badge, a careers page link,
              or a company tagline in your signature reinforces the same message your recruiting
              content delivers.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This matters especially during competitive hiring. When a candidate is evaluating
              two similar offers, every detail of how each company communicated with them
              through the process counts. The company whose HR team communicated with professionalism
              and consistency often wins on culture signal alone.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Onboarding sets the operational tone
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              New hires receive a lot of onboarding emails in their first week. When every email
              from HR comes from a clear, professional signature, it signals that the company is
              organized. When different HR team members have wildly different signature formats,
              it's a small but real friction point — the new hire doesn't know who's who or which
              HR contact handles which function.
            </p>
            <p className="text-muted leading-relaxed">
              A consistent team signature format, where each person's role is clearly stated —
              Recruiter, HR Business Partner, People Operations Manager — solves this immediately.
              See the{" "}
              <Link href="/email-signature-for-business" className="text-primary underline underline-offset-2">
                business email signature guide
              </Link>{" "}
              for how to roll out consistent signatures across a team.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Recruitment is a sales process
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Whether you're doing in-house recruiting or you run a staffing operation, you're
              selling: selling candidates on roles, selling hiring managers on candidates, selling
              your company to passive talent. Salespeople know that every touchpoint matters.
              Your email signature is a touchpoint you control completely, at zero marginal cost,
              on every email you send. It should be doing active work.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              What to include in an HR email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              The right elements depend on whether you're emailing candidates, employees, or
              external partners. Here's a breakdown of what each element does:
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name + title",
                  required: "Always",
                  notes: "Be specific with your title. 'HR Manager' is vague. 'Talent Acquisition Manager' or 'HR Business Partner, Engineering' tells the recipient exactly what you do and whether you're the right person to contact. For recruiters: specify whether you're in-house or at an agency, since candidates treat these differently.",
                },
                {
                  field: "Company name + logo",
                  required: "Always",
                  notes: "Your company logo is the single most important employer branding element in your signature. Use the current version — not a logo from a rebrand two years ago. Size it at 150–180px wide, 2× resolution for retina screens. If you're at an agency, include both your agency name and note which clients or industries you serve.",
                },
                {
                  field: "Direct phone number",
                  required: "Always",
                  notes: "Candidates and employees need to reach you. Include your direct line, not just the main HR number. If you take mobile calls for urgent HR matters, include your mobile. Label them: 'D: (415) 555-0122 | M: (415) 555-0198' so the recipient knows which number to use for what.",
                },
                {
                  field: "LinkedIn profile URL",
                  required: "Strongly recommended",
                  notes: "Candidates look you up. Vendors look you up. Passive candidates you reach out to will check whether you're a real person at a real company. A LinkedIn link makes this immediate. Use your custom LinkedIn URL (linkedin.com/in/yourname) rather than the default long URL.",
                },
                {
                  field: "Careers page link",
                  required: "Recommended for recruiters",
                  notes: "A 'View open roles' link turns every outbound recruiting email into a passive recruiting touchpoint. Even people who aren't interested right now may share the link or check back later. Link directly to your jobs page, not your homepage.",
                },
                {
                  field: "Employer branding badge",
                  required: "Optional — use if you have one",
                  notes: "Best Places to Work, Top Employer, Glassdoor awards — if your company has earned a recognized employer brand award, a small badge in your signature is a legitimate credibility signal. Keep it to one badge and update it annually. An expired award badge does more harm than good.",
                },
                {
                  field: "Pronouns",
                  required: "Optional — culture-dependent",
                  notes: "More HR professionals are adding pronouns to their signatures as a signal of inclusive culture. It's a small gesture that can meaningfully affect how candidates from underrepresented groups perceive your company's culture. It's increasingly expected at companies with stated DEI commitments. Format: 'She/Her' or '(she/her)' directly after or below your name.",
                },
                {
                  field: "Confidentiality notice",
                  required: "Industry-dependent",
                  notes: "If your legal team requires it or if you handle particularly sensitive employee data, a brief confidentiality notice at the bottom is appropriate. Keep it to two sentences in small gray text. Don't use it as a way to pad the signature — it should only appear if there's a genuine legal reason.",
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
              Example HR email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Two examples: one for a recruiter doing external candidate outreach, one for an
              HR Business Partner doing primarily internal and vendor communication.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Recruiter / Talent Acquisition (external-facing):</p>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Priya Nair (she/her)</div>
                  <div className="text-muted">Senior Recruiter, Product & Design</div>
                  <div className="text-muted">Fieldstone Technologies</div>
                  <div className="text-muted mt-2">D: (628) 555-0141</div>
                  <div className="text-primary">linkedin.com/in/priyanair-recruiter</div>
                  <div className="text-primary">fieldstonetech.com/careers</div>
                  <div className="text-muted text-xs mt-2 italic">🏆 Glassdoor Top 50 Places to Work, 2025</div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">HR Business Partner (internal + vendor-facing):</p>
                <div className="rounded-xl border-l-4 border-border bg-surface p-6 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold text-base">Marcus Webb</div>
                  <div className="text-muted">HR Business Partner | Engineering & Operations</div>
                  <div className="text-muted">Fieldstone Technologies</div>
                  <div className="text-muted mt-2">D: (628) 555-0159 | M: (628) 555-0173</div>
                  <div className="text-primary">linkedin.com/in/marcuswebb-hr</div>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mt-6 mb-4">
              Notice the recruiter's signature has more external-facing elements — the careers
              link, the employer branding badge, the pronouns. The HRBP's version is cleaner
              because their audience already knows the company. Both use consistent branding.
            </p>
            <p className="text-muted leading-relaxed">
              Browse{" "}
              <Link href="/examples" className="text-primary underline underline-offset-2">
                signature examples
              </Link>{" "}
              to see these layouts with real visual formatting applied.
            </p>
          </section>

          {/* Step-by-step */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              How to build your HR signature with NeatStamp
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              This takes about 10 minutes for an individual signature. For a team rollout,
              budget an hour to set up the master template and distribute it.
            </p>

            <ol className="space-y-5">
              {[
                {
                  step: "Choose a template that matches your company's brand tone",
                  detail: "Open the NeatStamp editor and pick a template. For a startup or tech company with a modern brand, choose 'Modern' or 'Minimal.' For a traditional enterprise, 'Classic' or 'Corporate' works better. You can adjust colors and fonts to match your brand guidelines after selecting a base template.",
                },
                {
                  step: "Upload your company logo at 2× resolution",
                  detail: "Go to your brand assets folder and find a PNG version of your logo with a transparent background. If the logo will display at 160px wide in the signature, upload a 320px version. This keeps it sharp on retina screens. Don't use a JPEG — the white background will show as a white box in emails with dark or colored backgrounds.",
                },
                {
                  step: "Fill in your specific role details",
                  detail: "Enter your full name, title, company name, direct phone, and any secondary contact method. If you're adding pronouns, put them directly after your name. For recruiters: add your LinkedIn URL and careers page link in the social/links fields.",
                },
                {
                  step: "Add employer branding elements if applicable",
                  detail: "If you have a Best Places to Work badge or similar award, upload it as a small image in the footer area. Keep it under 80px tall. Link it to the award source page for credibility. If you don't have a current award, skip this — a blank space is better than a placeholder.",
                },
                {
                  step: "Set up a second signature for internal email",
                  detail: "Duplicate your signature in the editor, strip out the careers link, the award badge, and any candidate-facing elements. You now have a clean internal version. Export both. In Gmail, both can live under Settings > Signatures and you can switch between them with one click.",
                },
                {
                  step: "Export HTML and install",
                  detail: "Download the HTML export and follow the installation guide for your email client. For team rollout, export the HTML template with placeholder text for name/title/phone, and share it with each team member along with a one-page guide showing exactly which fields to update.",
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
                Create Your HR Signature — Free
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
              Common mistakes HR professionals make with their signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Using a vague title",
                  why: "\"HR Manager\" tells a candidate almost nothing. Are you the person who handles recruiting? Benefits? Employee relations? Payroll? A specific title — \"Talent Acquisition Lead\" or \"HR Business Partner, Commercial\" — immediately tells the recipient whether you're the right person to contact and how to relate to your email. It also signals a more mature HR function.",
                },
                {
                  mistake: "No careers page link for recruiters",
                  why: "If your job is to hire people, every email you send is a potential recruiting touchpoint. A link to your careers page — one line, maybe labeled 'View open roles' — takes five seconds to add and turns every outbound email into passive talent marketing. Leaving it out is a missed opportunity on every single email.",
                },
                {
                  mistake: "Inconsistent signatures across the HR team",
                  why: "When a new hire gets onboarding emails from five different HR team members, all with different signature formats, it signals a lack of internal coordination. Candidates interviewing with multiple HR contacts notice the same thing. One template, rolled out to the whole team, fixes this in an afternoon.",
                },
                {
                  mistake: "An outdated employer branding badge",
                  why: "A 2021 Best Places to Work badge in 2026 doesn't reinforce your brand — it raises questions about whether you're still on top of things. Either keep badges current (update them when you win a new award) or remove them. There's no neutral option with expired badges.",
                },
                {
                  mistake: "No phone number for candidates",
                  why: "Candidates want to reach you, especially during the offer negotiation stage or when they have an urgent question before an interview. A signature with only an email address creates unnecessary friction. Include a direct line. If you can't take calls during certain hours, your out-of-office message handles that — not your signature.",
                },
                {
                  mistake: "Using a personal email address for recruiting",
                  why: "Some recruiters send outreach from personal Gmail accounts to avoid spam filters. If that's your situation, your signature needs to work even harder to establish legitimacy — full company name, company website, LinkedIn profile, and a clear explanation of your role. But ideally, use your company email or a recruiting-specific domain for all candidate outreach.",
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
              Pro tips for HR professionals
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Match your signature tone to your company culture</h3>
                <p className="text-muted leading-relaxed">
                  If your company genuinely sells itself as casual and human in its employer brand,
                  your signature should reflect that. A first name only, no formal title, a friendly
                  tagline — these work for the right company culture. If you're in a more formal
                  industry, a full traditional format signals the same culture. The disconnect is
                  when the company's culture messaging says "we're a family" but the HR signature
                  reads like a legal notice. Alignment builds trust.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Update your signature at every company milestone</h3>
                <p className="text-muted leading-relaxed">
                  Company rebrand? Update the logo. Win a new employer award? Add the badge. Reach
                  a headcount milestone that's meaningful for recruiting? Consider adding it.
                  Opening a new office in a city you're hiring heavily in? A "Now hiring in Austin"
                  line in your signature for a quarter is legitimate. HR signatures can and should
                  be more dynamic than most functions because your content — open roles, company
                  news, awards — changes more frequently.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Use the email-signature-with-logo guide for logo setup</h3>
                <p className="text-muted leading-relaxed">
                  Getting your company logo to display correctly across every email client —
                  Gmail, Outlook, Apple Mail, mobile — takes more care than just uploading any
                  version of your logo. The{" "}
                  <Link href="/email-signature-with-logo" className="text-primary underline underline-offset-2">
                    email signature with logo guide
                  </Link>{" "}
                  covers file formats, sizing, retina resolution, and what breaks in Outlook
                  specifically. Get this right and your HR signature looks sharp everywhere.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Make team signature rollout part of onboarding</h3>
                <p className="text-muted leading-relaxed">
                  Every new HR team member should set up their signature on day one, using the
                  team's shared template. Build this into your onboarding checklist alongside
                  laptop setup, email access, and Slack. This is the easiest way to maintain
                  a consistent signature standard without having to chase people later. For the
                  broader company, see the{" "}
                  <Link href="/email-signature-for-teams" className="text-primary underline underline-offset-2">
                    email signature for teams guide
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/professional-email-signature", title: "Professional Email Signature", desc: "Universal principles for a signature that works in any context." },
                { href: "/email-signature-for-business", title: "Email Signature for Business", desc: "How to roll out consistent signatures across a company or department." },
                { href: "/email-signature-with-logo", title: "Email Signature with Logo", desc: "Logo sizing, file format, and placement that looks sharp everywhere." },
                { href: "/email-signature-for-teams", title: "Email Signature for Teams", desc: "Centralized team signature management for HR and operations." },
                { href: "/email-signature-gmail", title: "Gmail Signature Setup", desc: "How to install your signature in Gmail with multiple signature support." },
                { href: "/email-signature-outlook", title: "Outlook Signature Setup", desc: "Installing and managing email signatures in Microsoft Outlook." },
                { href: "/templates", title: "Signature Templates", desc: "Professional templates ready to customize for your company brand." },
                { href: "/examples", title: "Signature Examples", desc: "Real signature examples from different roles and industries." },
                { href: "/blog/email-signature-best-practices", title: "Email Signature Best Practices", desc: "What works, what doesn't, and what's changed in 2026." },
                { href: "/email-signature-for-startup", title: "Email Signature for Startups", desc: "How fast-growing companies build consistent signatures on a budget." },
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
              Build your HR signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Professional, on-brand, works in Gmail and Outlook.
              Free, no account required, ready to install in under 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your HR Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
