import React from "react";

const Hero = () => {
  return (
    <section className="bg-bg relative overflow-hidden px-6 py-20 md:py-28">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-ember opacity-10 pointer-events-none" />
      <div className="absolute left-1/2 -bottom-16 w-48 h-48 rounded-full bg-bark opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-4">
            Full-Stack Software Engineer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-ink mb-5">
            Logan<br />
            <em className="text-terra not-italic">Velier</em>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-md mb-8">
            Building thoughtful web and back-end applications with React and Node.js, backed by experience across Java, Python, systems engineering, 
            and data pipelines—focused on clean, purposeful code and creating tools that are as satisfying to use as they are to build.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="bg-terra text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-bark transition-colors duration-200"
            >
              View Projects
            </a>
            <a href="Logan-Velier-Resume.pdf" className="border border-terra text-terra px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-terra hover:text-white transition-colors duration-200">
              View Resume
            </a>
          </div>
        </div>

        {/* Right: Info cards */}
        <div className="flex flex-col gap-3 items-start md:items-end">
          <div className="bg-terra text-white px-5 py-4 w-56">
            <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Currently focused on</p>
            <p className="font-serif text-lg">Full-Stack Development</p>
          </div>
          <div className="bg-surface border border-soft px-5 py-4 w-56">
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Open to</p>
            <p className="font-serif text-ink text-lg">New Opportunities</p>
          </div>
          <div className="bg-surface border border-soft px-5 py-4 w-56">
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Based in</p>
            <p className="font-serif text-ink text-lg">Wisconsin, United States</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
