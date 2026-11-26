import { useEffect, useRef, useState } from "react";
import { INSTAGRAM_DM_URL, INSTAGRAM_HANDLE, PRIMARY_CTA_LABEL, PRIMARY_CTA_URL } from "@/lib/contact";
import { ContactPage, PrivacyPage, TermsPage } from "@/pages/legal";

const TonifyLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
        <stop offset="100%" stopColor="#d97706" stopOpacity="0"/>
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="1.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <circle cx="18" cy="18" r="15" stroke="#f59e0b" strokeWidth="0.9" strokeOpacity="0.55" filter="url(#glow)"/>
    <ellipse cx="18" cy="18" rx="15" ry="4.5" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.4"/>
    <ellipse cx="18" cy="18" rx="15" ry="9" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.3"/>
    <line x1="18" y1="3" x2="18" y2="33" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.38"/>
    <line x1="5" y1="10.5" x2="31" y2="25.5" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.38"/>
    <line x1="5" y1="25.5" x2="31" y2="10.5" stroke="#f59e0b" strokeWidth="0.7" strokeOpacity="0.38"/>
    <circle cx="18" cy="3" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="18" cy="33" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="5" cy="10.5" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="31" cy="10.5" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="5" cy="25.5" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="31" cy="25.5" r="2.2" fill="#fbbf24" filter="url(#glow)"/>
    <circle cx="18" cy="18" r="8" stroke="#fbbf24" strokeWidth="0.9" strokeOpacity="0.6" filter="url(#glow)"/>
    <circle cx="18" cy="18" r="4" stroke="#fcd34d" strokeWidth="1.1" strokeOpacity="0.75"/>
    <circle cx="18" cy="18" r="2.5" fill="url(#core)" filter="url(#glow)"/>
    <circle cx="18" cy="18" r="1.5" fill="#fbbf24"/>
    <circle cx="18" cy="18" r="0.7" fill="#fef3c7"/>
  </svg>
);

