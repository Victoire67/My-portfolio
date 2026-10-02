import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface ProjectCardProps {
    img: string;
    description: string;
    title: string;
    liveLink: string;
    index: number;
}

/** Project card that tilts toward the cursor with a glare that follows it. */
function ProjectCard({ img, description, title, liveLink, index }: ProjectCardProps) {
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const gx = useMotionValue(50);
    const gy = useMotionValue(50);
    const srx = useSpring(rx, { stiffness: 200, damping: 20 });
    const sry = useSpring(ry, { stiffness: 200, damping: 20 });
    const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(253,230,138,0.18), transparent 55%)`;

    return (
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                ry.set((px - 0.5) * 12);
                rx.set(-(py - 0.5) * 12);
                gx.set(px * 100);
                gy.set(py * 100);
            }}
            onMouseLeave={() => {
                rx.set(0);
                ry.set(0);
            }}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-amber-200/40 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.4)]"
        >
            <motion.div aria-hidden="true" style={{ background: glare }} className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative aspect-video overflow-hidden">
                <img
                    src={img}
                    alt={`${title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#031a19] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 rounded-full bg-teal-950/80 px-3 py-1 font-display text-sm font-semibold text-amber-200 backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            <div className="relative z-20 flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-3xl font-bold text-white transition-colors group-hover:text-amber-200">{title}</h3>
                <p className="line-clamp-4 text-teal-100/75">{description}</p>
                <div className="mt-auto pt-3">
                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-teal-300 transition-colors hover:text-amber-200"
                        >
                            View live demo
                            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-teal-100/50">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-200" />
                            Demo coming soon
                        </span>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
