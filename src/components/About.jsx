import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-surface px-6 py-10">
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
                <span className="text-ink font-medium">Skills</span> — C++, C#, Java, JavaScript, React, Typescript, SQL, SQLite, PostgreSQL, Docker, CI/CD Pipelines, Linux, Networking, Systems Engineering.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="font-serif italic text-ink text-lg leading-relaxed">
              "I design and build systems end-to-end: reliable backends, clean data pipelines, and interfaces that don't make people think twice."
            </p>
            <p className="text-muted leading-relaxed">
              Hi, I'm Logan Velier — a Software Engineer focused on building reliable systems that turn structured data into things people actually use.
            </p>
            <p className="text-muted leading-relaxed">
              I specialize in backend and data pipeline engineering with Java, Python, and SQL, designing systems that take raw data — XML, database records — and transform it into something dependable and production-ready. At Acuity Insurance, I engineer enterprise document generation systems using OpenText Exstream, building dynamic templates that integrate with database-driven pipelines to produce real customer communications at scale.
            </p>
            <p className="text-muted leading-relaxed">
              I'm drawn to the parts of engineering that don't always get the spotlight: solid CI/CD workflows, clean database integrations, infrastructure that just works. I led our migration from CVS to GitLab, redesigning branching strategy and CI pipelines to make deployments less painful and collaboration easier — the kind of unglamorous work that pays off every day after.
            </p>
            <p className="text-muted leading-relaxed">
              Outside of work, I build full-stack projects that round out the picture — architecting a two-component analytics platform with a Python data pipeline and TypeScript API server, containerizing services with Docker for 24/7 self-hosted operation, and building React interfaces (like this site) with Tailwind CSS. I like the whole loop: from the data layer to the interface someone actually clicks through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
