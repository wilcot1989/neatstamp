# NeatStamp Sub-Niche Strategie

## De Niche: Email Signatures
## De Sub-Niche: Outlook-proof signatures voor bedrijfsteams die ook op mobiel werken

---

## Waarom deze sub-niche?

### Het probleem in één zin:
**75% van alle bedrijven beheert email signatures handmatig, terwijl Microsoft actief Outlook kapotmaakt met de Nieuwe Outlook migratie — en 60% van die emails wordt op mobiel geopend waar de signature er anders uitziet.**

### De cijfers die dit onderbouwen:

| Feit | Cijfer | Bron |
|------|--------|------|
| Microsoft 365 betaalde seats | 400 miljoen | Microsoft 2026 |
| Outlook marktaandeel (enterprise) | 94,74% | 6sense 2026 |
| Emails geopend op mobiel (zakelijk) | 60% | Rocketseed 2026 |
| Bedrijven ZONDER signature tool | 75% | HubSpot/WiseStamp |
| Jaarlijkse kosten handmatig beheer (500 man) | $28.000 | Exclaimer |
| Marktomvang 2026 | $961 miljoen | Research and Markets |
| Marktgroei per jaar | 25,44% | Research and Markets |
| Marktomvang 2032 (prognose) | $3,8 miljard | Research and Markets |

### Wat er NU (2025-2026) acuut speelt:

1. **Nieuwe Outlook migratie** — Microsoft pusht alle bedrijven van classic Outlook naar de nieuwe Electron-gebaseerde versie. Dit breekt bestaande signatures:
   - Mei 2025: Windows update verwijderde signatures bij duizenden bedrijven
   - Nieuwe Outlook staat maar 1 signature toe (was meerdere)
   - HTML signatures worden vergroot en vervormd
   - Signature images laden traag en blokkeren het verzenden
   - Signatures syncen niet tussen OWA en Nieuwe Outlook app

2. **Mobiel overtreft desktop** — 60% van zakelijke emails wordt op mobiel geopend, maar:
   - Outlook Mobile slaat signatures lokaal op (geen sync met server)
   - CSS media queries werken niet in email clients
   - Een signature die er goed uitziet op desktop breekt op een 375px telefoonscherm
   - Er is geen tool die dit automatisch oplost

3. **Remote/hybrid werk** — Teams zijn verspreid, IT heeft minder controle:
   - Medewerkers gebruiken meerdere devices (laptop, telefoon, tablet)
   - Elke device heeft potentieel een andere signature of geen
   - Marketing kan niet garanderen dat de juiste banner/CTA overal zichtbaar is

---

## Onze doelgroep

### Primair: IT managers en Office Managers bij bedrijven van 10-200 medewerkers

**Wie ze zijn:**
- Gebruiken Microsoft 365 / Outlook
- Hebben 10-200 medewerkers die dagelijks emails sturen
- Willen consistent merk-uitstraling in alle uitgaande mail
- Hebben geen budget voor Exclaimer ($2-6/user/mo = $2.400-14.400/jaar)
- Beheren nu signatures handmatig (copy-paste, IT tickets, Word templates)

**Hun dagelijkse frustraties:**
- "Marketing stuurt een nieuwe template, maar de helft van het team plakt hem verkeerd in"
- "De signatures zien er goed uit op mijn laptop maar op mijn telefoon is het een ramp"
- "We hebben 3 nieuwe medewerkers en IT moet handmatig hun signatures opzetten"
- "Na de Outlook update is de signature van iedereen weg"
- "Onze CEO wil een seasonal banner maar het kost 2 uur om dat bij iedereen te updaten"

### Secundair: Freelancers en ZZP'ers die professioneel willen overkomen

- Willen een nette signature zonder technische kennis
- Willen dat het werkt in Outlook EN Gmail EN op hun telefoon
- Betalen niet graag $5-10/maand voor iets dat ze één keer instellen

