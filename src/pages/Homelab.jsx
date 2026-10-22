import React from "react";
import { useReveal } from "../hooks/useReveal";

const Draft = ({ children }) => (
  <span>
    <span className="text-terra text-[10px] uppercase tracking-widest font-semibold mr-2 align-middle">
      Draft
    </span>
    <em className="text-muted/90 not-italic">{children}</em>
  </span>
);

const services = [
  { name: "MediaFlow", note: "Automated media transcoding & library management for a home NAS." },
  { name: "Logging Platform", note: "Self-hosted log aggregation with a real-time web UI." },
  { name: "AntonLabs Wiki", note: "Self-hosted wiki rendering Obsidian-flavoured markdown." },
  { name: "ChatPipeline", note: "Background ETL pipeline streaming Twitch chat into PostgreSQL." },
];

const infraAreas = [
  {
    label: "Compute",
    placeholder: "What runs the homelab — hypervisor, bare metal, or a cluster? Add specs here.",
  },
  {
    label: "Storage",
    placeholder: "NAS setup, RAID/pool configuration, and backup strategy.",
  },
  {
    label: "Networking",
    placeholder: "VLANs, firewall rules, reverse proxy, and remote access (VPN/tunnel).",
  },
  {
    label: "Monitoring",
    placeholder: "What (if anything) currently watches uptime, logs, or metrics.",
  },
];

const playbooks = [
  {
    name: "site.yml",
    placeholder: "What does this run — the top-level playbook that provisions everything?",
  },
  {
    name: "hardening.yml",
    placeholder: "Base OS hardening steps this automates (users, SSH config, firewall, updates).",
  },
  {
    name: "docker-hosts.yml",
    placeholder: "How this sets up Docker hosts and deploys the services listed above.",
  },
];

const Section = ({ id, eyebrow, title, children, tone = "bg-bg" }) => {
  const [ref, isVisible] = useReveal();
  return (
    <section id={id} className={`${tone} px-6 py-16 md:py-20 scroll-mt-20`}>
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "reveal-visible" : ""}`}>
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">{eyebrow}</p>
        <h2 className="font-serif text-3xl text-ink mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
};

const Homelab = () => {
  const [heroRef, heroVisible] = useReveal();

  return (
    <>
      <section className="bg-bg px-6 py-16 md:py-24 border-b border-soft">
        <div ref={heroRef} className={`max-w-5xl mx-auto reveal ${heroVisible ? "reveal-visible" : ""}`}>
          <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
            Systems &amp; Infrastructure
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-5">The Homelab</h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            <Draft>
              2–3 sentences on why this homelab exists — what you're trying to learn, prove,
              or run for yourself, and how it connects to your systems engineering &amp; security focus.
            </Draft>
          </p>
        </div>
      </section>

      <Section id="services" eyebrow="What's running" title="Services I Run" tone="bg-surface">
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.name} className="bg-bg border border-soft p-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg text-ink mb-1">{s.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.note}</p>
              </div>
              <span
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted whitespace-nowrap pt-1"
                title="Live status polling isn't wired up yet — this is a static list for now."
              >
                <span className="w-1.5 h-1.5 rounded-full bg-soft" />
                Static
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted/70 mt-4 italic">
          Status shown here is static for now — live health checks are a planned follow-up, not wired up yet.
        </p>
      </Section>

      <Section id="infrastructure" eyebrow="How it's built" title="Infrastructure">
        <div className="grid sm:grid-cols-2 gap-4">
          {infraAreas.map((area) => (
            <div key={area.label} className="bg-surface border border-soft p-5">
              <p className="text-xs uppercase tracking-widest text-terra font-medium mb-2">
                {area.label}
              </p>
              <p className="text-sm leading-relaxed">
                <Draft>{area.placeholder}</Draft>
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="automation" eyebrow="Keeping it reproducible" title="Automation — Ansible Playbooks" tone="bg-surface">
        <div className="divide-y divide-soft border-y border-soft">
          {playbooks.map((p) => (
            <div key={p.name} className="grid md:grid-cols-[220px_1fr] gap-4 py-5">
              <p className="font-mono text-sm text-ink pt-0.5">{p.name}</p>
              <p className="text-sm leading-relaxed">
                <Draft>{p.placeholder}</Draft>
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Homelab;
