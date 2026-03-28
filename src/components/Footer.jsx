import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ink text-white/50 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-serif text-ember text-base">Logan Velier</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/loganv308" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/logan-velier/" },
            { label: "Resume", href: "/Logan-Velier-Resume.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-ember transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
