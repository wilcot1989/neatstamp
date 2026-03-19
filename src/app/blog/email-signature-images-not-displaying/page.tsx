import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature Images Not Showing? Here's Why + Fix | NeatStamp",
  description:
    "Logo not showing in your email signature? Photo missing? I've diagnosed every cause — recipient blocks, broken URLs, wrong DPI, dark mode, and more. Here are the fixes.",
  alternates: {
    canonical: "https://neatstamp.com/blog/email-signature-images-not-displaying",
  },
};

const faqs = [
  {
    q: "Why does my email signature logo show for me but not recipients?",
    a: "The most likely cause is that recipients have image loading turned off in their email client — this is the default setting in Outlook for external senders. Your email client loads images locally (so you see them), but their client blocks the external image request. There's no way to force-load images on their end, but you can add alt text so they still see your company name.",
  },
  {
    q: "Why does my signature image show as an attachment?",
    a: "This is almost always caused by base64-encoded images in your signature HTML. Outlook converts base64 images into attachments rather than displaying them inline. The fix is to host your image on a web server and reference it with a standard URL (https://yoursite.com/logo.png) instead of embedding the base64 data.",
  },
  {
    q: "My signature image was working fine and then suddenly stopped — why?",
    a: "Check whether the image URL is still accessible. Open the image URL in a browser. If it returns a 404, the file was moved or deleted from the server. This commonly happens after website redesigns or when a company changes hosting. You need to re-upload the image and update the URL in your signature.",
  },
  {
    q: "Why does my signature look fine in light mode but broken in dark mode?",
    a: "If your logo is a PNG with a transparent background and dark-colored elements (like dark text or a dark icon), it becomes invisible on a dark background. The solution is either to use a version of your logo with a white or light-colored background explicitly set, or to use an SVG with colors that adapt to both modes.",
  },
  {
    q: "What image format is best for an email signature logo?",
    a: "PNG is best for logos and graphics with text because it supports transparency and handles sharp edges without compression artifacts. JPG is better for photos (headshots, product photos) because it produces smaller file sizes for photographic content. Never use GIF for logos (poor color quality) or base64-encoded images in Outlook.",
  },
  {
    q: "Does Gmail change or alter the images in my email signature?",
    a: "Yes. Gmail proxies all external images through Google's own servers at googleusercontent.com. This is for privacy and security reasons. The image is cached by Google and re-served from their infrastructure. Your original URL still needs to work (Gmail fetches it once for caching), and the displayed image will look identical — it just comes from a different URL.",
  },
];

export default function EmailSignatureImagesNotDisplayingPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          { name: "Blog", url: "https://neatstamp.com/blog" },
          {
            name: "Email Signature Images Not Displaying",
            url: "https://neatstamp.com/blog/email-signature-images-not-displaying",
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
            <span className="text-slate-700">Email Signature Images Not Displaying</span>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                  Troubleshooting
                </span>
                <span className="text-sm text-slate-400">16 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Email Signature Images Not Showing? Here&rsquo;s Why + How to Fix It
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                Your logo looked perfect in the preview. But recipients are getting a broken
                image icon, a blank space, or worse — your image showed up as a random
                attachment. I know how maddening this is. The frustrating truth is that image
                problems in email signatures have about eight different causes, and each one
                has a different fix. I&rsquo;m going to walk through every single one.
              </p>
              <p className="text-sm text-slate-500">
                By the NeatStamp Team &middot; Published March 2026 &middot; 16 min read
              </p>
            </header>

            {/* Quick Fix Checklist */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-bold text-amber-900 mb-4">
                Quick fix checklist — diagnose in 2 minutes
              </h2>
              <p className="text-sm text-amber-800 mb-4">
                Run through these in order. Each one takes about 30 seconds to check.
              </p>
              <ol className="space-y-3">
                {[
                  {
                    step: "Open the image URL in a browser",
                    detail:
                      "Copy the src URL from your signature HTML and paste it into a browser. If you get a 404 or blank page, the image is broken or gone — fix the URL first.",
                  },
                  {
                    step: "Check if your image is base64 encoded",
                    detail:
                      'Look in your signature HTML. If the src attribute starts with "data:image/", it\'s base64. This causes Outlook to show it as an attachment. Switch to a hosted URL.',
                  },
                  {
                    step: "Check the file size",
                    detail:
                      "Images over 1MB can trigger spam filters that strip attachments. Logo should be under 20KB, headshot under 50KB.",
                  },
                  {
                    step: "Test with a Gmail recipient",
                    detail:
                      "If images work in Gmail but not Outlook, the issue is likely Outlook's image blocking on the recipient's end — not your signature.",
                  },
                  {
                    step: "Check your image in dark mode",
                    detail:
                      "Switch your device to dark mode and preview the email. A transparent-background PNG with dark content will be invisible.",
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
                All 8 causes — jump to any section
              </p>
              <ol className="space-y-2 text-sm">
                {[
                  ["#images-blocked-by-recipient", "Cause 1: Images blocked by recipient's email client"],
                  ["#base64-encoded", "Cause 2: Base64 images showing as attachments"],
                  ["#broken-url", "Cause 3: Image URL is broken or expired"],
                  ["#image-too-large", "Cause 4: Image file too large"],
                  ["#wrong-dpi", "Cause 5: Wrong DPI for Outlook"],
                  ["#gmail-proxy", "Cause 6: Gmail's image proxy (googleusercontent.com)"],
                  ["#dark-mode", "Cause 7: Dark mode breaking image visibility"],
                  ["#corporate-firewall", "Cause 8: Firewall / corporate proxy blocking images"],
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

            {/* Cause 1 */}
            <section id="images-blocked-by-recipient" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 1: Images blocked by recipient&rsquo;s email client (and why there&rsquo;s nothing you can do about it)
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I want to lead with this one because it&rsquo;s the most common cause, and it saves you
                a lot of troubleshooting time to know when the problem isn&rsquo;t actually your fault.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                By default, Outlook blocks images in emails from external senders. The recipient
                sees your text and layout but gets a placeholder where images should be, along
                with the message &ldquo;Right-click here to download pictures. To help protect your
                privacy, Outlook prevented automatic download of this picture.&rdquo;
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is a deliberate privacy and security feature. External images can be used
                to track when an email is opened (via pixel tracking), so email clients block
                them by default for external senders. You cannot override this setting on your
                recipient&rsquo;s behalf.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                What you can do instead
              </h3>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Add descriptive alt text to every image.</strong> The{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">alt</code>{" "}
                  attribute renders as text when the image is blocked.{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">alt="Acme Corp Logo"</code>{" "}
                  is infinitely better than a blank space or a broken image icon.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Design the text-only version of your signature to still work.</strong> Your
                  name, title, phone number, and links should all be fully functional even when
                  images are hidden. Test this by disabling image loading in your own Outlook:
                  File → Options → Trust Center → Trust Center Settings → Automatic Download →
                  check &ldquo;Don&rsquo;t download pictures automatically.&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Build trust over time.</strong> Outlook automatically allows images from
                  contacts in the recipient&rsquo;s Safe Senders list. If you email someone regularly,
                  they may eventually be asked to allow your images, at which point they&rsquo;ll see
                  everything correctly.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                For everything about designing signatures that work with and without images, see the{" "}
                <Link href="/email-signature-with-logo" className="text-blue-600 hover:underline">
                  email signature with logo guide
                </Link>
                .
              </p>
            </section>

            {/* Cause 2 */}
            <section id="base64-encoded" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 2: Base64 encoded images showing as attachments in Outlook
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This one is fixable and completely your signature&rsquo;s fault — in a good way,
                because it means you can solve it. If recipients are getting your logo or photo
                as a file attachment (showing in the attachments bar or as a downloadable file),
                and the image isn&rsquo;t displaying inline, you almost certainly have base64-encoded
                images in your signature HTML.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Base64 encoding embeds the image data directly in the HTML as a long string of
                text. It looks like this:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 mb-6 overflow-x-auto">
                <code className="text-green-400 text-xs font-mono">
                  {`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." />`}
                </code>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Gmail and most modern email clients handle base64 images fine. Outlook does not.
                Outlook treats base64 images as embedded attachments, strips them from the
                inline position, and shows them as files. The recipient sees an attachment
                called &ldquo;image001.png&rdquo; and wonders what it is.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The fix: switch to hosted URLs
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Upload your logo and any photos to a web server — your company website, an S3
                bucket, Cloudflare Images, or any publicly accessible host. Then reference the
                image with a normal URL:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 mb-6">
                <code className="text-green-400 text-xs font-mono">
                  {`<img src="https://yourcompany.com/images/logo.png" width="150" height="50" alt="Company Name" />`}
                </code>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Two important details in that example: always set both <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">width</code> and{" "}
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">height</code> as HTML attributes (not just in CSS), and always include{" "}
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">alt</code> text. Outlook ignores CSS dimensions but respects HTML attributes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NeatStamp Pro hosts your images for you — you never have to worry about where
                to put the file or whether the URL will stay alive. On the free plan, use any
                stable public URL. The{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook signature setup guide
                </Link>{" "}
                explains exactly how to paste your final signature HTML into Outlook correctly.
              </p>
            </section>

            {/* Cause 3 */}
            <section id="broken-url" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 3: Image URL is broken or expired
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is the sneakiest cause because everything worked fine when you set up your
                signature, and then months later images start breaking. If your signature was
                working and has suddenly stopped, this is the first thing to check.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Copy the image URL from your signature HTML and open it directly in a browser.
                You should see the image. If you get a 404, a blank page, or a generic hosting
                error, the image is gone and needs to be re-uploaded.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Common reasons URLs break
              </h3>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Website redesign:</strong> Your company relaunched the website and the
                  image folder was reorganized. The old URL{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">/images/logo.png</code> now
                  lives at{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">/assets/brand/logo.png</code>.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Hosting migration:</strong> The company moved to a new web host and assets
                  weren&rsquo;t fully migrated or paths changed.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>Temporary image host used:</strong> Someone used a free image hosting
                  service (like Imgur) that deletes images after inactivity or after a certain
                  period.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>File accidentally deleted:</strong> Someone cleaned up &ldquo;old&rdquo; files on
                  the server and removed what they thought was unused.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <strong>HTTPS migration without redirect:</strong> The site moved from HTTP to HTTPS
                  but the old HTTP image URL in the signature doesn&rsquo;t redirect — it just 404s.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                The solution in all cases: find the correct current URL for your image (or
                re-upload it to a reliable host), update your signature HTML with the new URL,
                and test again. To avoid this problem in the future, host signature images in a
                dedicated folder that won&rsquo;t be touched during redesigns, or use NeatStamp&rsquo;s
                image hosting which keeps URLs permanently stable.
              </p>
            </section>

            {/* Cause 4 */}
            <section id="image-too-large" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 4: Image file too large — spam filters and size limits
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Large images in email signatures cause two separate problems: they trigger spam
                filters (which may strip or quarantine the message), and they make the email
                download very slowly on mobile connections, causing images to load slowly or
                not at all before the recipient moves on.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                General size guidelines for email signature images:
              </p>
              <div className="bg-slate-50 rounded-xl p-5 mb-6 space-y-3">
                {[
                  { label: "Company logo", size: "Under 20KB. Ideally 5–10KB for a simple PNG logo." },
                  { label: "Headshot / profile photo", size: "Under 50KB. JPG at 80% quality is usually under 20KB at 200×200px." },
                  { label: "Banner / promotional image", size: "Under 100KB. Anything larger risks being flagged." },
                  { label: "Social media icons", size: "Under 3KB each. These should be tiny icon files." },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <code className="mt-0.5 text-xs bg-white border border-slate-200 px-2 py-1 rounded font-mono text-slate-700 whitespace-nowrap">
                      {row.label}
                    </code>
                    <p className="text-sm text-slate-600">{row.size}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to reduce image file size without losing quality
              </h3>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>For PNGs (logos, graphics):</strong> Use{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">squoosh.app</code> or{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">tinypng.com</code>.
                  TinyPNG typically reduces PNG file size by 50–80% with no visible quality loss.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>For JPGs (photos):</strong> Export at 75–80% quality. Most photo editors (even
                  macOS Preview) let you set JPEG quality on save. At 80%, a photo that was 300KB
                  typically drops to 40–60KB.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Resize before exporting:</strong> If your logo is displayed at 150×50px, there&rsquo;s no
                  need for the file to be 1200×400px. Resize it to 300×100px (2x for retina) before
                  uploading.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                The{" "}
                <Link href="/blog/email-signature-size" className="text-blue-600 hover:underline">
                  email signature size guide
                </Link>{" "}
                covers the total size limits for the full email, not just images, which is worth
                understanding if you have multiple images in your signature.
              </p>
            </section>

            {/* Cause 5 */}
            <section id="wrong-dpi" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 5: Wrong DPI — why your logo looks blurry in Outlook
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                This one doesn&rsquo;t stop images from loading — it makes them look bad. If your logo
                appears blurry or pixelated in Outlook desktop specifically (but looks fine in
                Gmail or web clients), DPI is often the cause.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Classic Outlook on Windows renders images at <strong>96 DPI</strong>. If you export your
                logo at 72 DPI (the standard web DPI) at a display size of 200px wide, Outlook
                will render it at a slightly different size than intended, and the interpolation
                causes visible blur.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                The retina fix for all clients
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The cleanest solution is to export your image at 2x the display size and
                explicitly set the HTML dimensions to the display size. For example, if you
                want your logo to appear at 200×60px:
              </p>
              <div className="bg-slate-900 rounded-xl p-4 mb-6">
                <code className="text-green-400 text-xs font-mono">
                  {`<img src="logo@2x.png" width="200" height="60" alt="Company Name" />`}
                </code>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The actual file is 400×120px. The browser and email client scale it down to
                200×60px for display. This renders crisply on retina screens (which is most
                modern displays) and looks fine on non-retina too.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                For Outlook Web App and new Outlook (which behave more like browsers), this
                2x approach is the right one to use. Classic Outlook desktop may still look
                slightly different, but the 2x technique is the closest thing to a universal
                fix.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For step-by-step Outlook image setup, see the{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook signature guide
                </Link>
                . The{" "}
                <Link href="/email-signature-with-logo" className="text-blue-600 hover:underline">
                  email signature with logo guide
                </Link>{" "}
                has exact export settings for different design tools.
              </p>
            </section>

            {/* Cause 6 */}
            <section id="gmail-proxy" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 6: Gmail&rsquo;s image proxy — why your logo URL changes
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you inspect the source of an email you&rsquo;ve sent to a Gmail recipient, you&rsquo;ll
                notice something: the image URL in the email has been rewritten to something
                like{" "}
                <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                  https://ci3.googleusercontent.com/proxy/...
                </code>
                . This is Gmail&rsquo;s image proxy, and it&rsquo;s not a problem — it&rsquo;s how Gmail works.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                When a Gmail user opens your email, Gmail fetches your image from your server,
                caches it on Google&rsquo;s infrastructure, and serves it to the user from Google&rsquo;s
                servers instead. The user sees the exact same image — but it comes from
                googleusercontent.com, not your URL. This is why Gmail shows a single gray
                check mark for &ldquo;delivered&rdquo; rather than a blue tick when an email is read
                through proxy.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Why this matters for your signature
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Gmail proxy has two implications:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Your image URL must be publicly accessible.</strong> Gmail&rsquo;s servers fetch
                  your image from your URL. If the URL requires authentication, is behind a VPN,
                  or returns a 404, Gmail can&rsquo;t cache it and the image won&rsquo;t display.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Caching means changes may not appear immediately.</strong> If you update your
                  logo at the same URL, Gmail&rsquo;s cache may serve the old version for a period of
                  time. To force the new image, use a new filename (e.g., <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">logo-v2.png</code>)
                  rather than overwriting the old file.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                If your image shows correctly for Gmail users but not for Outlook users, scroll
                back up to causes 1 and 2 — this is usually image blocking or base64 encoding,
                not a Gmail issue. For Gmail-specific signature setup, see the{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail email signature guide
                </Link>
                .
              </p>
            </section>

            {/* Cause 7 */}
            <section id="dark-mode" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 7: Dark mode breaking image visibility
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As of 2026, dark mode is on by default for roughly a third of users across iOS
                and Android, and it&rsquo;s widely used on Outlook desktop too. If your logo or photo
                disappears in dark mode, the cause is almost always one of two things:
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Problem 1: Dark logo on a transparent background.</strong> If your logo is a
                PNG with a transparent background and the logo itself is dark-colored (black,
                dark navy, dark grey), it will be invisible on a dark email background. The
                image is technically loading — you just can&rsquo;t see it.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Problem 2: Email client inverting colors.</strong> Some versions of Outlook in
                dark mode actively invert image colors that don&rsquo;t have an explicit background
                declared. This can turn your dark logo white and your white logo dark — which
                sounds helpful but often produces ugly results.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                How to fix dark mode image problems
              </h3>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Use a PNG with a white or light rectangle behind the logo.</strong> Not truly
                  transparent — give the logo a white background area. This prevents it from
                  disappearing on dark backgrounds and prevents color inversion.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Add a background color to the image container cell.</strong> In the HTML,
                  set the table cell containing your logo to{" "}
                  <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">background-color: #ffffff</code>.
                  This gives the logo a visible background regardless of the email background.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Create a light and dark version.</strong> If your brand requires it, create
                  two versions of your logo (one for light mode, one for dark) and use CSS media
                  queries. Note: Outlook ignores most CSS media queries, so this technique works
                  better for Gmail and Apple Mail than Outlook.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <strong>Test it yourself.</strong> Enable dark mode on your phone or computer, open
                  your email client, and send yourself a test email. This takes 60 seconds and
                  saves a lot of guesswork.
                </li>
              </ul>
            </section>

            {/* Cause 8 */}
            <section id="corporate-firewall" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cause 8: Firewall or corporate proxy blocking external images
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In corporate and government environments, IT departments sometimes configure
                network proxies and firewalls to block outbound HTTP requests from email clients
                to unknown external domains. The result: images hosted on your domain don&rsquo;t
                load for recipients behind that corporate network, even if the image URL is
                perfectly valid.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                This is most common in:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  Government agencies and defense contractors
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  Large financial institutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  Healthcare organizations (especially in the US, due to HIPAA)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  Schools and educational institutions
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                How to diagnose: if images work for some recipients and not others, and the
                ones who can&rsquo;t see them all work at one organization, a corporate proxy is likely
                the issue.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                There&rsquo;s not much you can do to fix this on your end, but a few things help:
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Host images on a major CDN (Amazon CloudFront, Cloudflare, Google Cloud Storage)
                  rather than a small personal server. Large CDNs are more likely to be whitelisted
                  by corporate proxies.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Always include good alt text so the text fallback is meaningful.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Accept that for a small subset of recipients in high-security environments, images
                  will never load. Design your signature to work fully without them.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                For a complete guide to building Outlook-compatible signatures with correctly
                hosted images, the{" "}
                <Link href="/email-signature-outlook" className="text-blue-600 hover:underline">
                  Outlook signature guide
                </Link>{" "}
                and the{" "}
                <Link href="/email-signature-gmail" className="text-blue-600 hover:underline">
                  Gmail signature guide
                </Link>{" "}
                cover each client&rsquo;s specific requirements.
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
                    desc: "Complete troubleshooting guide for all Outlook signature problems.",
                  },
                  {
                    href: "/blog/email-signature-size",
                    title: "Email Signature Size Guide",
                    desc: "Total size limits for text, images, and HTML across all clients.",
                  },
                  {
                    href: "/email-signature-with-logo",
                    title: "Email Signature With Logo",
                    desc: "How to get your company logo displaying correctly.",
                  },
                  {
                    href: "/email-signature-gmail",
                    title: "Gmail Email Signature Setup",
                    desc: "Complete setup guide for Gmail signatures.",
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
                Want a signature that handles images correctly?
              </h2>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                NeatStamp generates signatures with properly hosted, correctly sized images
                that display in Outlook, Gmail, and every other major email client.
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
