import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Apple Mail — Full Guide",
  description:
    "Step-by-step instructions for adding an email signature in Apple Mail on Mac, iPhone, and iPad. Includes the HTML workaround and iOS limitations.",
  alternates: { canonical: "https://neatstamp.com/email-signature-apple-mail" },
};

const faqs = [
  {
    q: "Why does my HTML signature look broken in Apple Mail?",
    a: "Apple Mail on Mac supports HTML signatures, but only if you add them correctly. If you paste HTML code directly into the signature text box in Mail Preferences, it renders as raw code, not formatted HTML. The workaround is to create an HTML file, open it in Safari, select all, copy it, then paste into the Mail signature box. This copies the rendered HTML rather than the code. The full steps are in the Mac section below.",
  },
  {
    q: "Can I use an HTML signature on iPhone or iPad?",
    a: "Not via Settings → Mail → Signature — that only supports plain text. The workaround is to use Gmail or Outlook's mobile app instead of the native iOS Mail app, since those apps pull the HTML signature from their respective web settings. Alternatively, some people set up their HTML signature in iCloud Mail via a web browser, which then syncs. But the native iOS Mail app itself does not render HTML signatures.",
  },
  {
    q: "What does 'Always Match My Default Message Font' do to my signature?",
    a: "This is a setting in Apple Mail (Mail → Preferences → Fonts & Colors) that overrides the fonts in your signature with the font you've set for composing messages. If it's turned on and your compose font is something different from your signature font, your signature will look different from what you designed. Turn it off (go to Mail → Preferences → Fonts & Colors, and uncheck 'Use the same message font') to preserve your signature's original formatting.",
  },
  {
    q: "How do I set a different signature for different email accounts in Apple Mail?",
    a: "In Mail on Mac: Mail → Preferences → Signatures. On the left is your list of email accounts. Click an account to see its signatures. You can create multiple signatures per account and set a default. To use a specific signature for each account, select the account in the left column, then drag a signature from the middle column to 'Choose Signature → [account name]'.",
  },
  {
    q: "Does Apple Mail support images in email signatures?",
    a: "Yes, on Mac. Images in Apple Mail signatures are embedded directly in the email (as attachments), rather than hosted on a server. This means they always load, but they add to the file size of every email you send. For a typical 80×80px headshot, the overhead is small (20–60KB). For large banner images, it can be significant. On iOS, images in the plain-text signature area are not supported.",
  },
  {
    q: "My Apple Mail signature shows up as an attachment. How do I fix it?",
    a: "This happens because Apple Mail embeds images as attachments rather than inline. Some email clients on the receiving end show those embedded images as separate attachments. You can reduce this by hosting your images externally (on your own server or a CDN) and linking to them with an <img> src URL rather than embedding them directly. NeatStamp generates signatures with hosted image links, which avoids this issue.",
  },
  {
    q: "Does my Apple Mail signature sync across my Mac, iPhone, and iPad?",
    a: "Unfortunately, no — not for HTML signatures. Apple Mail signatures are stored locally on each device. If you add an HTML signature to Mail on your Mac, it doesn't automatically appear on your iPhone or iPad. You need to set up the signature separately on each device. On iOS, you're limited to plain text anyway, so many people maintain their HTML signature on Mac and use a simplified plain-text version on mobile.",
  },
];

export default function EmailSignatureAppleMailPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Apple Mail",
            url: "https://neatstamp.com/email-signature-apple-mail",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Apple Mail
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Apple Mail handles signatures differently on Mac vs. iPhone vs. iPad — and HTML
              signatures require a specific workaround. This guide covers all three devices
              with the exact steps.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build My Signature — Free
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
            <p className="mt-3 text-sm text-muted">No account needed. Get the HTML, then follow these steps.</p>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              The short version: what works where
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Before getting into the step-by-step, here's a quick summary of the situation
              across Apple's devices, because it's genuinely different on each platform.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-6">
              {[
                {
                  platform: "Mac (Mail app)",
                  support: "Full HTML support",
                  note: "HTML signatures work but require a specific workaround to install. Plain text works too, but HTML gives you logos, colors, and formatted layouts.",
                  color: "border-green-200 bg-green-50",
                  badge: "Full support",
                  badgeColor: "text-green-700 bg-green-100",
                },
                {
                  platform: "iPhone (Mail app)",
                  support: "Plain text only",
                  note: "The native iOS Mail app only supports plain text in Settings → Mail → Signature. No images, no formatting, no HTML.",
                  color: "border-yellow-200 bg-yellow-50",
                  badge: "Plain text only",
                  badgeColor: "text-yellow-700 bg-yellow-100",
                },
                {
                  platform: "iPad (Mail app)",
                  support: "Plain text only",
                  note: "Same limitation as iPhone. Settings → Mail → Signature supports plain text only.",
                  color: "border-yellow-200 bg-yellow-50",
                  badge: "Plain text only",
                  badgeColor: "text-yellow-700 bg-yellow-100",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl border p-4 ${item.color}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-sm">{item.platform}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-muted text-sm leading-relaxed">
              If you want an HTML signature on your iPhone or iPad, the solution is to use
              the Gmail or Outlook mobile app instead of the native Mail app. Both apps pull
              their signatures from the respective web settings, where HTML is fully supported.
              More on this in the iOS section below.
            </p>
          </section>

          {/* Mac steps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to add an HTML email signature in Apple Mail on Mac
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The standard approach — pasting HTML into Mail Preferences — doesn't work. Apple
              Mail renders the code as text rather than as HTML. Here's the workaround that
              actually works.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  step: "1",
                  title: "Get your signature HTML from NeatStamp",
                  detail: "Build your signature in the NeatStamp editor, then click 'Copy HTML'. You'll have an HTML snippet on your clipboard. Alternatively, download the .html file if that option is available.",
                },
                {
                  step: "2",
                  title: "Save the HTML as a .html file",
                  detail: "Open TextEdit on your Mac. Go to Format → Make Plain Text (important — rich text won't work). Paste your HTML code. Save the file as 'signature.html' (make sure the extension is .html, not .txt). Save it to your Desktop or Downloads folder.",
                },
                {
                  step: "3",
                  title: "Open the HTML file in Safari",
                  detail: "Drag the .html file onto Safari, or right-click it and choose 'Open With → Safari'. You should see your signature rendered as it will appear in emails.",
                },
                {
                  step: "4",
                  title: "Select all and copy",
                  detail: "In Safari, click anywhere on the page, then press Command + A to select all content, then Command + C to copy it. This copies the rendered HTML, not the code.",
                },
                {
                  step: "5",
                  title: "Create a placeholder in Mail Preferences",
                  detail: "Open Mail. Go to Mail → Preferences (or Mail → Settings in newer macOS versions) → Signatures. Select your email account on the left. Click the '+' button to create a new signature. Type any placeholder text (e.g., 'placeholder') — you just need something there.",
                },
                {
                  step: "6",
                  title: "Paste into the signature",
                  detail: "Click inside the signature text area on the right. Select all (Command + A) and delete the placeholder. Then paste (Command + V). Your formatted signature should appear — with your name, logo, links, and formatting intact.",
                },
                {
                  step: "7",
                  title: "Check 'Always match my default message font' is OFF",
                  detail: "Go to Mail → Preferences → Fonts & Colors. If 'Use the same message font' is checked, uncheck it. If this is on, Mail overrides your signature's fonts with your compose font, which can break your signature's appearance.",
                },
                {
                  step: "8",
                  title: "Set as default and test",
                  detail: "Back in the Signatures pane, set your new signature as the default for your account using the 'Choose Signature' dropdown. Compose a new email and verify it looks correct before sending. Send a test to a Gmail address and check how it renders there too.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 pb-5 border-b border-border last:border-0">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
              <h3 className="font-semibold text-foreground mb-2 text-sm">
                Common issue: the signature looks fine in Mail but broken when received
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                This usually means Apple Mail embedded your logo image as an attachment rather
                than loading it from a URL. Some email clients on the receiving end display
                those attachments separately. The fix: use NeatStamp's hosted image links
                (the images are served from our CDN) rather than embedding images from your
                local machine. If you're adding your own logo, upload it to a hosting service
                (Cloudinary, your own website, or even a Google Drive public link) and use the
                URL in your signature rather than embedding the file.
              </p>
            </div>
          </section>

          {/* iPhone/iPad */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Email signatures on iPhone and iPad
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              iOS Mail only supports plain text signatures. Here are your options depending
              on what you need.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">
              Option 1: Plain text signature in iOS Mail
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              If a plain text signature is acceptable to you, the steps are simple:
            </p>
            <div className="rounded-xl border-l-4 border-primary bg-surface p-5 mb-6">
              <ol className="space-y-2 text-sm text-muted leading-relaxed list-decimal list-inside">
                <li>Open Settings on your iPhone or iPad</li>
                <li>Scroll down and tap Mail</li>
                <li>Scroll down and tap Signature</li>
                <li>Choose whether to use one signature for all accounts or a per-account signature</li>
                <li>Type your plain text signature — name, title, phone number, website URL</li>
                <li>It saves automatically</li>
              </ol>
            </div>
            <p className="text-muted leading-relaxed mb-8 text-sm">
              Your plain-text signature on iOS won't have logos, colors, or clickable links
              (they'll appear as typed URLs). For many people this is fine for mobile use,
              especially for quick replies. Keep it short: name, title, phone, and one URL.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">
              Option 2: HTML signature via Gmail or Outlook app
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              If you use Gmail for your email (even with a custom domain via Google Workspace),
              set up your HTML signature in Gmail's web settings on a desktop browser:
              Settings → See all settings → General → Signature. When you then use the Gmail
              iOS app to send emails, the HTML signature will appear correctly.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The same applies to Outlook: set the signature in Outlook Web (outlook.office.com)
              under Settings → View all Outlook settings → Mail → Compose and reply. The
              Outlook iOS app then uses those settings.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              See the full{" "}
              <Link href="/email-signature-gmail" className="text-primary underline underline-offset-2">
                Gmail signature guide
              </Link>{" "}
              and the{" "}
              <Link href="/email-signature-outlook-365" className="text-primary underline underline-offset-2">
                Outlook 365 signature guide
              </Link>{" "}
              for the complete steps.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">
              Option 3: iCloud Mail signature
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              If you use an @icloud.com email address, you can set up a signature in iCloud
              Mail via a browser at icloud.com/mail → Settings (gear icon) → Preferences →
              Composing → Signature. This supports some basic HTML. However, it only applies
              when sending from iCloud.com in a browser — it may or may not sync to the iOS
              Mail app consistently.
            </p>
            <p className="text-muted leading-relaxed text-sm">
              The reliable approach for iCloud email on iPhone is to use a simple plain text
              signature in iOS Mail Settings, or to access your iCloud email via a browser
              on your iPhone (icloud.com/mail) rather than the native Mail app.
            </p>
          </section>

          {/* Common issues */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Common Apple Mail signature problems and fixes
            </h2>

            <div className="space-y-5">
              {[
                {
                  problem: "Signature font looks different from what I designed",
                  fix: "Check Mail → Preferences → Fonts & Colors. If 'Use the same message font' is enabled, it overrides your signature's fonts. Turn it off.",
                },
                {
                  problem: "Logo appears as an attachment in replies",
                  fix: "Apple Mail embeds images locally. Use externally hosted images (URLs) rather than embedded files. NeatStamp's generated signatures use hosted image URLs by default.",
                },
                {
                  problem: "Signature doesn't appear in replies, only new emails",
                  fix: "In Mail → Preferences → Signatures, check the 'Place signature above quoted text' checkbox. Also verify the signature is set for both new messages and replies in the signature dropdown.",
                },
                {
                  problem: "Paste into Mail signature shows code, not formatted text",
                  fix: "You're pasting HTML code directly. Follow the Safari workaround: save as .html → open in Safari → select all → copy → paste into Mail. This copies the rendered output.",
                },
                {
                  problem: "Signature looks fine on Mac but broken on iPhone",
                  fix: "iOS Mail and Mac Mail are separate apps with separate signature storage. You'll need to set up the signature separately on each device. On iOS, you're limited to plain text.",
                },
                {
                  problem: "The 'always match message font' option is greyed out",
                  fix: "This option is in Mail → Preferences → Fonts & Colors, specifically the checkbox next to 'Message Font'. In some macOS versions this setting moved; try checking Mail → Settings → Composing.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.problem}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-foreground">Fix: </strong>{item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/email-signature-maker",
                  title: "Email Signature Maker",
                  desc: "Build your signature and get the HTML you need for these steps.",
                },
                {
                  href: "/email-signature-gmail",
                  title: "Gmail Signature Guide",
                  desc: "How to add an HTML signature in Gmail — desktop and mobile.",
                },
                {
                  href: "/email-signature-outlook",
                  title: "Outlook Signature Guide",
                  desc: "Step-by-step for all Outlook versions.",
                },
                {
                  href: "/email-signature-outlook-365",
                  title: "Outlook 365 Signature Guide",
                  desc: "Web, desktop, and mobile for Microsoft 365.",
                },
                {
                  href: "/email-signature-yahoo",
                  title: "Yahoo Mail Signature Guide",
                  desc: "Setup steps and limitations for Yahoo Mail.",
                },
                {
                  href: "/html-email-signature",
                  title: "HTML Email Signature Guide",
                  desc: "How HTML signatures work and why they render differently by client.",
                },
                {
                  href: "/email-signature-design",
                  title: "Email Signature Design",
                  desc: "Design choices that hold up across email clients.",
                },
                {
                  href: "/professional-email-signature",
                  title: "Professional Email Signature",
                  desc: "What your signature should say about you.",
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
              Build your signature, then follow these steps
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              NeatStamp generates clean HTML that works in Apple Mail. Free to use, no account needed.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create My Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
