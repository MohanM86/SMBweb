import { useState, useEffect, useRef } from "react";
import { INDUSTRIES, getIndustry } from "./industries";
import { Ico, Check, Arrow, Star, Chevron, Rev, F, B, dot } from "./components/UI";

/*  SMBweb.no Showcase — SEO/AEO optimized, icon-only, no images
 *  Each industry is in src/industries/<bransje>.js — edit them individually.
 *  Shared components in src/components/UI.jsx
 */

/* ═══════════ SAMPLE INDUSTRY SITE ═══════════ */
function SampleSite({ d }) {
  const g = `linear-gradient(135deg, ${d.c}, ${d.c}99)`;
  return (
    <div style={{ fontFamily: B, color: "#1a1a1a", background: "#fff" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px", height: 64, borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.97)", backdropFilter: "blur(10px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: g, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Ico id={d.id} size={18} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>{d.co}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {["Hjem", "Tjenester", "Om oss", "Kontakt"].map((t, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? d.c : "#888", cursor: "pointer" }}>{t}</span>
          ))}
          <div style={{ background: d.c, color: "#fff", padding: "10px 22px", borderRadius: 7, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Få tilbud</div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: g, padding: "72px 48px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "32px 32px" }} />
        <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center", maxWidth: 920, margin: "0 auto" }}>
          <div style={{ color: "#fff" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.15)", padding: "6px 14px", borderRadius: 30, marginBottom: 24, fontSize: 12, fontWeight: 600 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={12} />)}
              <span style={{ marginLeft: 4 }}>{d.st.r} — {d.st.p.toLocaleString()}+ oppdrag</span>
            </div>
            <h1 style={{ fontFamily: F, fontSize: 42, fontWeight: 800, lineHeight: 1.08, margin: "0 0 16px" }}>{d.tag}</h1>
            <p style={{ fontSize: 15, lineHeight: 1.75, opacity: .88, margin: "0 0 28px", maxWidth: 420 }}>{d.desc}</p>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ background: "#fff", color: d.cd, padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>Kontakt oss <Arrow color={d.cd} /></div>
              <div style={{ background: "rgba(255,255,255,.15)", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer", border: "1px solid rgba(255,255,255,.25)" }}>Se tjenester</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,.12)" }}>
              <Ico id={d.id} size={56} color="rgba(255,255,255,.85)" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 720, margin: "-24px auto 0", position: "relative", zIndex: 3, background: "#fff", borderRadius: 12, boxShadow: "0 6px 30px rgba(0,0,0,.06)", border: "1px solid #eee" }}>
        {[{ v: `${d.st.y}+`, l: "Års erfaring" }, { v: d.st.p.toLocaleString() + "+", l: "Oppdrag" }, { v: `${d.st.t}`, l: "Ansatte" }, { v: d.st.r, l: "Rating" }].map((s, i) => (
          <div key={i} style={{ padding: "20px 12px", textAlign: "center", borderLeft: i > 0 ? "1px solid #eee" : "none" }}>
            <div style={{ fontFamily: F, fontSize: 20, fontWeight: 800, color: d.c }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "#bbb", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em", marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ padding: "64px 48px", maxWidth: 880, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, margin: "0 0 32px", color: "#111" }}>Tjenester</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {d.svc.map((s, i) => (
            <div key={i} style={{ borderRadius: 12, padding: "24px 20px", border: "1px solid #eee" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: d.cl, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <span style={{ fontFamily: F, fontWeight: 800, fontSize: 12, color: d.c }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ padding: "48px 48px 64px", maxWidth: 880, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, margin: "0 0 28px", color: "#111" }}>Kundeuttalelser</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {d.rev.map((r, i) => (
            <div key={i} style={{ borderRadius: 12, padding: "28px 24px", border: "1px solid #eee" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>{[...Array(5)].map((_, j) => <Star key={j} />)}</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#444", margin: "0 0 16px", fontStyle: "italic" }}>"{r.t}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: d.cl, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: d.c, fontFamily: F }}>{r.n.charAt(0)}</div>
                <span style={{ fontWeight: 700, fontSize: 12, color: "#111" }}>{r.n}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: g, padding: "52px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "32px 32px" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>Klar for å komme i gang?</h2>
          <div style={{ display: "inline-flex", background: "#fff", color: d.cd, padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 16 }}>Ta kontakt</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#0d0d0d", padding: "32px 48px 24px", textAlign: "center", fontSize: 12, color: "#555" }}>
        <span>{d.co} — {d.loc}</span>
        <div style={{ marginTop: 8, fontSize: 11, color: "#444" }}>Nettside av <span style={{ color: d.c, fontWeight: 700 }}>smbweb.no</span></div>
      </div>
    </div>
  );
}

/* ═══════════ LANDING PAGE ═══════════ */
function Landing({ onSelect }) {
  const indRef = useRef(null);
  const [faq, setFaq] = useState(null);

  const FAQS = [
    { q: "Hva koster en nettside fra SMBweb?", a: "990 kr/mnd med oppstart 4 990 kr. Inkluderer design, utvikling, hosting, domene, SSL, SEO og support. Ingen bindingstid." },
    { q: "Hvor lang tid tar det?", a: "Ferdig nettside innen 14 virkedager. Inkludert design, din tilbakemelding, justeringer og publisering." },
    { q: "Hvilke bransjer lager dere nettsider for?", a: "Elektrikere, snekkere, rørleggere, malere, taktekkere, renhold, frisører, tannleger, bilverksteder og hage/anlegg. Hver side er bransjetilpasset." },
    { q: "Er nettsidene SEO-optimalisert?", a: "Ja. Rask lastetid, mobilvennlig, strukturerte data, optimaliserte meta-tags og Google My Business-integrasjon." },
    { q: "Kan jeg endre innhold selv?", a: "Send oss endringer, vi oppdaterer for deg — inkludert i månedsprisen. Ubegrenset små endringer." },
  ];

  return (
    <div style={{ fontFamily: B, color: "#1a1a1a" }}>
      {/* HERO */}
      <section style={{ position: "relative", background: "#09090b", padding: "96px 56px 88px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-40%", right: "-20%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,.06) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "-30%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,.04) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "44px 44px" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ color: "#fff" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.06)", padding: "8px 18px", borderRadius: 40, marginBottom: 28, border: "1px solid rgba(255,255,255,.08)", fontSize: 12, fontWeight: 600 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
              Norges mest brukte nettside-tjeneste for SMB
            </div>

            <h1 style={{ fontFamily: F, fontSize: 54, fontWeight: 800, lineHeight: 1.04, margin: "0 0 22px", letterSpacing: "-.03em" }}>
              Profesjonelle nettsider for lokale bedrifter
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,.6)", maxWidth: 480, margin: "0 0 20px" }}>
              SMBweb designer og utvikler nettsider for håndverkere, klinikker og tjenesteytere i hele Norge. Fast pris — ferdig på 14 dager.
            </p>

            <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
              {[{ v: "200+", l: "Bedrifter" }, { v: "4.9", l: "Snittrating" }, { v: "14", l: "Dager" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: "#fff" }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em" }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14 }}>
              <button onClick={() => indRef.current?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#fff", color: "#111", border: "none", padding: "15px 34px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: B, display: "flex", alignItems: "center", gap: 8 }}>
                Se bransjeeksempler <Arrow color="#111" />
              </button>
              <div style={{ color: "#fff", padding: "15px 34px", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer", border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.04)" }}>Kontakt oss</div>
            </div>
          </div>

          {/* Price card */}
          <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "36px 32px", backdropFilter: "blur(16px)" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", marginBottom: 8 }}>Komplett nettside fra</div>
            <div style={{ fontFamily: F, fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>990 <span style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,.4)" }}>kr/mnd</span></div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", margin: "8px 0 24px" }}>Oppstart 4 990 kr</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Design og utvikling", "Hosting, domene og SSL", "SEO-optimalisert", "Responsivt design", "Månedlig support", "Ingen bindingstid"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,.7)" }}>
                  <Check color="#4ade80" size={14} /> {t}
                </div>
              ))}
            </div>
            <div style={{ background: "#fff", color: "#111", padding: "13px 0", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer", textAlign: "center", marginTop: 24 }}>Bestill nettside</div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <Rev>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px 40px", padding: "36px 48px", borderBottom: "1px solid #eee" }}>
          {["Ferdig på 14 dager", "Ingen bindingstid", "SEO-optimalisert", "Responsivt design", "Norsk support"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#666" }}>
              <Check /> {t}
            </div>
          ))}
        </div>
      </Rev>

      {/* What is SMBweb */}
      <section style={{ padding: "80px 56px", maxWidth: 1060, margin: "0 auto" }}>
        <Rev>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: "#bbb", marginBottom: 14 }}>Hva er SMBweb?</div>
              <h2 style={{ fontFamily: F, fontSize: 34, fontWeight: 800, lineHeight: 1.12, color: "#111", margin: "0 0 18px" }}>Nettside-tjenesten for norske småbedrifter</h2>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "#777" }}>
                SMBweb designer, utvikler og drifter profesjonelle nettsider for håndverkere og lokale tjenesteytere. Bransjespesifikk design med teknisk SEO — slik at kundene finner deg og blir imponert.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { t: "Bransjetilpasset", d: "Designet for din spesifikke bransje." },
                { t: "Lynrask", d: "Under 1 sek lastetid. Core Web Vitals." },
                { t: "SEO fra dag 1", d: "Strukturerte data og Google My Business." },
                { t: "Mobilvennlig", d: "Perfekt på mobil, nettbrett og desktop." },
              ].map((f, i) => (
                <Rev key={i} delay={i * 0.06}>
                  <div style={{ background: "#fafafa", borderRadius: 14, padding: "24px 20px", border: "1px solid #f0f0f0" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "#111", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, color: "#fff", fontWeight: 800, fontSize: 14 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#111", marginBottom: 4 }}>{f.t}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.6, color: "#999" }}>{f.d}</div>
                  </div>
                </Rev>
              ))}
            </div>
          </div>
        </Rev>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "80px 56px", background: "#fafafa" }}>
        <Rev>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontFamily: F, fontSize: 34, fontWeight: 800, color: "#111", textAlign: "center", margin: "0 0 40px" }}>SMBweb vs. alternativene</h2>
            <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid #eee" }}>
              {[
                ["", "SMBweb", "DIY", "Webbyrå"],
                ["Pris/mnd", "990 kr", "0–300 kr", "2–8 000 kr"],
                ["Oppstart", "4 990 kr", "0 kr", "15–80 000 kr"],
                ["Levert på", "14 dager", "40–80 timer", "4–12 uker"],
                ["SEO", "Inkludert", "Selv", "Varierer"],
                ["Support", "Inkludert", "Ingen", "Timebasert"],
              ].map((row, ri) => (
                <div key={ri} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", borderBottom: ri < 5 ? "1px solid #f0f0f0" : "none" }}>
                  {row.map((cell, ci) => (
                    <div key={ci} style={{
                      padding: ri === 0 ? "14px 20px" : "12px 20px",
                      fontSize: 13,
                      fontWeight: ri === 0 || ci === 0 ? 700 : ci === 1 ? 700 : 400,
                      color: ri === 0 && ci === 1 ? "#fff" : ci === 1 ? "#111" : ri === 0 ? "#111" : "#999",
                      background: ri === 0 && ci === 1 ? "#111" : ci === 1 && ri > 0 ? "#fafafa" : "transparent",
                      textAlign: ci > 0 ? "center" : "left",
                    }}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Rev>
      </section>

      {/* Industries */}
      <section ref={indRef} style={{ padding: "80px 56px" }}>
        <Rev>
          <div style={{ maxWidth: 1060, margin: "0 auto 44px" }}>
            <h2 style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: "#111", margin: "0 0 10px" }}>Nettsider tilpasset din bransje</h2>
            <p style={{ fontSize: 15, color: "#999", maxWidth: 420 }}>Klikk for å se en komplett eksempelside.</p>
          </div>
        </Rev>

        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            {INDUSTRIES.slice(0, 2).map((d, i) => (
              <Rev key={d.id} delay={i * 0.08}>
                <div onClick={() => onSelect(d.id)} style={{
                  borderRadius: 16, cursor: "pointer", background: `linear-gradient(135deg, ${d.c}, ${d.c}88)`,
                  padding: "40px 32px", minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  position: "relative", overflow: "hidden", transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "28px 28px" }} />
                  <div style={{ position: "absolute", top: 24, right: 28, opacity: .12 }}><Ico id={d.id} size={72} /></div>
                  <div style={{ position: "relative", color: "#fff" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", opacity: .7, marginBottom: 8 }}>{d.label}</div>
                    <div style={{ fontFamily: F, fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{d.co}</div>
                    <div style={{ fontSize: 12, opacity: .75, display: "flex", alignItems: "center", gap: 6 }}>{d.loc} · <Star size={12} /> {d.st.r}</div>
                  </div>
                </div>
              </Rev>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {INDUSTRIES.slice(2).map((d, i) => (
              <Rev key={d.id} delay={i * 0.04}>
                <div onClick={() => onSelect(d.id)} style={{
                  borderRadius: 14, cursor: "pointer", background: `linear-gradient(135deg, ${d.c}, ${d.c}88)`,
                  padding: "24px 20px", minHeight: 170, display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  position: "relative", overflow: "hidden", transition: "transform .3s, box-shadow .3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", top: 14, right: 14, opacity: .1 }}><Ico id={d.id} size={40} /></div>
                  <div style={{ color: "#fff" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", opacity: .6, marginBottom: 5 }}>{d.label}</div>
                    <div style={{ fontFamily: F, fontSize: 16, fontWeight: 800, marginBottom: 2, lineHeight: 1.2 }}>{d.co}</div>
                    <div style={{ fontSize: 11, opacity: .6 }}>{d.loc}</div>
                  </div>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 56px", background: "#fafafa" }}>
        <Rev>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: F, fontSize: 34, fontWeight: 800, color: "#111", textAlign: "center", margin: "0 0 40px" }}>Vanlige spørsmål</h2>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e5e5" }}>
                <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", fontFamily: B, textAlign: "left" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#111", paddingRight: 16 }}>{f.q}</span>
                  <Chevron open={faq === i} />
                </button>
                <div style={{ maxHeight: faq === i ? 200 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.23,1,.32,1)" }}>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "#777", margin: "0 0 18px" }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* Cities */}
      <section style={{ padding: "56px 56px", background: "#fff" }}>
        <Rev>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: "#111", margin: "0 0 24px" }}>Nettsider for bedrifter i hele Norge</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
              {["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Tromsø", "Lillestrøm", "Bærum", "Ålesund", "Tønsberg", "Bodø", "Hamar", "Skien", "Moss"].map((c, i) => (
                <span key={i} style={{ background: "#fafafa", border: "1px solid #eee", padding: "7px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "#666" }}>Nettside {c}</span>
              ))}
            </div>
          </div>
        </Rev>
      </section>

      {/* CTA */}
      <section style={{ background: "#09090b", padding: "80px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "40px 40px" }} />
        <Rev>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>Klar for din nye nettside?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", margin: "0 0 28px" }}>Bestill i dag — på nett innen 14 dager.</p>
            <div style={{ display: "inline-flex", background: "#fff", color: "#111", padding: "15px 38px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", alignItems: "center", gap: 8 }}>Bestill nettside <Arrow color="#111" /></div>
          </div>
        </Rev>
      </section>

      {/* Footer */}
      <footer style={{ background: "#09090b", borderTop: "1px solid #141414", padding: "48px 56px 36px", color: "#555", fontSize: 13 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: F, fontWeight: 900, fontSize: 15 }}>S</div>
              <span style={{ fontFamily: F, fontWeight: 800, fontSize: 17, color: "#fff" }}>SMBweb</span>
            </div>
            <p style={{ lineHeight: 1.8, color: "#444", maxWidth: 260, fontSize: 12 }}>Norges ledende leverandør av nettsider for små og mellomstore bedrifter.</p>
            <div style={{ fontSize: 11, color: "#333", marginTop: 10 }}>Et produkt fra <span style={{ color: "#555", fontWeight: 700 }}>webbyrå.no</span></div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Bransjer</div>
            {INDUSTRIES.slice(0, 5).map((d, i) => <div key={i} onClick={() => onSelect(d.id)} style={{ marginBottom: 8, color: "#444", cursor: "pointer", fontSize: 12 }}>{d.label}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Mer</div>
            {INDUSTRIES.slice(5).map((d, i) => <div key={i} onClick={() => onSelect(d.id)} style={{ marginBottom: 8, color: "#444", cursor: "pointer", fontSize: 12 }}>{d.label}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Kontakt</div>
            <div style={{ marginBottom: 8, color: "#444", fontSize: 12 }}>post@smbweb.no</div>
            <div style={{ marginBottom: 8, color: "#444", fontSize: 12 }}>22 00 00 00</div>
            <div style={{ color: "#444", fontSize: 12 }}>Oslo, Norge</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 32, paddingTop: 16, borderTop: "1px solid #141414", fontSize: 11, color: "#333" }}>2025 SMBweb — Alle rettigheter reservert</div>
      </footer>
    </div>
  );
}

/* ═══════════ MAIN APP ═══════════ */
export default function App() {
  const [active, setActive] = useState("forside");
  const contentRef = useRef(null);

  const nav = (id) => {
    setActive(id);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const ai = active !== "forside" ? INDUSTRIES.find(i => i.id === active) : null;

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden", fontFamily: B }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700;800;900&family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:3px}`}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 248, minWidth: 248, height: "100vh", background: "#09090b", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(255,255,255,.06)" }}>
        {/* Logo */}
        <div style={{ padding: "20px 18px 16px", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#fff,#ccc)", display: "flex", alignItems: "center", justifyContent: "center", color: "#111", fontFamily: F, fontWeight: 900, fontSize: 16 }}>S</div>
            <div>
              <div style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: "#fff", lineHeight: 1.1 }}>SMBweb</div>
              <div style={{ fontSize: 10, color: "#444", fontWeight: 600, letterSpacing: ".06em" }}>SHOWCASE</div>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "12px 8px" }}>
          {/* Forside */}
          <div
            onClick={() => nav("forside")}
            style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 9, cursor: "pointer", marginBottom: 2,
              background: active === "forside" ? "rgba(255,255,255,.07)" : "transparent",
              color: active === "forside" ? "#fff" : "#777",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.25 6.75L9 1.5l6.75 5.25V15a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
              <path d="M6.75 16.5V9h4.5v7.5" />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 13 }}>Forside</span>
            {active === "forside" && <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />}
          </div>

          {/* Section label */}
          <div style={{ padding: "14px 12px 8px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: "#333" }}>Bransjer</div>
          </div>

          {/* Industry items */}
          {INDUSTRIES.map(d => {
            const on = active === d.id;
            return (
              <div
                key={d.id}
                onClick={() => nav(d.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "7px 10px", borderRadius: 9, cursor: "pointer", marginBottom: 1,
                  background: on ? `${d.c}15` : "transparent",
                  transition: "background .15s",
                }}
                onMouseEnter={e => { if (!on) e.currentTarget.style.background = "rgba(255,255,255,.03)"; }}
                onMouseLeave={e => { if (!on) e.currentTarget.style.background = on ? `${d.c}15` : "transparent"; }}
              >
                <div style={{
                  width: 30, height: 30, borderRadius: 7,
                  background: on ? `linear-gradient(135deg, ${d.c}, ${d.c}88)` : "rgba(255,255,255,.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: on ? `1.5px solid ${d.c}40` : "1.5px solid transparent",
                }}>
                  <Ico id={d.id} size={14} color={on ? "#fff" : "#666"} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: on ? "#fff" : "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.label}</div>
                  <div style={{ fontSize: 9.5, color: "#444", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.co}</div>
                </div>
                {on && <div style={{ width: 3, height: 16, borderRadius: 2, background: d.c, flexShrink: 0 }} />}
              </div>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "#555" }}>Pris fra</span>
            <span style={{ fontFamily: F, fontSize: 15, fontWeight: 800, color: "#fff" }}>990 <span style={{ fontSize: 10, color: "#555" }}>kr/mnd</span></span>
          </div>
          <div style={{ background: "linear-gradient(135deg,#fff,#ddd)", color: "#111", padding: "9px 0", borderRadius: 7, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "center" }}>Bestill nettside</div>
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 10, color: "#333" }}>Drevet av <span style={{ color: "#555", fontWeight: 600 }}>webbyrå.no</span></div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main ref={contentRef} style={{ flex: 1, height: "100vh", overflow: "auto", background: "#fff" }}>
        {active === "forside" ? (
          <Landing onSelect={nav} />
        ) : ai ? (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 44, background: "#fafafa", borderBottom: "1px solid #eee", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 12, color: "#bbb" }}>Forhåndsvisning</span>
                <div style={{ width: 1, height: 14, background: "#e5e5e5" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: `linear-gradient(135deg, ${ai.c}, ${ai.c}88)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Ico id={ai.id} size={10} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>{ai.co}</span>
                  <span style={{ background: `${ai.c}12`, color: ai.c, border: `1px solid ${ai.c}25`, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{ai.label}</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 11, color: "#bbb" }}>Fra <span style={{ color: "#111", fontWeight: 700 }}>990 kr/mnd</span></span>
                <div style={{ background: `linear-gradient(135deg, ${ai.c}, ${ai.c}88)`, color: "#fff", padding: "5px 14px", borderRadius: 5, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Bestill lignende</div>
              </div>
            </div>
            <div style={{ flex: 1, overflow: "auto" }}>
              <SampleSite d={ai} />
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
