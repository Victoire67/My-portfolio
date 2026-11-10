import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useInView } from "framer-motion";
import myPic from "../assets/myPicture.png";
import LanguageGrid from "./LanguageGrid";
import Reveal, { SectionHeading, WindowBar } from "./Reveal";

const stats = [
    { value: 4, suffix: "+", label: "projects_shipped" },
    { value: 13, suffix: "", label: "technologies" },
    { value: 100, suffix: "%", label: "curiosity" },
];

/** Counts from 0 up to `to` once the number scrolls into view. */
function Counter({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, to, suffix]);
    return <span ref={ref}>0{suffix}</span>;
}

/** Portrait framed like a computer-vision notebook output, with a detection box. */
function Portrait() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <div ref={ref} className="overflow-hidden rounded-xl border border-line bg-panel">
            <WindowBar title="vision.ipynb — detect(victoire.png)" />
            <div className="relative aspect-square">
                <img src={myPic} alt="Victoire Ansima" className="h-full w-full object-cover object-top" />

                {/* Bounding box draws in when scrolled into view */}
                <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    className="absolute top-[6%] right-[14%] bottom-[2%] left-[14%] border-2 border-py-yellow"
                >
                    <span className="absolute -top-[2px] left-[-2px] -translate-y-full bg-py-yellow px-2 py-0.5 font-mono text-xs font-bold text-ink">
                        person · 0.99
                    </span>
                    {/* corner ticks */}
                    <span className="absolute -top-1.5 -left-1.5 h-3 w-3 border-t-4 border-l-4 border-py-yellow" />
                    <span className="absolute -top-1.5 -right-1.5 h-3 w-3 border-t-4 border-r-4 border-py-yellow" />
                    <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b-4 border-l-4 border-py-yellow" />
                    <span className="absolute -right-1.5 -bottom-1.5 h-3 w-3 border-r-4 border-b-4 border-py-yellow" />
                </motion.div>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-t border-line px-4 py-2.5 font-mono text-xs text-muted">
                <span>
                    detections: <span className="text-fg">1</span>
                </span>
                <span>
                    label: <span className="text-syn-str">"developer"</span>
                </span>
                <span>
                    status: <span className="text-syn-ok">online</span>
                </span>
            </div>
        </div>
    );
}

/** A Jupyter-style cell: `In [n]:` code line + `Out[n]:` result. */
function Cell({ n, code, children }: { n: number; code: ReactNode; children: ReactNode }) {
    return (
        <div className="overflow-hidden rounded-xl border border-line bg-panel">
            <div className="flex gap-4 border-b border-line bg-panel-2 px-4 py-3 font-mono text-sm">
                <span className="shrink-0 text-py-blue">In [{n}]:</span>
                <code className="text-fg">{code}</code>
            </div>
            <div className="flex gap-4 px-4 py-4">
                <span className="hidden shrink-0 font-mono text-sm text-syn-num sm:block">Out[{n}]:</span>
                <div className="min-w-0 flex-1">{children}</div>
            </div>
        </div>
    );
}

function About() {
    return (
        <section id="about" className="relative border-t border-line px-5 py-28">
            <SectionHeading index="01" file="about.py" title="About Me" />

            <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                    <Portrait />
                </Reveal>

                <div className="grid gap-5">
                    <Reveal delay={0.1}>
                        <Cell
                            n={1}
                            code={
                                <>
                                    victoire.<span className="text-syn-fn">bio</span>()
                                </>
                            }
                        >
                            <p className="font-display text-2xl leading-snug text-fg sm:text-[1.7rem]">
                                I'm Victoire, a <span className="font-semibold text-py-yellow">Python &amp; AI / ML developer</span> at AmaliTech.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted">
                                I build intelligent, data-driven solutions with Python and machine learning, and I bring a
                                full-stack MERN background that lets me take ideas from models and APIs all the way to
                                polished web experiences. I enjoy learning new skills and innovating with technology.
                            </p>
                        </Cell>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <Cell
                            n={2}
                            code={
                                <>
                                    victoire.<span className="text-syn-fn">metrics</span>()
                                </>
                            }
                        >
                            <div className="grid grid-cols-3 divide-x divide-line overflow-hidden rounded-lg border border-line font-mono">
                                {stats.map((s) => (
                                    <div key={s.label} className="px-3 py-4 text-center">
                                        <p className="text-3xl font-bold text-py-yellow sm:text-4xl">
                                            <Counter to={s.value} suffix={s.suffix} />
                                        </p>
                                        <p className="mt-1 text-[11px] text-muted sm:text-xs">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Cell>
                    </Reveal>
                </div>
            </div>

            <div className="mx-auto mt-20 max-w-6xl">
                <LanguageGrid />
            </div>
        </section>
    );
}

export default About;
