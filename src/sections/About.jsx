import {
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
} from "react-icons/fa";

// About Section Cards
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

            {/* Decorative Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -left-40 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
            />

            {/* Main Container */}
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Introduction */}
                <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">

                    {/* Left Side */}
                    <div>

                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                            01 / About Me
                        </p>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            More than
                            <br />
                            just{" "}
                            <span className="text-teal-400">
                                code.
                            </span>
                        </h2>

                    </div>

                    {/* Right Side */}
                    <div className="space-y-4 text-gray-400">

                        <p className="text-lg leading-relaxed text-gray-300">
                            I'm a Software Engineering student with a passion
                            for building reliable, scalable, and user-friendly
                            applications. I enjoy solving complex problems,
                            exploring new technologies, and continuously
                            improving my software development skills.
                        </p>

                        {/* <p className="leading-relaxed">
                            I enjoy working with Java, React and
                            modern development technologies to
                            build web and mobile applications.
                            I'm continuously improving my skills
                            through hands-on projects and learning.
                        </p> */}

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 font-medium text-teal-400 transition-colors hover:text-teal-300"
                        >
                            Explore My Projects
                            <span aria-hidden="true">↗</span>
                        </a>

                    </div>

                </div>

                {/* Capability Cards */}
                <div className="mt-16 grid gap-5 md:grid-cols-3">

                    {capabilities.map((item) => {

                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group rounded-2xl border border-white/10 bg-[#14262c] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-[#18343a] motion-reduce:transform-none motion-reduce:transition-none"
                            >

                                {/* Icon */}
                                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                                    <Icon
                                        size={25}
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-7 text-gray-400">
                                    {item.description}
                                </p>

                            </article>
                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default About;
