# SMBweb.no — Showcase

Profesjonelle nettsider for lokale bedrifter i hele Norge. Fra 990 kr/mnd.

## Kom i gang

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # → /dist
npm run preview    # Forhåndsvis produksjonsbygg
```

## Deploy til Vercel

```bash
# Alt 1: Vercel CLI
npx vercel

# Alt 2: GitHub → Vercel
# 1. Push til GitHub
# 2. Gå til vercel.com → Import project
# 3. Framework: Vite
# 4. Build command: npm run build
# 5. Output directory: dist
```

`vercel.json` er inkludert med SPA-rewrites og caching-headers.

## Prosjektstruktur

```
smbweb-showcase/
├── index.html                    # SEO: meta, OG, JSON-LD structured data
├── package.json
├── vite.config.js
├── vercel.json                   # Vercel deploy config
├── .gitignore
│
├── public/
│   ├── robots.txt                # Tillater alle crawlere inkl. AI
│   ├── sitemap.xml               # Alle 11 sider
│   ├── llms.txt                  # LLM/AEO content for AI-søk
│   └── .well-known/
│       └── ai-plugin.json        # AI discoverability
│
└── src/
    ├── main.jsx                  # React entry
    ├── App.jsx                   # Sidebar + Landing + routing
    │
    ├── components/
    │   └── UI.jsx                # Delte ikoner, animasjoner, konstanter
    │
    └── industries/               # ← REDIGER BRANSJER HER
        ├── index.js              # Barrel — importerer alle
        ├── elektriker.js
        ├── snekker.js
        ├── rorlegger.js
        ├── maler.js
        ├── taktekking.js
        ├── renhold.js
        ├── frisor.js
        ├── tannlege.js
        ├── bilverksted.js
        └── hage.js
```

## Redigere en bransje

Åpne f.eks. `src/industries/elektriker.js`:

```js
export default {
  id: "elektriker",
  label: "Elektriker",
  co: "Voltz Elektro AS",         // Firmanavn
  loc: "Oslo",                     // By
  c: "#D4A039",                    // Hovedfarge
  cd: "#B8872F",                   // Mørk variant
  cl: "#FBF5E6",                   // Lys variant
  tag: "Trygg og sertifisert...",  // Hero-tittel
  desc: "Alt av elektrisk...",     // Beskrivelse
  svc: ["Installasjon", ...],     // 6 tjenester
  st: { y: 15, p: 2400, t: 12, r: "4.9" },  // Stats
  rev: [{ t: "...", n: "Navn" }], // Kundeuttalelser
};
```

## Legge til ny bransje

1. Opprett `src/industries/nybransje.js` (kopier en eksisterende)
2. Legg til ikon-path i `src/components/UI.jsx` → `ICON_PATHS`
3. Importer i `src/industries/index.js`
4. Oppdater `public/sitemap.xml`
5. Oppdater `public/llms.txt`

## SEO/AEO-features

| Fil | Formål |
|---|---|
| `index.html` | Meta-tags, OG, JSON-LD (Organization, Service, FAQPage, WebSite) |
| `public/sitemap.xml` | Alle sider med prioritet og oppdateringsfrekvens |
| `public/robots.txt` | Tillater Google, Bing, ChatGPT, Claude, Perplexity |
| `public/llms.txt` | Strukturert innhold AI-modeller kan lese direkte |
| `public/.well-known/ai-plugin.json` | AI-tjeneste-metadata |
| Noscript-fallback | HTML-innhold for crawlere uten JS |

## Teknisk

- React 18 + Vite 6
- Fraunces (serif) + Sora (sans-serif)
- Null bilder — kun SVG-ikoner + CSS-gradienter
- IntersectionObserver scroll-animasjoner
- ~50KB total bundle
