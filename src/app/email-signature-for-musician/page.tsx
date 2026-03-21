import type { Metadata } from "next";
import Link from "next/link";
import {
  FAQStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Email Signature for Musicians & Artists | NeatStamp",
  description:
    "What musicians should include in their email signature — Spotify links, booking info, social following, and creative design. Practical guide with real examples.",
  alternates: { canonical: "https://neatstamp.com/email-signature-for-musician" },
};

const faqs = [
  {
    q: "Should a musician's email signature include a link to Spotify?",
    a: "Yes, absolutely. Spotify is where most people listen to music, and including a direct link to your Spotify artist profile — not your personal account — makes it trivially easy for promoters, music supervisors, journalists, and collaborators to hear your work in the 30 seconds between reading your email and deciding whether to respond. Format it as 'Listen on Spotify' with your artist URL. If you're on multiple platforms, Spotify and Apple Music together cover the majority of streaming listeners. You can also use a link aggregator like Linktree or Linkfire that routes to all platforms from a single URL.",
  },
  {
    q: "How should a musician list their booking contact — themselves or a manager?",
    a: "This depends on where you are in your career. If you book yourself, include your direct email and phone number with clear labeling: 'Booking: yourname@email.com.' If you have a booking agent, list their contact information and name instead: 'Booking: [Agent Name] · agent@agency.com.' Having both is also fine if you manage different types of bookings yourself (private events, corporate) while your agent handles venues and tours. The key is clarity — a promoter or venue buyer who can't quickly find your booking contact will move to the next artist.",
  },
  {
    q: "Should musicians include their social media follower count in their signature?",
    a: "Only if the numbers are genuinely impressive for your genre and target market. 100,000 Spotify monthly listeners is a meaningful signal for an independent artist pitching to a mid-size venue. 850 followers on Instagram is not a meaningful signal for anything. When in doubt, link to your profiles and let the recipient do the math — your content and engagement rate will be more compelling than a static follower count that might be outdated by the time they read your email. For press kits and EPKs, follower counts belong there; for email signatures, links are enough.",
  },
  {
    q: "What's the right level of design creativity for a musician's email signature?",
    a: "Creative enough to reflect your brand, professional enough to work in every email context. A signature with a strong artist photo, your logo or stylized name treatment, and a single accent color from your visual brand is appropriate for most musicians. Full-bleed backgrounds, animated GIFs, and heavily designed graphics tend to break in Outlook and look unprofessional in formal contexts like licensing inquiries or grant applications. The rule of thumb: if you're emailing a music supervisor at a film studio or a festival programmer, your signature needs to look like it belongs in a professional email.",
  },
  {
    q: "What should a music producer's email signature include?",
    a: "Music producers should include a link to their production catalog or SoundCloud profile where people can hear their beats and productions. A brief genre/style descriptor is helpful: 'R&B / Hip-Hop Production' or 'Film Score Composer.' If you have notable placements or credits, a one-line mention is appropriate: 'Credits: Jay-Z, Beyoncé, Netflix Original series.' Your email, phone, and social links round it out. Producers often work across multiple projects, so a consistent email signature that links to a central portfolio helps consolidate your discoverability.",
  },
  {
    q: "Should a musician's email signature include their press kit or EPK?",
    a: "A link to your EPK is excellent for a musician's signature, especially if you're actively pitching venues, festivals, or press. 'Press Kit / EPK' as anchor text linking to a one-page PDF or website is clean and professional. Make sure your EPK is up to date — an EPK with 2022 tour dates and old photos is worse than no EPK link. If your EPK is always current, add the link. If it goes stale for months at a time, skip it and link to your artist website instead.",
  },
  {
    q: "How should a classical musician's signature differ from a pop or indie musician's?",
    a: "Classical musicians typically need a more formal, text-forward signature — your full name, instrument, any significant ensemble affiliations or academic positions, and a clean website link. A performing faculty member at a conservatory and a touring symphony musician both need their institutional affiliation listed. Streaming links are less central than for pop or indie musicians; your website and a link to your recordings or upcoming concerts is more appropriate. The visual design should be more conservative — heavy decorative elements look out of place in formal concert booking or academic correspondence.",
  },
  {
    q: "Can musicians include tour dates or upcoming shows in their email signature?",
    a: "A single line with a link works well: 'On tour through July — see dates at yourwebsite.com.' This creates a passive way to share your availability and activity level in every email. Don't paste a list of 10 show dates directly into your signature — it looks cluttered and goes out of date fast. A link to your website's shows page is cleaner and always current. Update or remove the tour line when you're not actively on tour; a link to a shows page with no upcoming dates is a slightly deflating signal.",
  },
];

