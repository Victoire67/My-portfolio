import type { ReactElement } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
    txt: string;
    href?: string;
    variant?: "solid" | "outline";
}

/** Flat, terminal-flavoured button. */
function Button({ txt, href, variant = "outline" }: ButtonProps): ReactElement {
    const styles =
        variant === "solid"
            ? "bg-py-yellow text-ink border-py-yellow hover:bg-ink hover:text-py-yellow"
            : "border-py-blue text-fg hover:bg-py-blue hover:text-ink";

    const Tag = href ? motion.a : motion.button;

    return (
        <Tag
            href={href}
            whileTap={{ scale: 0.96 }}
            className={`group inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border-2 px-5 py-2.5 font-mono text-sm font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-yellow ${styles}`}
        >
            <span aria-hidden="true" className="opacity-60">
                {variant === "solid" ? ">>>" : "$"}
            </span>
            <span>{txt}</span>
        </Tag>
    );
}
export default Button;
