import { useState } from "react";

const navLinks = [

    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#expirence", label: "Experience" },

];


const NavBar = () => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-[#0b141a]/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="#home" className="text-xl font-bold tracking-tight text-white">
                    RI<span className="text-teal-400">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2">

                    {navLinks.map((index) => (
                        <a key={index.href} href={index.href} className="rounded-full px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-teal-400"
                        >
                            {index.label}
                        </a>
                    ))}

                </div>

                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
                >
                    Contact Me
                </a>

                <button type="button" className="md:hidden text-white text-2xl"
                    onClick={() => setisOpen(prev => !prev)}
                    aria-label={isOpen ? "Close menu" : "O  pen menu"}
                    aria-expanded={isOpen}

                >

                    {isOpen ? "✕" : "☰"}

                </button>
            </nav>

            {isOpen && (

                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    aria-hidden={!isOpen}
                    className={`md:hidden overflow-hidden bg-[#0b141a] px-6 py-5 transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-80 opacity-100 visible" : "max-h-0 opacity-0 invisible"
                    } `}
                    >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-300 hover:text-teal-400" onClick={() => setisOpen(false)}>
                                {link.label}
                            </a>


                        ))}

                        <a
                            href="#contact"
                            onClick={() => setisOpen(false)}
                            className="rounded-full bg-teal-500 px-5 py-3 text-center text-white"
                        >
                            Contact Me
                        </a>
                    </div>
                </nav>
            )}
        </header>

    );
}

export default NavBar;