---

## Onze positionering

### Tagline optie 1:
> **"Email signatures that actually work in Outlook. For your entire team."**

### Tagline optie 2:
> **"The only signature tool that guarantees Outlook + mobile compatibility."**

### Tagline optie 3:
> **"Stop fixing broken email signatures. Start with one that works everywhere."**

### Elevator pitch:
> NeatStamp is de email signature tool gebouwd voor bedrijven die Outlook gebruiken. Wij garanderen dat je signature er identiek uitziet op desktop, mobiel, Outlook, Gmail en Apple Mail. Met onze Outlook Compatibility Tester, Deliverability Score en Dark Mode Preview weet je VOOR het versturen dat alles klopt. Je hele team dezelfde signature in 5 minuten, niet 5 uur.

---

## Wat wij bieden dat NIEMAND anders biedt

### 1. Outlook Compatibility Tester (UNIEK)
- 11-punts analyse specifiek voor Outlook
- Checkt: border-radius, max-width, background images, SVG, base64, inline styles
- Geeft per probleem een fix-suggestie
- Geen enkele concurrent biedt dit

### 2. Deliverability Score Checker (UNIEK)
- Checkt of je signature emails naar spam stuurt
- 8 checks: HTML grootte, link count, image count, HTTPS, etc.
- Score 0-100 met actionable feedback
- Litmus biedt iets vergelijkbaars voor $99/maand — wij gratis (in Pro)

### 3. Dark Mode Preview (UNIEK)
- Toggle om te zien hoe je signature eruitziet in dark mode
- Waarschuwt automatisch voor problemen (transparante PNG, donkere tekst)
- Geen concurrent waarschuwt proactief voor dark mode issues

### 4. Gegarandeerd Outlook-safe HTML
- Alle templates zijn table-based met inline CSS
- width=500 op elke outer table
- Geen CSS classes (Outlook stript ze)
- Foto's worden gecropped naar shape (cirkel/rounded) als JPEG met witte achtergrond — werkt zelfs in Outlook dat geen border-radius ondersteunt
- Social icons als PNG (niet SVG — Outlook blokkeert SVG)

### 5. Mobile-safe output
- Table-based layouts die werken op 375px schermen
- Geen CSS media queries nodig
- Foto's met expliciete width/height attributen
- Getest op Outlook Mobile, Gmail app, Apple Mail

---

## Concurrentie-positionering

| Wij vs | Hun probleem | Onze oplossing |
|--------|-------------|----------------|
| **Exclaimer** ($2-6/user/mo) | Te duur, te complex voor 10-200 man | $3/user/mo, self-service, 5 min setup |
| **CodeTwo** ($1.11/user/mo) | Vereist server install, IT kennis | Web-based, geen installatie |
| **WiseStamp** (2.8/5 Trustpilot) | Billing traps, geen cancel knop | 1-click cancel, transparante billing |
| **MySignature** | Beperkte templates, 1 signature op free | 160+ varianten, Outlook tester |
| **NEWOLDSTAMP** | Geen deliverability check, geen dark mode preview | Beide als Pro feature |
| **HubSpot Generator** (gratis) | Geen team management, basis templates | Team plan, 20 layouts, deployment scripts |
| **Canva** (gratis) | Geen email-specifieke HTML, breekt in Outlook | Gegarandeerd Outlook-safe |

---

## Product roadmap voor deze sub-niche

### Nu al gebouwd:
- [x] Outlook Compatibility Tester (11 checks)
- [x] Deliverability Score Checker (8 checks)
- [x] Dark Mode Preview + waarschuwingen
- [x] 20 templates × 8 kleuren = 160+ varianten
- [x] Outlook-safe HTML output (tables, inline CSS, PNG icons)
- [x] Foto crop naar shape voor Outlook
- [x] Google Workspace deployment script
- [x] Microsoft 365 PowerShell deployment script
- [x] Master Template systeem (CSV upload)
- [x] Chrome Extension voor Gmail
- [x] AI Signature Generator

