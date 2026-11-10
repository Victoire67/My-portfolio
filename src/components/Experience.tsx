import { motion } from "framer-motion";
import Reveal, { SectionHeading, WindowBar } from "./Reveal";

const experience = [
    {
        hash: "a1c3f9e",
        company: "AmaliTech",
        role: "Python Developer · AI / Machine Learning",
        period: "Present",
        current: true,
        description:
            "Building Python solutions and AI / machine learning features, from data preparation and model development to integrating intelligent capabilities into real products.",
        tags: ["Python", "Machine Learning", "AI", "Data"],
    },
    {
        hash: "7b02d4c",
        company: "The Gym",
        role: "Full-Stack Development Training",
        period: "Completed",
        current: false,
        description:
            "An intensive training program where I learned React, designing interfaces in Figma, and building full-stack applications with the MERN stack, from the database and APIs to the user interface.",
        tags: ["React", "Figma", "MongoDB", "Express", "Node.js", "MERN Stack"],
    },
];

function Experience() {
    return (
        <section id="experience" className="bg-dots relative border-t border-line px-5 py-28">
            <SectionHeading index="02" file="experience.py" title="Experience" />

            <Reveal className="mx-auto max-w-4xl">
                <div className="overflow-hidden rounded-xl border border-line bg-panel">
                    <WindowBar title="git log --graph --decorate career" right="branch: main" />

                    <ul className="relative p-5 sm:p-8">
                        {/* Branch line that draws itself downward */}
                        <motion.span
                            aria-hidden="true"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute top-10 bottom-10 left-[29px] w-0.5 origin-top bg-py-blue sm:left-[41px]"
                        />

                        {experience.map((job, i) => (
                            <li key={job.company} className="relative pb-10 pl-10 last:pb-0 sm:pl-14">
                                {/* Commit node */}
                                <span
                                    aria-hidden="true"
                                    className={`absolute top-1 left-0 grid h-5 w-5 place-content-center rounded-full border-2 ${job.current ? "border-py-yellow bg-ink" : "border-py-blue bg-ink"}`}
                                >
                                    <span className={`h-2 w-2 rounded-full ${job.current ? "bg-py-yellow" : "bg-py-blue"}`} />
                                </span>

                                <Reveal delay={0.15 + i * 0.15}>
                                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
                                        <span className="text-syn-num">commit {job.hash}</span>
                                        {job.current ? (
                                            <span className="text-muted">
                                                (<span className="font-bold text-syn-ok">HEAD -&gt; </span>
                                                <span className="font-bold text-py-yellow">main</span>)
                                            </span>
                                        ) : (
                                            <span className="text-muted">
                                                (<span className="text-py-blue">tag: {job.period.toLowerCase()}</span>)
                                            </span>
                                        )}
                                    </p>

                                    <article className="mt-3 rounded-lg border border-line bg-ink p-5 transition-colors duration-300 hover:border-py-blue sm:p-6">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">{job.company}</h3>
                                            <span
                                                className={`rounded-md px-2.5 py-1 font-mono text-xs font-bold ${job.current ? "bg-py-yellow text-ink" : "border border-line text-muted"}`}
                                            >
                                                {job.current ? "● current" : job.period.toLowerCase()}
                                            </span>
                                        </div>
                                        <p className="mt-2 font-mono text-sm text-py-blue">{job.role}</p>
                                        <p className="mt-4 leading-relaxed text-muted">{job.description}</p>

                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {job.tags.map((tag) => (
                                                <li key={tag} className="rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-xs text-fg">
                                                    <span className="text-dim">#</span>
                                                    {tag.toLowerCase().replace(/[\s.]+/g, "_")}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </section>
    );
}

export default Experience;
