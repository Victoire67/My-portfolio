import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

/** Fades and lifts its children into place the first time they scroll into view. */
function Reveal({ children, delay = 0, y = 30, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Section title styled like a Python module header: `# 01 · about.py` + heading. */
export function SectionHeading({ index, file, title }: { index: string; file: string; title: string }) {
    return (
        <Reveal className="mx-auto mb-14 max-w-6xl">
            <p className="mb-3 font-mono text-sm text-dim">
                <span className="text-py-yellow">#</span> {index} <span className="text-line">·</span>{" "}
                <span className="text-py-blue">{file}</span>
            </p>
            <h2 className="font-display text-4xl font-bold text-fg sm:text-5xl">
                {title}
                <span className="text-py-yellow">.</span>
            </h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-5 flex h-1 w-24 origin-left"
            >
                <span className="h-full w-1/2 bg-py-blue" />
                <span className="h-full w-1/2 bg-py-yellow" />
            </motion.div>
        </Reveal>
    );
}

/** Window chrome shared by code editors, notebooks and terminals. */
export function WindowBar({ title, right }: { title: string; right?: ReactNode }) {
    return (
        <div className="flex items-center gap-3 border-b border-line bg-panel-2 px-4 py-2.5">
            <div aria-hidden="true" className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="truncate font-mono text-xs text-muted">{title}</p>
            {right && <div className="ml-auto font-mono text-xs text-dim">{right}</div>}
        </div>
    );
}

export default Reveal;
