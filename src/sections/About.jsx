import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { Reveal, SpotlightCard } from "../components/MotionPrimitives";

const capabilities = [
  {
    title: "Backend Development",
    description:
      "Developing backend functionality, REST APIs and database-driven applications using Java.",
    icon: FaServer,
  },
  {
    title: "Mobile Development",
    description:
      "Creating Android applications with Java and integrating services such as Firebase.",
    icon: FaMobileAlt,
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, JavaScript and Tailwind CSS.",
    icon: FaLaptopCode,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0e1b21] py-24 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                01 / About Me
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                More than
                <br />
                just <span className="text-teal-400">code.</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-400">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a Software Engineering student with a passion for building
                reliable, scalable, and user-friendly applications. I enjoy
                solving complex problems, exploring new technologies, and
                continuously improving my software development skills.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 font-medium text-teal-400 transition-colors hover:text-teal-300"
              >
                Explore My Projects
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Capability Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.12}>
                <SpotlightCard className="group h-full rounded-2xl border border-white/10 bg-[#14262c] p-7 transition-colors duration-300 hover:border-teal-400/40 hover:bg-[#18343a]">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;