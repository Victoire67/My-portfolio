import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";

const experience = [
    {
        company: "AmaliTech",
        role: "Python Developer · AI / Machine Learning",
        period: "Present",
        current: true,
        description:
            "Building Python solutions and AI / machine learning features, from data preparation and model development to integrating intelligent capabilities into real products.",
        tags: ["Python", "Machine Learning", "AI", "Data"],
    },
    {
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
        <section id="experience" className="relative overflow-hidden px-5 py-28">
            <div aria-hidden="true" className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 animate-blob rounded-full bg-teal-400/10 blur-3xl" />

            <SectionHeading eyebrow="Where I work" title="Experience" />

            <div className="relative mx-auto max-w-3xl">
                {/* Timeline line that draws itself downward */}
                <motion.div
                    aria-hidden="true"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute top-2 bottom-2 left-3 w-0.5 origin-top bg-linear-to-b from-amber-200 via-teal-300 to-transparent sm:left-4"
                />

                <ul className="grid gap-10">
                    {experience.map((job, i) => (
                        <li key={job.company} className="relative pl-12 sm:pl-16">
                            {/* Timeline marker, pinging while this is the current role */}
                            <span className="absolute top-7 left-0 flex h-7 w-7 items-center justify-center sm:left-1">
                                {job.current && <span className="absolute h-full w-full animate-ping rounded-full bg-amber-200/60" />}
                                <span className={`relative h-4 w-4 rounded-full border-2 border-[#031a19] ${job.current ? "bg-amber-200 shadow-[0_0_16px_rgba(253,230,138,0.8)]" : "bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,0.6)]"}`} />
                            </span>

                            <Reveal delay={0.2 + i * 0.15}>
                                <motion.article
                                    whileHover={{ y: -6 }}
                                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-amber-200/40 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.4)] sm:p-8"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="font-display text-3xl font-bold text-white transition-colors group-hover:text-amber-200">
                                            {job.company}
                                        </h3>
                                        <span
                                            className={`rounded-full px-3 py-1 text-sm font-medium ${job.current ? "bg-amber-200 text-teal-950" : "border border-white/15 text-teal-100/70"}`}
                                        >
                                            {job.current ? "● Current" : job.period}
                                        </span>
                                    </div>
                                    <p className="mt-2 font-display text-lg font-medium text-teal-300">{job.role}</p>
                                    <p className="mt-4 leading-relaxed text-teal-100/80">{job.description}</p>

                                    <motion.ul
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
                                        className="mt-6 flex flex-wrap gap-2"
                                    >
                                        {job.tags.map((tag) => (
                                            <motion.li
                                                key={tag}
                                                variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1 } }}
                                                className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-sm text-teal-100"
                                            >
                                                {tag}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.article>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Experience;
