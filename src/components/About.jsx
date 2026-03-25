import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-warm-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">Who I am</p>
        <h2 className="font-serif text-3xl text-ink mb-10">About Me</h2>

        <div className="grid md:grid-cols-[160px_1fr] gap-12 items-start">
          {/* Sidebar */}
          <div>
            <div className="w-46 h-46 overflow-hidden rounded-lg mb-6">
              <img src="pfp.jpg" classname="w-full h-full object-cover object-center"></img>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted">
                <span className="text-ink font-medium">Role</span> - Software Engineer - Document Composition
              </p>
              <p className="text-muted">
                <span className="text-ink font-medium">Stack</span> — Java, React, JavaScript, MySQL, SQLite, Docker, CI/CD, Linux
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="font-serif italic text-ink text-lg leading-relaxed">
              "I build software that feels as good to use as it does to create—crafting web applications that balance clean engineering with intuitive, satisfying user experiences."
            </p>
            <p className="text-muted leading-relaxed">
              Hi, I'm Logan Velier, a Software Engineer focused on building scalable web applications and continuously expanding my skill set. 
              I specialize in Java and Spring Boot for backend development and am actively growing my expertise in React and modern full-stack technologies.
            </p>
            <p className="text-muted leading-relaxed">
              I care deeply about the details—from designing clean, maintainable backend systems to creating intuitive user experiences. 
              Outside of coding, I explore new technologies and look for ways to make software more efficient, reliable, and human-centered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
