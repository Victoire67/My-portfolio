import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

const links = [
    { href: "#home", label: "main.py" },
    { href: "#about", label: "about.py" },
    { href: "#experience", label: "experience.py" },
    { href: "#projects", label: "projects.ipynb" },
    { href: "#contact-me", label: "contact.py" },
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

/** Small flat Python-ish mark: two offset squares in blue and yellow. */
function Logo() {
    return (
        <a href="#home" className="flex items-center gap-2.5 font-mono text-sm font-bold text-fg">
            <span aria-hidden="true" className="relative h-6 w-6">
                <span className="absolute top-0 left-0 h-4 w-4 rounded-[3px] bg-py-blue" />
                <span className="absolute right-0 bottom-0 h-4 w-4 rounded-[3px] border-2 border-ink bg-py-yellow" />
            </span>
            victoire<span className="text-py-yellow">.py</span>
        </a>
    );
}

function Header() {
    const active = useActiveSection();
    const [open, setOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-ink/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5">
                <div className="py-3.5">
                    <Logo />
                </div>

                {/* Editor-style file tabs */}
                <nav className="hidden self-stretch md:block">
                    <ul className="flex h-full">
                        {links.map(({ href, label }) => {
                            const isActive = active === href;
                            return (
                                <li key={href} className="relative flex">
                                    {isActive && (
                                        <motion.span
                                            layoutId="tab-indicator"
                                            className="absolute inset-x-0 top-0 h-0.5 bg-py-yellow"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                    <a
                                        href={href}
                                        className={`flex items-center gap-2 border-r border-line px-4 font-mono text-xs transition-colors first:border-l focus-visible:outline-2 focus-visible:outline-py-yellow ${isActive ? "bg-panel text-fg" : "text-muted hover:bg-panel hover:text-fg"}`}
                                    >
                                        <span aria-hidden="true" className={label.endsWith(".ipynb") ? "text-syn-num" : "text-py-blue"}>
                                            {label.endsWith(".ipynb") ? "◆" : "●"}
                                        </span>
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <a
                    href="#contact-me"
                    className="hidden rounded-md bg-py-yellow px-3.5 py-1.5 font-mono text-xs font-bold text-ink transition-colors hover:bg-fg lg:inline-block"
                >
                    hire_me()
                </a>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                    className="grid h-10 w-10 place-content-center gap-1.5 md:hidden"
                >
                    <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-py-yellow" />
                    <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-py-yellow" />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-line bg-panel md:hidden"
                    >
                        <ul className="grid gap-1 px-5 py-4">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={`block rounded-md px-3 py-2 font-mono text-sm ${active === href ? "bg-py-yellow text-ink" : "text-fg"}`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Scroll progress */}
            <motion.div aria-hidden="true" style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-py-blue" />
        </header>
    );
}

export default Header;
