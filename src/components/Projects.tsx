import { data } from "../assets/projects";
import ProjectCard from "./Project";
import { SectionHeading } from "./Reveal";

function Projects() {
    return (
        <section id="projects" className="bg-grid relative overflow-hidden px-5 py-28">
            <div aria-hidden="true" className="pointer-events-none absolute top-1/3 -left-40 h-120 w-120 animate-blob rounded-full bg-violet-500/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-120 w-120 animate-blob rounded-full bg-amber-200/10 blur-3xl [animation-delay:-9s]" />

            <SectionHeading eyebrow="Things I've built" title="Featured Projects" />

            <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                {data.map((project, i) => (
                    <ProjectCard key={project.title} index={i} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
