import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "How to Create an Email Signature (2026 Guide)",
  description:
    "Step-by-step guide to creating a professional email signature in Gmail, Outlook, and Apple Mail. What to include, common mistakes, and the easy way.",
  alternates: {
    canonical: "https://neatstamp.com/blog/how-to-create-email-signature",
  },
};

const faqs = [
  {
    q: "What should I include in a professional email signature?",
    a: "At minimum: your full name, job title, company name, phone number, and email address. A company logo and LinkedIn link add credibility. Keep it to 5 lines or fewer. Anything beyond that starts to compete with your actual email content.",
  },
  {
    q: "How do I add an HTML email signature to Gmail?",
    a: "Go to Gmail Settings → See all settings → General → Signature → Create new. Paste your HTML by clicking the source code button in the editor, or use a tool like NeatStamp that generates copy-paste-ready code. Gmail strips some CSS, so use inline styles only.",
  },
  {
    q: "Why does my email signature look different in Outlook?",
    a: "Outlook uses Microsoft Word's rendering engine, not a browser. It doesn't support many standard CSS properties like flexbox, CSS variables, or background-image on table cells. Use table-based layouts with inline styles for reliable Outlook rendering.",
  },
  {
    q: "Can I have a different signature for replies and new emails?",
    a: "Yes. In Gmail, Outlook, and Apple Mail you can set separate signatures for new emails and replies/forwards. Most professionals use a full signature on new emails and a shorter one (just name, title, and phone) for replies to reduce clutter in long threads.",
  },
  {
    q: "Is it okay to use a free email signature generator?",
    a: "Yes, as long as it generates clean HTML that works across email clients. Watch out for tools that embed their branding in your signature, require an account just to copy the code, or produce bloated HTML that gets flagged by spam filters.",
  },
  {
    q: "How do I make my signature look good on mobile?",
    a: "Use a max-width of 600px, set explicit image dimensions in HTML attributes (not just CSS), keep font size at 11px minimum, and make phone numbers tappable with a tel: link. Test on both iOS Mail and Gmail on Android before rolling it out.",
  },
];

