import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature Keeps Disappearing? Here's How to Stop It | NeatStamp",
  description:
    "Your email signature keeps disappearing, changing, or deleting itself? I've tracked down every cause — Outlook roaming signatures, Gmail cache, Apple Mail font settings, and more. Here's how to stop it for good.",
  alternates: {
    canonical:
      "https://neatstamp.com/blog/email-signature-keeps-disappearing",
  },
};

const faqs = [
  {
    q: "Why does my email signature keep disappearing after I set it?",
    a: "The most common cause depends on your email client. In Outlook, it's usually Microsoft 365 roaming signatures overwriting your local setting, or a Group Policy applied by IT. In Gmail, it's typically browser cache or a browser extension interfering. In Apple Mail, the 'always match my default message font' setting is notorious for stripping formatted signatures after macOS updates.",
  },
  {
    q: "My Outlook signature disappears after every restart — what's causing it?",
    a: "If your signature disappears every time you restart Outlook, roaming signatures are almost certainly the cause. Microsoft 365 roaming signatures sync from the cloud and overwrite local settings on each sync. The fix is to set your correct signature in Outlook Web App (outlook.office.com), where roaming signatures pull from, instead of in the desktop client.",
  },
  {
    q: "My email signature reverts after a Windows update — is this normal?",
    a: "Yes, unfortunately. Windows updates that modify the Microsoft Office stack sometimes reset local Outlook settings, including signatures. The signature files themselves (in %AppData%\\Microsoft\\Signatures) usually survive, but the 'default signature' setting in Outlook's options can be reset to None. After major Windows or Office updates, check File → Options → Mail → Signatures to make sure your default is still set.",
  },
  {
    q: "Why does my Apple Mail signature change to a different font?",
    a: "Apple Mail has a setting that overrides your signature font to match your default message font. In Mail → Preferences → Signatures (older macOS) or Mail → Settings → Signatures (macOS Sonoma and later), uncheck 'Always match my default message font.' This setting is the top cause of formatted signatures getting their fonts changed or reset in Apple Mail.",
  },
  {
    q: "Can antivirus software delete my email signature?",
    a: "Not delete it directly, but some antivirus and endpoint security tools scan and modify outgoing emails to strip content they consider risky — including HTML, external image links, or JavaScript. If your email signature contains external image URLs and your antivirus is stripping those, the signature will arrive at recipients with broken or missing images. Check your security software's email scanning settings.",
  },
  {
    q: "My signature disappears only on a specific computer — why?",
    a: "If the signature works on one computer but not another, the issue is almost always local to that machine: a different Outlook profile, local signature files that haven't been set, or a different user profile on that computer that doesn't have the signature configured. Each Windows user profile and each Outlook profile stores signatures independently.",
  },
];

export default function EmailSignatureKeepsDisappearingPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          { name: "Blog", url: "https://neatstamp.com/blog" },
          {
            name: "Email Signature Keeps Disappearing",
            url: "https://neatstamp.com/blog/email-signature-keeps-disappearing",
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
            <span className="text-slate-700">Email Signature Keeps Disappearing</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                  Troubleshooting
                </span>
                <span className="text-sm text-slate-400">17 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Email Signature Keeps Disappearing? Here&rsquo;s How to Stop It
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                I know how maddening this is. You set your signature, it works for a day or a
                week, and then it&rsquo;s just gone again. Or it keeps changing to something different.
                Or it disappears only on certain devices. This problem has specific causes for
                each email platform — and once you know the cause, the fix is usually
                straightforward. I&rsquo;ve broken it down by platform below so you can skip
                straight to what&rsquo;s relevant.
              </p>
              <p className="text-sm text-slate-500">
                By the NeatStamp Team &middot; Published March 2026 &middot; 17 min read
              </p>
            </header>

            {/* Quick Fix Checklist */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-bold text-amber-900 mb-4">
                Quick fix checklist — find your platform
              </h2>
              <ol className="space-y-3">
                {[
                  {
                    step: "Outlook: Check for roaming signatures",
                    detail:
                      "Sign into Outlook Web App at outlook.office.com → Settings → Accounts → Signatures. Whatever is set here overrides your desktop Outlook setting. Set your correct signature here.",
                  },
                  {
                    step: "Outlook: Re-set the default after updates",
                    detail:
                      "After Windows or Office updates, go to File → Options → Mail → Signatures and confirm your signature is still selected under 'New messages' and 'Replies/forwards'.",
                  },
                  {
                    step: "Gmail: Save in incognito mode",
                    detail:
                      "Open an incognito window, sign into Gmail, set your signature, and save. A browser extension is likely overwriting it in your regular window.",
                  },
                  {
                    step: "Apple Mail: Uncheck 'always match my default message font'",
                    detail:
                      "Mail → Settings → Signatures → uncheck that setting. This is the top cause of formatted Apple Mail signatures being reset.",
                  },
                  {
                    step: "Any platform: Check if you're on a shared computer or multiple profiles",
                    detail:
                      "Each Windows user profile and each Outlook profile stores signatures separately. If multiple people share the computer, signatures don't carry between logins.",
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
                Jump to your platform
              </p>
              <ol className="space-y-2 text-sm">
                {[
                  ["#outlook-roaming", "Outlook: Roaming signatures overwriting your setting"],
                  ["#outlook-profile-corruption", "Outlook: Profile corruption"],
                  ["#outlook-windows-update", "Outlook: Windows / Office update resets settings"],
                  ["#outlook-group-policy", "Outlook: Group Policy override from IT"],
                  ["#gmail-browser-cache", "Gmail: Browser cache clearing the signature"],
                  ["#gmail-device-sync", "Gmail: Multiple device / account confusion"],
                  ["#apple-mail-font-setting", "Apple Mail: 'Always match default message font' setting"],
                  ["#apple-mail-macos-update", "Apple Mail: macOS update reset"],
                  ["#antivirus", "General: Antivirus and security software interference"],
                  ["#shared-computer", "General: Shared computer profiles"],
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

            {/* OUTLOOK SECTION HEADER */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Outlook
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Outlook: Roaming Signatures */}
            <section id="outlook-roaming" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Outlook: Roaming signatures overwriting your local setting
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If your Outlook signature disappears or reverts — especially after a few hours
                or after restarting Outlook — roaming signatures are almost certainly the cause.
                This is a Microsoft 365 feature introduced to sync signatures across devices,
                and it works by pulling the signature from Outlook Web App (OWA) and
                overwriting whatever you&rsquo;ve set locally in the desktop client.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The fix isn&rsquo;t complicated once you know about it: <strong>set your signature in
                OWA, not in desktop Outlook.</strong> Here&rsquo;s how:
              </p>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open a browser and go to{" "}
                    <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">outlook.office.com</code>.
                    Sign in with your work Microsoft 365 account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Click the <strong>gear icon</strong> (Settings, top right).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Go to <strong>Accounts → Signatures</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Create or update your signature here. Set it as the default for new messages and replies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Click <strong>Save</strong>, then reopen desktop Outlook. Within a few minutes, your desktop Outlook signature will update to match what you set in OWA.</span>
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you want to disable roaming signatures entirely (and go back to managing the
                desktop signature locally), this requires admin access via PowerShell. An IT
                admin can run:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 mb-4">
                <code className="text-green-400 text-xs font-mono break-all">
                  Set-MailboxMessageConfiguration -Identity user@company.com -IsReplyAllTheDefaultResponse $false
                </code>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Ask your IT admin for help with this. The{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook signature guide
                </Link>{" "}
                has the full context on roaming signatures and Microsoft 365 settings.
              </p>
            </section>

            {/* Outlook: Profile Corruption */}
            <section id="outlook-profile-corruption" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Outlook: Profile corruption
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A corrupted Outlook profile doesn&rsquo;t usually cause Outlook to stop working
                entirely — it causes weird, intermittent problems. Signatures that appear and
                disappear randomly, settings that don&rsquo;t save, or a signature that works in
                some compose windows but not others are all symptoms of profile corruption.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Profile corruption can be caused by: abrupt Outlook shutdowns (power outage,
                force-quitting), a failed Windows update that modified registry entries mid-write,
                or disk errors on the drive where your profile data lives.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to diagnose
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Run the Office configuration diagnostic. Open a Run dialog (<strong>Win+R</strong>), type:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 mb-6">
                <code className="text-green-400 text-xs font-mono">
                  outlook.exe /resetnavpane
                </code>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                This resets the navigation pane without touching your email data or signatures.
                If this fixes the issue, it was a profile configuration problem. If not, the
                more thorough fix is creating a new Outlook profile (covered in our{" "}
                <Link href="/blog/email-signature-not-showing-outlook" className="text-blue-600 hover:underline">
                  Outlook signature not showing guide
                </Link>{" "}
                — Fix 10).
              </p>
            </section>

            {/* Outlook: Windows Update */}
            <section id="outlook-windows-update" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Outlook: Windows / Office update resets signature defaults
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I&rsquo;ve seen this happen repeatedly: a major cumulative Windows update or an Office
                channel update resets the &ldquo;default signature&rdquo; setting to (none), even though the
                signature files in{" "}
                <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">%AppData%\Microsoft\Signatures</code>{" "}
                are still intact.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The signature isn&rsquo;t deleted — it&rsquo;s just no longer set as the default. After any
                significant Windows or Office update, it takes 30 seconds to check:
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Go to <strong>File → Options → Mail → Signatures</strong>. Check that the dropdowns
                under &ldquo;Choose default signature&rdquo; still show your signature for New messages and
                Replies/forwards. If they&rsquo;ve been reset to (none), select your signature again
                and click OK.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Set a recurring reminder to check your signature defaults after
                  Windows Update Tuesdays (the second Tuesday of each month, when Microsoft typically
                  releases patches). It takes 30 seconds and saves the embarrassment of sending
                  signature-free emails for days without noticing.
                </p>
              </div>
            </section>

            {/* Outlook: Group Policy */}
            <section id="outlook-group-policy" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Outlook: Group Policy override from IT
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In managed enterprise environments, IT departments can deploy Group Policy
                Objects (GPOs) that control Outlook behavior, including signatures. A GPO can
                either prevent you from setting a signature at all (the field is greyed out) or
                can periodically push a required signature that overwrites whatever you&rsquo;ve set.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Signs of a GPO override:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  Your signature reverts at a predictable interval — e.g., every time you log in
                  to your Windows account, or every morning.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  The signature field in Outlook Options is greyed out or has a lock icon.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  The revert happens only on your work PC but not on a personal device with
                  your work email.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                You can&rsquo;t override a GPO yourself — that&rsquo;s the point of GPOs. Contact your IT
                department and ask whether there&rsquo;s a signature management policy in place and
                whether you can be excluded from it or whether they can update the policy to
                include your preferred signature.
              </p>
            </section>

            {/* GMAIL SECTION HEADER */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Gmail
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Gmail: Browser Cache */}
            <section id="gmail-browser-cache" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Gmail: Browser cache wiping your signature
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If your Gmail signature saves fine but then disappears after you clear your
                browser cache, this is the cause. Gmail stores certain user preferences — including
                signatures — both server-side and in local browser storage. Clearing browser data
                (cache + cookies + local storage) can cause Gmail to temporarily lose the locally
                cached version until it re-syncs from the server.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The good news: this is usually a short-term problem. If you save your signature
                and it appears to work but then disappears after closing the browser, try this:
              </p>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open Gmail and go to Settings → General → Signature.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Make a small edit to your signature (add a space, then remove it) to force a save.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Scroll all the way to the bottom of the Settings page and click <strong>Save Changes</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Close the browser completely, reopen, and go back to Gmail Settings to verify it persisted.</span>
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed">
                If the signature consistently disappears after browser cache clears, check for
                a browser extension that may be clearing cache automatically (some privacy
                extensions do this on close). For full Gmail signature troubleshooting, see the{" "}
                <Link href="/blog/gmail-signature-not-working" className="text-blue-600 hover:underline">
                  Gmail signature not working guide
                </Link>
                .
              </p>
            </section>

            {/* Gmail: Device Sync */}
            <section id="gmail-device-sync" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Gmail: Multiple devices and account switching
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail&rsquo;s desktop signature (set via Settings in a browser) and the Gmail mobile
                app signature (set in the app&rsquo;s own settings) are completely independent. If
                you set your signature in Gmail on your laptop and then check your email from
                your phone, you&rsquo;re looking at the mobile app signature — which may be blank or
                different.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The other common confusion is account switching. If you use Gmail with multiple
                Google accounts (personal and work, for example), each account has its own
                signature settings. Opening Gmail on a new device and signing into the wrong
                account means you see that account&rsquo;s signature (or none at all).
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                To make sure all devices show your correct signature:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Set your desktop signature in Gmail Settings → General → Signature (this applies
                  to Gmail on any browser on any computer when logged into that account).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Set your mobile signature separately in the Gmail app: menu → Settings → your
                  account → Mobile Signature. Mobile signatures are plain text only.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  If you have multiple accounts, do this separately for each account.
                </li>
              </ul>
            </section>

            {/* APPLE MAIL SECTION HEADER */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Apple Mail
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Apple Mail: Font Setting */}
            <section id="apple-mail-font-setting" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Apple Mail: &ldquo;Always match my default message font&rdquo; — the main offender
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is the single most reported Apple Mail signature problem and it&rsquo;s been
                around for years. There&rsquo;s a setting in Apple Mail that, when checked, forces
                your signature to use the same font as your default message compose font.
                The result: any custom font or formatting in your signature gets overridden.
                Your carefully styled signature starts rendering in whatever font you use to
                write emails.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to turn it off
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>On macOS Sonoma and later (Mail 17+):</strong>
              </p>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open Mail. Click <strong>Mail</strong> in the menu bar, then <strong>Settings</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Click the <strong>Signatures</strong> tab.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>At the bottom, <strong>uncheck</strong> &ldquo;Always match my default message font.&rdquo;</span>
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>On macOS Ventura and earlier (Mail Preferences):</strong>
              </p>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open Mail. Click <strong>Mail → Preferences</strong> (or Cmd+Comma).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Click the <strong>Signatures</strong> tab.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Uncheck <strong>&ldquo;Always match my default message font.&rdquo;</strong></span>
                </li>
              </ol>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  <strong>Also check this:</strong> When you add a signature to Apple Mail, make
                  sure you&rsquo;re adding it to the correct account. In the Signatures panel, the
                  left column shows your accounts. You need to drag your signature from the center
                  column (all signatures) to the specific account in the left column. Only then
                  does it appear for that account&rsquo;s emails.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                For complete Apple Mail signature setup including how to add HTML signatures,
                see the{" "}
                <Link href="/email-signature-apple-mail" className="text-blue-600 hover:underline">
                  Apple Mail email signature guide
                </Link>
                .
              </p>
            </section>

            {/* Apple Mail: macOS Update Reset */}
            <section id="apple-mail-macos-update" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Apple Mail: macOS update reset
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Major macOS updates (e.g., a jump from macOS Sonoma to macOS Sequoia) can
                reset Apple Mail preferences, including signature settings. The signature files
                themselves usually survive in the Library folder, but the assignment of which
                signature belongs to which account, and the &ldquo;always match font&rdquo; preference,
                can get reset to defaults.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                After any macOS update where Mail behaves differently:
              </p>
              <ol className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Open Mail → Settings (or Preferences) → Signatures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Check that your signature still appears in the center column. If not, click the <strong>+</strong> button to recreate it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Drag the signature to the account(s) in the left column to reassign it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Uncheck &ldquo;Always match my default message font.&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>Close Settings and compose a test email to verify the signature appears.</span>
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed">
                Apple Mail signature files live at{" "}
                <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                  ~/Library/Mail/V10/MailData/Signatures/
                </code>{" "}
                (the V-number may differ based on your Mail version). Back up this folder before
                major macOS upgrades if you have custom HTML signatures you want to preserve.
              </p>
            </section>

            {/* GENERAL SECTION HEADER */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                General
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Antivirus */}
            <section id="antivirus" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                General: Antivirus and security software interference
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Enterprise endpoint security software — Norton, Bitdefender, Sophos, CrowdStrike,
                and others — sometimes scans outgoing emails and modifies their content. In
                most cases this is fine, but some configurations strip HTML content or external
                image links from email signatures as a security measure.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The signs: your signature looks correct in the compose window and in your Sent
                folder, but recipients see a stripped version with no formatting or no images.
                Or your signature files on disk keep being flagged or quarantined.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to diagnose
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Send a test email to your personal Gmail address from your work email. View the
                source of the email (in Gmail: three dots → Show original). Compare the
                signature HTML in the source to what you have in your signature settings. If
                content has been stripped, security software is the likely cause.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Temporarily disable email scanning in your security software (if you have
                permission to do so) and send another test. If the signature arrives intact,
                email scanning is the issue. Contact your IT security team to whitelist your
                email signature content or adjust the scanning rules.
              </p>
            </section>

            {/* Shared Computer */}
            <section id="shared-computer" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                General: Shared computers and multiple Windows user profiles
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you work from multiple computers — an office PC, a laptop, a hot desk — or
                if you share a computer with others, you may encounter a problem that looks like
                a disappearing signature but is actually a different Windows user profile that
                doesn&rsquo;t have the signature configured.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Each Windows user account stores Outlook data and signatures independently.
                Signatures in{" "}
                <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">%AppData%\Microsoft\Signatures</code>{" "}
                on one user account are not visible to other user accounts on the same machine.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The fix is to set up the signature on each computer and each user account where
                you email from. If that&rsquo;s a lot of machines, consider setting it up in Outlook
                Web App (OWA) instead — since roaming signatures sync to all devices when logged
                in with your Microsoft 365 account, you only need to set it once there.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For the quickest multi-device setup, the{" "}
                <Link href="/editor" className="text-blue-600 hover:underline">
                  NeatStamp editor
                </Link>{" "}
                saves your signature to your account. Sign in from any computer, copy the HTML,
                and install it in 30 seconds. The{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook setup guide
                </Link>{" "}
                and{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail setup guide
                </Link>{" "}
                both have step-by-step instructions for installing on a new machine quickly.
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
                    href: "/blog/email-signature-not-showing-outlook",
                    title: "Email Signature Not Showing in Outlook",
                    desc: "All 10 causes for Outlook signatures not appearing, with exact fixes.",
                  },
                  {
                    href: "/blog/gmail-signature-not-working",
                    title: "Gmail Signature Not Working",
                    desc: "8 causes for Gmail signature problems, including saving and formatting issues.",
                  },
                  {
                    href: "/blog/outlook-signature-not-working",
                    title: "Outlook Signature Not Working",
                    desc: "Broader Outlook troubleshooting guide.",
                  },
                  {
                    href: "/email-signature-apple-mail",
                    title: "Apple Mail Signature Setup",
                    desc: "Complete Apple Mail signature guide for Mac and iOS.",
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
                Want a signature that stays where you put it?
              </h2>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                Build your signature with NeatStamp and install it in Outlook, Gmail, or Apple
                Mail in under two minutes — with clean HTML that every email client handles
                correctly.
              </p>
              <Link
                href="/editor"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Build My Signature — Free
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
