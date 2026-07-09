interface ProjectCardProps {
  img: string;
  description: string;
  title: string;
}

function ProjectCard({ img, description, title }: ProjectCardProps) {
    return <div className="grid  gap-8 my-8 sm:w-100 w-fit text-teal-900 rounded-lg overflow-hidden bg-white shadow-lg p-4">
        <img src={img} alt={description} className="w-100 h-50 object-center" />
        <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-2/3 line-clamp-4">{description}</p>
            <span className="text-blue-500 text-lg">View Live demo</span>
        </div>
    </div>
}

export default ProjectCard;