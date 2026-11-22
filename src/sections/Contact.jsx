import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheck,
  FiSend,
} from "react-icons/fi";
import { contactInfo } from "../data/contact";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    if (!contactInfo.email) return;
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactInfo.email) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { name: "GitHub", url: contactInfo.github, icon: FiGithub },
    { name: "LinkedIn", url: contactInfo.linkedin, icon: FiLinkedin },
  ];

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0b141a] py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            04 / Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something{" "}
            <span className="text-teal-400">meaningful.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            I'm always interested in learning, collaborating, and exploring new
            software engineering opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left Quick Message Form */}
          <div className="rounded-3xl border border-teal-400/15 bg-[#112329] p-7 sm:p-10 lg:col-span-3">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-xs font-medium text-teal-300">
                {contactInfo.availability}
              </span>
            </div>

            <h3 className="mb-6 text-2xl font-semibold sm:text-3xl">
              Send a quick message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#0b141a]/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0b141a]/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-gray-400">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Rasheeda, I'd love to discuss an internship opportunity..."
                  className="w-full rounded-xl border border-white/10 bg-[#0b141a]/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
              >
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Details Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#14262c] p-7 sm:p-9 lg:col-span-2">
            <div>
              <h3 className="mb-7 text-xl font-semibold">Contact Details</h3>

              {/* Email Detail with Copy Button */}
              {contactInfo.email && (
                <div className="mb-7 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="rounded-xl bg-teal-400/10 p-3 text-teal-400">
                      <FiMail size={21} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs text-gray-500">Email Address</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="break-all font-medium text-gray-200 hover:text-teal-400"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition-colors hover:border-teal-400/40 hover:text-teal-400"
                  >
                    {copied ? (
                      <FiCheck size={17} className="text-emerald-400" />
                    ) : (
                      <FiCopy size={17} />
                    )}
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="mb-8 flex items-start gap-4">
                <div className="rounded-xl bg-teal-400/10 p-3 text-teal-400">
                  <FiMapPin size={21} aria-hidden="true" />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-200">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.some((link) => link.url) && (
              <div>
                <div className="mb-5 border-t border-white/10" />
                <p className="mb-4 text-sm text-gray-400">Find me online</p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks
                    .filter((link) => link.url)
                    .map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit my ${link.name} profile`}
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
                        >
                          <Icon size={21} aria-hidden="true" />
                        </a>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;