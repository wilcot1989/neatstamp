import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Job Seekers (2026)",
  description:
    "How job seekers should set up email signatures — LinkedIn priority, what NOT to include, networking vs. application signatures, and skills showcase tips.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-job-seekers" },
};

const faqs = [
  {
    q: "Should job seekers include their current employer in their email signature?",
    a: "This is the most important question in job seeker signatures, and the answer is almost always no. Including your current employer signals that your employer may receive information about your search if emails are forwarded or screenshots are shared. It also creates an awkward context — you're presenting your employer's brand while actively trying to leave them. The exception: if you're open about your search and your current role adds significant credibility (you're a VP at Google and that context is central to your positioning), it might be relevant. But even then, 'Currently: VP Engineering, Google | Open to new opportunities' is a niche use case.",
  },
  {
    q: "How important is LinkedIn for a job seeker's email signature?",
    a: "Very important — it's the highest-priority link you can include. Every recruiter and hiring manager will check your LinkedIn before or during a conversation with you. Having your profile URL in your signature makes that check effortless and ensures they're looking at the right profile (not a similarly named person). Make sure your LinkedIn URL is customized (linkedin.com/in/yourname rather than a string of numbers), and that your profile is current, complete, and tells a coherent professional story.",
  },
  {
    q: "Should job seekers include a portfolio or GitHub link?",
    a: "Absolutely, if you have one that's relevant and in good shape. A portfolio of design work, a GitHub with recent code, a writing portfolio, a case study site — these are high-value additions for roles where work samples matter. The key qualifier: the portfolio should be current and representative of your best work at your current level. An outdated or incomplete portfolio is worse than no link. If you're a generalist or in a field where portfolio work isn't common (finance, operations, HR), skip it — it doesn't add value in those contexts.",
  },
  {
    q: "What title should a job seeker use in their email signature?",
    a: "Use a title that accurately represents your current professional level and the type of role you're seeking. 'Marketing Professional | Open to new opportunities' or 'Software Engineer' (with your current experience level implied) are both appropriate. Avoid inflated titles like 'Marketing Guru' or 'Growth Hacker' — they read as junior. If you're a recent graduate, 'Recent Graduate — Computer Science, University of Michigan' or 'Entry-Level Financial Analyst' is honest and clear. Don't list your student title after you've graduated; you're now a professional.",
  },
  {
    q: "Should job seekers have different signatures for networking emails versus application emails?",
    a: "Yes, with some differences. A networking signature can be warmer and more relationship-oriented — you're reaching out to build a connection, not to pitch yourself formally. An application or cover letter signature should be more polished and formal — name, professional title, LinkedIn, and any directly relevant portfolio link. The networking version might include a line like 'Open to conversations about [field]' that would feel out of place on a formal application.",
  },
  {
    q: "How should a recent graduate set up their job search email signature?",
    a: "Include your full name, your field of study or target role ('Recent Graduate — Mechanical Engineering' or 'Aspiring UX Designer'), your university if well-recognized (University of Michigan, not always a community college unless you're proud of the specific program), and your LinkedIn. Add a portfolio or GitHub if you have strong student work. Avoid listing every academic achievement — your GPA belongs in the application document, not the signature. Your goal is to look like a professional who is early in their career, not a student who just graduated.",
  },
  {
    q: "Can job seekers include skills in their email signature?",
    a: "In a limited way. A specific, relevant skill that's a hiring signal can be included as part of your title or specialty line: 'Full-Stack Engineer — React & Node.js' or 'Data Analyst — SQL & Python.' This is different from listing a skills matrix in your signature, which is resume territory. If a technical specialty is directly relevant to the roles you're targeting and would make a recruiter say 'that's exactly what we need,' it earns a brief mention. Generic skills like 'Microsoft Office' or 'team player' do not.",
  },
  {
    q: "Should job seekers include a photo in their email signature?",
    a: "Generally no for job search email signatures in North America. Including a photo can inadvertently expose you to bias in the hiring process — hiring managers aren't supposed to factor appearance or perceived demographics into decisions, and making your photo prominent in correspondence puts you in the position of introducing that risk. The exception: creative industries where personal brand matters and where a professional headshot is a normal part of self-presentation. For most professional fields, keep the signature clean and let your skills and experience do the work.",
  },
];

export default function EmailSignatureForJobSeekersPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Job Seekers",
            url: "https://neatstamp.com/email-signature-for-job-seekers",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Job Seekers
              <span className="block text-3xl mt-2 text-primary">Land That Interview</span>
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Your email signature during a job search is doing different work than in normal
              professional life. It's simultaneously a piece of your application, a networking
              tool, and a subtle signal about how you present yourself professionally. Getting
              it right takes about 20 minutes and affects every email you send for the duration
              of your search.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Job Search Signature — Free
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
              Job searching involves a lot of email. Cover letters, follow-ups after interviews,
              thank-you notes, networking outreach, recruiter responses — your signature is appearing
              in all of it. And yet most job seekers set up their signature once (or never) and don't
              think about it again, which means they're either missing opportunities to make it work
              for them or actively undermining their search with avoidable mistakes.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The biggest mistake I see is job seekers including their current employer in their
              signature. I understand the logic — you want to look employed, not desperate — but
              the risks outweigh the benefits in almost every scenario. A close second: not including
              a LinkedIn link, or including one that points to an incomplete profile. Recruiters and
              hiring managers will check your LinkedIn; make sure it's the version of your story
              you want them to see.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers the full picture: what to include, what to leave out, how to think
              about different signatures for networking versus application contexts, and what recent
              graduates and career changers should do differently. Students just starting to build
              their professional presence should also read the
              {" "}<Link href="/email-signature-for-students" className="text-primary underline underline-offset-2">email signature for students guide</Link> —
              it covers the specific context of building professional presence before you have
              significant work history.
            </p>
            <p className="text-muted leading-relaxed">
              Once you've landed the role, the
              {" "}<Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link>{" "}
              covers how to set up your new-job signature for maximum impact.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your job seeker email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              The job search signature is deliberately different from your professional-employment
              signature. Here's what earns a place and what doesn't.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Full name",
                  required: "Always",
                  notes:
                    "Your professional name, bolded. Use the name that matches your resume, LinkedIn, and any other application materials. If you go by a name different from your legal name, use the professional name consistently across all application materials.",
                },
                {
                  field: "Professional title or target role",
                  required: "Always",
                  notes:
                    "'Marketing Manager,' 'Software Engineer,' 'Financial Analyst,' 'UX Designer' — the title that represents your current professional level and the type of role you're targeting. For recent graduates: 'Recent Graduate — Finance, Class of 2025' or simply 'Aspiring Product Manager.' Honest and specific is better than inflated and vague.",
                },
                {
                  field: "LinkedIn URL (customized)",
                  required: "Always — highest priority link",
                  notes:
                    "Your LinkedIn URL, customized to linkedin.com/in/yourname. Make sure your profile is complete, current, and tells a coherent story before you link to it. A recruiter clicking your LinkedIn link and finding a half-empty profile is worse than no LinkedIn link. Take the 30 minutes to complete your profile before your first application email.",
                },
                {
                  field: "Portfolio or work samples",
                  required: "If relevant and current",
                  notes:
                    "Design portfolio, GitHub profile, writing samples, case study site — include it if it's in good shape and directly relevant to the roles you're targeting. For creative and technical roles, this is often the highest-value link in your signature. Skip it for roles where work samples aren't standard (most administrative, operations, and finance roles).",
                },
                {
                  field: "Personal email address",
                  required: "If using personal email",
                  notes:
                    "Use a professional personal email address for job search: firstname.lastname@gmail.com or similar. Not 'partyguy2002@hotmail.com.' If your current personal email isn't professional, create a new Gmail specifically for job searching. Your email address is itself a credential signal.",
                },
                {
                  field: "Phone number",
                  required: "Recommended",
                  notes:
                    "Your personal mobile. Recruiters sometimes call rather than email. Include it — it removes friction for the follow-up call you want to happen. Make sure your voicemail greeting is professional, not a joke recording from five years ago.",
                },
                {
                  field: "Current employer",
                  required: "Usually no — see FAQ",
                  notes:
                    "The exception case where it might be relevant is if your employer name carries significant prestige and is not obvious from context. But the risks (inadvertent disclosure, awkward framing) almost always outweigh the benefits. Your resume handles this context. The signature does not need to.",
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
              Example job seeker email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Three versions: mid-career professional, recent graduate, and creative professional
              with a portfolio.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Mid-career professional (active job search)</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Sarah Chen</div>
                  <div className="text-muted">Product Manager | B2B SaaS</div>
                  <div className="text-muted mt-2">sarah.chen@gmail.com | (415) 555-0134</div>
                  <div className="text-primary">linkedin.com/in/sarahchen-pm</div>
                </div>
                <p className="text-sm text-muted mt-2">Clean, professional, no current employer. LinkedIn is the primary credential link.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Recent graduate</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Marcus Williams</div>
                  <div className="text-muted">Recent Graduate — Computer Science, UC Berkeley</div>
                  <div className="text-muted">Seeking: Software Engineering Roles</div>
                  <div className="text-muted mt-2">marcus.w@gmail.com | (510) 555-0198</div>
                  <div className="flex gap-4 mt-1">
                    <span className="text-primary">linkedin.com/in/marcuswilliams-swe</span>
                    <span className="text-muted">·</span>
                    <span className="text-primary">github.com/marcuswilliams</span>
                  </div>
                </div>
                <p className="text-sm text-muted mt-2">The university context is useful here because it's a credibility signal for a new graduate. The GitHub link is appropriate because software engineering roles expect to see code.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Creative professional with portfolio</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Elena Osei</div>
                  <div className="text-muted">UX/UI Designer</div>
                  <div className="text-muted mt-2">elena.osei@gmail.com | (312) 555-0267</div>
                  <div className="flex gap-4 mt-1">
                    <span className="text-primary">elenaoseidesign.com</span>
                    <span className="text-muted">·</span>
                    <span className="text-primary">linkedin.com/in/elenaosei</span>
                  </div>
                </div>
                <p className="text-sm text-muted mt-2">The portfolio site is the primary link because design hiring is portfolio-driven. LinkedIn is secondary but present.</p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Job seeker-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Networking signatures vs. application signatures
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  These are different contexts and can benefit from different signatures. A
                  networking email — reaching out to someone you don't know for an informational
                  interview or a warm introduction — is a relationship-building act. A slightly
                  warmer, less formal signature works here: your name, your general area
                  ("Marketing professional exploring new opportunities"), LinkedIn, and contact
                  information. No explicit "seeking employment" language that might make people
                  feel like they're being recruited rather than approached for a genuine conversation.
                </p>
                <p className="text-muted leading-relaxed">
                  A formal application signature is cleaner and more document-like: name, title,
                  LinkedIn, and portfolio if applicable. You're providing verification and contact
                  information, not building a relationship. The cover letter is doing the narrative
                  work; the signature is just your contact block.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The LinkedIn profile check before you link it
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Before you link your LinkedIn in your signature, actually look at it critically.
                  Is your headline specific ("Senior Product Manager — Consumer Mobile Apps") or
                  vague ("Looking for new opportunities")? Is your summary written in first person
                  and professional? Are your job experiences filled out with achievements, not just
                  duties? Is your education section complete? Are there recent activity posts that
                  show you're engaged with your field?
                </p>
                <p className="text-muted leading-relaxed">
                  A recruiter clicking your LinkedIn link will make a judgment in about 15 seconds.
                  An incomplete or vague profile is worse than a polished one, and worse than no
                  link at all if the profile undermines the impression you're trying to create.
                  Spend the time to make the profile genuinely good before you start sending
                  application emails.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Career changers: how to frame your title
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Career changers face a specific challenge: your current title may be in a
                  completely different field from your target roles, and including it creates
                  confusion or a mismatch. The solution is to use a target-oriented title or
                  a bridging description: "Operations Professional — Transitioning to Data Analysis"
                  or "Former Teacher | Transitioning to Instructional Design" is honest and
                  forward-facing.
                </p>
                <p className="text-muted leading-relaxed">
                  Don't try to use your old title if it's from an unrelated field and you're hoping
                  it won't be noticed. Hiring managers notice, and it makes the mismatch more
                  prominent by forcing them to ask "why is someone from that background applying
                  for this role?" before they've even read your cover letter. Frame the transition
                  proactively.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  After you've accepted an offer: update immediately
                </h3>
                <p className="text-muted leading-relaxed">
                  The job search signature is for the job search period. Once you've accepted an
                  offer and started your new role, update your signature to reflect your new
                  position within your first week. Continuing to use a "seeking opportunities"
                  signature after you've started a new job is confusing to anyone who reaches out
                  and immediately signals that you're already behind on your professional
                  housekeeping. The
                  {" "}<Link href="/professional-email-signature" className="text-primary underline underline-offset-2">professional email signature guide</Link>{" "}
                  covers exactly what you need for your new-role signature.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common job seeker email signature mistakes
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Including current employer",
                  why: "The confidentiality risk is real, and the benefits rarely justify it. Your resume handles the employer context. Your signature does not need to, and doing so can create awkward situations if emails are forwarded or screenshot.",
                },
                {
                  mistake: "Linking to an incomplete or outdated LinkedIn",
                  why: "A LinkedIn with three connections, no profile photo, and a headline that says 'Open to Work' is not going to impress the recruiter who clicks it. Fix your LinkedIn before you start applying. The link should be an asset, not a liability.",
                },
                {
                  mistake: "Using an unprofessional email address",
                  why: "Your email address appears in your signature as well as the From field. 'jsmith_1984@hotmail.com' or 'xoxosarah@yahoo.com' undermines a professional impression before the hiring manager has read a word of your email. Create a professional Gmail if needed — it takes five minutes.",
                },
                {
                  mistake: "Not including a phone number",
                  why: "Recruiters call. A missing phone number forces them to ask for it (friction) or wait until a scheduled call to reach you. Your personal mobile in your signature removes that friction and shows you're accessible.",
                },
                {
                  mistake: "Inflated titles",
                  why: "'Marketing Ninja,' 'Startup Wizard,' or 'Digital Storyteller' in your job search signature reads as junior in most professional contexts — not creative, not impressive. Use a real title that accurately represents your level. Hiring managers are looking for professional signals, not personality descriptors.",
                },
                {
                  mistake: "Forgetting to update after accepting an offer",
                  why: "Continuing to use 'Open to new opportunities' in your signature after you've started a new job is confusing and suggests a lack of attention to detail. Update it on your first day.",
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
              How to set up your job search signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link> and
              choose a clean, professional template. Fill in your name, professional title, phone
              number, and LinkedIn URL. Add a portfolio or GitHub link if relevant to your target
              roles. Keep the signature concise — this is not the place for your full work history.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Once you've built your primary application signature, consider creating a second,
              slightly warmer version for networking emails. The networking version can be a bit
              less formal in framing, though the design should be identical.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Install your signature in the email account you're using for your job search. If
              you've created a new professional Gmail for the search, set this as the default
              signature so it appears automatically. Test it by sending a message to yourself
              — check that it looks right, that all links work, and that it renders cleanly
              on mobile.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Job Search Signature — Free
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
                  desc: "The complete guide — set this up once you've landed your new role.",
                },
                {
                  href: "/email-signature-for-students",
                  title: "Email Signature for Students",
                  desc: "Guidance for students and recent graduates building professional presence.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Visual design principles for clean, well-structured signatures.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "If you have a personal mark or portfolio logo to include.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "Relevant if you're doing interim consulting work during your search.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Email Signature for Freelancers",
                  desc: "For job seekers doing freelance work while looking for full-time roles.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "Technical guide to how signatures work across email clients.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Once you're hired — how your new employer likely handles signatures.",
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
              Build your job search signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Professional, LinkedIn-ready, and consistent across every application email.
              Free, no account required, takes 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Job Search Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
