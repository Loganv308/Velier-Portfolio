import React from "react";
import { useReveal } from "../hooks/useReveal";

const About = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="bg-surface px-6 py-16 md:py-24 scroll-mt-20">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "reveal-visible" : ""}`}>
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
                <span className="text-ink font-medium">Skills</span> — C++, C#, Java, JavaScript, React, Typescript, SQL, SQLite, PostgreSQL, Docker, CI/CD, Linux, Networking, Security, Systems Engineering.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="font-serif italic text-ink text-lg leading-relaxed">
              "I design and build systems end-to-end—reliable backends, secure infrastructure, and interfaces that don't make people think twice."
            </p>
            <p className="text-muted leading-relaxed">
              Hi, I'm Logan Velier — a Software Engineer who builds thoughtful, reliable systems, from the back end up to the interface someone actually clicks through.
            </p>
            <p className="text-muted leading-relaxed">
              I specialize in backend and systems engineering with Java, Python, and SQL, building software that's dependable and production-ready. At Acuity Insurance, I engineer enterprise document generation systems using OpenText Exstream, designing templates and integrations that produce real customer communications at scale.
            </p>
            <p className="text-muted leading-relaxed">
              I'm drawn to the parts of engineering that don't always get the spotlight: solid CI/CD workflows, secure infrastructure, systems that just work. I led our migration from CVS to GitLab, redesigning branching strategy and automating deployments to make releases less painful and collaboration easier—the kind of unglamorous work that pays off every day after.
            </p>
            <p className="text-muted leading-relaxed">
              Outside of work, I build full-stack projects that round out the picture — architecting self-hosted tools with Python and TypeScript services, containerizing everything with Docker for 24/7 operation, and building React interfaces (like this site) with Tailwind CSS. I like the whole loop: from the back end up to the interface someone actually clicks through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