export default function EmailSignatureForMusicianPage() {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://neatstamp.com" },
          {
            name: "Email Signature for Musicians",
            url: "https://neatstamp.com/email-signature-for-musician",
          },
        ]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight">
              Email Signature for Musicians & Artists
            </h1>
            <p className="mt-5 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Your music lives on Spotify, Apple Music, Instagram, and YouTube. Your email
              signature should connect people to all of it — while staying professional
              enough for venue bookers, licensing requests, and press inquiries.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Build Your Artist Signature — Free
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-muted">No account needed. Free forever for individuals.</p>
          </div>

          {/* Intro */}
          <section className="mb-16">
            <p className="text-muted leading-relaxed mb-4 text-lg">
              Musicians send email in a lot of different professional contexts: pitching to
              venues and festival bookers, following up with music supervisors about sync
              licensing, corresponding with press and blogs, reaching out to collaborators,
              managing merch and distribution, handling fan mail, and running the administrative
              side of a music business that most fans never see.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Each of those contexts calls for a slightly different emphasis in your email signature,
              but the core elements are consistent: your name (or artist name), your music links,
              your booking contact, and enough visual personality to reflect who you are as an
              artist without going so far that it breaks in a corporate email client.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This guide covers exactly what to include for different music career stages and
              types — from independent solo artists to producers to classically trained performers —
              and how to balance creative expression with functional professionalism. The email
              signature you send to Pitchfork should look different from the one you use for
              day-to-day business correspondence, and this guide explains how to build both.
            </p>
            <p className="text-muted leading-relaxed">
              For the broader principles that apply to professional signatures in any context,
              the{" "}
              <Link href="/professional-email-signature" className="text-primary underline underline-offset-2">
                professional email signature guide
              </Link>{" "}
              is a good starting point. This page focuses on what's specific to musicians
              and other performing artists.
            </p>
          </section>

          {/* Why musicians need a great signature */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why your music email signature is more important than you think
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Every email is an audition opportunity
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              When you email a venue, a festival, a music supervisor, or a playlist curator,
              you have approximately 10 seconds to make an impression before they decide whether
              to respond. Your email does most of that work — but your signature is the last
              thing they read, and if it includes a direct Spotify link, there's a real chance
              they'll click it and give you 30 seconds of listening time. That 30 seconds can
              change everything.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The inverse is also true: a signature with no music links forces the recipient to
              go find your music themselves if they're curious. Some will. Most won't. Your music
              link in the signature removes that friction entirely.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Booking contacts get lost in email threads
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              A promoter or venue buyer who decides they want to book you after seeing you
              open for another act needs to find your booking contact. If they search their
              email for your name and find a thread where your signature is absent or has no
              booking information, they're doing extra work to find you. Some won't bother.
              Your booking email, phone, or manager contact in your signature means every
              email thread you've ever sent is a searchable path back to you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Consistent visual branding builds recognition over time
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              If you have a clear visual identity — specific fonts in your artist name, a
              distinctive color palette, artwork from your current release — your email signature
              is one more place where that identity can reinforce itself. Music supervisors,
              publicists, and booking agents email dozens of artists; a signature that looks
              like your album artwork creates a stronger memory hook than a plain text signature.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              This doesn't mean designing an elaborate graphic — it means using your brand colors
              as an accent, using your artist logo if you have one, and keeping the aesthetic
              consistent with your social media and press materials. Small consistency pays off
              over many interactions.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Press and media contacts judge professionalism quickly
            </h3>
            <p className="text-muted leading-relaxed">
              Music journalists, podcast hosts, and playlist curators receive enormous volumes
              of artist email. A well-formatted signature with a clear artist name, a music
              link, a press kit link, and a direct contact signals that you're a professional
              who takes their craft seriously. A blank or haphazard signature signals the
              opposite. It's a small signal, but it's present in every email you send, and
              it costs nothing to get right. For more on how branding works in email context,
              the{" "}
              <Link href="/email-signature-design" className="text-primary underline underline-offset-2">
                email signature design guide
              </Link>{" "}
              covers the visual principles in detail.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What to include in a musician's email signature
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Here's a complete breakdown of every element, what it does, and when to include it.
              Prioritize ruthlessly — a signature with 8 links looks cluttered and none of them
              get clicked. Pick the 3–4 most important for your current goals.
            </p>

            <div className="space-y-5">
              {[
                {
                  field: "Artist name (or full name)",
                  required: "Always",
                  notes: "Use your artist name if that's how you're known professionally — not your legal name unless they're the same. Bold it. If your artist name has a specific stylization (all caps, lowercase, unusual punctuation), use it consistently. This is your brand identifier.",
                },
                {
                  field: "Genre or artist descriptor",
                  required: "Recommended",
                  notes: "A 3–5 word descriptor helps immediately: 'Singer-songwriter · Alternative R&B' or 'Jazz pianist & composer' or 'Electronic producer / DJ.' This context is valuable for anyone receiving a cold or semi-cold email from you — they know what they're dealing with before clicking any links.",
                },
                {
                  field: "Spotify artist link",
                  required: "Always",
                  notes: "Your Spotify artist profile URL, formatted as 'Listen on Spotify' or just 'Spotify.' This is the most important link in a musician's signature — it's where the majority of your potential listeners, music supervisors, and playlist curators will go first. Link to your artist profile, not your personal account.",
                },
                {
                  field: "Apple Music link",
                  required: "Recommended",
                  notes: "Apple Music is Spotify's main competitor and has a large audience of paying subscribers. Including both covers the majority of streaming listeners. Alternatively, use a platform aggregator link (Linktree, Linkfire, Linkcore) that routes to all platforms from a single URL.",
                },
                {
                  field: "Social media links",
                  required: "Recommended — pick your strongest 1–2",
                  notes: "Instagram is the primary visual platform for musicians in most genres. TikTok is essential if you have an active presence there. YouTube if your channel is active. Pick the 1–2 platforms where your presence is strongest and most relevant to the people you're emailing. More than 2 social links in a signature creates visual noise.",
                },
                {
                  field: "Booking contact",
                  required: "Always — clearly labeled",
                  notes: "If you book yourself: 'Booking: yourname@email.com · (555) 123-4567.' If you have an agent: 'Booking: [Agent Name] · agent@agency.com.' If you have separate contacts for different types of bookings (agent for live, yourself for sync/licensing), list both with clear labels. This is the element that converts interest into revenue.",
                },
                {
                  field: "Artist website",
                  required: "Recommended",
                  notes: "Your official artist website — not your Linktree, not your DistroKid page. A proper website signals serious professionalism. It's where press contacts go for full biographies, hi-res photos, and press materials. If you don't have a proper website, a well-maintained Bandcamp page is a reasonable substitute.",
                },
                {
                  field: "Press kit / EPK link",
                  required: "Optional — high value for press outreach",
                  notes: "If you're actively pitching press, radio, or blogs, an EPK link is extremely useful: 'Press Kit' linking to a Google Drive PDF or a dedicated EPK page. Keep it current — an EPK with outdated photos and last year's release gets you dismissed. Only include this link if you're actively maintaining the EPK.",
                },
                {
                  field: "Artist photo",
                  required: "Optional — context-dependent",
                  notes: "A professional artist photo in your signature humanizes your emails and puts a face to the name for people who haven't seen you perform yet. Use your current press photo — the same one that's on your website and social media. Keep it 80–100px. Don't use a live photo unless it's professionally shot.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-5">
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

          {/* Example signatures */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Example musician email signatures
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Independent singer-songwriter (venue pitching)
            </h3>
            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-6">
              <div className="text-foreground font-bold text-base">LUNA VALE</div>
              <div className="text-muted">Alternative Folk · Los Angeles, CA</div>
              <div className="text-muted mt-2">🎵 Spotify · Apple Music · YouTube</div>
              <div className="text-muted">📸 @luna.vale (Instagram · 42K)</div>
              <div className="text-primary mt-2">lunavalemusic.com</div>
              <div className="text-muted mt-2">Booking: luna@lunavalemusic.com · (323) 555-0147</div>
              <div className="text-muted text-xs mt-2">Press Kit available on request</div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
              Music producer (collaboration and licensing outreach)
            </h3>
            <div className="rounded-xl border-l-4 border-primary bg-surface p-6 font-mono text-sm leading-relaxed mb-8">
              <div className="text-foreground font-bold text-base">Marcus Vibe</div>
              <div className="text-muted">R&B / Hip-Hop Producer · Beatmaker</div>
              <div className="text-muted">Credits: Mahalia, MNEK, Netflix Original (2024)</div>
              <div className="text-muted mt-2">🎧 SoundCloud: soundcloud.com/marcusvibe</div>
              <div className="text-primary">marcusvibe.com/catalog</div>
              <div className="text-muted mt-2">Licensing & Collabs: marcus@marcusvibe.com</div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              The singer-songwriter signature leads with genre and location (venue bookers filter
              by both), keeps social to one platform with follower count as a credibility signal,
              and makes the booking contact clearly labeled. The producer signature leads with
              credits because that's what licenses and collaborators care about, and links
              directly to the catalog page rather than the homepage.
            </p>
            <p className="text-muted leading-relaxed">
              Browse{" "}
              <Link href="/examples" className="text-primary underline underline-offset-2">
                more signature examples
              </Link>{" "}
              to find layouts that work for your visual brand, or start building directly in the{" "}
              <Link href="/editor" className="text-primary underline underline-offset-2">
                editor
              </Link>.
            </p>
          </section>

          {/* Step-by-step */}
          <section className="mb-16 rounded-xl bg-surface border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to build your musician signature with NeatStamp
            </h2>

            <ol className="space-y-5">
              {[
                {
                  step: "Choose a template that fits your aesthetic",
                  detail: "Open the NeatStamp editor and browse the templates. For musicians, look for templates with a strong visual structure — a left-side image column with contact info on the right, or a centered layout with clear hierarchy. Avoid templates that are overly corporate; look for ones with room for visual personality.",
                },
                {
                  step: "Add your artist name and descriptor",
                  detail: "Enter your artist name exactly as you want it displayed — with any stylistic capitalization you use. Add your genre descriptor in the title field: 'Alternative Folk · Los Angeles' or 'R&B Producer / Composer.' This two-line opener sets the context for everything that follows.",
                },
                {
                  step: "Add your streaming links",
                  detail: "In the social links section, add your Spotify artist URL and Apple Music link. Use clean anchor text: 'Spotify' and 'Apple Music.' If you prefer a single aggregator link, paste your Linktree or Linkfire URL instead. These are the links that matter most — prioritize them visually.",
                },
                {
                  step: "Add your booking contact clearly labeled",
                  detail: "In the contact section or a custom text field, add your booking contact with explicit labeling: 'Booking: email · phone' or 'Booking Agent: name · email.' Don't bury this in a generic contact section — make it scannable in under two seconds.",
                },
                {
                  step: "Upload your press photo or artist logo",
                  detail: "Use your current official press photo or artist logo. For photos, crop to a square or circle at 200×200px minimum resolution. The editor displays it at 80–100px but needs higher resolution for retina screens. Make sure the photo is from your current era — matching what your social profiles show.",
                },
                {
                  step: "Test in Gmail and check on mobile",
                  detail: "Send a test email and open it on your phone. Check that the Spotify link works (links to your artist profile, not a search result), your booking email is clickable, and the photo loads. Check the dark mode rendering if you use a light logo — logos with white text on transparent backgrounds disappear in dark mode.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.step}</div>
                    <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/editor"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary-dark transition-all"
              >
                Create Your Artist Signature — Free
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-base font-semibold text-foreground hover:border-primary transition-all"
              >
                Browse Templates
              </Link>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common mistakes musicians make with email signatures
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "No music links at all",
                  why: "This is the most common and most damaging mistake. If someone gets your email and is curious about your music, they shouldn't have to search for it. A Spotify link in your signature converts that curiosity into a listen in one click. Not having one means you're leaving listens — and the impressions that follow — on the table in every email you send.",
                },
                {
                  mistake: "Linking to personal Spotify instead of artist profile",
                  why: "Your personal Spotify listening profile is not the same as your Spotify artist profile. The artist profile shows your music, your monthly listeners, your discography, and a verified badge if you have one. The personal profile shows your playlists. Get your Spotify artist URL from Spotify for Artists and use that link.",
                },
                {
                  mistake: "Making the signature a design project",
                  why: "Some musicians spend hours designing elaborate signatures with custom fonts, full-width backgrounds, and animated elements. These break in Outlook, get flagged by spam filters, and look strange in formal contexts like licensing inquiries. A clean signature with a strong photo and your accent color is more effective and renders everywhere correctly.",
                },
                {
                  mistake: "Unclear booking contact",
                  why: "A venue buyer who wants to book you needs to be able to find your booking contact in under five seconds. If your signature has an email address with no label, they can't tell if it's a booking email, a fan contact, or your manager's address. Label it explicitly: 'Booking: email · phone.' This clarity is the difference between a booking inquiry and a missed opportunity.",
                },
                {
                  mistake: "Outdated credits or stale information",
                  why: "A signature that still references your 2022 album as your current release, or lists a TikTok profile you stopped posting on 18 months ago, sends a signal of stagnation. Update your signature with each new release cycle. Your credits should reflect your most recent impressive work, not your career highlight from four years ago.",
                },
                {
                  mistake: "Too many social links",
                  why: "Including links to Instagram, TikTok, Twitter/X, YouTube, Facebook, Bandcamp, SoundCloud, and your website is not a signature — it's a wall of links that nobody reads. Pick the two platforms where you have the strongest presence and the most relevant audience for the people you're emailing. Everything else can live on your website.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border border-red-100 bg-red-50 p-5">
                  <span className="text-red-500 text-lg font-bold flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.mistake}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pro tips */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pro tips for musicians</h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Build different signatures for different contexts</h3>
                <p className="text-muted leading-relaxed">
                  Create at least two signatures: one for booking and press outreach (music links
                  prominent, booking contact labeled, EPK link included) and one for general
                  correspondence (cleaner, shorter, just your name, website, and music link).
                  Gmail lets you manage multiple signatures and switch between them in any email.
                  A music supervisor inquiry and a reply to your merch vendor don't need the same
                  signature.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Update your signature with each new release</h3>
                <p className="text-muted leading-relaxed">
                  When you release new music, update the CTA in your signature: 'New single out
                  now — listen on Spotify' or 'New album [Title] — out everywhere.' This keeps
                  your signature current and gives people who've been receiving your emails for
                  a while an easy reason to click. Remove the "new release" language after 3–4
                  months — after that window, it's no longer new and the CTA loses its urgency.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Test your signature in dark mode</h3>
                <p className="text-muted leading-relaxed">
                  A lot of music industry people read email on their phones at night, often in
                  dark mode. If your signature has a white artist logo on a transparent background,
                  it will be invisible in dark mode. Test your signature in dark mode on iOS Mail
                  and on Gmail mobile. The{" "}
                  <Link href="/email-signature-dark-mode-compatible" className="text-primary underline underline-offset-2">
                    dark mode signature guide
                  </Link>{" "}
                  covers the specific fixes — usually a dark outline or background on the logo
                  or switching to a version of your logo that has good contrast on both light
                  and dark backgrounds.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Keep your EPK current before adding the link</h3>
                <p className="text-muted leading-relaxed">
                  An EPK link in your signature only helps you if the EPK is current and
                  impressive. Before you add the link, check: Is the bio current? Are the
                  photos from this year (or at least this era)? Are the credits accurate?
                  Is there contact information on the EPK itself? A press contact who opens
                  your EPK and finds 2021 photos and tour dates that have passed will not
                  be impressed. Spend 30 minutes updating it before you start including the
                  link in your signatures.
                </p>
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/professional-email-signature", title: "Professional Email Signature", desc: "The universal principles behind any effective signature." },
                { href: "/email-signature-design", title: "Email Signature Design", desc: "Typography, color, layout, and visual hierarchy done right." },
                { href: "/email-signature-with-logo", title: "Email Signature with Logo", desc: "How to use your artist logo effectively in email." },
                { href: "/email-signature-dark-mode-compatible", title: "Dark Mode Signatures", desc: "Make sure your signature looks right at night on mobile." },
                { href: "/email-signature-mobile-friendly", title: "Mobile-Friendly Signatures", desc: "Most music industry email is read on phones." },
                { href: "/email-signature-gmail", title: "Gmail Signature Setup", desc: "How to manage multiple signatures in Gmail." },
                { href: "/email-signature-for-freelancers", title: "Email Signature for Freelancers", desc: "Relevant for self-employed musicians and independent artists." },
                { href: "/templates", title: "Signature Templates", desc: "Visually expressive templates for creative professionals." },
                { href: "/examples", title: "Signature Examples", desc: "Real examples from across different professional contexts." },
                { href: "/blog/email-signature-best-practices", title: "Email Signature Best Practices", desc: "What works and what to avoid in 2026." },
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
                <details key={i} className="group rounded-lg border border-border bg-white">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-foreground">
                    {faq.q}
                    <svg className="h-5 w-5 text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
              Build your artist signature today
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Music links, booking contact, professional design — works in every email client.
              Free, no account required, ready in under 10 minutes.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all"
            >
              Create Your Artist Signature — Free
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
