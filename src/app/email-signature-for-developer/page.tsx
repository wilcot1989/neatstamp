import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Developers & Engineers",
  description:
    "How developers should approach email signatures — GitHub links, the tech stack debate, minimal vs detailed, and what actually matters.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-developer" },
};

const faqs = [
  {
    q: "Should a software developer include their tech stack in their email signature?",
    a: "Generally no, and this is the most common debate in developer circles. Your tech stack changes, it's context-dependent, and listing 'Python | Django | PostgreSQL | React | AWS' in a professional email signature reads more like a resume bullet than useful contact information. The exception is if you're a freelance developer specifically marketing yourself for a particular type of work, where the stack signals immediately relevant expertise. Even then, one or two technologies is better than a full list. Your GitHub profile or portfolio does this work better.",
  },
  {
    q: "Should developers link their GitHub in their email signature?",
    a: "Yes, if it's active and representative of your work. A GitHub profile with regular commits, well-documented repos, and some open source contributions is a strong professional signal — especially in engineering contexts. The caveat: if your GitHub is mostly forks and half-finished personal projects, it might not add the credibility you're hoping for. Be honest about whether your profile shows the work you want to be known for. A strong GitHub link is genuinely valuable; a sparse one is neutral at best.",
  },
  {
    q: "How minimal should a developer's email signature be?",
    a: "Pretty minimal. The engineering culture at most companies and studios values directness over display. A signature with your name, title, company, email, and a GitHub or portfolio link covers everything a colleague or hiring manager needs. There's no norm in software engineering to have elaborate signatures — and in many engineering teams, a plain-text signature would not look out of place. That said, if you're in a client-facing or sales engineering role, the professional context warrants a more complete signature.",
  },
  {
    q: "Should developers include their Stack Overflow profile in their signature?",
    a: "It can be a useful signal if your reputation is strong. A Stack Overflow profile with 10,000+ reputation and answers in relevant technology areas communicates genuine expertise in a way that a title alone doesn't. That said, it's less universally recognized as a professional credential outside technical audiences. For internal engineering email, it's probably unnecessary. For external technical correspondence where expertise is directly relevant — consulting, technical writing, job applications — it can add useful context.",
  },
  {
    q: "What title should a software engineer use in their email signature?",
    a: "Your actual title: Software Engineer, Senior Software Engineer, Staff Engineer, Principal Engineer, Engineering Manager, VP of Engineering, CTO. Avoid invented titles — 'Code Artisan' or 'Full-Stack Ninja' read as unprofessional to anyone outside the startup culture where those titles briefly existed. If your company gives you a creative title, you can use it for internal email, but consider whether it translates well for external correspondence. 'Senior Developer' is universally understood; 'Wizard of Bits' is not.",
  },
  {
    q: "Should developers include open source project links in their signature?",
    a: "If you maintain a well-known or genuinely useful open source project, yes — a single link to a significant project is appropriate. It demonstrates that your work has public value and shows initiative. But 'well-known or genuinely useful' is the qualifier — a link to a personal utility script with 3 GitHub stars adds noise rather than credibility. The bar should be: would including this link make someone say 'oh, that's interesting' rather than 'why is this here?'",
  },
  {
    q: "How should a freelance developer's signature differ from an employed developer's?",
    a: "Freelance developers need more context in their signatures because they're always in a business development context, even in existing client relationships. Include your name, specialty (backend, mobile, DevOps), contact info, a booking link for project conversations, and your portfolio or GitHub. An employed developer writing to colleagues within the same company can use a much simpler internal signature. The external/internal distinction matters at the employed level too — most developers get away with much simpler signatures for internal Slack-adjacent email than for external correspondence.",
  },
  {
    q: "Should a developer's signature include their LinkedIn?",
    a: "LinkedIn is more relevant for developers who are in business-facing roles — developer advocates, engineering managers, sales engineers — than for engineers who are primarily internal-facing. If you're actively networking or your role involves external relationship-building, LinkedIn is worth including. If you're a backend engineer whose email audience is primarily your own team and technical partners, LinkedIn in your signature is less useful. Job seekers are an exception — during an active search, LinkedIn is worth including in all professional correspondence.",
  },
];

export default function EmailSignatureForDeveloperPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Developers",
            url: "https://neatstamp.com/email-signature-for-developer",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Software Developers & Engineers
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Most developers don't think much about their email signature. Some use plain text
              by deliberate choice. Some use whatever their company IT set up and haven't touched
              it since. And there's an active debate in engineering communities about whether
              developer signatures should look like everyone else's or something more specific
              to technical work.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Developer Signature — Free
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
              I've talked about email signatures with a lot of developers, and the most common
              perspective is somewhere between "it doesn't matter" and "I should probably sort
              this out." Both are understandable. Engineering culture tends to value substance
              over presentation, and a plain-text signature with just your name genuinely does
              the job in many internal email contexts.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              But there are developer contexts where your signature is doing real professional work:
              external technical correspondence, job applications, open source communication, client
              email for freelance work, and any situation where someone is deciding whether to take
              your work seriously before they've engaged with it. In those contexts, a well-crafted
              signature with the right links and the right professional signals is meaningfully
              better than a three-word plain-text stub.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The specific questions for developers are also interesting: GitHub yes or no, tech
              stack yes or no, Stack Overflow yes or no, how minimal is appropriate, and whether
              the developer subculture of elaborate ASCII art or terminal-themed signatures is
              actually charming or just unprofessional in most contexts. (Short answer: charming
              in some contexts, a red flag in others.)
            </p>
            <p className="text-muted leading-relaxed">
              For the technical side of how email HTML actually works — and why your signature
              might look broken in certain clients — the
              {" "}<Link href="/html-email-signature" className="text-primary underline underline-offset-2">HTML email signature guide</Link>{" "}
              is worth reading. It's relevant background for developers who want to understand
              the constraints they're working within.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your developer email signature
            </h2>

            <div className="space-y-5">
              {[
                {
                  field: "Name and title",
                  required: "Always",
                  notes:
                    "Your actual title — Software Engineer, Senior Engineer, Staff Engineer, Engineering Manager, Developer, etc. Use accurate job-ladder language. If your company has a generic title like 'Engineer II,' that's your title. For external correspondence where ladder specifics don't translate, 'Senior Software Engineer' is clearer than 'Engineer II.'",
                },
                {
                  field: "Company name",
                  required: "External email — always",
                  notes:
                    "For employed developers, your company name and possibly team or product area: 'Platform Engineering, Acme Corp' or 'Android Team at Fieldstone.' For freelancers, your own name or business name. Internal email to colleagues doesn't need your company name — they know where you work.",
                },
                {
                  field: "Professional email",
                  required: "Always",
                  notes:
                    "Your work email is your primary contact. If you have a personal professional domain you use for freelance or open source work, list that for external correspondence outside your employer context.",
                },
                {
                  field: "GitHub profile",
                  required: "If active — strongly recommended",
                  notes:
                    "A GitHub profile with visible work is the developer equivalent of a portfolio link. Link to your profile (github.com/username), not a specific repo. If you're particularly proud of a single project, a second line with a direct repo link is acceptable. Only include this if your profile is current and shows meaningful work.",
                },
                {
                  field: "Personal website or technical blog",
                  required: "Recommended if you maintain one",
                  notes:
                    "A developer who writes about their technical work, maintains an active blog, or has an engineering portfolio website has a genuinely useful link to include. Technical writing is a strong signal to employers, clients, and the engineering community. If your site is a dead blog with two posts from 2021, leave the link out.",
                },
                {
                  field: "Stack Overflow or community profile",
                  required: "If reputation is strong — optional",
                  notes:
                    "Stack Overflow with strong reputation in your area of expertise can be worth including — it's publicly verifiable expertise. LinkedIn is less universally useful in engineering contexts but appropriate for client-facing roles or active job searches.",
                },
                {
                  field: "Tech stack",
                  required: "Usually no — see FAQ",
                  notes:
                    "The tech stack debate is real. Short version: don't list your full stack in your signature. If you're a freelancer specifically marketing to a type of client, one or two key technologies can be appropriate ('Node.js & PostgreSQL backend developer'). Otherwise, let your GitHub or portfolio communicate this.",
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
              Example developer email signatures
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Three versions: minimal internal, standard external, and freelance developer.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Minimal — internal team email</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Alex Chen</div>
                  <div className="text-muted">Senior Software Engineer | Fieldstone</div>
                  <div className="text-primary">github.com/alexchen</div>
                </div>
                <p className="text-sm text-muted mt-2">Three lines. Does the job for internal use.</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Standard — external technical correspondence</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Alex Chen</div>
                  <div className="text-muted">Senior Software Engineer | Backend Platform</div>
                  <div className="text-muted">Fieldstone Technologies</div>
                  <div className="text-muted mt-2">alex.chen@fieldstone.io</div>
                  <div className="flex gap-4 mt-1">
                    <span className="text-primary">github.com/alexchen</span>
                    <span className="text-muted">·</span>
                    <span className="text-primary">fieldstone.io</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Freelance developer</h3>
                <div className="rounded-xl border-l-4 border-primary bg-surface p-5 font-mono text-sm leading-relaxed">
                  <div className="text-foreground font-bold">Sam Okafor</div>
                  <div className="text-muted">Freelance Backend Developer — Node.js & PostgreSQL</div>
                  <div className="text-muted mt-2">sam@samokafor.dev | samokafor.dev</div>
                  <div className="text-primary">github.com/samokafor</div>
                  <div className="text-xs text-primary mt-2">📅 Available for Q3 projects → cal.com/samokafor</div>
                </div>
                <p className="text-sm text-muted mt-2">The tech stack line is appropriate here because it's client-facing marketing. The availability line does real business development work.</p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Developer-specific email signature considerations
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The plain-text vs. HTML signature debate
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Some developers prefer plain-text signatures on principle — they're universal,
                  they render identically everywhere, and they signal a "substance over style"
                  philosophy that resonates in technical culture. This is a legitimate choice,
                  and no one will think less of you for a well-formatted plain-text signature in
                  an engineering context.
                </p>
                <p className="text-muted leading-relaxed">
                  The practical argument for HTML: clickable links. A plain-text GitHub URL is
                  technically present, but a properly linked anchor tag is more usable. If your
                  email includes external links you actually want people to follow, HTML formatting
                  makes that easier. You can have an otherwise minimal HTML signature that looks
                  functionally similar to plain text but with clickable links.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Developer humor in signatures: when it works and when it doesn't
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  ASCII art signatures, terminal prompts, and "/* this email contains no bugs */"
                  footers are a genuine part of developer email culture. In the right context —
                  internal engineering team email at a startup with a casual culture — they're fine
                  and sometimes genuinely appreciated.
                </p>
                <p className="text-muted leading-relaxed">
                  In external correspondence — client email, job applications, vendor communication,
                  or any context involving non-engineers — they can read as unprofessional. The
                  mistake is forgetting to switch signatures when moving between contexts. The
                  solution is to have two: one for internal use where your humor works, one for
                  external use where it might not.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Open source maintainers: the special case
                </h3>
                <p className="text-muted leading-relaxed">
                  If you're the maintainer or major contributor of a notable open source project,
                  that's a legitimate and impressive professional credential. A line like "Maintainer,
                  react-query (github.com/tanstack/query)" is entirely appropriate in technical
                  correspondence. It signals the community recognizes your work and gives recipients
                  immediate context for your expertise level. Keep it to projects with meaningful
                  usage — a side project with 50 stars doesn't need to be in your signature.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes developers make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Listing a 10-item tech stack",
                  why: "'Python | Flask | PostgreSQL | Redis | Celery | Docker | Kubernetes | AWS | Terraform | React' in an email signature reads as a keyword dump, not a credential. Let your GitHub and portfolio demonstrate your stack. Your signature's job is contact information, not resume.",
                },
                {
                  mistake: "Linking to an empty or sparse GitHub profile",
                  why: "A GitHub profile with 3 repos, no README files, and no commits in 14 months does not help your professional impression. Either maintain your GitHub enough to make it worth linking, or don't link it. There's no obligation to include it if it doesn't currently reflect your work well.",
                },
                {
                  mistake: "Using humor in external correspondence",
                  why: "The comment-style footer or the terminal-prompt signature is great for your team. In a first email to a client, a potential employer's recruiter, or a vendor contact, it creates uncertainty about your professionalism. Have a separate clean signature for external use.",
                },
                {
                  mistake: "Not updating after a job change",
                  why: "Developers change jobs regularly. A signature that still says your previous employer — especially six months into a new role — is a small but real credibility issue. Update on day one of any new position.",
                },
                {
                  mistake: "No links whatsoever in external technical email",
                  why: "If you're doing external technical correspondence — open source, consulting, technical writing, job applications — and you have no clickable links to your work anywhere in your signature, you're making people do extra work to verify your credentials. Include at least a GitHub or portfolio link for external email.",
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
              How to create your developer email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link>,
              pick a minimal template, and fill in your name, title, company, and links. For GitHub,
              use the link field rather than the social icon if you want a clean text-style link.
              The editor generates clean table-based HTML — a format you probably understand better
              than most users, and which renders reliably in Outlook without the flexbox issues
              that affect hand-rolled developer signatures.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Build two versions: one minimal for internal use and one slightly fuller for external
              correspondence. Install both in your email client. In Gmail, you can set a default
              signature and override it per email — most developers find this the cleanest workflow.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              The
              {" "}<Link href="/html-email-signature" className="text-primary underline underline-offset-2">HTML email signature guide</Link>{" "}
              explains the technical constraints if you want to understand why table-based layout
              is the right approach and what breaks when you try to use modern CSS in email.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Developer Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How email HTML works, why Outlook is different, and table-based layout.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The core principles for professional signatures in any context.",
                },
                {
                  href: "/email-signature-for-freelancers",
                  title: "Email Signature for Freelancers",
                  desc: "Freelance developer-specific angles: booking links, availability, clients.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Visual design principles for clean, well-structured signatures.",
                },
                {
                  href: "/email-signature-for-consultant",
                  title: "Email Signature for Consultants",
                  desc: "For developers who do independent consulting work.",
                },
                {
                  href: "/email-signature-for-job-seekers",
                  title: "Email Signature for Job Seekers",
                  desc: "Developer-specific job search signature strategy.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "For engineering managers rolling out signatures across a team.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signatures",
                  desc: "Admin deployment and configuration for Microsoft 365 environments.",
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
              Build your developer signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Clean HTML, renders correctly in Outlook, GitHub-ready.
              Free, no account required.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Developer Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
