import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";

import { contactInfo } from "../data/contact";

const Contact = () => {

  const socialLinks = [
    {
      name: "GitHub",
      url: contactInfo.github,
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      url: contactInfo.linkedin,
      icon: FiLinkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0e1b21] py-24 text-white sm:py-28"
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
            <span className="text-teal-400">
              meaningful.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            I'm always interested in learning,
            collaborating, and exploring new
            software engineering opportunities.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="grid gap-6 lg:grid-cols-5">

          {/* Left Main Card */}
          <div className="rounded-3xl border border-teal-400/15 bg-[#112b30] p-7 sm:p-10 lg:col-span-3">

            {/* Availability */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2">

              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-teal-400"
              />

              <span className="text-xs font-medium text-teal-300">
                {contactInfo.availability}
              </span>

            </div>

            <h3 className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              Have an opportunity or an idea in mind?
            </h3>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Whether it's a software engineering
              internship, a project collaboration,
              or a conversation about technology,
              feel free to reach out.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Portfolio Inquiry")}`}
                  className="inline-flex items-center gap-3 rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                >
                  <FiMail aria-hidden="true" />
                  Send an Email
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-teal-400/40 hover:text-white"
              >
                View Projects
                <FiArrowRight aria-hidden="true" />
              </a>

            </div>

          </div>

          {/* Right Details Card */}
          <div className="rounded-3xl border border-white/10 bg-[#14262c] p-7 sm:p-9 lg:col-span-2">

            <h3 className="mb-7 text-xl font-semibold">
              Get in touch
            </h3>

            {/* Email Detail */}
            {contactInfo.email && (
              <div className="mb-7 flex items-start gap-4">

                <div className="rounded-xl bg-teal-400/10 p-3 text-teal-400">
                  <FiMail size={21} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-gray-500">
                    Email Address
                  </p>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="break-all font-medium text-gray-200 hover:text-teal-400"
                  >
                    {contactInfo.email}
                  </a>
                </div>

              </div>
            )}

            {/* Location */}
            <div className="mb-8 flex items-start gap-4">

              <div className="rounded-xl bg-teal-400/10 p-3 text-teal-400">
                <FiMapPin size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-500">
                  Location
                </p>

                <p className="font-medium text-gray-200">
                  {contactInfo.location}
                </p>
              </div>

            </div>

            {/* Social Links */}
            {socialLinks.some((link) => link.url) && (
              <>
                <div className="mb-5 border-t border-white/10" />

                <p className="mb-4 text-sm text-gray-400">
                  Find me online
                </p>

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
                          <Icon
                            size={21}
                            aria-hidden="true"
                          />
                        </a>
                      );
                    })}

                </div>
              </>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
