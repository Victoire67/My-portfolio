import { data } from "../assets/projects"
import ProjectCard from "./Project"
function Projects() {
    const ProjectElement = data.map((project: { img: string; title: string; description: string , liveLink : string}) => {
        return <ProjectCard img={project.img} title={project.title} description={project.description} liveLink={project.liveLink}/>
    })
    return <div className="grid sm:gap-8 sm:grid-cols-2 sm:grid-rows-2 place-items-center relative px-20 mx-auto" id="projects">
        <div className="h-100 w-200 bg-amber-200 absolute transform -left-120 sm:block hidden -top-35 -z-5 "></div>
        {ProjectElement}
        <div className="h-100 w-100 bg-amber-200 absolute transform right-0 -bottom-20 -z-5 "></div>
    </div>
}

export default Projects