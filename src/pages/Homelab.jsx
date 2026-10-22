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
  { name: "Wazuh SIEM", note: "Security monitoring, endpoint agents, and alerting across the lab." },
  { name: "Graylog", note: "Centralized log collection from every host via rsyslog and journald." },
  { name: "Pi-hole", note: "Network-wide DNS filtering and query visibility." },
  { name: "Nginx Reverse Proxy", note: "Single, controlled entry point for self-hosted web services." },
  { name: "Logging Platform", note: "Self-hosted log aggregation with a real-time web UI." },
  { name: "MediaFlow", note: "Automated media transcoding & library management for a home NAS." },
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
    text: "A TrueNAS server providing 32 TB of mirrored ZFS storage for media, backups, and service data, so a single drive failure costs no data.",
    draft: "Offsite Backblaze B2 Nightly Backup solution + AWS S3 Bucket Backup",
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

const securityLab = [
  {
    label: "Active Directory Environment",
    text: "A dedicated AD domain built with a tiered administration model, separating privileged accounts by the systems they can manage.",
  },
  {
    label: "Attack Simulation",
    text: "Service accounts deliberately configured to be vulnerable to Kerberoasting, so I can study how credential attacks work from the attacker's side.",
  },
  {
    label: "Group Policy Hardening",
    text: "GPO-based hardening applied through a scripted PowerShell baseline, making the configuration repeatable rather than hand-clicked.",
  },
  {
    label: "Endpoint Telemetry",
    text: "Wazuh agents and Sysmon on Windows endpoints, feeding detailed process, network, and file activity into the SIEM.",
  },
];

const playbooks = [
  {
    name: "unattended-updates.yml",
    status: "Live",
    text: "Enables automatic security patching fleet-wide, handling both Debian (unattended-upgrades) and RHEL-family (dnf-automatic) hosts with configurable scope and reboot behavior.",
  },
  {
    name: "central-logging.yml",
    status: "Live",
    text: "Forwards syslog and journald from every host to Graylog over TCP with a disk-backed queue, adapts to LXC containers' limitations, and keeps clocks in sync for accurate log correlation.",
  },
  {
    name: "ssh-hardening.yml",
    status: "Live",
    text: "Key-only authentication, restricted root login, and validated sshd configuration so a typo can't lock out the fleet.",
  },
];

const fieldNotes = [
  {
    title: "The SIEM that wouldn't start",
    text: "My Wazuh deployment failed silently. I traced the cause to a separate OpenSearch install that was claiming port 9200 before the Wazuh indexer could bind to it, resolved the conflict, and brought the SIEM back online.",
  },
  {
    title: "When the monitoring tool filled the disk",
    text: "A Windows host's drive filled up with no visible cause. I found Sysmon writing hundreds of thousands of temp files that standard tools couldn't see, and recovered the system through the Windows Recovery Environment.",
  },
  {
    title: "Patching twenty hosts at once",
    text: "Rolling out fleet-wide updates surfaced file-transfer failures on minimal container images. I diagnosed the missing SFTP subsystem and reconfigured Ansible's transfer method, which also made runs faster.",
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
              This homelab is where I practice security on real systems. I run my own SIEM,
              attack my own Active Directory environment, and automate patching and logging
              across roughly twenty hosts. Everything here has been built, broken, and fixed
              by me, which is how I've learned what defense looks like beyond the textbook.
            </Draft>
          </p>
        </div>
      </section>

      <Section id="security-lab" eyebrow="Attack & defend" title="Security Lab">
        <div className="grid sm:grid-cols-2 gap-4">
          {securityLab.map((item) => (
            <div key={item.label} className="bg-surface border border-soft p-5">
              <p className="text-xs uppercase tracking-widest text-terra font-medium mb-2">
                {item.label}
              </p>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="infrastructure" eyebrow="How it's built" title="Infrastructure" tone="bg-surface">
        <div className="grid sm:grid-cols-2 gap-4">
          {infraAreas.map((area) => (
            <div key={area.label} className="bg-bg border border-soft p-5">
              <p className="text-xs uppercase tracking-widest text-terra font-medium mb-2">
                {area.label}
              </p>
              <p className="text-sm text-muted leading-relaxed">{area.text}</p>
              {area.draft && (
                <p className="text-sm leading-relaxed mt-2">
                  <Draft>{area.draft}</Draft>
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="automation" eyebrow="Keeping it reproducible" title="Automation — Ansible Playbooks">
        <div className="divide-y divide-soft border-y border-soft">
          {playbooks.map((p) => (
            <div key={p.name} className="grid md:grid-cols-[220px_1fr] gap-4 py-5">
              <div>
                <p className="font-mono text-sm text-ink">{p.name}</p>
                <p className={`text-[10px] uppercase tracking-widest mt-1 ${p.status === "Live" ? "text-terra" : "text-muted"}`}>
                  {p.status}
                </p>
              </div>
              <p className="text-sm text-muted leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="field-notes" eyebrow="Lessons learned" title="Field Notes" tone="bg-surface">
        <div className="space-y-4">
          {fieldNotes.map((note) => (
            <div key={note.title} className="bg-bg border border-soft p-5">
              <h3 className="font-serif text-lg text-ink mb-1">{note.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{note.text}</p>
            </div>
          ))}
        </div>
      </Section>

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

      <Section id="automation" eyebrow="Keeping it reproducible" title="Automation — Ansible Playbooks" tone="bg-surface">
        <div className="divide-y divide-soft border-y border-soft">
          {playbooks.map((p) => (
            <div key={p.name} className="grid md:grid-cols-[220px_1fr] gap-4 py-6">
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
