import React from "react";
import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "HTML"],
  },
  {
    name: "Backend",
    skills: ["Java", "Maven", "Gradle", "Node.js", "REST APIs", "Python"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Microsoft SQL"],
  },
  {
    name: "Tooling",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Ansible"],
  },
];

const Skills = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="skills" className="bg-surface px-6 py-16 md:py-24 scroll-mt-20">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "reveal-visible" : ""}`}>
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          What I work with
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Skills & Tools</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="bg-bg border border-soft p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-terra/40"
            >
              <p className="text-xs uppercase tracking-widest text-terra font-medium mb-3">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-surface border border-soft text-bark px-2.5 py-1 transition-colors duration-150 hover:border-terra hover:text-terra"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
