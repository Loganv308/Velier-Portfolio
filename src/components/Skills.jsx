import React from "react";
import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    name: "Frontend Development",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend Development",
    skills: ["Java", "Spring Boot", "Python", "Node.js", "Express", "REST APIs", "Maven", "Gradle"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB"],
  },
  {
    name: "DevOps & Infrastructure",
    skills: ["GitLab CI/CD", "Docker", "Ansible", "Terraform", "Linux", "Proxmox", "Nginx", "Git"],
  },
  {
    name: "Security",
    skills: ["SIEM", "Wazuh", "Sysmon", "Log Analysis", "Centralized Logging", "Active Directory", "Group Policy", "System Hardening", "Patch Management", "Network Segmentation"],
  },
];

const Skills = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="skills" className="bg-surface px-6 py-16 md:py-2 scroll-mt-20">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? "reveal-visible" : ""}`}>
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          What I work with
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Skills & Tools</h2>

        <div className="border-t border-soft">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="group grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-5 border-b border-soft"
            >
              <p className="text-xs uppercase tracking-widest text-terra font-medium md:pt-1.5">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-bg border border-soft text-bark px-3 py-1 rounded-sm transition-colors duration-150 hover:border-terra hover:text-terra"
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
