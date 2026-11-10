import { motion } from "framer-motion";
import Reveal, { WindowBar } from "./Reveal";

/** The toolbox, rendered as a Python dict. Edit these lists to update the site. */
const stack: { key: string; accent: string; items: string[] }[] = [
    { key: "ai_ml", accent: "border-py-yellow text-py-yellow", items: ["Python", "PyTorch", "Machine Learning", "Data"] },
    { key: "backend", accent: "border-py-blue text-py-blue", items: ["Node.js", "Express", "MongoDB"] },
    { key: "frontend", accent: "border-syn-fn text-syn-fn", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Figma"] },
    { key: "tooling", accent: "border-syn-ok text-syn-ok", items: ["Docker", "Git"] },
];

const all = stack.flatMap((g) => g.items);

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function LanguageGrid() {
    return (
        <>
            <Reveal>
                <div className="overflow-hidden rounded-xl border border-line bg-panel">
                    <WindowBar title="toolbox.py" right={`len(stack) == ${all.length}`} />
                    <div className="overflow-x-auto p-5 font-mono text-sm sm:p-7 sm:text-[15px]">
                        <p className="text-fg">
                            stack <span className="text-muted">=</span> {"{"}
                        </p>
                        <ul className="my-2 grid gap-4 pl-5 sm:pl-8">
                            {stack.map((group) => (
                                <li key={group.key} className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                                    <span className="shrink-0 lg:w-32">
                                        <span className="text-syn-str">"{group.key}"</span>
                                        <span className="text-muted">:</span>
                                    </span>
                                    <motion.ul
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="flex flex-wrap items-center gap-2"
                                    >
                                        <span className="text-muted">[</span>
                                        {group.items.map((name) => (
                                            <motion.li
                                                key={name}
                                                variants={item}
                                                className={`rounded-md border bg-ink px-2.5 py-1 text-xs transition-colors hover:bg-panel-2 sm:text-sm ${group.accent}`}
                                            >
                                                {name}
                                            </motion.li>
                                        ))}
                                        <span className="text-muted">],</span>
                                    </motion.ul>
                                </li>
                            ))}
                        </ul>
                        <p className="text-fg">{"}"}</p>
                    </div>
                </div>
            </Reveal>

            {/* Endless marquee of tech names */}
            <div aria-hidden="true" className="relative mt-14 overflow-hidden border-y border-line py-4">
                <div className="flex w-max animate-marquee font-mono text-2xl font-bold text-line sm:text-4xl">
                    {[...all, ...all].map((name, i) => (
                        <span key={i} className="flex items-center gap-10 pr-10">
                            {name}
                            <span className="text-py-blue/40">/</span>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LanguageGrid;
