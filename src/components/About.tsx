import myPic from "../assets/myPic.png"
import LanguageGrid from "./LanguageGrid"
function About() {
    return <div className="w-full text-black sm:flex grid items-center place-content-center mx-auto p-[20px]">
        <section className="w-full grid items-center place-content-center sm:w-1/2">
            <img src={myPic} alt="Victoire Ansima Picture" className="mx-auto border rounded-full border-16 border-amber-300 shadow-xl" />
            <aside className="sm:text-2xl text-4xl text-center  mx-auto ">I am Victoire, a full-stack  MERN developer, <br className="hidden sm:block" />I enjoy learning new skills and inovating using technology</aside>
        </section>
        <LanguageGrid />
    </div>
}

export default About