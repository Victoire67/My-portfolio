import { motion } from "framer-motion";

interface ProjectCardProps {
    img: string;
    description: string;
    title: string;
    liveLink: string;
    index: number;
}

/** A project rendered as a notebook cell: header, screenshot output, docstring, run link. */
function ProjectCard({ img, description, title, liveLink, index }: ProjectCardProps) {
    const slug = title.toLowerCase().replace(/\s+/g, "_");

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-300 hover:border-py-yellow"
        >
            <div className="flex items-center justify-between gap-3 border-b border-line bg-panel-2 px-4 py-2.5 font-mono text-xs">
                <span className="text-muted">
                    <span className="text-py-blue">[{index + 1}]</span> projects/<span className="text-fg">{slug}</span>
                </span>
                <span className={liveLink ? "text-syn-ok" : "text-dim"}>{liveLink ? "● deployed" : "○ local"}</span>
            </div>

            <div className="relative aspect-video overflow-hidden border-b border-line">
                <img
                    src={img}
                    alt={`${title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                    {title}
                    <span className="text-py-yellow">()</span>
                </h3>
                <p className="line-clamp-4 font-mono text-[13px] leading-relaxed text-muted">
                    <span className="text-dim">"""</span>
                    {description}
                    <span className="text-dim">"""</span>
                </p>
                <div className="mt-auto pt-3">
                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-py-yellow px-3.5 py-1.5 font-mono text-sm font-bold text-ink transition-colors hover:bg-fg"
                        >
                            ▶ run demo
                            <span aria-hidden="true">↗</span>
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 font-mono text-sm text-dim">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-py-blue" />
                            # demo coming soon
                        </span>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
