import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Gmail Signature Not Working? 8 Fixes (2026)",
  description:
    "Gmail signature not saving, not showing on replies, or losing formatting? 8 actual causes with exact steps to fix your Gmail signature for good.",
  alternates: {
    canonical: "https://neatstamp.com/blog/gmail-signature-not-working",
  },
};

const faqs = [
  {
    q: "Why does my Gmail signature disappear after I save it?",
    a: "The most common causes are browser cache interference (especially after an update) or a browser extension conflicting with Gmail's rich text editor. Try opening Gmail in an incognito window and saving your signature there. If it saves correctly in incognito, a browser extension is the culprit — disable them one by one in a normal window to find it.",
  },
  {
    q: "Why is my Gmail signature not showing on replies?",
    a: "Gmail has a separate setting for this. In Gmail Settings → General → Signature, look for the checkbox that says 'Insert this signature before quoted text in replies and remove the \"--\" that precedes it.' If that's unchecked, your signature only appears in new messages, not replies.",
  },
  {
    q: "Why does my formatted signature show as plain text in Gmail?",
    a: "This happens when you paste using Ctrl+V instead of Ctrl+Shift+V — or the other way around, depending on where you're pasting. When pasting formatted HTML from NeatStamp into Gmail's signature editor, use Ctrl+V (or Cmd+V on Mac). If you use Ctrl+Shift+V, it pastes as plain text, stripping all formatting.",
  },
  {
    q: "My Gmail signature looks fine on desktop but broken on my phone — why?",
    a: "Gmail's mobile app (iOS and Android) has completely separate signature settings from Gmail on desktop. Mobile signatures are also limited to plain text only in the app — they don't support HTML. Desktop Gmail signatures (including HTML ones) appear when you send via desktop. Mobile app signatures are the plain text ones set in the app's settings.",
  },
  {
    q: "Can a Google Workspace admin prevent me from setting a Gmail signature?",
    a: "Yes. Google Workspace admins can prevent users from changing their signature, or they can set a company-wide signature that gets appended to every email. If you've tried everything and your signature keeps reverting or not applying, ask your IT admin whether signature management is locked in your Workspace admin console.",
  },
  {
    q: "Gmail is stripping the formatting from my signature — why?",
    a: "Gmail has a 10KB limit on signature HTML. If your signature HTML exceeds this, Gmail silently strips formatting and may fall back to plain text. The most common cause of oversized signatures is pasting a lot of inline CSS or using base64-encoded images in the HTML. Use externally hosted image URLs and keep the HTML clean.",
  },
];

export default function GmailSignatureNotWorkingPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          { name: "Blog", url: "https://neatstamp.com/blog" },
          {
            name: "Gmail Signature Not Working",
            url: "https://neatstamp.com/blog/gmail-signature-not-working",
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
            <span className="text-slate-700">Gmail Signature Not Working</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                  Troubleshooting
                </span>
                <span className="text-sm text-slate-400">14 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Gmail Signature Not Working? 8 Fixes That Actually Work
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Gmail signature problems come in a few flavors: it won&rsquo;t save, it doesn&rsquo;t appear
                on replies, the formatting gets stripped, or it looks completely different after
                you paste it. Each of these has a specific cause and a specific fix. I&rsquo;ve gone
                through all eight of the most common issues below — if your signature is
                misbehaving in Gmail, the answer is in here somewhere.
              </p>
              <p className="text-sm text-slate-500">
                By the NeatStamp Team &middot; Published March 2026 &middot; 14 min read
              </p>
            </header>

            {/* Quick Fix Checklist */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-bold text-amber-900 mb-4">
                Quick fix checklist
              </h2>
              <p className="text-sm text-amber-800 mb-4">
                Run through these in under 3 minutes. Most Gmail signature problems come down
                to one of these five things.
              </p>
              <ol className="space-y-3">
                {[
                  {
                    step: "Check the 'insert before quoted text' setting",
                    detail:
                      "Gmail Settings → General → Signature. Check the box: 'Insert this signature before quoted text in replies.' Without this, your signature only appears on new emails.",
                  },
                  {
                    step: "Try saving in incognito mode",
                    detail:
                      "Open an incognito window (Ctrl+Shift+N), sign in to Gmail, and try saving your signature. If it works, a browser extension is interfering in your regular window.",
                  },
                  {
                    step: "Check which paste method you're using",
                    detail:
                      "When pasting a formatted signature into Gmail: use Ctrl+V (or Cmd+V on Mac) to preserve formatting. Ctrl+Shift+V strips formatting to plain text.",
                  },
                  {
                    step: "Confirm you're editing the right account's signature",
                    detail:
                      "Gmail stores a separate signature per account. If you have multiple Google accounts or aliases, you may be editing the wrong one. Check Settings → General → Signature and look at the account dropdown at the top.",
                  },
                  {
                    step: "Check if a Google Workspace admin has locked signatures",
                    detail:
                      "If you're on a company Google Workspace account and settings keep reverting, your admin may have locked signature management. Ask your IT team.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-amber-900">{item.step}</p>
                      <p className="text-sm text-amber-700 mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Table of Contents */}
            <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                All 8 fixes — jump to any section
              </p>
              <ol className="space-y-2 text-sm">
                {[
                  ["#not-saving", "Fix 1: Signature not saving (browser cache / incognito test)"],
                  ["#not-on-replies", "Fix 2: Not showing on replies"],
                  ["#pasted-as-plain-text", "Fix 3: Pasted as plain text — formatting lost"],
                  ["#gmail-mobile-app", "Fix 4: Gmail mobile app (completely separate setting)"],
                  ["#formatting-stripped", "Fix 5: Gmail stripping formatting (10KB limit)"],
                  ["#multiple-accounts", "Fix 6: Multiple accounts confusion"],
                  ["#browser-extension", "Fix 7: Browser extension conflict"],
                  ["#workspace-admin", "Fix 8: Google Workspace admin restriction"],
                  ["#faq", "Frequently asked questions"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Fix 1 */}
            <section id="not-saving" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 1: Signature not saving — browser cache and the incognito test
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you edit your Gmail signature, click Save, and it either reverts to the old
                version or shows blank next time you open settings, browser cache is the most
                likely cause. Gmail&rsquo;s settings interface is a web app, and like any web app,
                it can get stuck showing a cached version that doesn&rsquo;t reflect your latest changes.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The incognito test
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Open an incognito/private window (Chrome: <strong>Ctrl+Shift+N</strong>, Firefox:
                <strong> Ctrl+Shift+P</strong>, Edge: <strong>Ctrl+Shift+N</strong>). Sign in to Gmail.
                Go to Settings → General → Signature, make your change, and save.
                Close the incognito window, then open a regular window and check if the change
                is reflected. If it saved correctly in incognito but not normally, the issue is
                either cache or a browser extension (see Fix 7).
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Hard refreshing Gmail
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sometimes a hard refresh is enough to clear the cache without going incognito.
                While Gmail is open, press <strong>Ctrl+Shift+R</strong> (Windows/Linux) or
                <strong> Cmd+Shift+R</strong> (Mac). This forces the browser to reload all
                assets from the server rather than from cache.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Clearing Gmail&rsquo;s application cache
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                For a more thorough cache clear in Chrome: open{" "}
                <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                  chrome://settings/clearBrowserData
                </code>,
                set the time range to &ldquo;Last 7 days&rdquo; (not All Time, unless you want to clear
                everything), check &ldquo;Cached images and files,&rdquo; and click &ldquo;Clear data.&rdquo; Then
                reopen Gmail and try again.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If none of this works, move on to Fix 7 (browser extension conflict) — that&rsquo;s
                the second most common cause of Gmail settings not saving.
              </p>
            </section>

            {/* Fix 2 */}
            <section id="not-on-replies" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 2: Signature not showing on replies
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is a setting you have to deliberately turn on in Gmail — it&rsquo;s off by default
                for replies. The signature shows in new composed emails but not when you hit
                Reply or Reply All. This catches almost everyone at some point.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Where to find the setting
              </h3>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open Gmail and click the <strong>gear icon</strong> (top right).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Click <strong>&ldquo;See all settings&rdquo;</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Stay on the <strong>General</strong> tab. Scroll down to the <strong>Signature</strong> section.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Under your signature editor, find the checkbox: <strong>&ldquo;Insert this signature before quoted text in replies and remove the &ldquo;--&rdquo; that precedes it.&rdquo;</strong> Check that box.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Scroll all the way to the bottom of the Settings page and click <strong>Save Changes</strong>.</span>
                </li>
              </ol>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> The &ldquo;Save Changes&rdquo; button is at the very bottom of the
                  entire Settings page, not next to the signature editor. Many people edit their
                  signature and close the tab without ever scrolling down to save. If you don&rsquo;t
                  click that button, no changes are saved.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Once this is set, open an existing email thread, hit Reply, and confirm your
                signature appears above the quoted text. The{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail signature setup guide
                </Link>{" "}
                has screenshots of this entire process if you want a visual reference.
              </p>
            </section>

            {/* Fix 3 */}
            <section id="pasted-as-plain-text" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 3: Signature pasted as plain text — formatting stripped
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you&rsquo;re copying your signature from the NeatStamp editor or another source
                and it looks perfect in the preview but plain and unformatted after you paste
                it into Gmail, the paste method is almost certainly the issue.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail&rsquo;s signature editor supports two types of paste:
              </p>
              <div className="bg-slate-50 rounded-xl p-5 mb-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">Ctrl+V (or Cmd+V on Mac)</p>
                  <p className="text-sm text-slate-600">
                    Pastes with formatting preserved — bold text stays bold, colors stay, layout is
                    maintained. <strong>This is the one you want.</strong>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">Ctrl+Shift+V (or Cmd+Shift+V on Mac)</p>
                  <p className="text-sm text-slate-600">
                    Pastes as plain text — all formatting is stripped. Text comes in unstyled.
                    This is the &ldquo;paste without formatting&rdquo; shortcut — the opposite of what you
                    want for signatures.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Also watch out for this: if you copied your signature from a rendered web page
                or PDF, the formatting metadata may not survive the clipboard transfer even with
                Ctrl+V. Always copy from a source that has rich clipboard data — the NeatStamp
                editor&rsquo;s &ldquo;Copy for Gmail&rdquo; button is specifically designed to put the right
                clipboard data for Gmail&rsquo;s editor.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                If you only see the HTML source code instead of the formatted signature
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                This means you&rsquo;ve pasted raw HTML (the code) rather than the rendered version.
                Gmail&rsquo;s signature editor is a visual editor, not a code editor — it doesn&rsquo;t accept
                HTML tags directly. You&rsquo;d need to render the HTML first (open it in a browser,
                then copy from there) or use NeatStamp&rsquo;s one-click Gmail install.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">
                  NeatStamp editor
                </Link>{" "}
                has a dedicated &ldquo;Install in Gmail&rdquo; button that handles the rendering and paste
                steps for you automatically.
              </p>
            </section>

            {/* Fix 4 */}
            <section id="gmail-mobile-app" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 4: Gmail mobile app — it&rsquo;s a completely separate signature
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This trips up almost everyone who emails from both a computer and a phone. Your
                Gmail signature set in desktop Gmail (via Settings in the browser) is
                completely separate from the signature set in the Gmail app on your phone. They
                don&rsquo;t sync. Changing one has zero effect on the other.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Additionally: Gmail mobile signatures are plain text only. The mobile app
                doesn&rsquo;t support HTML signatures. So even if you copy your beautifully formatted
                desktop signature and paste it into the mobile app settings, it will appear as
                plain text.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Setting your signature on the Gmail mobile app (iOS)
              </h3>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open the Gmail app. Tap the <strong>hamburger menu</strong> (three lines, top left).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Scroll to the bottom and tap <strong>Settings</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Tap the email account you want to set the signature for.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Tap <strong>Mobile Signature</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Type your plain text signature and tap the checkmark to save.</span>
                </li>
              </ol>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Setting it on Android
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Same path: open Gmail → menu (three lines) → Settings → your account →
                <strong> Mobile Signature</strong>. The setting name and location are identical.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Since you can&rsquo;t use HTML on mobile, write a clean plain-text version: name,
                title, company, phone, and maybe your website URL. Keep it to 4–5 lines. If
                it&rsquo;s any longer, it starts to feel heavy in the context of a quick mobile reply.
              </p>
            </section>

            {/* Fix 5 */}
            <section id="formatting-stripped" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 5: Gmail stripping formatting — the 10KB signature limit
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail enforces a 10KB limit on the HTML content of a signature. If your
                signature HTML exceeds this limit, Gmail will silently truncate it. You may see
                the formatting suddenly stop partway through, or the signature may revert to
                plain text entirely. There&rsquo;s no warning — it just stops working.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                How signatures end up over 10KB:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Base64-encoded images:</strong> A 15KB logo becomes 20KB+ of base64 text,
                  immediately blowing the limit.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Excessive inline CSS:</strong> Repeating long{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">style</code> attributes on
                  every element (e.g., declaring the same font-family and color on 20 different tags)
                  adds up fast.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Pasting from Word or another rich source:</strong> Microsoft Word adds enormous
                  amounts of proprietary markup when you copy from it. Pasting Word content into
                  Gmail&rsquo;s editor can inject invisible XML tags that balloon the source size.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Long legal disclaimers:</strong> If your company adds a legal disclaimer inline
                  in the signature (rather than at the server level), the text itself can add several
                  KB.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                To check: right-click on your signature in the Gmail compose window, choose
                &ldquo;Inspect&rdquo;, and look at the HTML source. Alternatively, paste your signature HTML
                into a text editor and check the file size (should be well under 10KB as a .txt
                file).
              </p>
              <p className="text-slate-600 leading-relaxed">
                NeatStamp signatures are optimized to stay well under this limit. If you&rsquo;re
                building your own HTML, the{" "}
                <Link href="/blog/email-signature-size" className="text-blue-600 hover:underline">
                  email signature size guide
                </Link>{" "}
                has detailed guidance on keeping HTML lean.
              </p>
            </section>

            {/* Fix 6 */}
            <section id="multiple-accounts" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 6: Multiple accounts — editing the wrong account&rsquo;s signature
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have multiple Google accounts signed in (or multiple email aliases on the
                same account), Gmail stores a separate signature for each one. It&rsquo;s very easy to
                open Settings and edit the signature for the wrong account without noticing.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Multiple Google accounts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Check which account you&rsquo;re currently viewing. In Gmail, look at the top-right
                corner — your profile picture or initial shows the active account. If you have
                multiple accounts, each has its own Settings. To access Settings for a specific
                account, make sure that account is active (click the profile picture and switch)
                before opening the gear icon.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Multiple aliases on one account
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail supports sending from email aliases (a different From address than your
                main Gmail address). If you have aliases set up, Gmail lets you assign a
                different signature to each alias. In Gmail Settings → General → Signature,
                there&rsquo;s a dropdown at the top of the signature section showing which address the
                signature is assigned to. If this is set to one alias but you&rsquo;re sending from
                another, you&rsquo;ll get the wrong signature (or no signature).
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fix: create a signature for each alias you send from, or set a default that
                applies to all. The alias signature dropdown says &ldquo;(No signature)&rdquo; by default
                for any aliases you haven&rsquo;t configured.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail email signature guide
                </Link>{" "}
                has a section on alias signatures with screenshots showing exactly where to find
                and configure each one.
              </p>
            </section>

            {/* Fix 7 */}
            <section id="browser-extension" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 7: Browser extension conflict
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Several types of browser extensions are known to conflict with Gmail&rsquo;s signature
                editor: ad blockers, privacy extensions, clipboard managers, grammar checkers
                (like Grammarly), and email productivity tools (like Boomerang, Mixmax, or
                Streak). They can prevent signatures from saving, strip formatting on paste, or
                interfere with how Gmail renders the signature in compose windows.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to isolate the problem
              </h3>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open an incognito window (<strong>Ctrl+Shift+N</strong>). Extensions are disabled by default in incognito.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Sign into Gmail in that incognito window and test your signature. If it works perfectly here, an extension is the cause.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>In your regular Chrome window, go to <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">chrome://extensions</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Toggle off all extensions, then reload Gmail and test again.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Re-enable extensions one at a time, testing Gmail each time, until the problem reappears. The last extension you enabled is the conflict.</span>
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed mb-4">
                Common culprits: Grammarly modifies text fields aggressively and sometimes
                conflicts with Gmail&rsquo;s rich text editor. uBlock Origin or similar ad blockers can
                block scripts that Gmail uses to manage signatures. Email extensions like Streak
                can intercept signature injection.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Once you&rsquo;ve identified the extension, check if it has a &ldquo;disable on this site&rdquo;
                option. Most extensions let you right-click their icon and choose to disable on
                specific sites — disable it for mail.google.com only.
              </p>
            </section>

            {/* Fix 8 */}
            <section id="workspace-admin" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Fix 8: Google Workspace admin restriction
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you&rsquo;re on a company Google Workspace (formerly G Suite) account, your admin
                may have restricted or locked email signature management. This can take two
                forms:
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Form 1: Signature settings locked.</strong> The admin has used Google Workspace
                Admin Console → Apps → Google Workspace → Gmail → User Settings to restrict
                users from modifying their signatures. If this is the case, the signature field
                in your Gmail Settings may be greyed out or missing entirely.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Form 2: Append-only signatures.</strong> Google Workspace admins can set up
                company-wide footer signatures that get automatically appended to every outgoing
                email at the server level. You may not see this in your own sent mail (it&rsquo;s added
                after the email leaves your client), but recipients see it. If you&rsquo;re also setting
                your own signature, your recipients may end up seeing two signatures.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                What to do
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you suspect an admin restriction, talk to whoever manages your company&rsquo;s
                Google Workspace. Ask specifically:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  &ldquo;Is email signature editing restricted for my account?&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  &ldquo;Is there a company-wide footer signature being appended to outgoing emails?&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  &ldquo;Can my user account be granted permission to set my own signature?&rdquo;
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                If you need a signature template that your IT admin can deploy company-wide, the{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">NeatStamp editor</Link> can
                generate the HTML. Pair that with the{" "}
                <Link href="/email-signature-apple-mail" className="text-blue-600 hover:underline">
                  Apple Mail signature guide
                </Link>{" "}
                if some of your team uses Macs.
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
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/email-signature-keeps-disappearing",
                    title: "Email Signature Keeps Disappearing",
                    desc: "Signature vanishing across platforms — all causes and fixes.",
                  },
                  {
                    href: "/blog/email-signature-size",
                    title: "Email Signature Size Guide",
                    desc: "Understanding Gmail's 10KB limit and how to stay within it.",
                  },
                  {
                    href: "/email-signature-gmail",
                    title: "Gmail Signature Setup Guide",
                    desc: "Complete walkthrough for setting up Gmail signatures.",
                  },
                  {
                    href: "/email-signature-apple-mail",
                    title: "Apple Mail Signature Setup",
                    desc: "Getting your signature right in Apple Mail on Mac and iOS.",
                  },
                ].map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-slate-900 mb-1">{article.title}</p>
                    <p className="text-xs text-slate-500">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Need a Gmail-ready signature?
              </h2>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                NeatStamp generates signatures that paste cleanly into Gmail with one click —
                no formatting issues, no broken images.
              </p>
              <Link
                href="/editor"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Build My Gmail Signature — Free
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
