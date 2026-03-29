import React from "react";

const experiences = [
  {
    date: "2023 — Present",
    role: "Software Engineer - Document Composition",
    company: "Acuity Insurance",
    description: [
      "Migrated legacy version control from CVS to GitLab, improving CI workflows and deployment reliability.",
      "Automated data processing and release workflows, reducing manual operational effort.",
      "Built dynamic document templates integrating XML and database sources into production-ready communications.",
      "Developed ODBC integrations to ensure reliable backend data flow.",
      "Maintained enterprise document systems using OpenText Exstream."
    ],
  },
  {
    date: "2020 — 2023",
    role: "Technical Support Analyst",
    company: "Acuity Insurance",
    description: [
      "Managed assets for 1,000+ enterprise devices, improving inventory accuracy and lifecycle tracking",
      "Collaborated in Agile/Scrum teams to deliver solutions aligned with business needs",
      "Built automation scripts in PowerShell, Batch, and Python to streamline deployment, configuration, and reporting",
      "Used SCCM to deploy standardized system images and enforce configuration policies",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-surface px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          Where I've been
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Experience</h2>

        <div className="divide-y divide-soft border-y border-soft">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="grid md:grid-cols-[160px_1fr] gap-6 py-7"
            >
              <p className="text-sm text-muted pt-0.5">{exp.date}</p>
              <div>
                <h3 className="font-serif text-lg text-ink mb-0.5">{exp.role}</h3>
                <p className="text-sm text-terra font-medium mb-3">{exp.company}</p>
                <ul className="space-y-2 text-sm text-muted leading-relaxed">
                  {(Array.isArray(exp.description)
                    ? exp.description
                    : exp.description.split("\n").filter(Boolean)
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-terra mt-[6px] text-[8px]">●</span>
                      <span>{item.replace(/^●\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
