# NeatStamp Pro Features — Product Strategie v2

## Het kernidee

Free users krijgen een werkende signature, maar die is afhankelijk van
onze servers (hosted images, tracking pixel, branding badge). Na 90 dagen
zonder activiteit verloopt de signature.

Pro users krijgen pure, onafhankelijke HTML. Geen afhankelijkheid, geen
branding, volledige controle.

---

## Free vs Pro — Het verschil

### Free ($0)
- 1 signature (max)
- 2 templates (Minimal + Modern)
- Standaard kleuren (niet aanpasbaar)
- Max 2 social media links
- Foto/logo gehost op img.neatstamp.com (wij controleren)
- "Made with NeatStamp" badge (hosted image, klikbaar naar neatstamp.com)
- Tracking pixel ingebouwd (wij tellen opens)
- **Signature verloopt na 90 dagen inactiviteit**
  (images worden verwijderd, signature toont broken images)
- Geen Calendly/booking link
- Geen CTA banner
- Geen disclaimer
- Geen analytics zichtbaar
- Geen account nodig om te maken, WEL nodig om te bewaren

### Pro ($5/maand of $39/jaar)
- Onbeperkt signatures
- Alle 8+ templates
- Custom kleuren (hex picker)
- Onbeperkt social links
- **Pure HTML output** — geen hosted images, geen afhankelijkheid
  (foto wordt als data URI of eigen hosting instructie meegegeven)
- **Geen branding** — "Made with NeatStamp" verwijderd
- **Geen tracking pixel** — privacy voor de gebruiker
- **Geen expiratie** — signature werkt voor altijd
- Calendly/booking link
- CTA banner
- Legal disclaimer
- Click analytics in dashboard
- QR code generator
- Meerdere signatures opslaan
- Pronouns + adres velden

### Team ($3/user/maand, min 5 users)
- Alles in Pro
- Centraal beheer dashboard
- Brand guidelines afdwingen
- Medewerkers uitnodigen
- Afdeling-specifieke signatures
- Banner campaigns (schedule, rotate)
- Team analytics
- Admin rollen

---

## Technische architectuur

### Image hosting (Free users)
```
R2 bucket: neatstamp-images
├── photos/[sig-id].jpg        → profielfoto (max 200x200, <50KB)
├── logos/[sig-id].jpg         → bedrijfslogo
├── badge/neatstamp-badge.png  → "Made with NeatStamp" badge
└── t/[sig-id].gif             → 1x1 tracking pixel
```

### Free signature HTML bevat:
```html
<!-- Foto gehost op onze server -->
<img src="https://img.neatstamp.com/photos/abc123.jpg" />

<!-- Tracking pixel -->
<img src="https://img.neatstamp.com/t/abc123.gif" width="1" height="1" />

<!-- Branding badge, klikbaar -->
<a href="https://neatstamp.com?ref=sig&id=abc123">
  <img src="https://img.neatstamp.com/badge/neatstamp-badge.png" />
</a>
```

### Pro signature HTML bevat:
```html
<!-- Foto inline of eigen hosting -->
<img src="data:image/jpeg;base64,..." />
<!-- OF instructie om eigen URL te gebruiken -->

<!-- Geen tracking pixel -->
<!-- Geen branding -->
```

### 90-dagen cleanup:
- Cron job checkt tracking pixel hits
- Geen hits in 90 dagen → images verwijderd van R2
- Signature in email toont dan broken images
- Gebruiker moet terugkomen om te vernieuwen (of upgraden)

---

## Dashboard features

### Free user dashboard:
- 1 signature bekijken/bewerken
- Basis statistieken (opens afgelopen 7 dagen)
- "Upgrade to Pro" prominente CTA
- Signature verloopt over X dagen indicator

### Pro user dashboard:
- Alle signatures beheren
- Click analytics per signature (opens, link clicks)
- Banner campaign beheer
- QR code generator
- Account instellingen
- Subscription beheer (via LemonSqueezy portal)

### Team admin dashboard:
- Alles van Pro
- Teamleden beheren
- Brand guidelines instellen
- Afdeling signatures
- Team-wide analytics
- Banner scheduling

---

## Conversie triggers in de editor

1. Kleur picker → "Upgrade to Pro to customize colors" overlay
2. 3e social link → "Free accounts include 2 social links. Upgrade for unlimited."
3. Calendly veld → "Booking links are a Pro feature"
4. Template 3-8 → "PRO" badge met lock icon
5. Na signature copy → "Your signature expires in 90 days. Upgrade to Pro for permanent signatures."
6. Dashboard → "X days until your signature expires" banner

---

## Revenue projectie

| Maand | Free users | Conversie 5% | Pro MRR | Team MRR | Totaal |
|-------|-----------|-------------|---------|----------|--------|
| 1 | 1.000 | 50 | $250 | $0 | $250 |
| 3 | 5.000 | 250 | $1.250 | $150 | $1.400 |
| 6 | 15.000 | 750 | $3.750 | $450 | $4.200 |
| 12 | 50.000 | 2.500 | $12.500 | $1.500 | $14.000 |

Bij 50K free users × 5% conversie = $14K MRR in jaar 1.
