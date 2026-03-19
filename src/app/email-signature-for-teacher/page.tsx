import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Teachers & Educators (2026) | NeatStamp",
  description:
    "What teachers and educators should include in their email signature — school name, subject, office hours, and parent communication best practices.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-teacher" },
};

const faqs = [
  {
    q: "Should teachers include their personal phone number in their email signature?",
    a: "Generally, no. Most school districts have clear policies about teacher-student and teacher-parent communication happening through official channels. Your school phone number (and extension) is appropriate. Your personal cell phone is not — once a parent or student has your personal number, that boundary is difficult to re-establish. If your school has a messaging platform like Remind or ClassDojo, include your handle there instead of a direct phone number.",
  },
  {
    q: "Do teachers need to follow a specific email signature format?",
    a: "It depends on your district. Many districts have brand guidelines that specify the logo, fonts, and layout for staff communications. Some have IT-managed signatures that are applied centrally. If your district has these guidelines, follow them — you can add your own personal details within that framework, but don't deviate from the required format. If you're in a district without signature standards, you have full discretion, which is where this guide helps.",
  },
  {
    q: "Should I include office hours in my email signature?",
    a: "Yes, and it's genuinely useful. Parents and students often email to ask when they can reach you — having office hours (or 'available periods') in your signature removes that back-and-forth entirely. Update it each semester. If your office hours change regularly, you can use a more general note: 'Available Tuesdays and Thursdays, 3:00–4:30pm' rather than trying to list every period.",
  },
  {
    q: "What title should teachers use in their email signature?",
    a: "Your official title at the school is the right starting point: Teacher, Lead Teacher, Department Chair, Instructional Coach, etc. Add your subject or grade level below it: '6th Grade ELA' or 'AP Chemistry & Physics.' For K-12 teachers, grade level and subject are more useful to parents than a generic 'Teacher' title. For higher education instructors, 'Lecturer,' 'Instructor,' or 'Adjunct Professor' is appropriate.",
  },
  {
    q: "Should elementary teachers include their classroom number?",
    a: "Yes. Room numbers are practically useful for parents coming in for conferences, volunteers, and anyone navigating the school building. If you're at a school where parents regularly visit, your room number removes a navigation question. Format it simply: 'Room 214' alongside the school address or on its own line.",
  },
  {
    q: "Can I include a motivational quote in my teacher email signature?",
    a: "In a school context, a brief educator-appropriate quote is more acceptable than in most professional settings. That said, keep it very short (one sentence), relevant to education or your subject area, and appropriate for all recipients including students. Some schools have policies against quotes in staff signatures — check first. If you do include one, keep it small and styled differently from your contact information so it's clearly decorative, not contact info.",
  },
  {
    q: "How should a substitute teacher set up their email signature?",
    a: "If you're a long-term sub with a school email address, use the school's format and list your assignment clearly: 'Long-Term Substitute, 4th Grade, Lincoln Elementary.' If you work across multiple schools as a daily sub, your signature should reflect your actual employment status — typically through the district or a staffing agency. Don't use the permanent teacher's signature format; it can create confusion about who is actually on leave.",
  },
  {
    q: "Should teachers include their educational credentials (M.Ed., Ph.D.) in their signature?",
    a: "It depends on context. At the K-12 level, advanced degrees are relevant to show professional development and expertise, but most parents care more about your subject and grade level than your credential abbreviations. 'Ms. Chen, M.Ed.' is appropriate and reasonably common. At the college level, your academic credentials carry more weight and are generally expected. A teacher with a doctoral degree teaching high school can include it — 'Dr. Chen' or 'Sarah Chen, Ph.D.' — but it should feel natural, not performative.",
  },
];

export default function EmailSignatureForTeacherPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Teachers",
            url: "https://neatstamp.com/email-signature-for-teacher",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Teachers & Educators
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Teachers communicate with a uniquely wide audience — students, parents, administrators,
              colleagues, and sometimes the community at large. Your email signature is doing
              different work in each of those conversations, and there are some school-specific
              considerations that most generic signature guides don't cover.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Teacher Signature — Free
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
              I've talked with a lot of teachers about their professional communications, and the
              email signature question tends to surface a few consistent concerns: district policies,
              parent communication boundaries, and the weird balancing act of being approachable
              without being informal. These are real considerations that don't come up in most
              professional signature guides written for corporate audiences.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Your signature appears in emails to parents who may be anxious about their child's
              progress, to colleagues you're collaborating with on curriculum, to administrators
              who are evaluating you, and to students who are watching how their teacher presents
              themselves professionally. It needs to be warm enough for parent communication and
              formal enough for administrative correspondence — which means landing somewhere in
              the middle.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The practical details matter here too: office hours, which communication platforms
              your school uses, whether parents should email you directly or go through the school
              office. A good teacher signature anticipates those questions and answers them before
              they're asked.
            </p>
            <p className="text-muted leading-relaxed">
              If you're a student looking for signature guidance, the
              {" "}<Link href="/email-signature-for-students" className="text-primary underline underline-offset-2">email signature for students guide</Link>{" "}
              covers that side of the classroom.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What to include in your teacher email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Teacher signatures have a different set of relevant fields than most professions.
              Here's the breakdown.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Name and title",
                  required: "Always",
                  notes:
                    "Use the name you go by professionally in the classroom — if students and parents know you as 'Ms. Chen,' use that. Add your formal title: 'Teacher,' 'Department Chair,' 'Lead Educator,' etc. If you have advanced credentials, 'M.Ed.' or 'Ph.D.' can follow your name, but keep it to the most relevant credential.",
                },
                {
                  field: "Subject and grade level",
                  required: "Always",
                  notes:
                    "'7th Grade Science' or 'AP English Literature | Grades 11-12' — this is essential context for everyone who receives your email. Parents especially: they're often managing communications with multiple teachers and need to immediately know who is who. Be specific: 'Math' is less useful than '8th Grade Algebra & Pre-Calculus.'",
                },
                {
                  field: "School name",
                  required: "Always",
                  notes:
                    "Full official school name. If you're in a large district, add the district name as well — especially relevant if parents are communicating with multiple schools. 'Lincoln Elementary School | Riverside Unified School District' is perfectly formatted.",
                },
                {
                  field: "Office hours / Available times",
                  required: "Strongly recommended",
                  notes:
                    "'Office Hours: Tues/Thurs 3:00–4:30pm' saves a lot of back-and-forth. If your availability changes by semester, update it at the start of each term. If you don't have formal office hours but have a preferred contact window, say so: 'Best reached by email — I respond within 24 hours on school days.'",
                },
                {
                  field: "School phone number (not personal)",
                  required: "Recommended",
                  notes:
                    "The main school number or your classroom extension. Not your personal mobile. Most districts have explicit policies here. Parents can call the school office for urgent matters. If you want async communication, a messaging platform handle (Remind, Seesaw, ClassDojo) is better than a direct phone number.",
                },
                {
                  field: "Room number",
                  required: "K-12 — useful",
                  notes:
                    "'Room 214' is a small addition that removes a navigation question for parents coming in for conferences, tutoring pickups, or volunteer visits. If you're on a campus where finding specific rooms isn't obvious, this is worth including.",
                },
                {
                  field: "Communication platform handle",
                  required: "If your school uses one",
                  notes:
                    "If your school communicates through Remind, ClassDojo, Seesaw, or Google Classroom, include how parents can find you on that platform. This is especially useful if the platform is the preferred (or required) channel for parent communication.",
                },
                {
                  field: "School logo",
                  required: "Check district policy",
                  notes:
                    "Many districts allow staff to use the school or district logo in signatures; some require it for brand consistency; some restrict it. Check before using it. If you're allowed, a small school logo (100–140px wide) adds a professional, institutional feel.",
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
              Example teacher email signature
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Here's a signature for a middle school science teacher — clear, professional,
              and answers the questions parents ask most often before they ask them.
            </p>

            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">Ms. Andrea Vasquez, M.Ed.</div>
              <div className="text-muted">7th & 8th Grade Science | Jefferson Middle School</div>
              <div className="text-muted">Westside Unified School District</div>
              <div className="text-muted mt-2">Room 108 | P: (310) 555-0121 ext. 214</div>
              <div className="text-muted">Office Hours: Tues/Thurs 3:15–4:30pm</div>
              <div className="text-primary">ClassDojo: Ms. Vasquez — Jefferson MS</div>
              <div className="border-t border-border mt-3 pt-2">
                <div className="text-muted text-xs">I respond to emails within 24 hours on school days.</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              That final line — "I respond to emails within 24 hours on school days" — is worth
              its weight. It sets a clear expectation, which reduces the anxiety that comes with
              unanswered emails and prevents the 10pm Friday email that starts with "I sent this
              on Tuesday and haven't heard back..."
            </p>
            <p className="text-muted leading-relaxed mb-4">
              For a high school teacher who deals more heavily with students directly than parents,
              the format is similar but you might drop the ClassDojo reference and add a link to
              your Google Classroom or Canvas course page. For a college instructor, title matters
              more — use "Lecturer," "Instructor," or "Adjunct Professor" accurately, and include
              your department and office location.
            </p>
            <p className="text-muted leading-relaxed">
              Students who are building their own professional signatures — for internship
              applications or networking — will find relevant guidance in the
              {" "}<Link href="/email-signature-for-students" className="text-primary underline underline-offset-2">student email signature guide</Link>.
            </p>
          </section>

          {/* Profession-specific tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Teacher-specific email signature tips
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Check your district's email communication policy before you customize
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  The mistake I see most often is teachers setting up signatures without checking
                  what their district allows. Many districts have IT-managed signatures that deploy
                  centrally — your custom changes might get overwritten automatically. Others have
                  brand guidelines that specify which logo version to use, which font, and what
                  information must be included. Some have restrictions on what can be included
                  (no photos, no personal social media).
                </p>
                <p className="text-muted leading-relaxed">
                  Before you spend time building a signature, check with your school's IT department
                  or your principal. Five minutes of clarification saves you from building something
                  that gets overwritten or violates policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Multiple signatures for multiple audiences
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Gmail and Outlook both let you set up multiple signatures. Consider having three:
                  one for parent communications (full signature with office hours and communication
                  platform), one for student-facing emails (name, subject, office hours — simpler),
                  and one for professional communications with colleagues or administrators (your
                  full professional title and contact information, similar to any professional
                  context).
                </p>
                <p className="text-muted leading-relaxed">
                  This sounds like more work than it is. Once your base signature is built in
                  NeatStamp, creating variations takes about five minutes. The payoff is that
                  your signature is always appropriate for the context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Setting communication expectations through your signature
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  Your signature is a low-friction place to set expectations about how you
                  communicate. "I respond to emails within 24 hours on school days" is more
                  effective than saying it in a first-week-of-school email that parents won't
                  remember. So is "For urgent matters, please call the school office at (310) 555-0100."
                </p>
                <p className="text-muted leading-relaxed">
                  Some teachers also note their preferred communication channel: "For quickest
                  responses, message me through ClassDojo." This is genuinely useful guidance
                  that prevents parents from hunting for the right way to reach you.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  FERPA and what it means for teacher email
                </h3>
                <p className="text-muted leading-relaxed">
                  FERPA (the Family Educational Rights and Privacy Act) restricts disclosure of
                  student educational records. While your email signature itself isn't a FERPA issue,
                  how you communicate by email can be. You shouldn't include student-identifiable
                  information in email threads where other parties might see it. This isn't a
                  signature issue per se, but it's worth noting that some districts include a brief
                  FERPA privacy notice in teacher signatures for parent communications — similar to
                  the approach healthcare professionals take with HIPAA notices.
                </p>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes teachers make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Including a personal phone number",
                  why: "Once a parent or student has your personal cell, that boundary is hard to re-establish. Use the school's phone number and extension. For async communication, a platform like Remind is far better than giving out your mobile.",
                },
                {
                  mistake: "Not updating office hours each semester",
                  why: "A signature with last year's office hours actively misleads parents who plan around them. Set a calendar reminder at the start of each semester to update this single field — it takes 30 seconds.",
                },
                {
                  mistake: "Leaving out the grade level and subject",
                  why: "Parents managing communications with seven different teachers across a middle school need to immediately identify who you are and what you teach. 'Ms. Johnson, Teacher' is not enough. 'Ms. Johnson, 8th Grade History' is.",
                },
                {
                  mistake: "Using a personal email address",
                  why: "Using your personal Gmail for school communications creates problems: it may violate district policy, it mixes your professional and personal communications, and it can create liability questions if those communications ever become relevant in a dispute. Always use your district-issued email for professional correspondence.",
                },
                {
                  mistake: "Overly informal tone markers (casual fonts, emoji in the signature)",
                  why: "Your email signature reflects on you professionally with administrators, parents, and community members — not just with students. A signature with Comic Sans or a row of classroom emoji will read as unprofessional to many parents. Keep the signature itself formal; warmth comes through in the email body.",
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
              How to create your teacher email signature
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Open the <Link href="/editor" className="text-primary underline underline-offset-2">NeatStamp editor</Link>,
              choose a clean professional template, and fill in your name, credentials, subject,
              grade level, school, and contact information. Add your office hours in the secondary
              information field. The whole process takes about 10 minutes.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              If your district uses Google Workspace for Education (most do), the generated HTML
              installs directly into Gmail settings. The editor generates clean HTML that renders
              correctly in both Gmail and Outlook — the two email clients covering virtually every
              school environment.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Once built, save the HTML file somewhere you can find it. When the new school year
              starts, open the editor, update your office hours and any changed information, and
              reinstall. It's a 5-minute task that pays off in cleaner parent communication all year.
            </p>
            <Link
              href="/editor"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
            >
              Create Your Teacher Signature — Free
            </Link>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-for-students",
                  title: "Email Signature for Students",
                  desc: "Help your students build professional signatures for internships and networking.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "The complete framework for professional signatures in any field.",
                },
                {
                  href: "/email-signature-for-business",
                  title: "Email Signature for Business",
                  desc: "Useful for school administrators rolling out signatures district-wide.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signatures",
                  desc: "Admin setup for Microsoft 365 — used by many school districts.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Layout, font, and color principles for a clean, readable signature.",
                },
                {
                  href: "/email-signature-with-logo",
                  title: "Email Signature with Logo",
                  desc: "How to add your school logo correctly to your signature.",
                },
                {
                  href: "/email-signature-for-nurse",
                  title: "Email Signature for Nurses",
                  desc: "For school nurses navigating healthcare credentials in an education setting.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How email signature HTML works and why it renders differently.",
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
              Build your teacher signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Clear, professional, and ready for parent, student, and admin email.
              Free, no account required, installs in Gmail in minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Teacher Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
