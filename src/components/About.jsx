import React from "react";
import { useReveal } from "../hooks/useReveal";

const About = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="bg-surface px-6 py-16 md:py-10 scroll-mt-20">
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
                <span className="text-ink font-medium">Role</span> - Software Engineer I - Document Composition
              </p>
              <p className="text-muted">
                <span className="text-ink font-medium">Focus</span> — Backend Systems · Infrastructure · Security
              </p>
              <p className="text-muted">
                <span className="text-ink font-medium">Education</span> - B.S. Computer Science, Lakeland University
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="font-serif italic text-ink text-lg leading-relaxed">
              "I build systems end-to-end, with security treated as part of the design rather than an afterthought."
            </p>
            <p className="text-muted leading-relaxed">
              Hi, I’m Logan Velier, a Software Engineer specializing in backend systems, infrastructure, and the security that holds them together.
            </p>
            <p className="text-muted leading-relaxed">
              At Acuity Insurance, I engineer enterprise document generation systems using OpenText Exstream, building the templates, XML data pipelines, and integrations that produce customer communications at scale. My day-to-day work is in Java, Python, and SQL, with an emphasis on software that is dependable and production-ready.
            </p>
            <p className="text-muted leading-relaxed">
              I’m drawn to the parts of engineering that don’t always get the spotlight: CI/CD workflows, secure infrastructure, and systems that simply work. I led our migration from CVS to GitLab, redesigning our branching strategy and automating deployments to make releases more predictable and collaboration easier.
            </p>
            <p className="text-muted leading-relaxed">
              Outside of work, I run a homelab that serves as my security proving ground. I’ve deployed a Wazuh SIEM with centralized logging, built an Active Directory lab to study both attack paths and Group Policy hardening, segmented my network with VLANs, and automated patching and configuration across my fleet with Ansible. That work reflects where I’m headed: a career focused on securing the systems I’ve spent years building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
