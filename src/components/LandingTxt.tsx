import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { WindowBar } from "./Reveal";

const roles = ["Python Developer", "AI / ML Engineer", "Full-Stack Developer", "Problem Solver"];

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

/* ---------- tiny syntax-highlight helpers ---------- */
const K = ({ children }: { children: ReactNode }) => <span className="text-syn-kw">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="text-syn-str">{children}</span>;
const F = ({ children }: { children: ReactNode }) => <span className="text-syn-fn">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="text-dim italic">{children}</span>;
const Y = ({ children }: { children: ReactNode }) => <span className="text-py-yellow">{children}</span>;

const codeLines: ReactNode[] = [
    <><K>from</K> ai <K>import</K> Model, curiosity</>,
    <></>,
    <><K>class</K> <Y>Victoire</Y>(Developer):</>,
    <>    <C>"""Python &amp; AI / ML developer."""</C></>,
    <></>,
    <>    <K>def</K> <F>__init__</F>(self):</>,
    <>        self.company = <S>"AmaliTech"</S></>,
    <>        self.stack = [<S>"Python"</S>, <S>"PyTorch"</S>, <S>"React"</S>]</>,
    <>        self.focus = <S>"machine learning"</S></>,
    <></>,
    <>    <K>def</K> <F>build</F>(self, idea: str) -&gt; Product:</>,
    <>        model = Model.<F>train</F>(idea, data=curiosity)</>,
    <>        <K>return</K> model.<F>deploy</F>()</>,
];

function CodeWindow() {
    return (
        <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
            <WindowBar title="victoire.py" right="Python 3.12" />
            <pre className="overflow-x-auto py-4 font-mono text-[12.5px] leading-6 sm:text-[13.5px]">
                {codeLines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                        className="flex hover:bg-panel-2"
                    >
                        <span className="w-10 shrink-0 pr-4 text-right text-dim select-none">{i + 1}</span>
                        <code className="pr-4 whitespace-pre text-fg">{line}</code>
                    </motion.div>
                ))}
            </pre>
        </div>
    );
}

const EPOCHS = 5;

/** A fake training run that loops forever: epochs tick by, loss drops, accuracy climbs. */
function TrainingTerminal() {
    const [epoch, setEpoch] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => setEpoch((e) => (e > EPOCHS + 3 ? 0 : e + 1)), epoch === 0 ? 1800 : 900);
        return () => clearTimeout(id);
    }, [epoch]);

    const shown = Math.min(epoch, EPOCHS);
    const done = epoch > EPOCHS;

    return (
        <div className="overflow-hidden rounded-xl border border-line bg-ink font-mono text-[12px] sm:text-[12.5px]">
            <WindowBar title="terminal — zsh" />
            <div className="min-h-44 space-y-1 p-4 leading-5">
                <p>
                    <span className="text-syn-ok">➜</span> <span className="text-py-blue">~/portfolio</span>{" "}
                    <span className="text-fg">python train.py</span>
                </p>
                {Array.from({ length: shown }, (_, i) => {
                    const n = i + 1;
                    const loss = (0.92 * Math.pow(0.55, i)).toFixed(3);
                    const acc = (0.71 + i * 0.065).toFixed(3);
                    return (
                        <p key={n} className="flex flex-wrap gap-x-3 text-muted">
                            <span>
                                epoch <span className="text-fg">{n}/{EPOCHS}</span>
                            </span>
                            <span aria-hidden="true" className="text-py-yellow">
                                {"█".repeat(n * 2)}
                                <span className="text-line">{"█".repeat((EPOCHS - n) * 2)}</span>
                            </span>
                            <span>
                                loss <span className="text-syn-num">{loss}</span>
                            </span>
                            <span>
                                acc <span className="text-syn-ok">{acc}</span>
                            </span>
                        </p>
                    );
                })}
                {done ? (
                    <p className="text-syn-ok">✓ model ready · shipping to production</p>
                ) : (
                    <span className="inline-block h-4 w-2 animate-blink bg-fg align-middle" />
                )}
            </div>
        </div>
    );
}

function LandingTxt() {
    const role = useTypewriter(roles);

    return (
        <section id="home" className="bg-dots relative overflow-hidden px-5 pt-28 pb-20 lg:min-h-svh lg:pt-32">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-syn-ok opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-syn-ok" />
                        </span>
                        currently building @ <span className="font-bold text-py-yellow">AmaliTech</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="font-mono text-base text-muted sm:text-lg"
                    >
                        <span className="text-py-blue">&gt;&gt;&gt;</span> <F>print</F>(<S>"Hello, world 👋"</S>)
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 font-display text-5xl leading-[1.05] font-bold text-fg sm:text-7xl xl:text-8xl"
                    >
                        Victoire
                        <br />
                        <span className="text-py-blue">Ansima</span>
                        <span className="text-py-yellow">_</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-7 h-8 font-mono text-lg sm:text-2xl"
                        aria-live="polite"
                    >
                        <span className="text-fg">role</span> <span className="text-muted">=</span>{" "}
                        <span className="text-syn-str">"{role}</span>
                        <span className="ml-0.5 inline-block h-[1.1em] w-2.5 animate-blink bg-py-yellow align-middle" />
                        <span className="text-syn-str">"</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85 }}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
                    >
                        I build intelligent, data-driven products with <span className="text-fg">Python</span> and{" "}
                        <span className="text-fg">machine learning</span>, then ship them end-to-end on the web.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Button txt="view_projects()" href="#projects" variant="solid" />
                        <Button txt="cat about.md" href="#about" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative grid gap-5"
                >
                    <CodeWindow />
                    <div className="lg:-mt-2 lg:ml-12">
                        <TrainingTerminal />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default LandingTxt;
