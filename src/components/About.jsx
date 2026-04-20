import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-surface px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">Who I am</p>
        <h2 className="font-serif text-3xl text-ink mb-10">About Me</h2>

        <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">
          {/* Sidebar */}
          <div>
            <div className="w-46 h-46 overflow-hidden rounded-lg mb-6">
              <img src="pfp.jpg" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted">
                <span className="text-ink font-medium">Role</span> - Software Engineer - Document Composition
              </p>
              <p className="text-muted">
                <span className="text-ink font-medium">Skills</span> — Java, React, JavaScript, SQL, SQLite, Docker, CI/CD, Linux, RAG Systems
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="font-serif italic text-ink text-lg leading-relaxed">
              "I design and build systems end-to-end: reliable backends, clean data pipelines, and interfaces that don't make people think twice."
            </p>
            <p className="text-muted leading-relaxed">
              Hi, I'm Logan Velier — a Software Engineer with a focus on building robust, scalable systems from the ground up. I specialize in backend development with Java and Python, designing APIs and services that are clean, maintainable, and built to last.
            </p>
            <p className="text-muted leading-relaxed">
              I'm drawn to the intersection of system design and real-world impact: how the decisions made at the architecture level ripple through to the end user. Whether it's optimizing a data flow, structuring a service layer, or building out a seamless UI, I care about getting it right — not just getting it done.
            </p>
            <p className="text-muted leading-relaxed">
              Beyond the backend, I work across the full stack — architecting data pipelines and ETL workflows that move and transform information reliably, while also bringing that same attention to detail to the front end with React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
