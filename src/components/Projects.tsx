import { data } from "../assets/projects"
import ProjectCard from "./Project"
function Projects() {
    const ProjectElement = data.map((project: { img: string; title: string; description: string }) => {
        return <ProjectCard img={project.img} title={project.title} description={project.description} />
    })
    return <div className="grid sm:grid-cols-2 sm:grid-rows-2 place-items-center px-20 mx-auto" id="projects">
        {ProjectElement}
    </div>
}

export default Projects