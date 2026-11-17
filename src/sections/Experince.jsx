import {
  FiBookOpen,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  education,
  practicalExperience,
} from "../data/journey";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0b141a] py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            03 / My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learning. Building.
            <span className="text-teal-400">
              {" "}Growing.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            A journey of continuous learning, practical
            software development, and exploring technologies
            through hands-on projects.
          </p>

        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* EDUCATION */}
          <div>

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                <FiBookOpen size={22} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-bold">
                Education
              </h3>
            </div>

            {/* Education Timeline */}
            <ol className="relative border-l border-teal-400/20 pl-7">

              {education.map((item) => (
                <li
                  key={item.id}
                  className="relative pb-5 last:pb-0"
                >

                  {/* Timeline Dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-[#0b141a] bg-teal-400"
                  />

                  {/* Education Card */}
                  <div className="rounded-2xl border border-white/10 bg-[#112329] p-6 transition-colors duration-300 hover:border-teal-400/30">

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

                </li>
              ))}

            </ol>

          </div>

          {/* PROJECT-BASED EXPERIENCE */}
          <div>

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                <FiCode size={22} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-bold">
                Practical Experience
              </h3>
            </div>

            <div className="space-y-5">

              {practicalExperience.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-white/10 bg-[#112329] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 motion-reduce:transform-none motion-reduce:transition-none"
                >

                  {/* Experience Title */}
                  <div className="flex items-start justify-between gap-4">

                    <h4 className="text-lg font-semibold">
                      {item.title}
                    </h4>

                    <FiCode
                      size={19}
                      className="shrink-0 text-teal-400"
                      aria-hidden="true"
                    />

                  </div>

                  {/* Related Project */}
                  <p className="mt-2 text-sm font-medium text-teal-400">
                    {item.project}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  {/* Technologies */}
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

                </article>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom Link */}
        <div className="mt-14 border-t border-white/10 pt-8">

          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-medium text-teal-400 transition-colors hover:text-teal-300"
          >
            Explore my projects
            <FiArrowUpRight aria-hidden="true" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Experience;