export default function HowToCreateEmailSignaturePage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          { name: "Blog", url: "https://neatstamp.com/blog" },
          {
            name: "How to Create an Email Signature",
            url: "https://neatstamp.com/blog/how-to-create-email-signature",
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
            <span className="text-slate-700">How to Create an Email Signature</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  Beginner Guide
                </span>
                <span className="text-sm text-slate-400">15 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                How to Create an Email Signature: The Complete Guide (2026)
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Creating an email signature sounds simple. It isn&rsquo;t always. Between Gmail
                stripping your formatting, Outlook rendering things completely differently,
                and Apple Mail doing its own thing on mobile — there&rsquo;s a lot that can go
                wrong. This guide covers everything from what to include, to step-by-step
                instructions for every major email client.
              </p>
              <p className="text-sm text-slate-500">
                By the NeatStamp Team &middot; Updated March 2026 &middot; 15 min read
              </p>
            </header>

            {/* Table of Contents */}
            <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Table of Contents
              </p>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                {[
                  ["#what-to-include", "What to include in your email signature"],
                  ["#before-you-build", "Before you build: two approaches"],
                  ["#gmail", "How to create a signature in Gmail"],
                  ["#outlook", "How to create a signature in Outlook"],
                  ["#apple-mail", "How to create a signature in Apple Mail"],
                  ["#mobile", "Setting up signatures on mobile"],
                  ["#common-mistakes", "Common mistakes to avoid"],
                  ["#html-signatures", "Using HTML for better signatures"],
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
            <section id="what-to-include" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What to include in your email signature
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Before you open any settings menu, decide what actually goes in your
                signature. Most people add too much. The goal is to give the recipient
                everything they need to reach you and nothing else.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The essential five
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                These belong in every professional email signature:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  {
                    item: "Full name",
                    detail: "Use the name on your business card, not a nickname. If you go by a shortened name professionally, that's fine — but be consistent.",
                  },
                  {
                    item: "Job title",
                    detail: "Be specific. \"Senior Account Manager\" beats \"Sales\" every time. Your title tells the recipient how to prioritise your email.",
                  },
                  {
                    item: "Company name",
                    detail: "Link it to your company website. It's one of the most natural places for a clickable link and it gives context instantly.",
                  },
                  {
                    item: "Phone number",
                    detail: "One number only. If you have a direct line, use that. Wrap it in a tel: link so it's tappable on mobile.",
                  },
                  {
                    item: "Email address",
                    detail: "Yes, even though they already have it. When emails get forwarded or printed, your address disappears from the header. Having it in the signature prevents confusion.",
                  },
                ].map(({ item, detail }) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">{item}:</strong> {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Good additions worth considering
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  {
                    item: "Company logo",
                    detail: "Reinforces brand recognition, especially for client-facing roles. Keep it under 200px wide and 20KB in file size.",
                  },
                  {
                    item: "LinkedIn profile link",
                    detail: "Almost universally appropriate. Recipients often check LinkedIn before or after meetings. Link to your personal profile, not the company page.",
                  },
                  {
                    item: "Headshot",
                    detail: "Valuable for sales, consulting, coaching, and real estate. Less common in technical or back-office roles. Keep it 80×80px to 100×100px.",
                  },
                  {
                    item: "Calendar booking link",
                    detail: "A Calendly or Cal.com link saves back-and-forth emails. Only add it if people genuinely need to book time with you.",
                  },
                ].map(({ item, detail }) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">{item}:</strong> {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Things to leave out
              </h3>
              <ul className="space-y-3 mb-4">
                {[
                  "\"Sent from my iPhone\" — turn this off immediately.",
                  "Environmental disclaimers about printing — they do nothing.",
                  "Inspirational quotes — unless you're specifically known for thought leadership.",
                  "Animated GIFs — most email clients block or strip them.",
                  "More than three social media icons — eight icons in a row looks desperate.",
                  "Long legal disclaimers on personal emails — these belong only on regulated communications.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 leading-relaxed">
                Want to see what a well-balanced signature looks like before you build
                yours? The{" "}
                <Link href="/examples" className="text-blue-600 hover:underline">
                  NeatStamp examples gallery
                </Link>{" "}
                has real signatures across different industries and roles. The{" "}
                <Link href="/templates" className="text-blue-600 hover:underline">
                  templates page
                </Link>{" "}
                is also a good reference for proportion and layout.
              </p>
            </section>

            {/* Section 2 */}
            <section id="before-you-build" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Before you build: two approaches
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have two real options for creating an email signature:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Option A: Build it manually
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Write HTML and inline CSS yourself, paste it into your email
                    client&rsquo;s settings. Full control, but requires knowing which
                    CSS properties work in each email client. Takes 30–60 minutes if
                    you know what you&rsquo;re doing. More if you don&rsquo;t.
                  </p>
                </div>
                <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Option B: Use a generator
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fill in a form, pick a template, copy the result into your email
                    client. The{" "}
                    <Link href="/editor" className="text-blue-600 hover:underline font-medium">
                      NeatStamp editor
                    </Link>{" "}
                    takes about 60 seconds, generates clean HTML that works across
                    all major email clients, and is free to use.
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                For most people, Option B is the right call. The time you save isn&rsquo;t
                just the build time — it&rsquo;s all the debugging time when Outlook renders
                your carefully crafted CSS as garbage.
              </p>

              <p className="text-slate-600 leading-relaxed">
                If you want to understand the HTML side in depth, the{" "}
                <Link href="/html-email-signature" className="text-blue-600 hover:underline">
                  HTML email signature guide
                </Link>{" "}
                covers the technical specifics. For now, let&rsquo;s walk through each
                email client.
              </p>
            </section>

            {/* Section 3 */}
            <section id="gmail" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How to create a signature in Gmail
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail is the most-used email client in the world, and its signature
                editor is surprisingly capable — as long as you know its quirks. The
                main one: Gmail strips CSS classes and external stylesheets. Everything
                must be inline.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Step-by-step for Gmail on desktop
              </h3>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Open Gmail Settings",
                    detail: "Click the gear icon in the top-right corner of Gmail, then click \"See all settings.\"",
                  },
                  {
                    step: "Find the Signature section",
                    detail: "Scroll down on the General tab until you see the Signature section. Click \"Create new\" and give your signature a name.",
                  },
                  {
                    step: "Choose your input method",
                    detail: "For a basic text signature, type directly into the editor. For an HTML signature with formatting, click the source code icon (looks like <>) if your browser's Gmail shows it — or use the workaround below.",
                  },
                  {
                    step: "Paste your signature",
                    detail: "If you've generated your signature in NeatStamp or another tool, copy the rendered version (not the raw HTML) and paste it directly into the Gmail signature box. Gmail preserves the formatting when you paste rendered HTML.",
                  },
                  {
                    step: "Set when it appears",
                    detail: "Scroll down to \"Signature defaults.\" Set your signature for both new emails and replies/forwards. For replies, you can choose a shorter version if you have one.",
                  },
                  {
                    step: "Save and test",
                    detail: "Click \"Save Changes\" at the bottom of the settings page. Compose a new email to yourself and check how it renders. Send it to a colleague on Outlook too.",
                  },
                ].map(({ step, detail }, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">{step}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-amber-800 mb-2">
                  Important: Gmail&rsquo;s HTML limitations
                </p>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>Gmail removes &lt;style&gt; blocks — use only inline styles.</li>
                  <li>Gmail compresses whitespace — use &lt;br&gt; tags for line breaks.</li>
                  <li>Gmail on Android may apply dark mode styles to your signature.</li>
                  <li>Images with external URLs display fine; embedded base64 images are often blocked.</li>
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed">
                For a dedicated deep-dive, the{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail email signature guide
                </Link>{" "}
                covers these issues with specific fixes. If mobile Gmail is your main
                concern, the{" "}
                <Link href="/email-signature-mobile-friendly" className="text-blue-600 hover:underline">
                  mobile-friendly signature guide
                </Link>{" "}
                has more detail.
              </p>
            </section>

            {/* Section 4 */}
            <section id="outlook" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How to create a signature in Outlook
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Outlook is where most signature problems happen. It uses Microsoft Word&rsquo;s
                rendering engine rather than a browser, which means many standard HTML and
                CSS properties simply don&rsquo;t work. Here&rsquo;s how to navigate it.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Outlook desktop (Windows)
              </h3>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Open Signature settings",
                    detail: "Go to File → Options → Mail → Signatures. Or, when composing a new email, click Insert → Signature → Signatures.",
                  },
                  {
                    step: "Create a new signature",
                    detail: "Click \"New\" and give it a name. You can create multiple signatures — useful for different email accounts or different contexts (new emails vs. replies).",
                  },
                  {
                    step: "Insert your signature",
                    detail: "For a basic signature, type it in. For an HTML signature: close the dialog, create a new email, paste your HTML signature there, select all, copy, open the signature dialog again and paste it into the signature field. This preserves the HTML formatting.",
                  },
                  {
                    step: "Set defaults",
                    detail: "At the top right of the Signatures dialog, choose which email account and when to apply each signature (new messages, replies/forwards).",
                  },
                  {
                    step: "Test in Outlook itself",
                    detail: "Compose a new email and check how it looks. Send it to a Gmail account too — your recipients may use Gmail and you want to see it from their perspective.",
                  },
                ].map(({ step, detail }, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">{step}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Outlook on the web (outlook.com / Office 365)
              </h3>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Open Settings",
                    detail: "Click the gear icon in the top right, then click \"View all Outlook settings\" at the bottom of the panel.",
                  },
                  {
                    step: "Navigate to signatures",
                    detail: "Go to Mail → Compose and reply → Email signature.",
                  },
                  {
                    step: "Add your signature",
                    detail: "Paste your signature into the editor. Outlook on the web has a slightly better HTML editor than the desktop app — it handles some CSS properties that the desktop version ignores.",
                  },
                  {
                    step: "Save",
                    detail: "Click Save. Set it as default for new emails and/or replies.",
                  },
                ].map(({ step, detail }, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">{step}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-amber-800 mb-2">
                  Outlook rendering quirks to know
                </p>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>No CSS flexbox or grid — use HTML tables for layout.</li>
                  <li>No background-image on table cells.</li>
                  <li>Images need explicit width/height attributes in the HTML tag, not just CSS.</li>
                  <li>Outlook may add spacing between table rows — use cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;.</li>
                  <li>Dark mode in Outlook can invert colors not declared with explicit background-color.</li>
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed">
                NeatStamp generates{" "}
                <Link href="/email-signature-outlook-compatible" className="text-blue-600 hover:underline">
                  Outlook-compatible signatures
                </Link>{" "}
                automatically — the code uses table-based layout and inline styles that
                work reliably in every Outlook version. For more troubleshooting, the{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook signature guide
                </Link>{" "}
                and the{" "}
                <Link href="/email-signature-outlook-365" className="text-blue-600 hover:underline">
                  Outlook 365 guide
                </Link>{" "}
                cover the differences between versions.
              </p>
            </section>

            {/* Section 5 */}
            <section id="apple-mail" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How to create a signature in Apple Mail
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Apple Mail handles HTML signatures differently from Gmail and Outlook.
                The built-in signature editor only supports plain text. To get an
                HTML signature into Apple Mail, you need to replace the signature file
                directly on your Mac.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The simple method (plain text)
              </h3>
              <ol className="space-y-4 mb-6">
                {[
                  "Open Mail → Preferences (or Settings) → Signatures.",
                  "Select your email account on the left.",
                  "Click the + button to create a new signature.",
                  "Give it a name, then type your signature in the text box.",
                  "Drag the signature to your email account if it doesn't appear there.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{step}</p>
                  </li>
                ))}
              </ol>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The HTML method (for formatted signatures)
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Apple Mail stores signatures as .mailsignature files. You can replace the
                contents of these files with your HTML signature. Here&rsquo;s how:
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: "Create a placeholder signature",
                    detail: "Follow the simple method above to create a signature called something like \"My HTML Sig.\" This creates the .mailsignature file on disk.",
                  },
                  {
                    step: "Quit Mail",
                    detail: "Mail must be closed before you edit the file. Fully quit it (Cmd+Q).",
                  },
                  {
                    step: "Find the signature file",
                    detail: "In Finder, press Cmd+Shift+G and go to: ~/Library/Mail/V10/MailData/Signatures/ (the V number may differ — V9, V10, etc. depending on your macOS version).",
                  },
                  {
                    step: "Open the .mailsignature file",
                    detail: "Find the file with the most recent modification date — that's your new signature. Open it in a text editor (TextEdit, VS Code, etc.).",
                  },
                  {
                    step: "Replace the HTML",
                    detail: "The file has a header section and a body section. Replace the body content between the <body> tags with your HTML signature from NeatStamp.",
                  },
                  {
                    step: "Lock the file",
                    detail: "Right-click the file → Get Info → check the Locked checkbox. This prevents Mail from overwriting your changes when it syncs.",
                  },
                  {
                    step: "Reopen Mail",
                    detail: "Your signature should now appear with full HTML formatting.",
                  },
                ].map(({ step, detail }, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">{step}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-slate-600 leading-relaxed">
                For the full walkthrough with more specifics, the{" "}
                <Link href="/email-signature-apple-mail" className="text-blue-600 hover:underline">
                  Apple Mail signature guide
                </Link>{" "}
                covers every macOS version from Ventura onwards.
              </p>
            </section>

            {/* Section 6 */}
            <section id="mobile" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Setting up signatures on mobile
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Mobile email apps are more limited than their desktop counterparts when
                it comes to signature HTML. Here&rsquo;s what you can do on each platform.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Gmail on iPhone and Android
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Gmail mobile has a separate signature setting from Gmail on desktop. They
                don&rsquo;t sync automatically.
              </p>
              <ol className="space-y-3 mb-6 text-sm text-slate-600">
                {[
                  "Open the Gmail app → tap your profile picture → Manage your Google Account.",
                  "Tap the three lines (hamburger menu) → Settings.",
                  "Select your account → Mobile Signature.",
                  "Type your signature. Gmail mobile only supports plain text here — no HTML.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-blue-600">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Outlook mobile (iOS and Android)
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Outlook mobile supports a richer signature than Gmail mobile but is still
                more limited than the desktop app.
              </p>
              <ol className="space-y-3 mb-6 text-sm text-slate-600">
                {[
                  "Open Outlook → tap your profile picture → Settings (gear icon).",
                  "Scroll down to Mail → Signature.",
                  "Toggle \"Use signature\" on.",
                  "Edit the signature field. Outlook mobile supports basic formatting (bold, italic, links) but not complex HTML.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-blue-600">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Apple Mail on iPhone
              </h3>
              <ol className="space-y-3 mb-6 text-sm text-slate-600">
                {[
                  "Open Settings → Mail → Signature.",
                  "Choose \"Per Account\" if you want different signatures per email account, or \"All Accounts\" for one universal signature.",
                  "Tap the account and type your signature. Plain text only on iOS.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-blue-600">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  The mobile limitation reality
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Most mobile email apps don&rsquo;t support HTML signatures natively. The
                  workaround most professionals use: set up the full HTML signature on
                  desktop, and use a minimal plain-text signature on mobile. Your
                  desktop signature gets applied when you send from your computer, which
                  covers most important emails. The{" "}
                  <Link href="/email-signature-mobile-friendly" className="text-blue-600 hover:underline">
                    mobile-friendly signature guide
                  </Link>{" "}
                  explains how to design your signature so it renders well when
                  recipients read it on their phones, regardless of where you sent it from.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Common mistakes to avoid
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                I&rsquo;ve seen the same mistakes repeat across thousands of signatures.
                Here are the ones that cause the most problems.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Making it too long",
                    body: "A signature longer than 5–6 lines starts to compete with the email itself. If someone gets a 3-sentence email with a 12-line signature, the signature is larger than the message. Keep it proportional.",
                  },
                  {
                    title: "Embedding images as base64",
                    body: "Some tools encode images as long base64 strings directly in the HTML. This massively inflates the email size, often triggers spam filters, and is blocked by many corporate email servers. Host your images externally instead.",
                  },
                  {
                    title: "Using a screenshot as your signature",
                    body: "A screenshot looks fine visually but has zero function. No links work. Text can't be selected or copied. Screen readers can't read it. It shows up as an attachment in some clients. Never do this.",
                  },
                  {
                    title: "Not testing in multiple email clients",
                    body: "What looks perfect in Gmail can be broken in Outlook. What works in Outlook desktop may look different in Outlook on the web. At minimum, test in Gmail on desktop, Outlook desktop (if relevant), and on one mobile device before rolling it out.",
                  },
                  {
                    title: "Forgetting to update it",
                    body: "Your signature is a live business card. When you change jobs, titles, or phone numbers, update it within the first week. Set a quarterly calendar reminder to review it. Stale signatures undermine credibility.",
                  },
                  {
                    title: "Using custom fonts without fallbacks",
                    body: "If you use font-family: 'Montserrat' with no fallback, Outlook renders your signature in Times New Roman. Always specify: font-family: 'Montserrat', Arial, sans-serif. Then at least the fallback is sensible.",
                  },
                  {
                    title: "Not linking your phone number",
                    body: "Plain text phone numbers force mobile users to manually copy and dial. Wrap it in a tel: link: <a href=\"tel:+12125551234\">+1 212 555 1234</a>. Every mobile user thanks you.",
                  },
                ].map((mistake) => (
                  <div
                    key={mistake.title}
                    className="border border-slate-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {mistake.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {mistake.body}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mt-6">
                For a complete rundown of what a well-designed signature looks like, the{" "}
                <Link href="/blog/email-signature-best-practices" className="text-blue-600 hover:underline">
                  email signature best practices guide
                </Link>{" "}
                goes deeper on fonts, colors, image sizing, and industry-specific rules.
              </p>
            </section>

            {/* Section 8 */}
            <section id="html-signatures" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Using HTML for better signatures
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Plain text signatures look plain. HTML signatures let you add your logo,
                use your brand colors, include clickable social icons, and generally look
                like you put some thought into how you present yourself.
              </p>

              <p className="text-slate-600 leading-relaxed mb-4">
                The key constraints for HTML email signatures:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  {
                    point: "Use table-based layout",
                    detail: "Not flexbox, not grid. Tables are the only layout system that works reliably across Outlook, Gmail, Apple Mail, and others.",
                  },
                  {
                    point: "All styles must be inline",
                    detail: "style=\"color: #333333; font-family: Arial, sans-serif\" on each element. No <style> blocks — Gmail removes them.",
                  },
                  {
                    point: "Set explicit image dimensions in HTML attributes",
                    detail: "<img width=\"150\" height=\"50\"> — not just in CSS. Outlook ignores CSS dimensions on images.",
                  },
                  {
                    point: "Host images externally",
                    detail: "Images should be at a public URL, not embedded as base64. Your company website, a CDN, or NeatStamp Pro's hosting all work.",
                  },
                  {
                    point: "Test before deploying",
                    detail: "Send your signature to accounts on Gmail, Outlook, and if possible an Apple Mail device. The same HTML can look completely different between clients.",
                  },
                ].map(({ point, detail }) => (
                  <li key={point} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">{point}:</strong> {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 leading-relaxed mb-4">
                The easiest way to handle all of this is to use the{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">
                  NeatStamp editor
                </Link>
                , which generates table-based, inline-styled, Outlook-tested HTML
                automatically. You fill in your details, pick a template from the{" "}
                <Link href="/templates" className="text-blue-600 hover:underline">
                  template library
                </Link>
                , and it produces code you can paste directly into Gmail, Outlook, or
                Apple Mail.
              </p>

              <p className="text-slate-600 leading-relaxed">
                If you want to go deeper on the HTML specifics, the{" "}
                <Link href="/html-email-signature" className="text-blue-600 hover:underline">
                  HTML email signature guide
                </Link>{" "}
                has annotated code examples for every element. The{" "}
                <Link href="/email-signature-design" className="text-blue-600 hover:underline">
                  design guide
                </Link>{" "}
                covers fonts, colors, and layout patterns in detail. And the{" "}
                <Link href="/blog/email-signature-size" className="text-blue-600 hover:underline">
                  signature size guide
                </Link>{" "}
                has the exact dimensions for logos, headshots, and banners.
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

            {/* Related articles */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/blog/email-signature-best-practices", label: "Email Signature Best Practices" },
                  { href: "/blog/email-signature-examples-2026", label: "Email Signature Examples 2026" },
                  { href: "/blog/gmail-signature-template-guide", label: "Gmail Signature Template Guide" },
                  { href: "/blog/outlook-signature-template-guide", label: "Outlook Signature Template Guide" },
                  { href: "/blog/email-signature-size", label: "Email Signature Size Guide" },
                  { href: "/professional-email-signature", label: "Professional Email Signature Guide" },
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
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Ready to build your signature?
              </h2>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                The NeatStamp editor generates clean HTML that works in Gmail, Outlook,
                and Apple Mail. Free, no account needed. Done in 60 seconds.
              </p>
              <Link
                href="/editor"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Create My Signature — Free
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
