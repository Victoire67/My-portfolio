import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Button from "./Button";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-me", label: "Contact" },
];

/** Tracks which section is currently in the middle of the viewport. */
function useActiveSection() {
    const [active, setActive] = useState("#home");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                }
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        for (const { href } of links) {
            const el = document.querySelector(href);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, []);
    return active;
}

function Header() {
    const active = useActiveSection();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

    useEffect(() => scrollY.on("change", (y) => setScrolled(y > 40)), [scrollY]);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-500
                       backdrop-blur-md backdrop-saturate-150
                       ${scrolled
                    ? "border-teal-200/10 bg-teal-950/70 shadow-[0_8px_32px_-8px_rgba(45,212,191,0.25)]"
                    : "border-transparent bg-transparent"}`}
        >
            {/* Mystic glows: purely decorative, never intercept clicks */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-12 left-1/4 h-28 w-56 rounded-full bg-teal-400/20 blur-3xl motion-safe:animate-pulse" />
                <div className="absolute -top-12 right-1/4 h-28 w-56 rounded-full bg-violet-500/20 blur-3xl motion-safe:animate-pulse [animation-delay:1.5s]" />
            </div>

            <div
                className={`relative grid w-full grid-cols-[1fr_auto] items-center px-5 transition-[padding] duration-500 sm:grid-cols-[1fr_auto_1fr] ${scrolled ? "py-2.5" : "py-4"}`}
            >
                <a href="#home" className="font-display text-xl font-bold tracking-tight">
                    <span className="text-amber-200">V</span>A<span className="text-teal-300">.</span>
                </a>

                <nav className="hidden justify-self-center sm:block">
                    <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                        {links.map(({ href, label }) => (
                            <li key={href} className="relative">
                                {active === href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-amber-200"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <a
                                    href={href}
                                    className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-amber-200 ${active === href ? "text-teal-950" : "text-teal-50 hover:text-amber-200"}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden justify-self-end sm:block">
                    <Button txt="Contact me" href="#contact-me" />
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                    className="relative grid h-10 w-10 place-content-center gap-1.5 justify-self-end sm:hidden"
                >
                    <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-amber-200" />
                    <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-amber-200" />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden bg-teal-950/95 sm:hidden"
                    >
                        <ul className="grid gap-1 px-5 pb-5">
                            {links.map(({ href, label }, i) => (
                                <motion.li
                                    key={href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <a
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={`block rounded-lg px-3 py-2 font-display text-lg ${active === href ? "bg-amber-200 text-teal-950" : "text-teal-50"}`}
                                    >
                                        {label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Scroll progress, drawn as the amber thread along the bottom edge */}
            <motion.div
                aria-hidden="true"
                style={{ scaleX: progress }}
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-amber-200 via-teal-300 to-violet-400"
            />
        </motion.header>
    );
}

export default Header;
