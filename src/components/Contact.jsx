import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const EMAIL = "loganv308@gmail.com";

const MailIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5l9 6 9-6M4.5 5.5h15a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17V7a1.5 1.5 0 011.5-1.5z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.02h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.68c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.53V23h-4V8.25z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.15c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.79.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const contactMethods = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: "Best way to reach me directly.",
    icon: MailIcon,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "/in/logan-velier",
    href: "https://www.linkedin.com/in/logan-velier/",
    description: "Connect or send a message.",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "@loganv308",
    href: "https://github.com/loganv308",
    description: "Browse my code and projects.",
    icon: GitHubIcon,
  },
];

const Contact = () => {
  const [ref, isVisible] = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="bg-bg px-6 py-16 md:py-24 scroll-mt-20">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "reveal-visible" : ""}`}>
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          Get in touch
        </p>
        <h2 className="font-serif text-3xl text-ink mb-4">Let's Connect</h2>
        <p className="text-muted leading-relaxed max-w-xl mb-10">
          I'm currently open to new opportunities, particularly remote software developer roles.
          Whether it's a position, a project, or just a conversation—feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative bg-surface border border-soft p-6 flex flex-col gap-3 hover:-translate-y-1.5 hover:shadow-lg hover:border-terra/40 transition-all duration-200"
            >
              <method.icon className="w-6 h-6 text-terra transition-transform duration-200 group-hover:scale-110" />
              <div>
                <p className="font-serif text-lg text-ink mb-0.5">{method.label}</p>
                <p className="text-sm text-muted break-all">{method.value}</p>
              </div>
              <p className="text-xs text-muted mt-auto pt-2">{method.description}</p>

              {method.copyable && (
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="absolute top-5 right-5 text-[10px] uppercase tracking-widest text-muted hover:text-terra transition-colors"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              )}

              <span className="absolute bottom-5 right-5 text-terra opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-sm">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