### Nog te bouwen (prioriteit):
1. **Mobile Signature Sync App** — sync signature naar Outlook Mobile / Gmail app
   - Push notifications bij template updates
   - Automatisch installeren zonder copy-paste
   - Dit is de killer feature die niemand heeft

2. **Outlook Plugin** — directe integratie in Outlook (desktop + New Outlook)
   - Signature selector in Outlook zelf
   - Automatisch de juiste signature per account
   - Bescherming tegen Outlook updates die signatures wissen

3. **Real-time Outlook Preview** — toon exact hoe je signature eruitziet in:
   - Outlook Desktop (classic)
   - Outlook Desktop (new)
   - Outlook Web (OWA)
   - Outlook Mobile (iOS)
   - Outlook Mobile (Android)

4. **Flat-fee Team Pricing**
   - $29/maand tot 25 users
   - $59/maand tot 100 users
   - Niet per-user (ondersnijdt Exclaimer/CodeTwo)

---

## Content strategie voor deze sub-niche

### Hoge prioriteit keywords (bewezen zoekvolume):
- "email signature outlook" — 227 suggesties
- "email signature branding" — 155 suggesties
- "email signature mobile" — 107 suggesties
- "email signature for company" — 98 suggesties
- "email signature outlook 365" — 77 suggesties
- "email signature outlook mobile" — 71 suggesties

### Content die we al hebben:
- /email-signature-outlook (hoofdpagina)
- /email-signature-outlook-365
- /email-signature-outlook-compatible
- /email-signature-mobile-friendly
- /email-signature-for-teams
- /email-signature-for-business
- /blog/outlook-signature-not-working
- /blog/email-signature-not-showing-outlook
- /blog/outlook-signature-template-guide

### Content die we nog nodig hebben:
- "Nieuwe Outlook signature problemen — complete gids" (actueel probleem)
- "Email signature deployment voor Microsoft 365 teams"
- "Outlook Mobile signature instellen — stap voor stap"
- "Email signature management kosten calculator"
- "Van handmatig naar automatisch: signature management guide"

---

## Go-to-market

### Kanalen:
1. **SEO** — we hebben al 111 pagina's, focus op Outlook + team keywords
2. **Microsoft Community forums** — antwoord geven op Outlook signature vragen met link naar onze tool
3. **IT communities** — Reddit r/sysadmin, r/Office365, Spiceworks
4. **Product Hunt launch** — "The Outlook-proof email signature tool"
5. **LinkedIn content** — "Stop fixing broken signatures" campagne

### Pricing model:
| Plan | Prijs | Doelgroep |
|------|-------|-----------|
| Free | $0 | Individuen, 1 signature, 2 templates |
| Pro | $5/maand | Professionals, alle features |
| Team | $29/maand (tot 25 users) | Kleine bedrijven |
| Team+ | $59/maand (tot 100 users) | Middelgrote bedrijven |

Het flat-fee model is onderscheidend — Exclaimer en CodeTwo rekenen per user, wat snel duur wordt.

---

## Samenvatting

**Niche:** Email signatures
**Sub-niche:** Outlook-proof signatures voor bedrijfsteams + mobiel
**Doelgroep:** IT/Office managers bij bedrijven van 10-200 medewerkers met Microsoft 365
**Probleem:** Outlook breekt signatures, mobiel toont ze verkeerd, handmatig beheer kost duizenden euro's
**Onze oplossing:** De enige tool die garandeert dat je signature werkt in Outlook + mobiel, voor je hele team, voor een flat fee
**Onderscheidend:** Outlook Tester, Deliverability Checker, Dark Mode Preview — geen concurrent heeft dit
**Markt:** $961M in 2026, groeit 25%/jaar, 75% bedrijven nog onbediend
