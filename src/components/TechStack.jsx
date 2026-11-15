import { useEffect, useRef, useState } from "react";
import {
    SiReact,
    SiJavascript,
    SiSpringboot,
    SiPostgresql,
    SiFirebase,
    SiTailwindcss,
    SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
    { name: "Java", category: "Backend", icon: FaJava },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "JavaScript", category: "Language", icon: SiJavascript },
    { name: "Spring Boot", category: "Backend", icon: SiSpringboot },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "Firebase", category: "Cloud Services", icon: SiFirebase },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    { name: "Git", category: "Version Control", icon: SiGit },
];

const TechStack = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {

        const section = sectionRef.current;

        if (!section) return;

        // Accessibility: reduce animations if requested
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsVisible(true);
            return;
        }

        // Detect when the section enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }

            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();


    }, []);

    return (
        <section
            id="tech-stack"
            ref={sectionRef}
            className="relative mt-28 pb-24"
        >

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-teal-500/5 blur-3xl" />

            {/* Animated Container */}
            <div
                className={`
          transform-gpu
          transition-[opacity,transform]
          duration-700
          ease-out
          motion-reduce:transition-none
          ${isVisible
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-12 scale-90 opacity-0"
                    }
        `}
            >

                {/* Section Heading */}
                <div className="mb-10 text-center">

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
                        My Tech Stack
                    </p>

                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Technologies I Build With
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                        Tools and technologies I use to bring ideas to life.
                    </p>

                </div>




                {/* Technology Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">


                    {technologies.map((tech, index) => {

                        const Icon = tech.icon;

                        return (
                            // Outer div - Scroll Reveal Animation
                            <div
                                key={tech.name}
                                style={{
                                    transitionDelay: isVisible
                                        ? `${index * 100}ms`
                                        : "0ms"
                                }}
                                className={`
                transition-[opacity,transform]
                duration-300
                ease-out
                motion-reduce:transition-none
                ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                    }
            `}
                            >

                                {/* Inner div - Technology Card Design */}
                                <div
                                    className="
                    group
                    h-full
                    rounded-2xl
                    border border-teal-400/15
                    bg-[#112329]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-teal-400/50
                    hover:bg-[#16363a]
                    hover:shadow-lg
                    hover:shadow-teal-500/10
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                "
                                >

                                    {/* Technology Icon */}
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 transition-colors group-hover:bg-teal-400/20">
                                        <Icon size={26} aria-hidden="true" />
                                    </div>

                                    {/* Technology Name */}
                                    <h3 className="font-semibold text-white">
                                        {tech.name}
                                    </h3>

                                    {/* Technology Category */}
                                    <p className="mt-1 text-xs text-gray-400">
                                        {tech.category}
                                    </p>

                                </div>

                            </div>
                        );
                    })}


                </div>

            </div>



        </section>
    );

}

export default TechStack;

