import { data } from "../assets/projects";
import ProjectCard from "./Project";
import { SectionHeading } from "./Reveal";

function Projects() {
    return (
        <section id="projects" className="relative border-t border-line px-5 py-28">
            <SectionHeading index="03" file="projects.ipynb" title="Featured Projects" />

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                {data.map((project, i) => (
                    <ProjectCard key={project.title} index={i} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
