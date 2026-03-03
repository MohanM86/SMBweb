import { useState, useRef } from "react";
import { Check, Arrow, Star, Chevron, Rev, F, B, dot } from "./UI";

/* Custom icon renderer for elektriker services */
function SvcIcon({ path, size = 22, color = "#D4A039" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

/* Animated counter */
function Num({ value }) {
  const clean = String(value).replace(/[^0-9.]/g, "");
  const suffix = String(value).replace(/[0-9.]/g, "");
  return <span>{clean}{suffix}</span>;
}

export default function ElektrikerSite({ d }) {
  const [faq, setFaq] = useState(null);
  const [showAllSvc, setShowAllSvc] = useState(false);
  const g = `linear-gradient(135deg, ${d.c}, #C4922E)`;
  const visibleSvc = showAllSvc ? d.services : d.services.slice(0, 6);

  return (
    <div style={{ fontFamily: B, color: "#1a1a1a", background: "#fff" }}>

      {/* ── Emergency banner ── */}
      {d.emergency?.active && (
        <div style={{ background: "#B91C1C", color: "#fff", padding: "10px 36px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 13, fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h6l-1 6 10-12h-6l1-6z" /></svg>
          {d.emergency.text}
          <span style={{ background: "rgba(255,255,255,.2)", padding: "4px 14px", borderRadius: 5, fontWeight: 800, letterSpacing: ".03em" }}>{d.emergency.phone}</span>
        </div>
      )}

      {/* ── Navbar ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 68, borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.97)", backdropFilter: "blur(12px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: g, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h6l-1 6 10-12h-6l1-6z" /></svg>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#111", fontFamily: F }}>{d.co}</div>
            <div style={{ fontSize: 10, color: "#bbb", fontWeight: 600, letterSpacing: ".04em" }}>AUTORISERT ELEKTRIKER · {d.loc.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Tjenester", "Priser", "Om oss", "Områder", "FAQ", "Kontakt"].map((t, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 600, color: "#888", cursor: "pointer" }}>{t}</span>
          ))}
          <div style={{ background: d.c, color: "#fff", padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 11.3l-2.4-.7a1 1 0 00-1 .3l-1.1 1.1a10 10 0 01-4.5-4.5l1.1-1.1a1 1 0 00.3-1L5.7 3a1 1 0 00-1-.8H3a1.2 1.2 0 00-1.2 1.3A12.3 12.3 0 0013.5 15a1.2 1.2 0 001.3-1.2v-1.5a1 1 0 00-1-1z" /></svg>
            Ring oss
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ background: "#09090b", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "-30%", right: "-15%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${d.c}18, transparent 70%)` }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 48px 72px", maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ color: "#fff" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.06)", padding: "7px 16px", borderRadius: 32, marginBottom: 28, border: "1px solid rgba(255,255,255,.08)", fontSize: 12, fontWeight: 600 }}>
              <div style={{ display: "flex", gap: 2 }}>{[...Array(5)].map((_, i) => <Star key={i} size={11} />)}</div>
              {d.st.r} basert på {d.st.reviews} vurderinger
            </div>
            <h1 style={{ fontFamily: F, fontSize: 48, fontWeight: 800, lineHeight: 1.06, margin: "0 0 20px", letterSpacing: "-.02em" }}>{d.tag}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.6)", margin: "0 0 12px", maxWidth: 480 }}>{d.desc}</p>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,.35)", margin: "0 0 36px", maxWidth: 440 }}>{d.heroSub}</p>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ background: d.c, color: "#fff", padding: "14px 32px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>Få gratis befaring <Arrow color="#fff" /></div>
              <div style={{ background: "rgba(255,255,255,.06)", color: "#fff", padding: "14px 32px", borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: "pointer", border: "1px solid rgba(255,255,255,.12)" }}>Se tjenester</div>
            </div>
          </div>
          {/* Stats card */}
          <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "36px 32px", backdropFilter: "blur(12px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { v: `${d.st.y}+`, l: "Års erfaring", icon: "M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { v: `${d.st.p.toLocaleString()}+`, l: "Oppdrag utført", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { v: `${d.st.t}`, l: "Elektrikere", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
                { v: d.st.r, l: "Google-rating", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: "20px 12px", background: "rgba(255,255,255,.03)", borderRadius: 14, border: "1px solid rgba(255,255,255,.05)" }}>
                  <div style={{ margin: "0 auto 10px", width: 36, height: 36, borderRadius: 10, background: `${d.c}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={d.c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
                  </div>
                  <div style={{ fontFamily: F, fontSize: 26, fontWeight: 800, color: "#fff" }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications bar ── */}
      <div style={{ background: d.cl, borderBottom: `2px solid ${d.c}15` }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "20px 48px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 32px" }}>
          {d.certs.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, color: d.cd }}>
              <Check color={d.c} size={14} /> {c}
            </div>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section style={{ padding: "80px 48px", maxWidth: 1060, margin: "0 auto" }}>
        <Rev>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: d.c, marginBottom: 8 }}>Tjenester</div>
          <h2 style={{ fontFamily: F, fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#111" }}>Alt innen elektrisk arbeid</h2>
          <p style={{ fontSize: 15, color: "#999", margin: "0 0 40px", maxWidth: 500 }}>Vi dekker hele spekteret — fra én ny stikkontakt til komplett installasjon i næringsbygg.</p>
        </Rev>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {visibleSvc.map((s, i) => (
            <Rev key={i} delay={i * 0.04}>
              <div style={{ borderRadius: 14, padding: "28px 24px", border: "1px solid #eee", transition: "border-color .25s, box-shadow .25s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = d.c; e.currentTarget.style.boxShadow = `0 4px 24px ${d.c}12`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: d.cl, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <SvcIcon path={s.icon} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#111", marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: "#999" }}>{s.desc}</div>
              </div>
            </Rev>
          ))}
        </div>
        {d.services.length > 6 && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button onClick={() => setShowAllSvc(!showAllSvc)} style={{ background: "none", border: `1.5px solid ${d.c}`, color: d.c, padding: "11px 28px", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: B, display: "inline-flex", alignItems: "center", gap: 6 }}>
              {showAllSvc ? "Vis færre" : `Vis alle ${d.services.length} tjenester`}
              <Chevron open={showAllSvc} />
            </button>
          </div>
        )}
      </section>

      {/* ── Pricing ── */}
      <section style={{ padding: "80px 48px", background: "#fafafa" }}>
        <Rev>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: d.c, marginBottom: 8, textAlign: "center" }}>Prisoversikt</div>
            <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#111", textAlign: "center" }}>Hva koster en elektriker i Oslo?</h2>
            <p style={{ fontSize: 14, color: "#999", textAlign: "center", margin: "0 0 36px" }}>Veiledende priser. Du får alltid fast pris etter gratis befaring.</p>
            <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid #eee" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "14px 28px", background: "#111", color: "#fff" }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Tjeneste</span>
                <span style={{ fontSize: 13, fontWeight: 700, textAlign: "right" }}>Prisindikasjon</span>
              </div>
              {d.pricing.map((p, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "16px 28px", borderBottom: i < d.pricing.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                  <span style={{ fontSize: 14, color: "#333", fontWeight: 600 }}>{p.service}</span>
                  <span style={{ fontSize: 14, color: d.cd, fontWeight: 700, textAlign: "right" }}>{p.range}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#bbb", textAlign: "center", marginTop: 16 }}>Alle priser inkl. materiell og mva. Fast pris avtales etter befaring.</p>
          </div>
        </Rev>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: "80px 48px", background: "#09090b", color: "#fff" }}>
        <Rev>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: "#555", marginBottom: 10 }}>Slik jobber vi</div>
            <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800 }}>Fra kontakt til ferdig jobb</h2>
          </div>
        </Rev>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 920, margin: "0 auto" }}>
          {d.process.map((s, i) => (
            <Rev key={i} delay={i * 0.08}>
              <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 14, padding: "32px 22px", position: "relative" }}>
                <div style={{ fontFamily: F, fontSize: 40, fontWeight: 900, color: `${d.c}25`, marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontFamily: F, fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{s.t}</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#777", margin: 0 }}>{s.d}</p>
                {i < 3 && <div style={{ position: "absolute", top: "50%", right: -12, width: 24, height: 2, background: "rgba(255,255,255,.1)" }} />}
              </div>
            </Rev>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ padding: "80px 48px", maxWidth: 1060, margin: "0 auto" }}>
        <Rev>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: d.c, marginBottom: 8 }}>Kundeuttalelser</div>
            <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, margin: "0 0 8px", color: "#111" }}>{d.st.reviews} fornøyde kunder</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 14, color: "#666" }}>
              <div style={{ display: "flex", gap: 2 }}>{[...Array(5)].map((_, i) => <Star key={i} size={16} />)}</div>
              {d.st.r} snittrating på Google
            </div>
          </div>
        </Rev>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {d.rev.map((r, i) => (
            <Rev key={i} delay={i * 0.05}>
              <div style={{ borderRadius: 14, padding: "28px 24px", border: "1px solid #eee", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={13} />)}</div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#444", margin: "0 0 auto", fontStyle: "italic", paddingBottom: 18 }}>"{r.t}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid #f3f3f3", paddingTop: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: d.cl, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: d.c, fontFamily: F }}>{r.n.charAt(0)}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>{r.n}</div>
                    <div style={{ fontSize: 11, color: "#bbb" }}>{r.r}</div>
                  </div>
                </div>
              </div>
            </Rev>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 48px", background: "#fafafa" }}>
        <Rev>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: d.c, marginBottom: 8 }}>FAQ</div>
              <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: "#111" }}>Vanlige spørsmål om elektriker</h2>
            </div>
            {d.faq.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e5e5", background: "#fff", marginBottom: 2, borderRadius: i === 0 ? "12px 12px 0 0" : i === d.faq.length - 1 ? "0 0 12px 12px" : 0 }}>
                <button onClick={() => setFaq(faq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", background: "none", border: "none", cursor: "pointer", fontFamily: B, textAlign: "left" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#111", paddingRight: 16 }}>{f.q}</span>
                  <Chevron open={faq === i} />
                </button>
                <div style={{ maxHeight: faq === i ? 200 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.23,1,.32,1)" }}>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "#666", margin: 0, padding: "0 24px 18px" }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* ── Areas ── */}
      <section style={{ padding: "64px 48px" }}>
        <Rev>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: d.c, marginBottom: 8 }}>Dekningsområde</div>
            <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, margin: "0 0 8px", color: "#111" }}>Elektriker i hele Oslo</h2>
            <p style={{ fontSize: 14, color: "#999", margin: "0 0 28px" }}>Vi dekker alle bydeler og nærliggende områder</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
              {d.areas.map((a, i) => (
                <span key={i} style={{ background: "#fafafa", border: "1px solid #eee", padding: "7px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "#666" }}>Elektriker {a}</span>
              ))}
            </div>
          </div>
        </Rev>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: g, padding: "72px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: dot, backgroundSize: "36px 36px" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>Trenger du elektriker?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.8)", margin: "0 0 28px" }}>Gratis befaring og fast pris. Ring oss eller fyll ut skjema.</p>
          <div style={{ display: "inline-flex", gap: 14 }}>
            <div style={{ background: "#fff", color: d.cd, padding: "14px 32px", borderRadius: 9, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={d.cd} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 11.3l-2.4-.7a1 1 0 00-1 .3l-1.1 1.1a10 10 0 01-4.5-4.5l1.1-1.1a1 1 0 00.3-1L5.7 3a1 1 0 00-1-.8H3a1.2 1.2 0 00-1.2 1.3A12.3 12.3 0 0013.5 15a1.2 1.2 0 001.3-1.2v-1.5a1 1 0 00-1-1z" /></svg>
              Ring {d.emergency.phone}
            </div>
            <div style={{ background: "rgba(255,255,255,.15)", color: "#fff", padding: "14px 32px", borderRadius: 9, fontWeight: 600, fontSize: 15, cursor: "pointer", border: "1px solid rgba(255,255,255,.25)" }}>Send forespørsel</div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#0a0a0a", color: "#888", fontSize: 13, padding: "56px 48px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 40, maxWidth: 1060, margin: "0 auto" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: g, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h6l-1 6 10-12h-6l1-6z" /></svg>
              </div>
              <span style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: "#fff" }}>{d.co}</span>
            </div>
            <p style={{ lineHeight: 1.8, color: "#555", margin: "0 0 14px", maxWidth: 260, fontSize: 12 }}>{d.desc.substring(0, 120)}...</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {d.certs.slice(0, 3).map((c, i) => (
                <span key={i} style={{ background: "#1a1a1a", padding: "4px 10px", borderRadius: 5, fontSize: 10, color: "#666" }}>{c}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Tjenester</div>
            {d.services.slice(0, 6).map((s, i) => <div key={i} style={{ marginBottom: 9, color: "#555", fontSize: 12 }}>{s.name}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Flere tjenester</div>
            {d.services.slice(6).map((s, i) => <div key={i} style={{ marginBottom: 9, color: "#555", fontSize: 12 }}>{s.name}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>Kontakt</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, color: "#555", fontSize: 12 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M14 11.3l-2.4-.7a1 1 0 00-1 .3l-1.1 1.1a10 10 0 01-4.5-4.5l1.1-1.1a1 1 0 00.3-1L5.7 3a1 1 0 00-1-.8H3a1.2 1.2 0 00-1.2 1.3A12.3 12.3 0 0013.5 15a1.2 1.2 0 001.3-1.2v-1.5a1 1 0 00-1-1z" /></svg>
              {d.emergency.phone}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, color: "#555", fontSize: 12 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="3" width="13" height="10" rx="1.5" /><path d="M1.5 4.5l6.5 4.5 6.5-4.5" /></svg>
              post@voltz-elektro.no
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, color: "#555", fontSize: 12 }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 1A4 4 0 0111 5c0 3.5-4 8-4 8S3 8.5 3 5A4 4 0 017 1z" /><circle cx="7" cy="5" r="1.3" /></svg>
              {d.loc}, Norge
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555", fontSize: 12 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Man–fre 07–16 · Vakt 24/7
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 36, paddingTop: 20, borderTop: "1px solid #1a1a1a", maxWidth: 1060, margin: "36px auto 0" }}>
          <div style={{ fontSize: 11, color: "#444" }}>{d.co} — Org.nr 999 999 999 — Autorisert elektroinstallatør</div>
          <div style={{ fontSize: 11, color: "#333", marginTop: 6 }}>Nettside av <span style={{ color: d.c, fontWeight: 700 }}>smbweb.no</span></div>
        </div>
      </footer>
    </div>
  );
}
