import type { ReactElement, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps {
    txt: string;
    href?: string;
    variant?: "solid" | "outline";
}

/** Magnetic button: drifts toward the cursor while hovered, springs back on leave. */
function Button({ txt, href, variant = "outline" }: ButtonProps): ReactElement {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });

    function handleMove(e: MouseEvent<HTMLElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    }
    function reset() {
        x.set(0);
        y.set(0);
    }

    const styles =
        variant === "solid"
            ? "bg-amber-200 text-teal-950 hover:shadow-[0_0_32px_rgba(253,230,138,0.55)]"
            : "border-2 border-amber-200/80 text-amber-100 hover:text-teal-950";

    const Tag = href ? motion.a : motion.button;

    return (
        <Tag
            href={href}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            whileTap={{ scale: 0.95 }}
            className={`group relative isolate inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-base font-semibold transition-[color,box-shadow] duration-300 ${styles}`}
        >
            {variant === "outline" && (
                <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 origin-left scale-x-0 bg-amber-200 transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
            )}
            <span className="relative">{txt}</span>
            <span aria-hidden="true" className="relative transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </Tag>
    );
}
export default Button;
