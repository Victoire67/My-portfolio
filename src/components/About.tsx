import myPic from "../assets/myPicture.png"
import LanguageGrid from "./LanguageGrid"
function About() {
    return <div className="w-full text-black sm:flex grid items-center place-content-center mx-auto p-[20px] relative" id="about">
        <div className="h-100 w-100 bg-amber-200 absolute transform left-0 -top-35 z-5 "></div>
        <section className="w-full grid items-center place-content-center sm:w-1/2 ">
            <img src={myPic} alt="Victoire Ansima Picture" className="mx-auto rounded-full border-16 border-teal-900 z-5 scale-80 shadow-xl h-128 aspect-square object-cover object-top cursor-pointer" />
            <aside className="sm:text-2xl text-4xl text-center  mx-auto text-teal-900">I am Victoire, a full-stack  MERN developer, <br className="hidden sm:block" />I enjoy learning new skills and inovating using technology</aside>
        </section>
        <LanguageGrid />
        <div className="h-100 w-20 bg-amber-200 absolute transform bottom-30 right-0 z-5 "></div>
    </div>
}

export default About