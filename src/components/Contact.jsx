import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!"); // Replace with real backend / EmailJS / Formspree
  };

  return (
    <section id="contact" className="bg-warm-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-terra font-medium mb-2">
          Get in touch
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-muted leading-relaxed mb-6">
              I’m currently open to new opportunities, particularly remote software developer roles. Whether it’s a position, a project, or just a conversation—feel free to reach out.
            </p>
            <div className="space-y-3">
              {[
                { label: "loganv308@gmail.com", href: "mailto:loganv308@gmail.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/logan-velier/" },
                { label: "GitHub", href: "https://github.com/loganv308" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2.5 text-terra text-sm font-medium hover:text-bark transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-sand border border-soft px-3 py-2.5 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-terra transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-muted font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-sand border border-soft px-3 py-2.5 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-terra transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-muted font-medium">
                Message
              </label>
              <textarea
                name="message"
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-sand border border-soft px-3 py-2.5 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-terra transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="self-start bg-terra text-white px-7 py-2.5 text-sm font-medium tracking-wide hover:bg-bark transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
