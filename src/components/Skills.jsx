import React from "react";

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML"],
  },
  {
    name: "Backend",
    skills: ["Java", "Maven", "Gradle", "Node.js", "REST APIs"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    name: "Tooling",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Ansible"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-surface px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          What I work with
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Skills & Tools</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <div key={group.name} className="bg-bg border border-soft p-5">
              <p className="text-xs uppercase tracking-widest text-terra font-medium mb-3">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-surface border border-soft text-bark px-2.5 py-1"
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
