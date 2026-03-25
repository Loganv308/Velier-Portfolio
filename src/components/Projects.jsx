import React from "react";
import mediaflowLogo from "../assets/mediaflow.png";

const projects = [
  {
    type: "Back-end App",
    name: "MediaFlow",
    description:
      "MediaFlow is an automated media management tool that detects, optimizes, and re-encodes video files on your NAS. It ensures consistent H.265 encoding and 1080p resolution, streamlining your media library for efficient storage and playback.",
    stack: ["Java", "Maven", "PostgreSQL", "FFmpeg"],
    accent: "bg-bark",
    logo: mediaflowLogo,
    link: "https://github.com/Loganv308/MediaFlow",
  },
  {
    type: "API / Backend",
    name: "Project Two",
    description:
      "A REST API with authentication and real-time features. Replace this with your actual project description.",
    stack: ["Express", "MongoDB", "JWT"],
    accent: "bg-terra",
    initial: "P",
    link: "#",
  },
  {
    type: "Tool",
    name: "Project Three",
    description:
      "A developer tool or utility. Replace this with your actual project description.",
    stack: ["TypeScript", "React", "Docker"],
    accent: "bg-ember",
    initial: "P",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-warm-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          What I've built
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-sand border border-soft overflow-hidden group hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Thumbnail */}
              <div className={`relative ${project.accent} h-32 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                <div className="relative p-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-16 w-16 object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-terra mb-1">{project.type}</p>
                <h3 className="font-serif text-lg text-ink mb-2">{project.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-warm-white border border-soft text-bark px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-xs uppercase tracking-widest text-terra hover:text-bark transition-colors font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
