import { motion } from "framer-motion";
import dockerImg from "../assets/languages/docker.png";
import htmlImg from "../assets/languages/html_logo-removebg-preview 1.png";
import cssImg from "../assets/languages/css.png";
import reactImg from "../assets/languages/react.png";
import mongoDbImg from "../assets/languages/mongoDb.png";
import typeScriptImg from "../assets/languages/typescript.png";
import javaScriptImg from "../assets/languages/Javascript 1.png";
import nodeImg from "../assets/languages/node.png";
import gitImg from "../assets/languages/git.png";

const skills = [
    { img: htmlImg, name: "HTML" },
    { img: cssImg, name: "CSS" },
    { img: javaScriptImg, name: "JavaScript" },
    { img: typeScriptImg, name: "TypeScript" },
    { img: reactImg, name: "React" },
    { img: nodeImg, name: "Node.js" },
    { img: mongoDbImg, name: "MongoDB" },
    { img: dockerImg, name: "Docker" },
    { img: gitImg, name: "Git" },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};
const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 220, damping: 18 } },
};

function LanguageGrid() {
    return (
        <>
            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9"
            >
                {skills.map(({ img, name }) => (
                    <motion.li
                        key={name}
                        variants={item}
                        whileHover={{ y: -10, rotate: -3 }}
                        className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-amber-200/50 hover:shadow-[0_10px_40px_-10px_rgba(253,230,138,0.45)]"
                    >
                        <div className="grid h-16 w-16 place-content-center rounded-xl bg-white p-2 transition-transform duration-500 group-hover:rotate-360">
                            <img src={img} alt="" className="h-12 w-12 object-contain" />
                        </div>
                        <span className="text-sm font-medium text-teal-50">{name}</span>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Endless marquee of tech names */}
            <div
                aria-hidden="true"
                className="relative mt-16 overflow-hidden py-4 mask-[linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
            >
                <div className="flex w-max animate-marquee font-display text-3xl font-bold text-white/10 sm:text-5xl">
                    {[...skills, ...skills].map(({ name }, i) => (
                        <span key={i} className="flex items-center gap-12 pr-12">
                            {name}
                            <span className="text-amber-200/30">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LanguageGrid;
