import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "./Button";

const roles = ["Python Developer", "AI / ML Engineer", "Full-Stack MERN Developer", "Problem Solver"];
const name = "Victoire Ansima";

/** Types each role out, pauses, deletes it, then moves on to the next. */
function useTypewriter(words: string[]) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index];
        const done = !deleting && text === word;
        const cleared = deleting && text === "";
        const delay = done ? 1600 : deleting ? 40 : 80;

        const id = setTimeout(() => {
            if (done) setDeleting(true);
            else if (cleared) {
                setDeleting(false);
                setIndex((i) => (i + 1) % words.length);
            } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        }, delay);
        return () => clearTimeout(id);
    }, [text, deleting, index, words]);

    return text;
}

function LandingTxt() {
    const ref = useRef<HTMLElement>(null);
    const role = useTypewriter(roles);

    // Blobs drift toward the cursor for a subtle parallax feel
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 40, damping: 20 });
    const sy = useSpring(my, { stiffness: 40, damping: 20 });
    const invX = useTransform(sx, (v) => -v);
    const invY = useTransform(sy, (v) => -v);

    // Content lifts and fades as the hero scrolls away
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    function handleMove(e: MouseEvent) {
        mx.set((e.clientX / window.innerWidth - 0.5) * 80);
        my.set((e.clientY / window.innerHeight - 0.5) * 80);
    }

    return (
        <section
            ref={ref}
            id="home"
            onMouseMove={handleMove}
            className="bg-grid relative grid h-svh min-h-150 place-content-center overflow-hidden px-5 text-center"
        >
            {/* Animated aurora blobs */}
            <motion.div aria-hidden="true" style={{ x: sx, y: sy }} className="pointer-events-none absolute -top-32 -left-32">
                <div className="h-112 w-112 animate-blob rounded-full bg-teal-500/30 blur-[100px]" />
            </motion.div>
            <motion.div aria-hidden="true" style={{ x: invX, y: invY }} className="pointer-events-none absolute -right-24 bottom-0">
                <div className="h-104 w-104 animate-blob rounded-full bg-amber-300/20 blur-[100px] [animation-delay:-6s]" />
            </motion.div>
            <motion.div aria-hidden="true" style={{ x: sy, y: invX }} className="pointer-events-none absolute top-1/3 left-1/2">
                <div className="h-80 w-80 animate-blob rounded-full bg-violet-500/20 blur-[100px] [animation-delay:-12s]" />
            </motion.div>

            {/* Spinning amber rings, a nod to the original amber shapes */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 animate-spin-slow rounded-[40%] border border-amber-200/20" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 animate-spin-slow rounded-[35%] border border-teal-300/20 [animation-direction:reverse]" />

            <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-sm text-teal-200"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
                    </span>
                    Currently building at <span className="font-semibold text-amber-200">AmaliTech</span>
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-display text-2xl font-medium text-teal-100 sm:text-3xl"
                >
                    Hello{" "}
                    <motion.span
                        className="inline-block origin-[70%_70%]"
                        animate={{ rotate: [0, 18, -8, 18, -4, 10, 0] }}
                        transition={{ delay: 1, duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
                    >
                        👋
                    </motion.span>
                    , I am
                </motion.h1>

                <h2 aria-label={name} className="mt-3 font-display text-5xl leading-tight font-bold sm:text-8xl">
                    {/* Letters animate one by one, grouped per word so lines only break between words */}
                    {name.split(" ").map((word, w, words) => {
                        const offset = words.slice(0, w).join(" ").length + (w ? 1 : 0);
                        return (
                            <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
                                {word.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 60, rotateX: -90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        transition={{ delay: 0.6 + (offset + i) * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-shimmer inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {w < words.length - 1 && " "}
                            </span>
                        );
                    })}
                </h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 h-16 font-display text-xl sm:h-9 text-teal-50 sm:text-3xl"
                >
                    I am a <span className="font-semibold text-amber-200">{role}</span>
                    <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-amber-200 align-middle">&nbsp;</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button txt="View my work" href="#projects" variant="solid" />
                    <Button txt="About me" href="#about" />
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
                href="#about"
                aria-label="Scroll to about section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 flex h-12 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-teal-200/40 pt-2"
            >
                <motion.span
                    animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="h-2 w-1 rounded-full bg-amber-200"
                />
            </motion.a>
        </section>
    );
}

export default LandingTxt;
