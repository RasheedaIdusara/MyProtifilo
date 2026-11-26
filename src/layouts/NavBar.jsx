import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress bar calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = ["home", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0b141a]/90 backdrop-blur-md">
      {/* Scroll Progress Bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          RI<span className="text-teal-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "bg-teal-500/20 font-medium text-teal-300"
                    : "text-gray-300 hover:bg-white/10 hover:text-teal-400"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden items-center justify-center rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-400 md:inline-flex"
        >
          Contact Me
        </a>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#0b141a] px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  activeSection === link.href
                    ? "font-semibold text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-teal-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;