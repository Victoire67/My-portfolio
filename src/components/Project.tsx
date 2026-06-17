interface ProjectCardProps {
  img: string;
  description: string;
  title: string;
}

function ProjectCard({ img, description, title }: ProjectCardProps) {
    return <div className="sm:flex grid  gap-8 my-8 w-fit hover:bg-gray-200">
        <img src={img} alt={description} />
        <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-2/3">{description}</p>
            <span className="text-blue-500 text-lg">View Live demo</span>
        </div>
    </div>
}

export default ProjectCard;