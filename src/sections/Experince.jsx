import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiArrowUpRight } from "react-icons/fi";
import { education, practicalExperience } from "../data/journey";
import { Reveal, SpotlightCard } from "../components/MotionPrimitives";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0e1b21] py-24 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              03 / My Journey
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Learning. Building.
              <span className="text-teal-400"> Growing.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A journey of continuous learning, practical software development,
              and exploring technologies through hands-on projects.
            </p>
          </div>
        </Reveal>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* EDUCATION */}
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                  <FiBookOpen size={22} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </Reveal>

            {/* Animated Education Timeline */}
            <ol className="relative pl-7">
              {/* Drawing Vertical Line */}
              <motion.div
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }}
                className="absolute top-2 bottom-2 left-0 w-[2px] bg-gradient-to-b from-teal-400 via-teal-400/40 to-teal-400/10"
              />

              {education.map((item, idx) => (
                <li key={item.id} className="relative pb-5 last:pb-0">
                  {/* Animated Timeline Dot */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                      delay: 0.15 + idx * 0.15,
                    }}
                    className="absolute -left-[34px] top-7 h-3.5 w-3.5 rounded-full border-2 border-[#0e1b21] bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.7)]"
                  />

                  <Reveal delay={idx * 0.12}>
                    <div className="rounded-2xl border border-white/10 bg-[#112329] p-6 transition-colors duration-300 hover:border-teal-400/35">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                        {item.level}
                      </span>

                      <h4 className="mt-3 text-lg font-semibold">
                        {item.qualification}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* PRACTICAL EXPERIENCE */}
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                  <FiCode size={22} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold">Practical Experience</h3>
              </div>
            </Reveal>

            <div className="space-y-5">
              {practicalExperience.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.12}>
                  <SpotlightCard className="group rounded-2xl border border-white/10 bg-[#112329] p-6 transition-colors duration-300 hover:border-teal-400/40">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <FiCode
                        size={19}
                        className="shrink-0 text-teal-400 transition-transform duration-300 group-hover:rotate-12"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-2 text-sm font-medium text-teal-400">
                      {item.project}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <Reveal delay={0.2}>
          <div className="mt-14 border-t border-white/10 pt-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              Explore my projects
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;