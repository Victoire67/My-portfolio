import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

/** Fades and lifts its children into place the first time they scroll into view. */
function Reveal({ children, delay = 0, y = 40, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <Reveal className="mb-14 text-center">
            <p className="mb-3 font-display text-sm font-semibold tracking-[0.3em] text-teal-300 uppercase">
                {eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">{title}</h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mx-auto mt-5 h-1 w-20 origin-center rounded-full bg-linear-to-r from-amber-200 to-teal-300"
            />
        </Reveal>
    );
}

export default Reveal;
