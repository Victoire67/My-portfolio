import { motion } from "framer-motion"

interface ProjectCardProps {
    img: string;
    description: string;
    title: string;
    liveLink : string
}

function ProjectCard({ img, description, title , liveLink }: ProjectCardProps) {
    console.log(liveLink)
    return <div className="grid gap-8 my-8 sm:w-100 w-full text-teal-900 rounded-lg overflow-hidden bg-white shadow-lg p-4">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <img src={img} alt={description} className="w-100 h-50 object-center" />
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="w-2/3 line-clamp-4">{description}</p>
                <a href={liveLink}>
                    <span className="text-blue-500 text-lg">View Live demo</span>
                </a>
            </div>
        </motion.div>

    </div>
}

export default ProjectCard;