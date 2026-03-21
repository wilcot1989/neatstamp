import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Free Email Signature Templates — What's Actually Free",
  description:
    "Where to find genuinely free email signature templates. What most free tools hide. What NeatStamp offers free with no account needed. How to customize.",
  alternates: {
    canonical: "https://neatstamp.com/blog/free-email-signature-template",
  },
};

const faqs = [
  {
    q: "Are there genuinely free email signature templates?",
    a: "Yes, but most 'free' tools have catches — branding in your signature, accounts required to copy the code, or only the most basic template unlocked. NeatStamp offers 5 templates fully free with no account needed. You get the copy-paste HTML immediately.",
  },
  {
    q: "What's wrong with using a free email signature tool?",
    a: "Nothing, as long as you understand what 'free' means for that tool. The main catches are: mandatory branding in your signature footer, needing a paid account to copy the HTML, image hosting that breaks when you cancel, and bloated code that looks bad in Outlook.",
  },
  {
    q: "How do I customize a free email signature template?",
    a: "In NeatStamp's editor, you fill in your details (name, title, company, phone, email) and the template updates in real time. You can change colors, upload your logo, and adjust which elements appear. Then copy the code and paste it into Gmail or Outlook.",
  },
  {
    q: "Do free email signature templates work in Outlook?",
    a: "It depends on the tool. Templates that use modern CSS (flexbox, grid) break in Outlook. NeatStamp's templates use table-based HTML with inline styles, which is the only approach that works reliably across all Outlook versions.",
  },
  {
    q: "Can I use a free template for my whole team?",
    a: "For personal use, yes. For a whole team with consistent branding, you'd typically need a paid plan that lets you create a master template and distribute it. NeatStamp's free plan covers individual use; the Pro and Team plans cover team deployment.",
  },
];

export default function FreeEmailSignatureTemplatePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          { name: "Blog", url: "https://neatstamp.com/blog" },
          {
            name: "Free Email Signature Templates",
            url: "https://neatstamp.com/blog/free-email-signature-template",
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-700 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700">Free Email Signature Templates</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Free Tools
                </span>
                <span className="text-sm text-slate-400">13 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Free Email Signature Templates: What&rsquo;s Actually Free (And What Isn&rsquo;t)
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Every email signature tool on the internet claims to be free. Most of
                them aren&rsquo;t — at least not in the way you&rsquo;re hoping. This guide cuts
                through the noise: what the catches actually are, which tools genuinely
                offer free templates, and how to pick and customize one that looks
                professional.
              </p>
              <p className="text-sm text-slate-500">
                By the NeatStamp Team &middot; Updated March 2026 &middot; 13 min read
              </p>
            </header>

            {/* Table of Contents */}
            <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Table of Contents
              </p>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                {[
                  ["#the-free-catches", "The catches most free tools hide"],
                  ["#what-to-look-for", "What to look for in a free tool"],
                  ["#neatstamp-free", "What NeatStamp offers for free"],
                  ["#template-types", "Free template types and what they're best for"],
                  ["#how-to-customize", "How to customize a free template"],
                  ["#install", "Installing your free template"],
                  ["#when-to-pay", "When a paid plan is worth it"],
                  ["#faq", "Frequently asked questions"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href as string}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Section 1 */}
            <section id="the-free-catches" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                The catches most free email signature tools hide
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Let me be direct about this, because it&rsquo;s genuinely confusing. Here are
                the most common ways that &ldquo;free&rdquo; email signature tools aren&rsquo;t actually free.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    catch: "Their branding in your signature",
                    detail: "Many free tools add a small &ldquo;Made with [Tool Name]&rdquo; or &ldquo;Powered by [Tool Name]&rdquo; line at the bottom of your signature. This is fine for personal use. For a professional context — especially client-facing emails — it looks unfinished. It&rsquo;s also slightly embarrassing to advertise the tool you used to build your own email footer.",
                    severity: "High",
                  },
                  {
                    catch: "Account required to copy the code",
                    detail: "You can use the editor and preview the signature for free, but you hit a paywall when you try to copy the HTML. This is a common pattern: the tool shows you how good your signature looks, then charges you to actually use it. Some tools call this 'exporting' and put it behind the paid tier.",
                    severity: "High",
                  },
                  {
                    catch: "Only the most basic template is free",
                    detail: "The free plan gives you access to one plain template — usually just name and title, no logo, no colors. The professional-looking templates that brought you to the site are all on the paid plan. The free option is a marketing demo, not a usable product.",
                    severity: "Medium",
                  },
                  {
                    catch: "Image hosting tied to the paid plan",
                    detail: "The tool hosts your logo and headshot on their servers. When your free trial ends, or if you cancel a paid plan, those images become unavailable. Your recipients start seeing broken image icons in your signature. Getting around this requires finding all the old emails you sent, which is not realistic.",
                    severity: "High",
                  },
                  {
                    catch: "Bloated or broken HTML",
                    detail: "Free tools often generate messy HTML with excessive nesting, unsupported CSS, or base64-encoded images. The signature looks fine in their preview but breaks in Outlook or flags spam filters. This is a technical quality issue, not a pricing issue — but it's worth checking before you commit to a tool.",
                    severity: "Medium",
                  },
                  {
                    catch: "\"Free\" trial with auto-renewal",
                    detail: "Some tools offer a \"free\" period that converts to a paid subscription unless you actively cancel. They bury this in the terms. Your email client applies the signature, you forget about the trial, and you're charged months later.",
                    severity: "Medium",
                  },
                ].map(({ catch: c, detail, severity }) => (
                  <div key={c} className="border border-slate-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">{c}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-3 ${
                        severity === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {severity} impact
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                None of this means free tools are bad. It means you need to know what
                you&rsquo;re actually getting before you start using one.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-to-look-for" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What to look for in a genuinely free email signature tool
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Here are the questions to ask before committing to any free email
                signature generator:
              </p>

              <ul className="space-y-4 mb-6">
                {[
                  {
                    question: "Can I copy the HTML without creating an account?",
                    why: "If you need to sign up just to copy the code, you're already giving them something — your email address for their marketing list. That's not free, it's a lead-generation tool.",
                  },
                  {
                    question: "Does the free version add their branding?",
                    why: "Check the actual output, not just the marketing copy. Some tools mention this prominently, others bury it. The signature preview in their tool often doesn't show the branding footer.",
                  },
                  {
                    question: "Where are images hosted?",
                    why: "Your logo needs to be at a stable, permanent URL. If the tool hosts it on their servers and you're on the free plan, clarify what happens to that URL if they change their pricing or go out of business.",
                  },
                  {
                    question: "Does the generated HTML work in Outlook?",
                    why: "Ask directly or look for mentions of Outlook compatibility. If the tool uses CSS flexbox in their templates (common in browser-preview-focused tools), those templates will break in Outlook desktop.",
                  },
                  {
                    question: "How many templates are actually free?",
                    why: "One template is fine if it suits your industry. If the only free template is a minimal plain design and you're in real estate where you need a headshot layout, the free option won't work for you.",
                  },
                ].map(({ question, why }) => (
                  <li key={question} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-800">{question}</strong>
                      <p className="text-sm mt-1">{why}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="neatstamp-free" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What NeatStamp actually offers for free
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I&rsquo;ll be direct about what&rsquo;s free on NeatStamp, so you can make an
                informed decision.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold text-green-800 mb-3">
                  Free, no account required:
                </p>
                <ul className="space-y-2">
                  {[
                    "5 professional templates (minimal, corporate, creative, two-column, modern)",
                    "All customization options: name, title, company, phone, email, website, social links",
                    "Logo upload and headshot upload",
                    "Color customization",
                    "Copy the HTML code to clipboard immediately",
                    "Copy the rendered version for direct paste into Gmail and Outlook",
                    "No NeatStamp branding in your signature",
                    "No account creation, no email address required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-800">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  What requires a paid plan:
                </p>
                <ul className="space-y-2">
                  {[
                    "3 additional Pro templates (more design options)",
                    "Saving and managing multiple signatures",
                    "CDN image hosting (for your logo/headshot)",
                    "Team management (multiple users, shared templates)",
                    "Analytics (click tracking on signature links)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                On the free plan, if you use a logo, you need to host it at a URL you
                control (your company website, a cloud storage URL, etc.). The signature
                HTML references that URL. If you just want a text-only signature, no
                image hosting is needed at all.
              </p>

              <p className="text-slate-600 leading-relaxed">
                You can see all the templates in the{" "}
                <Link href="/templates" className="text-blue-600 hover:underline">
                  template library
                </Link>{" "}
                before you build anything. The{" "}
                <Link href="/pricing" className="text-blue-600 hover:underline">
                  pricing page
                </Link>{" "}
                has the full comparison of free vs. paid features.
              </p>
            </section>

            {/* Section 4 */}
            <section id="template-types" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Free template types and what they&rsquo;re best for
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The five free templates in NeatStamp cover the most common professional
                needs. Here&rsquo;s what each one is suited for, so you can pick the right
                starting point.
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "Minimal",
                    description: "Name, title, company, phone, email. Clean font, subtle horizontal rule separator. No logo, no color accents.",
                    bestFor: "Tech roles, engineers, consultants, anyone who wants a signature that's professional without being flashy.",
                    notFor: "Client-facing roles where brand recognition matters, or anyone who needs to include a logo.",
                    customize: "Pick your font (Arial or Georgia), adjust the color of the separator line, choose whether to show email address.",
                  },
                  {
                    name: "Corporate",
                    description: "Two-column layout: logo on the left, contact info on the right. Horizontal rule between the signature and any body copy.",
                    bestFor: "Corporate employees, account managers, anyone representing a brand with a recognizable logo.",
                    notFor: "Solo freelancers who don't have a logo, or roles where a personal touch matters more than company branding.",
                    customize: "Upload your logo, set the brand color for your name or the divider, adjust column widths.",
                  },
                  {
                    name: "Creative",
                    description: "Circular headshot on the left with name, title, and social links on the right. Slightly more personality in the layout.",
                    bestFor: "Designers, marketers, consultants, anyone where a personal photo adds value.",
                    notFor: "Legal, finance, medical contexts where a headshot is unconventional.",
                    customize: "Upload your headshot, choose which social icons to display, pick an accent color.",
                  },
                  {
                    name: "Modern",
                    description: "Full-width layout with a colored left border, name in a larger size, secondary info in a lighter grey.",
                    bestFor: "Startups, agencies, anyone wanting a slightly more contemporary feel than the standard corporate template.",
                    notFor: "Very conservative industries (law, finance) where unconventional design reads as unprofessional.",
                    customize: "Change the border color to your brand color, adjust font size for name vs. secondary info.",
                  },
                  {
                    name: "Two-Line Reply",
                    description: "Ultra-minimal: name | title | company | phone on two lines. Designed for replies and forwards where a full signature creates clutter.",
                    bestFor: "Setting as your reply/forward signature while using a full template for new emails.",
                    notFor: "First-contact emails where you need to give context about who you are.",
                    customize: "Minimal — choose which elements to include and font size.",
                  },
                ].map(({ name, description, bestFor, notFor, customize }) => (
                  <div key={name} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                      <span className="font-semibold text-slate-900">{name} Template</span>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-sm text-slate-600">{description}</p>
                      <div className="grid sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-medium text-green-700 mb-1">Best for</p>
                          <p className="text-slate-600">{bestFor}</p>
                        </div>
                        <div>
                          <p className="font-medium text-red-700 mb-1">Not ideal for</p>
                          <p className="text-slate-600">{notFor}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-blue-700 mb-1">What you can customize</p>
                        <p className="text-xs text-slate-600">{customize}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mt-6">
                For more inspiration on what each style looks like in a real context,
                the{" "}
                <Link href="/blog/email-signature-examples-2026" className="text-blue-600 hover:underline">
                  email signature examples guide
                </Link>{" "}
                has 15+ examples across industries. The{" "}
                <Link href="/examples" className="text-blue-600 hover:underline">
                  examples gallery
                </Link>{" "}
                has live previews.
              </p>
            </section>

            {/* Section 5 */}
            <section id="how-to-customize" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How to customize a free email signature template
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Customization in the{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">
                  NeatStamp editor
                </Link>{" "}
                works in real time — you change a field and the signature preview updates
                immediately. Here&rsquo;s what you can do and what to think about for each
                element.
              </p>

              <div className="space-y-5">
                {[
                  {
                    element: "Name",
                    tips: [
                      "Use the name you use professionally — it should match your LinkedIn and business cards.",
                      "If you have a common name (John Smith), including your middle initial or full middle name helps recipients find you online.",
                      "Credentials after your name (MD, CPA, PhD) go here, not in the title field.",
                    ],
                  },
                  {
                    element: "Title",
                    tips: [
                      "Be specific. \"Senior Product Designer\" is better than \"Designer.\"",
                      "If you freelance across different disciplines, use something like \"UX Designer & Brand Consultant\" to set expectations.",
                      "If your company title is internally-specific jargon, consider how it reads to an external recipient.",
                    ],
                  },
                  {
                    element: "Company",
                    tips: [
                      "This becomes a clickable link — enter your company website URL in the website field so it links correctly.",
                      "For freelancers, your trading name or your own name (e.g., 'Jane Doe Design') works fine here.",
                    ],
                  },
                  {
                    element: "Phone",
                    tips: [
                      "Include the country code (+1, +44) if you communicate internationally. It removes ambiguity about how to dial.",
                      "NeatStamp automatically wraps this in a tel: link so it's tappable on mobile.",
                      "One number only. If you list both office and mobile, put the most reachable one first.",
                    ],
                  },
                  {
                    element: "Logo",
                    tips: [
                      "PNG with transparent background is best. JPG works but can show a white box where transparency would be.",
                      "Keep the file under 20KB — resize before uploading. A 2MB logo file will make your emails slow and may trigger spam filters.",
                      "On the free plan, your logo needs to be hosted at a URL you control (your website or a public cloud storage link). Upload it there first, then paste the URL into NeatStamp.",
                    ],
                  },
                  {
                    element: "Colors",
                    tips: [
                      "Use your brand color as the accent (left border, name color, or divider). One color, not three.",
                      "If you don't have a brand color, #1d4ed8 (blue) or #1e3a5f (navy) are professional defaults.",
                      "Keep body text at #333333 or #1a1a1a, never pure black (#000000) — it can cause dark mode inversion issues in Outlook.",
                    ],
                  },
                  {
                    element: "Social links",
                    tips: [
                      "LinkedIn is almost always worth including. It links to your professional profile.",
                      "Add others only if they're actively maintained and professionally relevant — a Twitter/X that hasn't been posted to in two years doesn't help.",
                      "Maximum three icons. Anything more looks cluttered.",
                    ],
                  },
                ].map(({ element, tips }) => (
                  <div key={element} className="bg-slate-50 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-3">{element}</h3>
                    <ul className="space-y-2">
                      {tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mt-6">
                For the technical rules behind what looks good — fonts, sizes, image
                dimensions — the{" "}
                <Link href="/blog/email-signature-best-practices" className="text-blue-600 hover:underline">
                  best practices guide
                </Link>{" "}
                has the specific numbers. The{" "}
                <Link href="/blog/email-signature-size" className="text-blue-600 hover:underline">
                  size guide
                </Link>{" "}
                covers logo dimensions specifically.
              </p>
            </section>

            {/* Section 6 */}
            <section id="install" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Installing your free template in Gmail or Outlook
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Once you&rsquo;ve customized your template in the{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">
                  editor
                </Link>
                , there are two copy options: rendered copy (for pasting directly into
                Gmail/Outlook) and HTML source copy (for advanced use). Most people
                want the rendered version.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Installing in Gmail
              </h3>
              <ol className="space-y-3 mb-6 text-sm text-slate-600">
                {[
                  "Click 'Copy Signature' in NeatStamp (the rendered version).",
                  "Open Gmail → Settings (gear icon) → See all settings → General → Signature.",
                  "Click 'Create new' and name your signature.",
                  "Click in the signature editor box and paste (Ctrl+V or Cmd+V).",
                  "Set it as default for New emails in the Signature defaults section.",
                  "Save Changes. Compose a new email to verify it looks correct.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-blue-600">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Installing in Outlook desktop
              </h3>
              <ol className="space-y-3 mb-6 text-sm text-slate-600">
                {[
                  "Click 'Copy Signature' in NeatStamp.",
                  "Open a new email in Outlook and paste (Ctrl+V) your signature into the email body.",
                  "Select all (Ctrl+A) and copy again (Ctrl+C).",
                  "Go to File → Options → Mail → Signatures.",
                  "Create a new signature, click in the editor box, and paste.",
                  "Set as default for new messages. Click OK.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-blue-600">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="text-slate-600 leading-relaxed">
                For Apple Mail, the process is more involved — the{" "}
                <Link href="/email-signature-apple-mail" className="text-blue-600 hover:underline">
                  Apple Mail guide
                </Link>{" "}
                has step-by-step instructions. For Gmail specifically, the{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail signature guide
                </Link>{" "}
                covers the mobile app setup too. For Outlook in detail, the{" "}
                <Link href="/blog/outlook-signature-template-guide" className="text-blue-600 hover:underline">
                  Outlook template guide
                </Link>{" "}
                walks through every version.
              </p>
            </section>

            {/* Section 7 */}
            <section id="when-to-pay" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                When a paid plan is actually worth it
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The free tier covers the vast majority of individual use cases. Here&rsquo;s
                a clear breakdown of when upgrading makes sense:
              </p>

              <div className="space-y-4">
                {[
                  {
                    situation: "You want to save multiple signatures",
                    detail: "Free NeatStamp generates and copies your signature but doesn't save it to an account. If you need to manage multiple signatures (personal email, work email, a reply signature) and switch between them, saving to an account is cleaner.",
                    verdict: "Pro plan",
                  },
                  {
                    situation: "You need NeatStamp to host your logo/headshot",
                    detail: "If you don't have a reliable public URL for your logo, Pro handles the image hosting. Your images sit on NeatStamp's CDN and don't depend on your company website staying the same.",
                    verdict: "Pro plan",
                  },
                  {
                    situation: "You want to roll out signatures for a whole team",
                    detail: "Free is per-person only. For 5–50 employees who all need consistent, branded signatures, the Team plan lets you create a master template and manage everyone's signatures from one place.",
                    verdict: "Team plan",
                  },
                  {
                    situation: "You just need a signature for yourself",
                    detail: "If you have a logo URL, fill in your details, pick a free template, copy the code. You're done. No need for a paid plan.",
                    verdict: "Free tier",
                  },
                ].map(({ situation, detail, verdict }) => (
                  <div key={situation} className="border border-slate-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 text-sm">{situation}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-3 ${
                        verdict === "Free tier"
                          ? "bg-green-100 text-green-700"
                          : verdict === "Pro plan"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}>
                        {verdict}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mt-6">
                Full details are on the{" "}
                <Link href="/pricing" className="text-blue-600 hover:underline">
                  pricing page
                </Link>
                . The free plan has no expiry — your signature keeps working indefinitely.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-slate-900">
                      {faq.q}
                      <svg
                        className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3"
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
                    <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/templates", label: "Browse Free Templates" },
                  { href: "/blog/how-to-create-email-signature", label: "How to Create an Email Signature" },
                  { href: "/blog/email-signature-examples-2026", label: "Email Signature Examples 2026" },
                  { href: "/blog/gmail-signature-template-guide", label: "Gmail Signature Template Guide" },
                  { href: "/professional-email-signature", label: "Professional Email Signature Guide" },
                  { href: "/email-signature-with-logo", label: "Email Signatures with Logo" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
                  >
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Try it now — actually free
              </h2>
              <p className="text-green-100 text-sm mb-6 max-w-md mx-auto">
                5 templates, full customization, no account required, no branding in
                your signature. Copy your HTML immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/editor"
                  className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Build My Free Signature
                </Link>
                <Link
                  href="/templates"
                  className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
                >
                  See All Templates
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
