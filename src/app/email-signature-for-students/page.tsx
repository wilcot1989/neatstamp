import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Students — Internship-Ready in 60 Seconds | NeatStamp",
  description:
    "Why students need email signatures, what to include (and skip), and examples for undergrad, grad, and PhD students emailing recruiters and professors.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-students" },
};

const faqs = [
  {
    q: "Do I really need an email signature as a student?",
    a: "Yes — particularly for any email going outside your university: internship applications, networking emails to professionals, professor emails for recommendation letters, or communications with companies you want to work for. A signature tells the recipient who you are, where you study, and how to reach you. Without one, they have to dig through your email address and guess. More practically: it signals that you understand professional norms, which is itself a positive signal in an internship application context.",
  },
  {
    q: "Should I use my .edu email address for professional emails?",
    a: "Yes, for most purposes. Your university email address (.edu) carries more credibility than a personal Gmail for professional communications during your studies. Recruiters and professors will recognize the institution. The exception is if you're applying for roles after graduation and want to use a personal address you'll keep long-term — but during your studies, use the .edu address.",
  },
  {
    q: "Should students include GPA in their email signature?",
    a: "No. Your GPA belongs in a resume, not a signature. Email signatures are about contact information and professional context, not academic metrics. The same goes for honors, awards, or test scores — those go in your resume and cover letter, not your email footer.",
  },
  {
    q: "What's the right way to list my graduation year?",
    a: "Write it out clearly. 'Expected graduation: May 2027' or 'Class of 2027' are both clear. If you're in a multi-year program (PhD, JD, MD), 'Expected 2029' is fine. Avoid abbreviations or formats that could be misread — 'May '27' might read as 1927 to an older recipient (unlikely but worth avoiding).",
  },
  {
    q: "Can I include multiple majors or a minor in my signature?",
    a: "Yes, but keep it brief. 'BS Computer Science & Economics' is fine. 'BS Computer Science, Minor in Statistics, Concentration in Machine Learning' is too long. The signature is not your transcript. Pick the credential that's most relevant to your audience.",
  },
  {
    q: "Should I use a personal website or portfolio in my student signature?",
    a: "Yes, if you have one and it's representative of your current work. A GitHub profile for CS students, a Behance for design students, or a personal website for anyone who's built projects is worth linking. Don't link to something half-finished just to have a link — a blank or placeholder site is worse than no link.",
  },
  {
    q: "Is it appropriate to include my university logo in a student email signature?",
    a: "Technically it's fine in most cases, but it's also not necessary and can sometimes look like you're claiming more institutional affiliation than you have. Your university name in text form gives the same information. If you want to add a visual element, a professional headshot is more personal and useful than a university logo.",
  },
];

export default function EmailSignatureForStudentsPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Students",
            url: "https://neatstamp.com/email-signature-for-students",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Students
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Most students don't have an email signature. The ones who do — for internship
              applications, professor emails, and networking — come across as more professional
              than their peers. Here's exactly what yours should include.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build My Student Signature — Free
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
            <p className="mt-3 text-sm text-muted">Takes about 60 seconds. No account needed.</p>
          </div>

          {/* Why students need signatures */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why students actually need an email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Here's a scenario that happens thousands of times per week: a student emails a
              recruiter at a company they want to work for. The email is well-written, specific,
              and ends with: "Thanks, Tom." That's it. No last name. No university. No graduation
              year. No phone number. No LinkedIn.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The recruiter gets 80 emails a day. They read Tom's email, think it's promising,
              and intend to respond. Two days later they can't remember which Tom he was, what
              school he goes to, or how to find him on LinkedIn. The context that would have made
              following up easy just wasn't there.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              A good email signature solves this. It gives the recipient everything they need
              to remember who you are and take action without having to ask: your full name,
              where you study, what you're studying, when you graduate, and how to find more
              about you.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Beyond internship applications, signatures matter for professor emails (especially
              if you're emailing someone you haven't met), networking with alumni or professionals
              you've met at events, and any communication where the recipient doesn't already have
              your contact info saved.
            </p>
            <p className="text-muted leading-relaxed">
              It's a low-effort thing that a lot of students skip. The fact that you won't skip
              it is a small advantage that compounds.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your student email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Keep it short and focused. The goal is to give the recipient the five pieces of
              information they'd most need if they wanted to know more about you or follow up.
            </p>

            <div className="space-y-5">
              {[
                {
                  element: "Your full name",
                  include: "Always",
                  note: "First and last name. Bold it. 'Tom' doesn't help anyone; 'Tom Lindqvist' does.",
                },
                {
                  element: "Degree and major",
                  include: "Always",
                  note: "'BSc Computer Science' or 'BA Economics & Philosophy' — your degree program tells people what you're studying. Keep it to one line. If you have a double major, include both only if both are relevant to your audience.",
                },
                {
                  element: "University name",
                  include: "Always",
                  note: "The full, official name of your institution. 'University of Michigan' not 'UofM' — abbreviations that are obvious to you may not be to someone in a different state or country.",
                },
                {
                  element: "Expected graduation",
                  include: "Always",
                  note: "'Expected May 2027' or 'Class of 2027'. This tells recruiters when you'd be available and helps contextualize your application. Without it, they're guessing.",
                },
                {
                  element: "LinkedIn profile",
                  include: "Strongly recommended",
                  note: "Only include it if your profile is complete: a photo, a summary, your work/project experience, and your education filled in. An incomplete LinkedIn is worse than no LinkedIn — it looks like you started something and abandoned it.",
                },
                {
                  element: "Portfolio or GitHub",
                  include: "Recommended if relevant",
                  note: "If you have a portfolio site, GitHub with real projects, Behance, or any equivalent — and it's actually representative of your current work — include it. This is particularly valuable for CS, design, and creative students.",
                },
                {
                  element: "Phone number",
                  include: "Optional",
                  note: "Worth including for internship applications, where recruiters sometimes call to schedule interviews. For general networking and professor emails, it's optional.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.element}</h3>
                    <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.include}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Examples by level */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Student signature examples by level
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              The right signature looks a little different depending on where you are in your
              education. Here are concrete examples for undergrad, master's, and PhD.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Undergraduate student
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Sofia Martinez</div>
                  <div className="text-muted">BSc Computer Science (Expected May 2027)</div>
                  <div className="text-muted">University of Texas at Austin</div>
                  <div className="text-primary">linkedin.com/in/sofiamartinez | github.com/sofiam</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Clean and complete. The GitHub link is exactly right for a CS student — it
                  points to real work. The graduation year tells recruiters she's available in
                  about two years, which is useful context for planning. No phone number here
                  is fine for most uses, though she might add one for internship applications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Master's student
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">James Okafor</div>
                  <div className="text-muted">MSc Data Science (Expected December 2026)</div>
                  <div className="text-muted">Columbia University</div>
                  <div className="text-muted">M: +1 (646) 555-0177</div>
                  <div className="text-primary">linkedin.com/in/jamesokafor</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  A master's student is typically closer to the job market, so including a
                  phone number makes more sense here. The program is specific ('Data Science'
                  rather than just 'MSc') which helps recruiters immediately understand his
                  technical focus. Keep the LinkedIn link if the profile is complete and
                  shows projects, research, or relevant experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  PhD student / doctoral candidate
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Dr. (candidate) Yuri Petrov</div>
                  <div className="text-muted">PhD Candidate, Computational Neuroscience</div>
                  <div className="text-muted">MIT — Dept. of Brain and Cognitive Sciences</div>
                  <div className="text-primary">scholar.google.com/yuripetrov | linkedin.com/in/yuripetrov</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  PhD students communicate heavily with other academics, so a Google Scholar
                  profile is worth including — it shows publications and citation count. The
                  department name is useful context. "PhD Candidate" is accurate for someone
                  who has passed qualifying exams; use "PhD Student" if you haven't yet. See
                  also the{" "}
                  <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                    professional email signature guide
                  </Link>{" "}
                  for how signatures transition as you move from student to early-career professional.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Student emailing a professor
                </h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed mb-3">
                  <div className="text-foreground font-bold">Mei-Ling Chen</div>
                  <div className="text-muted">Junior, BA Economics | University of Chicago</div>
                  <div className="text-muted">Student ID: 20241089</div>
                  <div className="text-primary">mei-ling.chen@uchicago.edu</div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  When emailing professors at your own institution, including your student ID
                  can be useful — especially for grade-related inquiries where the professor
                  needs to look you up in a system. The .edu email address establishes your
                  affiliation. "Junior, BA Economics" tells the professor your year and program
                  without requiring them to look it up.
                </p>
              </div>

            </div>
          </section>

          {/* What NOT to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What students should NOT include in their signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The mistakes here are usually about oversharing credentials or
              under-presenting professionalism. Avoid these.
            </p>

            <div className="space-y-4">
              {[
                {
                  bad: "GPA",
                  why: "GPA goes on your resume, not your email signature. Putting it in your signature looks like you're trying too hard to impress before establishing any context for the email. If you have a stellar GPA, your resume is the right place to let it speak.",
                },
                {
                  bad: "Awards, honors, and scholarships",
                  why: "Same principle. 'Dean's List, 2024–2025 | John Smith Merit Scholarship | Phi Beta Kappa' in a signature reads as credential-stuffing. The email signature is for contact information and context, not achievements.",
                },
                {
                  bad: "Casual or personal email addresses",
                  why: "'sk8r_boi_1999@gmail.com' is fine for friends. For professional emails, use your university email or a professional personal address. If you're creating a new personal email for professional use, firstname.lastname@gmail.com is the format to use.",
                },
                {
                  bad: "Large or elaborate designs",
                  why: "The goal for a student signature is to look professional and organized, not to be visually impressive. A plain, clean signature with consistent typography is better than a heavily designed one with gradients, multiple colors, and decorative elements.",
                },
                {
                  bad: "Pronouns in an aggressive format",
                  why: "Including pronouns (he/him, she/her, they/them) is increasingly normal and respectful in many contexts. However, the format matters. 'She/her' as a simple, brief addition is widely accepted. A prominent display that takes up a full line can distract. One approach: include it as part of your name line — 'Sofia Martinez (she/her)'.",
                },
                {
                  bad: "Inspirational quotes",
                  why: "No. These don't land the way you think they do in professional emails. Leave them out.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border border-red-100 bg-red-50 p-5"
                >
                  <span className="text-red-500 text-lg font-bold flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.bad}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internship tips */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Tips specifically for internship application emails
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Internship applications have a specific context: you're trying to stand out in
              a recruiter's inbox while signaling that you understand professional norms. A
              few things to get right:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Include your phone number.</strong> Recruiters
                  often schedule phone screens before moving candidates forward. Make it easy.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Make sure your LinkedIn is ready before linking to it.</strong>{" "}
                  A recruiter who clicks your LinkedIn link and finds a profile with no photo,
                  no summary, and three sparse entries is not impressed. Finish the profile first.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Match your email tone to your signature.</strong>{" "}
                  A casual, conversational email with a formal-looking signature creates a slight
                  disconnect. Aim for consistent professional tone throughout.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Use your .edu email for application emails.</strong>{" "}
                  It provides instant institutional credibility. Most recruiters are more likely
                  to open an email from firstname@university.edu than firstname.lastname99@gmail.com.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">Test your signature before sending.</strong>{" "}
                  Send a test email to a friend and check how it looks on a phone. Many recruiters
                  read emails on mobile. See the{" "}
                  <Link href="/email-signature-design" className="text-primary underline underline-offset-2">
                    email signature design guide
                  </Link>{" "}
                  for mobile rendering tips.
                </p>
              </div>
            </div>
          </section>

          {/* How to set it up */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to set up your student email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Build your signature in the{" "}
              <Link href="/email-signature-maker" className="text-primary underline underline-offset-2">
                NeatStamp editor
              </Link>{" "}
              — it takes about 60 seconds. Pick a clean template, fill in your details, and
              copy the HTML. No account needed.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              To install it in Gmail, go to Settings → See all settings → General → Signature,
              paste the HTML. For detailed steps, see the{" "}
              <Link href="/email-signature-gmail" className="text-primary underline underline-offset-2">
                Gmail signature guide
              </Link>
              . For Outlook (if your university uses Microsoft), see the{" "}
              <Link href="/email-signature-outlook" className="text-primary underline underline-offset-2">
                Outlook guide
              </Link>
              . For Apple Mail on your Mac or iPhone, the{" "}
              <Link href="/email-signature-apple-mail" className="text-primary underline underline-offset-2">
                Apple Mail guide
              </Link>{" "}
              has the specific steps.
            </p>
            <p className="text-muted leading-relaxed">
              Set it up once and forget it. It's one of those things that's free, takes five
              minutes, and makes every professional email you send slightly better.
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
                  desc: "Build your signature in 60 seconds. Free, no account needed.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What makes a signature genuinely professional.",
                },
                {
                  href: "/email-signature-gmail",
                  title: "Gmail Signature Setup",
                  desc: "Step-by-step for installing your signature in Gmail.",
                },
                {
                  href: "/email-signature-outlook",
                  title: "Outlook Signature Setup",
                  desc: "How to add an email signature in Outlook (all versions).",
                },
                {
                  href: "/email-signature-apple-mail",
                  title: "Apple Mail Signature Setup",
                  desc: "Mac, iPhone, and iPad — including the HTML workaround.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Email Signature for Freelancers",
                  desc: "Relevant once you graduate and start working independently.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "How to make your signature look clean and professional.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signatures",
                  desc: "How HTML signatures work and why they're the right choice.",
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
              Be the student who looks prepared
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Build a clean, professional signature that tells recruiters and professors exactly
              who you are. Free, takes 60 seconds, no account needed.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create My Student Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
