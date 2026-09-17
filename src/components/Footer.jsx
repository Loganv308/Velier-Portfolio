import React from "react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-surface text-text-main/50 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <button
          onClick={scrollToTop}
          className="font-serif text-ember text-base hover:opacity-70 transition-opacity"
        >
          Logan Velier
        </button>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
        <div className="flex gap-6 items-center">
          {[
            { label: "GitHub", href: "https://github.com/loganv308" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/logan-velier/" },
            { label: "Resume", href: "/Logan-Velier-Resume.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-ember hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="text-white/40 hover:text-ember hover:-translate-y-0.5 transition-all duration-200"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
