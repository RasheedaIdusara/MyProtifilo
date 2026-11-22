import { motion } from "framer-motion";
import profileImage from "../assets/cinedark.png";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import TechStack from "../components/TechStack";
import { contactInfo } from "../data/contact";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b141a] pt-32 text-white"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[65vh] grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Side - Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-400"
            >
              Software Engineering Student
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            >
              Building <span className="text-teal-400">software</span>
              <br />
              that makes an
              <br />
              <span className="font-serif italic">impact.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg leading-relaxed text-gray-400"
            >
              Hi, I'm Rasheeda — a software engineering student passionate about
              building modern, scalable and user-friendly applications.
            </motion.p>

            {/* Action Buttons with Spring Physics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3 font-medium text-white transition-colors hover:bg-teal-400"
              >
                Contact Me
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              {contactInfo.resumeUrl && (
                <motion.a
                  href={contactInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-white/15 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-teal-400/40 hover:text-white"
                >
                  ↓ Download CV
                </motion.a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 pt-1"
            >
              <span className="text-sm text-gray-500">Connect</span>

              {contactInfo.github && (
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  <FaGithub size={20} />
                </motion.a>
              )}

              {contactInfo.linkedin && (
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
              )}

              {contactInfo.email && (
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Send me an email"
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  <FaEnvelope size={20} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Entrance + Continuous Gentle Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute -inset-3 rounded-3xl bg-teal-500/15 blur-2xl" />

              <img
                src={profileImage}
                alt="Rasheeda's profile portrait"
                className="relative aspect-[4/5] w-full rounded-2xl border border-teal-500/20 object-cover shadow-2xl"
              />

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute -bottom-4 right-2 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#101f24] px-5 py-3 text-sm shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span>{contactInfo.availability}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default Hero;