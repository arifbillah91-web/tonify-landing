import type { ReactNode } from "react";
import {
  INSTAGRAM_DM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

const LAST_UPDATED = "26 November 2026";

function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main style={{ background: "#000", minHeight: "100vh", padding: "120px 24px 80px" }}>
      <article style={{ maxWidth: 720, margin: "0 auto", color: "#d1d5db", fontSize: 15, lineHeight: 1.75 }}>
        <h1 style={{ color: "#fff", fontSize: "clamp(28px,4vw,40px)", fontWeight: 300, marginBottom: 8 }}>{title}</h1>
        <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 40 }}>Last updated: {LAST_UPDATED}</p>
        {children}
      </article>
    </main>
  );
}

const h2: React.CSSProperties = { color: "#f3f4f6", fontSize: 20, fontWeight: 500, margin: "32px 0 12px" };
const link: React.CSSProperties = { color: "#f59e0b", textDecoration: "none" };
const list: React.CSSProperties = { paddingLeft: 20, listStyle: "disc", display: "flex", flexDirection: "column", gap: 6 };

function ContactLine() {
  return (
    <p>
      WhatsApp: <a href={WHATSAPP_URL} style={link}>{WHATSAPP_DISPLAY}</a>
      {" · "}
      Instagram: <a href={INSTAGRAM_DM_URL} style={link}>@{INSTAGRAM_HANDLE}</a>
    </p>
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        Tonify is an early-access AI content tool for marketing agencies. This page explains what
        information we collect and how we use it.
      </p>

      <h2 style={h2}>What we collect</h2>
      <ul style={list}>
        <li>Contact details you share with us (name, agency name, phone number, Instagram handle).</li>
        <li>Recordings, transcripts and brand examples you send us to create content samples.</li>
        <li>Basic, anonymous website usage data from our hosting provider.</li>
      </ul>

      <h2 style={h2}>How we use it</h2>
      <ul style={list}>
        <li>To reply to you and create the samples or content you ask for.</li>
        <li>To improve Tonify's output quality for your account.</li>
      </ul>
      <p style={{ marginTop: 12 }}>We do not sell your data or your clients' data.</p>

      <h2 style={h2}>Who processes it</h2>
      <p>
        Recordings are processed by third-party transcription and AI providers, and the website is
        hosted by a third-party hosting provider. They process data only to provide their service to us.
      </p>

      <h2 style={h2}>Keeping and deleting data</h2>
      <p>
        We keep sample files only as long as needed to deliver your sample. You can ask us to delete
        your data at any time and we will confirm once it is deleted.
      </p>

      <h2 style={h2}>Contact</h2>
      <ContactLine />
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        Tonify is in early access. By using this website or sending us material for a sample, you
        agree to these terms.
      </p>

      <h2 style={h2}>Free samples</h2>
      <p>Samples are free and carry no obligation to buy.</p>

      <h2 style={h2}>Your content</h2>
      <ul style={list}>
        <li>You confirm you have the right to share any recording or material you send us.</li>
        <li>Content we produce for you belongs to you or your client.</li>
        <li>AI-generated content should be reviewed by you before publishing.</li>
      </ul>

      <h2 style={h2}>Pricing</h2>
      <p>Early-access pricing is agreed with each agency in writing before any paid work begins.</p>

      <h2 style={h2}>Early-access service</h2>
      <p>
        Features may change while Tonify is in early access. The service is provided as is, and we
        are not liable for indirect losses arising from its use.
      </p>

      <h2 style={h2}>Governing law</h2>
      <p>These terms are governed by the laws of Pakistan.</p>

      <h2 style={h2}>Contact</h2>
      <ContactLine />
    </LegalLayout>
  );
}

export function ContactPage() {
  const card: React.CSSProperties = {
    display: "block",
    background: "#0a0a0a",
    border: "1px solid rgba(245,158,11,0.15)",
    borderRadius: 12,
    padding: 24,
    textDecoration: "none",
  };
  return (
    <LegalLayout title="Contact">
      <p style={{ marginBottom: 32 }}>
        Want a free sample? Send us one client recording and we'll send back a LinkedIn post,
        Instagram script and newsletter in that client's voice.
      </p>
      <div style={{ display: "grid", gap: 16 }}>
        <a href={WHATSAPP_URL} style={card}>
          <div style={{ color: "#fbbf24", fontWeight: 600, marginBottom: 4 }}>WhatsApp</div>
          <div style={{ color: "#d1d5db" }}>{WHATSAPP_DISPLAY}</div>
        </a>
        <a href={INSTAGRAM_DM_URL} style={card}>
          <div style={{ color: "#fbbf24", fontWeight: 600, marginBottom: 4 }}>Instagram DM</div>
          <div style={{ color: "#d1d5db" }}>@{INSTAGRAM_HANDLE}</div>
        </a>
      </div>
      <p style={{ color: "#6b7280", fontSize: 14, marginTop: 32 }}>Based in Lahore, Pakistan.</p>
    </LegalLayout>
  );
}
