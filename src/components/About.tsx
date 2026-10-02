import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import myPic from "../assets/myPicture.png";
import LanguageGrid from "./LanguageGrid";
import Reveal, { SectionHeading } from "./Reveal";

const stats = [
    { value: 4, suffix: "+", label: "Projects shipped" },
    { value: 9, suffix: "", label: "Technologies" },
    { value: 100, suffix: "%", label: "Curiosity" },
];

/** Counts from 0 up to `to` once the number scrolls into view. */
function Counter({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, to, suffix]);
    return <span ref={ref}>0{suffix}</span>;
}

/** Portrait that tilts in 3D toward the cursor. */
function Portrait() {
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 150, damping: 15 });
    const sry = useSpring(ry, { stiffness: 150, damping: 15 });
    const badgeX = useTransform(sry, (v) => v * 1.5);
    const badgeXInv = useTransform(sry, (v) => -v * 1.5);

    return (
        <motion.div
            onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                ry.set(((e.clientX - r.left) / r.width - 0.5) * 20);
                rx.set(-((e.clientY - r.top) / r.height - 0.5) * 20);
            }}
            onMouseLeave={() => {
                rx.set(0);
                ry.set(0);
            }}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
            className="relative mx-auto aspect-square w-72 sm:w-96"
        >
            {/* Rotating gradient ring */}
            <div className="absolute -inset-2 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#fde68a,#5eead4,#a78bfa,#fde68a)] opacity-90 blur-[2px]" />
            <div className="absolute -inset-6 animate-pulse rounded-full bg-teal-400/20 blur-2xl" />
            <img
                src={myPic}
                alt="Victoire Ansima"
                className="relative h-full w-full rounded-full border-8 border-[#031a19] object-cover object-top grayscale-[20%] transition duration-500 hover:grayscale-0"
            />
            <FloatingBadge style={{ x: badgeX }} className="-right-2 top-10" delay={0}>
                ⚛️ React
            </FloatingBadge>
            <FloatingBadge style={{ x: badgeXInv }} className="-left-4 bottom-16" delay={1.5}>
                🟢 Node.js
            </FloatingBadge>
            <FloatingBadge style={{ x: badgeXInv }} className="-left-6 top-16" delay={0.75}>
                🐍 Python
            </FloatingBadge>
            <FloatingBadge style={{ x: badgeX }} className="-right-4 bottom-8" delay={2.25}>
                🔥 PyTorch
            </FloatingBadge>
        </motion.div>
    );
}

function FloatingBadge({
    children,
    className,
    delay,
    style,
}: {
    children: ReactNode;
    className: string;
    delay: number;
    style: { x: MotionValue<number> };
}) {
    return (
        <motion.div style={style} className={`absolute ${className}`}>
            <div
                style={{ animationDelay: `${delay}s` }}
                className="animate-float rounded-full border border-white/15 bg-teal-950/80 px-4 py-2 text-sm font-medium text-teal-50 shadow-xl backdrop-blur"
            >
                {children}
            </div>
        </motion.div>
    );
}

function About() {
    return (
        <section id="about" className="relative overflow-hidden px-5 py-28">
            <div aria-hidden="true" className="pointer-events-none absolute top-20 -left-40 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />

            <SectionHeading eyebrow="Get to know me" title="About Me" />

            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
                <Reveal>
                    <Portrait />
                </Reveal>

                <div>
                    <Reveal delay={0.1}>
                        <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                            I am Victoire, a <span className="text-shimmer font-semibold">Python & AI / ML developer</span> at AmaliTech.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-5 text-lg leading-relaxed text-teal-100/80">
                            I build intelligent, data-driven solutions with Python and machine learning, and I bring a
                            full-stack MERN background that lets me take ideas from models and APIs all the way to
                            polished web experiences. I enjoy learning new skills and innovating with technology.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} className="mt-10 grid grid-cols-3 gap-4">
                        {stats.map((s) => (
                            <motion.div
                                key={s.label}
                                whileHover={{ y: -6 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur transition-colors hover:border-amber-200/40"
                            >
                                <p className="font-display text-3xl font-bold text-amber-200 sm:text-4xl">
                                    <Counter to={s.value} suffix={s.suffix} />
                                </p>
                                <p className="mt-1 text-xs text-teal-100/70 sm:text-sm">{s.label}</p>
                            </motion.div>
                        ))}
                    </Reveal>
                </div>
            </div>

            <div className="mx-auto mt-28 max-w-6xl">
                <Reveal className="mb-10 text-center">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">My toolbox</h3>
                </Reveal>
                <LanguageGrid />
            </div>
        </section>
    );
}

export default About;