const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 8 6 12 14 4"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const NewsletterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 64,
        background: scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(245,158,11,0.10)",
      }}
    >
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <TonifyLogo />
        <span style={{ color: "#f3f4f6", fontSize: 18, fontWeight: 300, letterSpacing: "-0.02em" }}>Tonify</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a
          href={INSTAGRAM_DM_URL}
          className="hidden md:block"
          style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#f3f4f6")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
        >
          Instagram
        </a>
        <a
          href={PRIMARY_CTA_URL}
          style={{
            background: "#f59e0b",
            color: "#000",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: 8,
            transition: "background-color 0.15s ease-in-out",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#d97706")}
          onMouseLeave={e => (e.currentTarget.style.background = "#f59e0b")}
        >
          {PRIMARY_CTA_LABEL}
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 48px",
        background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(245,158,11,0.04) 0%, transparent 60%), #000000",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 720, width: "100%" }}>
        <div className="hero-content" style={{ marginBottom: 20 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.20)",
            color: "#fbbf24",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            borderRadius: 9999,
            padding: "6px 16px",
          }}>
            Now in Early Access
          </span>
        </div>

        <h1 className="hero-content-delay-1" style={{
          fontSize: "clamp(36px, 5.5vw, 72px)",
          fontWeight: 300,
          color: "#fff",
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          marginBottom: 20,
        }}>
          Turn Any Audio Into<br />
          <span style={{ color: "#f59e0b" }}>Agency-Ready</span> Content
        </h1>

        <p className="hero-content-delay-2" style={{
          color: "#9ca3af",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          maxWidth: 540,
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}>
          Upload a podcast, interview, or recording. Tonify delivers LinkedIn posts,
          Instagram scripts, and newsletters — perfectly matched to each client's brand
          voice. In minutes.
        </p>

        <div className="hero-content-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 16 }}>
          <a
            href={PRIMARY_CTA_URL}
            className="btn-primary"
            style={{
              background: "#f59e0b",
              color: "#000",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {PRIMARY_CTA_LABEL} →
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary"
            style={{
              border: "1px solid rgba(245,158,11,0.30)",
              color: "#fbbf24",
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See How It Works
          </a>
        </div>

        <div className="hero-content-delay-3" style={{ color: "#4b5563", fontSize: 13 }}>
          Free sample · No commitment · Urdu &amp; English recordings
        </div>
      </div>
    </section>
  );
}

function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "< 2 min", label: "Content turnaround" },
    { value: "3 formats", label: "Per upload" },
    { value: "Urdu + English", label: "Recordings supported" },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(245,158,11,0.08)",
        borderBottom: "1px solid rgba(245,158,11,0.08)",
        padding: "24px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#4b5563", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24 }}>
        Built for agencies that move fast
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", justifyContent: "center" }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
            }}
          >
            <div style={{ color: "#fbbf24", fontSize: 24, fontWeight: 600 }}>{stat.value}</div>
            <div style={{ color: "#6b7280", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <UploadIcon />,
      title: "Upload Your Media",
      desc: "Drop any MP3, WAV, or M4A file — podcasts, interviews, webinars, voice notes. Up to 50MB.",
    },
    {
      num: "02",
      icon: <UserIcon />,
      title: "Select Brand Profile",
      desc: "Choose the client brand profile. Tonify applies their exact tone, style rules, and past writing examples.",
    },
    {
      num: "03",
      icon: <DocumentIcon />,
      title: "Receive Polished Content",
      desc: "Get LinkedIn posts, Instagram scripts, and newsletter drafts — ready to copy, edit, and publish.",
    },
  ];

  return (
    <section id="how-it-works" style={{ background: "#000", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="scroll-reveal" style={{ color: "#f59e0b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", marginBottom: 16 }}>
          How It Works
        </p>
        <h2 className="scroll-reveal" style={{ color: "#fff", fontSize: "clamp(28px,4vw,40px)", fontWeight: 300, textAlign: "center", marginBottom: 64 }}>
          Three steps. Zero friction.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`card-hover scroll-reveal scroll-reveal-delay-${i + 1}`}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(245,158,11,0.10)",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <div style={{ color: "rgba(245,158,11,0.15)", fontSize: 48, fontWeight: 700, fontVariantNumeric: "tabular-nums", marginBottom: 16, lineHeight: 1 }}>
                {step.num}
              </div>
              <div style={{ marginBottom: 16 }}>{step.icon}</div>
              <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 500, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutputPreview() {
  const outputs = [
    {
      icon: <LinkedInIcon />,
      platform: "LinkedIn Post",
      content: `Most agencies don't have a content problem. They have a time problem.

Your client said something brilliant on last week's call. It's still sitting in a recording nobody has had time to turn into a post...`,
    },
    {
      icon: <InstagramIcon />,
      platform: "Instagram Script",
      content: `[HOOK: Show the before/after]
Your client has 3 hours of podcast content.
You have 2 hours to turn it into a month of posts.

Here's the system we use...`,
    },
    {
      icon: <NewsletterIcon />,
      platform: "Newsletter",
      content: `Subject: The content bottleneck nobody talks about

Every agency hits the same wall.
Great client. Great results.
No time to document them...`,
    },
  ];

  return (
    <section style={{ background: "#000", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="scroll-reveal" style={{ color: "#f59e0b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", marginBottom: 16 }}>
          What You Get
        </p>
        <h2 className="scroll-reveal" style={{ color: "#fff", fontSize: "clamp(28px,4vw,40px)", fontWeight: 300, textAlign: "center", marginBottom: 64 }}>
          Three outputs. One upload.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {outputs.map((output, i) => (
            <div
              key={i}
              className={`card-hover scroll-reveal scroll-reveal-delay-${i + 1}`}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(245,158,11,0.10)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div style={{
                padding: "16px 20px",
                borderBottom: "1px solid rgba(245,158,11,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                {output.icon}
                <span style={{ color: "#f3f4f6", fontSize: 14, fontWeight: 500 }}>{output.platform}</span>
              </div>
              <div style={{ padding: "16px 20px", background: "#000", minHeight: 192 }}>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.7, fontStyle: "italic", whiteSpace: "pre-line" }}>
                  {output.content}
                </p>
              </div>
              <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(245,158,11,0.08)" }}>
                <span style={{ color: "#4b5563", fontSize: 12 }}>Illustrative example · real client sample coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForAgencies() {
  const bullets = [
    "Multiple client profiles in one dashboard",
    "Brand voice preserved across every output",
    "Content ready in minutes, not hours",
    "Delivery to ClickUp & Slack (coming soon)",
  ];

  return (
    <section style={{
      background: "#0a0a0a",
      padding: "96px 24px",
      borderTop: "1px solid rgba(245,158,11,0.08)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
        <div className="scroll-reveal">
          <p style={{ color: "#f59e0b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Built For</p>
          <h2 style={{ color: "#fff", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 300, marginBottom: 20, lineHeight: 1.2 }}>
            Agencies managing multiple brand voices
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Your team shouldn't spend hours repurposing content for every client. Tonify handles
            the heavy lifting — you handle the strategy.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ marginTop: 1, flexShrink: 0 }}><CheckIcon /></span>
                <span style={{ color: "#d1d5db", fontSize: 15 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-2">
          <div style={{
            background: "#000",
            border: "1px solid rgba(245,158,11,0.15)",
            borderRadius: 16,
            padding: 32,
          }}>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 24 }}>The math is simple</p>

            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ color: "#9ca3af", fontSize: 14 }}>Manual content creation</span>
                <span style={{ color: "#9ca3af", fontSize: 14 }}>2–4 hours per client</span>
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(245,158,11,0.25)", marginBottom: 16 }} />

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ color: "#f3f4f6", fontSize: 14, fontWeight: 500 }}>With Tonify</span>
                <span style={{ color: "#fbbf24", fontSize: 14, fontWeight: 600 }}>&lt; 5 minutes per client</span>
              </div>
            </div>

            <p style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.6 }}>
              For agencies with 10+ clients, that's <strong style={{ color: "#f3f4f6" }}>30+ hours saved</strong> every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Brand voice setup for each client",
    "LinkedIn posts, Instagram scripts and newsletters",
    "Multiple client profiles in one dashboard",
    "Urdu, English and mixed Urdu-English recordings",
    "Local onboarding and support",
    "Billing in PKR for Pakistani agencies",
    "ClickUp & Slack delivery (coming soon)",
  ];

  return (
    <section id="pricing" style={{ background: "#000", padding: "96px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="scroll-reveal" style={{ color: "#f59e0b", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
          Pricing
        </p>
        <h2 className="scroll-reveal" style={{ color: "#fff", fontSize: "clamp(28px,4vw,40px)", fontWeight: 300, marginBottom: 16 }}>
          Early access pricing — DM us
        </h2>
        <p className="scroll-reveal" style={{ color: "#9ca3af", fontSize: 16, maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.6 }}>
          We're onboarding a small group of founding agencies and setting pricing with each one.
          Start with a free sample, then we'll quote for your client roster.
        </p>

        <div
          className="card-hover scroll-reveal"
          style={{
            background: "#0a0a0a",
            border: "2px solid rgba(245,158,11,0.35)",
            borderRadius: 16,
            padding: 32,
            textAlign: "left",
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          <p style={{ color: "#6b7280", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Founding agency access</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CheckIcon />
                <span style={{ color: "#d1d5db", fontSize: 14 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal">
          <a
            href={PRIMARY_CTA_URL}
            className="btn-primary"
            style={{
              display: "inline-block",
              background: "#f59e0b",
              color: "#000",
              fontWeight: 600,
              fontSize: 16,
              padding: "14px 32px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Message us on WhatsApp →
          </a>
          <p style={{ color: "#6b7280", fontSize: 14, marginTop: 16 }}>
            Prefer Instagram? DM <a href={INSTAGRAM_DM_URL} style={{ color: "#f59e0b", textDecoration: "none" }}>@{INSTAGRAM_HANDLE}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{
      background: "#000",
      padding: "128px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 400,
        background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
        <h2 className="scroll-reveal" style={{
          fontSize: "clamp(32px,5vw,64px)",
          fontWeight: 300,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Your content backlog ends here.
        </h2>
        <p className="scroll-reveal" style={{ color: "#9ca3af", fontSize: 18, marginBottom: 40 }}>
          Be one of our first agencies. Send one client recording and get a free sample back.
        </p>
        <div className="scroll-reveal">
          <a
            href={PRIMARY_CTA_URL}
            className="btn-primary"
            style={{
              display: "inline-block",
              background: "#f59e0b",
              color: "#000",
              fontWeight: 600,
              fontSize: 18,
              padding: "20px 40px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            {PRIMARY_CTA_LABEL}
          </a>
          <p style={{ color: "#4b5563", fontSize: 14, marginTop: 16 }}>
            Early access · No commitment · We reply on WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#000",
      borderTop: "1px solid rgba(245,158,11,0.08)",
      padding: "32px 24px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <TonifyLogo />
          <span style={{ color: "#4b5563", fontSize: 14 }}>© 2026 Tonify. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[["Privacy", "/privacy"], ["Terms", "/terms"], ["Contact", "/contact"]].map(([link, href]) => (
            <a key={link} href={href} style={{ color: "#4b5563", fontSize: 14, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9ca3af")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4b5563")}
            >
              {link}
            </a>
          ))}
        </div>
        <a href={INSTAGRAM_DM_URL} style={{ color: "rgba(245,158,11,0.6)", fontSize: 14, textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#f59e0b")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,158,11,0.6)")}
        >
          @{INSTAGRAM_HANDLE}
        </a>
      </div>
    </footer>
  );
}

function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <OutputPreview />
      <ForAgencies />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages: Record<string, () => JSX.Element> = {
    "/privacy": PrivacyPage,
    "/terms": TermsPage,
    "/contact": ContactPage,
  };
  const Page = pages[path];
  if (!Page) return <Home />;
  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}
