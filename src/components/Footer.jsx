import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";
import { contactInfo } from "../data/contact";
import { Reveal } from "./MotionPrimitives";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b141a] text-white">
      {/* Subtle Teal Gradient Top Line */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal y={20}>
          {/* Main Footer */}
          <div className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-start">
            {/* Branding */}
            <div className="max-w-sm">
              <a
                href="#home"
                className="inline-block text-3xl font-bold tracking-tight transition-transform duration-200 hover:scale-105"
                aria-label="Back to home"
              >
                RI<span className="text-teal-400">.</span>
              </a>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Software Engineering Portfolio. Building thoughtful solutions
                and continuously learning through real-world projects.
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
                    className="inline-block text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-teal-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Social Links & Back to Top */}
            <div>
              <p className="mb-5 text-sm font-semibold">Connect</p>

              <div className="flex items-center gap-3">
                {contactInfo.github && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                )}

                {contactInfo.linkedin && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
                  >
                    <FiLinkedin size={20} />
                  </motion.a>
                )}

                {contactInfo.email && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${contactInfo.email}`}
                    aria-label="Send email"
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-gray-400 transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-400"
                  >
                    <FiMail size={20} />
                  </motion.a>
                )}

                {/* Smooth Back to Top Button */}
                <motion.button
                  type="button"
                  onClick={scrollToTop}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Back to top"
                  title="Back to top"
                  className="group rounded-xl border border-teal-400/20 bg-teal-400/10 p-3 text-teal-400 transition-colors hover:border-teal-400/50 hover:bg-teal-500 hover:text-white"
                >
                  <FiArrowUp
                    size={20}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-sm text-gray-500 sm:flex-row">
          <p>© {currentYear} Rasheeda. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex text-teal-400"
            >
              <FiHeart aria-hidden="true" />
            </motion.span>
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;