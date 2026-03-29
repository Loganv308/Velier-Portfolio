import { useState, useEffect, useRef } from "react";
 
const themes = [
  {
    id: "light",
    label: "Light",
    icon: "☀️",
    preview: ["#ffffff", "#f3f4f6", "#111827"],
  },
  {
    id: "dark",
    label: "Dark",
    icon: "🌙",
    preview: ["#111827", "#1f2937", "#f9fafb"],
  },
  {
    id: "cream",
    label: "Cream",
    icon: "🍦",
    preview: ["#fffdd0", "#fef9c3", "#713f12"],
  },
  {
    id: "forest",
    label: "Forest",
    icon: "🌿",
    preview: ["#14532d", "#166534", "#bbf7d0"],
  },
  {
    id: "ocean",
    label: "Ocean",
    icon: "🌊",
    preview: ["#0c4a6e", "#075985", "#bae6fd"],
  },
  {
    id: "rose",
    label: "Rose",
    icon: "🌸",
    preview: ["#fff1f2", "#ffe4e6", "#881337"],
  },
  {
    id: "midnight",
    label: "Midnight",
    icon: "🔮",
    preview: ["#0f0a1e", "#1e1040", "#c4b5fd"],
  },
  {
    id: "sunset",
    label: "Sunset",
    icon: "🌅",
    preview: ["#7c2d12", "#ea580c", "#fef3c7"],
  },
];
 
const themeStyles = {
  light:    { "--bg": "#ffffff",  "--surface": "#f3f4f6", "--text": "#111827", "--accent": "#6366f1" },
  dark:     { "--bg": "#111827",  "--surface": "#1f2937", "--text": "#f9fafb", "--accent": "#818cf8" },
  cream:    { "--bg": "#fffdd0",  "--surface": "#fef9c3", "--text": "#713f12", "--accent": "#b45309" },
  forest:   { "--bg": "#14532d",  "--surface": "#166534", "--text": "#bbf7d0", "--accent": "#4ade80" },
  ocean:    { "--bg": "#0c4a6e",  "--surface": "#075985", "--text": "#bae6fd", "--accent": "#38bdf8" },
  rose:     { "--bg": "#fff1f2",  "--surface": "#ffe4e6", "--text": "#881337", "--accent": "#e11d48" },
  midnight: { "--bg": "#0f0a1e",  "--surface": "#1e1040", "--text": "#c4b5fd", "--accent": "#a78bfa" },
  sunset:   { "--bg": "#7c2d12",  "--surface": "#9a3412", "--text": "#fef3c7", "--accent": "#fb923c" },
};
 
export function ThemePicker() {
  const [activeTheme, setActiveTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
 
  // Apply theme variables to <html>
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    applyTheme(saved);
    setActiveTheme(saved);
  }, []);
 
  function applyTheme(id) {
    const vars = themeStyles[id];
    if (!vars) return;
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    // keep legacy .dark class for any dark: tailwind utilities
    if (id === "dark" || id === "midnight" || id === "forest" || id === "ocean" || id === "sunset") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", id);
  }
 
  function selectTheme(id) {
    setActiveTheme(id);
    applyTheme(id);
    setIsOpen(false);
  }
 
  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
 
  const current = themes.find((t) => t.id === activeTheme);
 
  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Theme list */}
      <div
        className={`
          flex flex-col gap-1 mb-1
          transition-all duration-300 ease-out origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
        `}
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => selectTheme(theme.id)}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium
              shadow-md backdrop-blur-sm transition-all duration-150
              hover:scale-105 active:scale-95 whitespace-nowrap
              ${activeTheme === theme.id
                ? "ring-2 ring-offset-1 ring-white/60 scale-105"
                : "opacity-80 hover:opacity-100"
              }
            `}
            style={{
              background: theme.preview[1],
              color: theme.preview[2],
              boxShadow: activeTheme === theme.id
                ? `0 0 0 2px ${theme.preview[2]}33, 0 4px 12px ${theme.preview[0]}66`
                : "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {/* Color swatches */}
            <span className="flex gap-1">
              {theme.preview.map((color, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full border border-black/10"
                  style={{ background: color }}
                />
              ))}
            </span>
            <span>{theme.icon} {theme.label}</span>
            {activeTheme === theme.id && (
              <span className="ml-auto text-xs opacity-70">✓</span>
            )}
          </button>
        ))}
      </div>
 
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          flex items-center gap-2 px-4 py-3 rounded-full shadow-xl
          font-medium text-sm transition-all duration-200
          hover:scale-105 active:scale-95
          ${isOpen ? "ring-2 ring-white/40" : ""}
        `}
        style={{
          background: themeStyles[activeTheme]["--surface"],
          color: themeStyles[activeTheme]["--text"],
          boxShadow: `0 4px 20px ${themeStyles[activeTheme]["--bg"]}99`,
        }}
        aria-label="Toggle theme picker"
      >
        <span className="text-base">{current?.icon}</span>
        <span className="hidden sm:inline">{current?.label}</span>
        <span
          className="transition-transform duration-300 text-xs opacity-60"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▲
        </span>
      </button>
    </div>
  );
}