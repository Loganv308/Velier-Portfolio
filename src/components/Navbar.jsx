import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemePicker } from "./ThemePicker";

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Section anchors only work directly on the home page; from elsewhere, route home first.
  const sectionHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-soft shadow-sm"
          : "bg-surface border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-terra text-xl tracking-wide hover:opacity-80 transition-opacity">
          LV
        </Link>

        <div className="flex items-center gap-5">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {sectionLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={sectionHref(l.href)}
                  className={`relative text-xs uppercase tracking-widest pb-1 transition-colors duration-200 ${
                    isHome && activeId === l.href ? "text-terra" : "text-muted hover:text-terra"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px bg-terra transition-all duration-300 ${
                      isHome && activeId === l.href ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/homelab"
                className={`relative text-xs uppercase tracking-widest pb-1 transition-colors duration-200 ${
                  !isHome ? "text-terra" : "text-muted hover:text-terra"
                }`}
              >
                Homelab
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-terra transition-all duration-300 ${
                    !isHome ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          </ul>

          <ThemePicker />

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted hover:text-terra transition-transform duration-200 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out bg-surface border-t border-soft ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {sectionLinks.map((l) => (
            <a
              key={l.label}
              href={sectionHref(l.href)}
              onClick={() => setMenuOpen(false)}
              className={`text-xs uppercase tracking-widest transition-colors ${
                isHome && activeId === l.href ? "text-terra" : "text-muted hover:text-terra"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/homelab"
            onClick={() => setMenuOpen(false)}
            className={`text-xs uppercase tracking-widest transition-colors ${
              !isHome ? "text-terra" : "text-muted hover:text-terra"
            }`}
          >
            Homelab
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
