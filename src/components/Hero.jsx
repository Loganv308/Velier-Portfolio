import React from "react";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "Logan-Velier-Resume.pdf";
    link.download = "Logan-Velier-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-bg relative overflow-hidden px-6 py-14 md:py-24" style={{ isolation: "isolate" }}>
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-ember opacity-10 pointer-events-none animate-float-slow" />
      <div className="absolute left-1/2 -bottom-16 w-48 h-48 rounded-full bg-bark opacity-10 pointer-events-none animate-float-slower" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-4 animate-fade-up" style={{ animationDelay: "0ms" }}>
            Full-Stack Software Engineer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-ink mb-5 animate-fade-up" style={{ animationDelay: "80ms" }}>
            Logan<br />
            <em className="text-terra not-italic">Velier</em>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-md mb-6 animate-fade-up" style={{ animationDelay: "160ms" }}>
            I build thoughtful web and back-end applications with React and Node.js, backed by a background in systems engineering and security, plus experience across C++, C#, Java, and Python.
            I care about clean, purposeful code—and about creating tools that are as satisfying to use as they are to build.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-up" style={{ animationDelay: "220ms" }}>
            {["Software Engineering", "Systems Engineering", "Security"].map((area) => (
              <span
                key={area}
                className="text-xs uppercase tracking-widest font-medium text-terra border border-terra/30 bg-terra/5 px-3 py-1.5"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-3 flex-wrap animate-fade-up" style={{ animationDelay: "280ms" }}>
            <a
              href="#projects"
              className="bg-terra text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-bark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Projects
            </a>
            <button
              onClick={handleResumeDownload}
              className="border border-terra text-terra px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-terra hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Right: Info cards */}
        <div className="flex flex-col gap-3 items-start md:items-end relative z-0">
          <div className="bg-terra text-white px-5 py-4 w-60 animate-fade-up hover:-translate-y-0.5 transition-transform duration-200" style={{ animationDelay: "120ms" }}>
            <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Currently focused on</p>
            <p className="font-serif text-lg">Full-Stack Development</p>
          </div>
          <div className="bg-surface border border-soft px-5 py-4 w-60 animate-fade-up hover:-translate-y-0.5 transition-transform duration-200" style={{ animationDelay: "200ms" }}>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Open to</p>
            <p className="font-serif text-ink text-lg">New Opportunities</p>
          </div>
          <div className="bg-surface border border-soft px-5 py-4 w-60 animate-fade-up hover:-translate-y-0.5 transition-transform duration-200" style={{ animationDelay: "280ms" }}>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Based in</p>
            <p className="font-serif text-ink text-lg">Appleton, WI, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;