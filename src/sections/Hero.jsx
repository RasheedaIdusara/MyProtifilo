import profileImage from "../assets/cinedark.png";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import TechStack from "../components/TechStack";
import { contactInfo } from "../data/contact";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b141a] pt-32 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Hero Grid */}
        <div className="grid min-h-[65vh] grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-7">
            <span className="inline-block rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-400">
              Software Engineering Student
            </span>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Building <span className="text-teal-400">software</span>
              <br />
              that makes an
              <br />
              <span className="font-serif italic">impact.</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-gray-400">
              Hi, I'm Rasheeda — a software engineering student passionate about
              building modern, scalable and user-friendly applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-teal-500 px-7 py-3 font-medium text-white transition-colors hover:bg-teal-400"
              >
                Contact Me →
              </a>

              {contactInfo.resumeUrl && (
                <a
                  href={contactInfo.resumeUrl}
                  download
                  className="rounded-full border border-white/15 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-teal-400/40 hover:text-white"
                >
                  ↓ Download CV
                </a>
              )}
            </div>

            {/* Social Links (Connected to contact.js) */}
            <div className="flex items-center gap-5 pt-1">
              <span className="text-sm text-gray-500">Connect</span>

              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="text-gray-400 transition-colors duration-300 hover:text-teal-400"
                >
                  <FaGithub size={20} />
                </a>
              )}

              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="text-gray-400 transition-colors duration-300 hover:text-teal-400"
                >
                  <FaLinkedinIn size={20} />
                </a>
              )}

              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Send me an email"
                  className="text-gray-400 transition-colors duration-300 hover:text-teal-400"
                >
                  <FaEnvelope size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-teal-500/15 blur-2xl" />

              <img
                src={profileImage}
                alt="Rasheeda's profile portrait"
                className="relative aspect-[4/5] w-full rounded-2xl border border-teal-500/20 object-cover shadow-2xl"
              />

              {/* Availability Badge with Live Pulse */}
              <div className="absolute -bottom-4 right-2 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#101f24] px-5 py-3 text-sm shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span>{contactInfo.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Technology Stack */}
        <TechStack />
      </div>
    </section>
  );
};

export default Hero;