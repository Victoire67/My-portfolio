import Button from "./Button"
function ProjectCard({ img, description, title, }: { img: Image | any, description: string, title: string }) {
    return <div className="flex gap-8 my-8 w-fit ">
        <img src={img} alt={description} />
        <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-2/3">{description}</p>
            <span className="text-blue-500 text-lg">View Live demo</span>
        </div>
    </div>
}

export default ProjectCard;