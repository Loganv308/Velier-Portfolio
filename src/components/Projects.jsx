import React, { useState } from "react";
import mediaflowLogo from "../assets/mediaflow.png";
import kittycrawlerLogo from "../assets/kittycrawler.png";
import etlPipelineLogo from "../assets/ETL.png";

const projects = [
  {
    type: "Back-end App",
    name: "MediaFlow",
    description:
      "MediaFlow is an automated media management tool that detects, optimizes, and re-encodes video files on your NAS. It ensures consistent H.265 encoding and 1080p resolution, streamlining your media library for efficient storage and playback.",
    stack: ["Java", "Maven", "PostgreSQL", "FFmpeg"],
    tags: ["Backend", "Java"],
    accent: "bg-bark",
    logo: mediaflowLogo,
    link: "https://github.com/Loganv308/MediaFlow",
  },
  {
    type: "ETL Pipeline",
    name: "ChatPipeline",
    description:
      "ChatPipeline connects to one or more Twitch channels via TwitchIO and listens to chat in real time. Each message passes through a sanitization pipeline before being batch-inserted into a PostgreSQL database every 2 seconds. It is designed to run continuously in the background, independently of any frontend or API layer.",
    stack: ["ETL", "SQL", "Data Pipelining", "Supabase"],
    tags: ["Data"],
    accent: "bg-terra",
    logo: etlPipelineLogo,
    link: "https://github.com/Loganv308/ChatPipeline",
  },
  {
    type: "Java Project",
    name: "KittyCrawler",
    description:
      "KittyCrawler is a Java-based application designed to scrape data from a local cat breeders’ website, monitoring for new entries. The project was developed as a hands-on exercise to deepen proficiency in Java, with a focus on key areas such as web scraping, object-oriented programming, algorithm design, and writing production-ready code.",
    stack: ["Java", "OOP", "Authentication", "Web Scraping", "Maven"],
    tags: ["Java", "Backend", "Authentication"],
    accent: "bg-ember",
    logo: kittycrawlerLogo,
    link: "https://github.com/Loganv308/KittyCrawler",
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags?.includes(activeTag));

  return (
    <section id="projects" className="bg-surface px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          What I've built
        </p>
        <h2 className="font-serif text-3xl text-ink mb-6">Projects</h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_TAGS.map((tag, i) => (
              <button
                key={i}
                onClick={() => setActiveTag(tag)}
              className={`text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors duration-150 font-medium
                ${
                  activeTag === tag
                    ? "bg-terra text-bg border-terra"
                    : "bg-bg text-muted border-soft hover:border-terra hover:text-terra"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.name}
              className="bg-bg border border-soft overflow-hidden group hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Thumbnail */}
              <div className={`relative ${project.accent} h-32 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                <div className="relative p-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-20 w-20 object-contain drop-shadow-md"
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
                      className="text-xs bg-surface border border-soft text-bark px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link}
                  className="text-xs uppercase tracking-widest text-terra hover:text-bark transition-colors font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-12">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;