import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

import { contactInfo } from "../data/contact";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b141a] text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-start">

          {/* Branding */}
          <div className="max-w-sm">

            <a
              href="#home"
              className="text-3xl font-bold tracking-tight"
              aria-label="Back to home"
            >
              RI<span className="text-teal-400">.</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Software Engineering Portfolio.
              Building thoughtful solutions and
              continuously learning through
              real-world projects.
            </p>

          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">

            <p className="mb-5 text-sm font-semibold text-white">
              Quick Links
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">

              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-teal-400"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </nav>

          {/* Social Links */}
          <div>

            <p className="mb-5 text-sm font-semibold">
              Connect
            </p>

            <div className="flex items-center gap-3">

              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-xl border border-white/10 p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
                >
                  <FiGithub size={20} />
                </a>
              )}

              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-xl border border-white/10 p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
                >
                  <FiLinkedin size={20} />
                </a>
              )}

              {/* Back to Top */}
              <a
                href="#home"
                aria-label="Back to top"
                className="rounded-xl border border-white/10 p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
              >
                <FiArrowUp size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-sm text-gray-500 sm:flex-row">

          <p>
            © {currentYear} Rasheeda. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <FiHeart className="text-teal-400" aria-hidden="true" />
            React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
