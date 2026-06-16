import myPic from "../assets/myPic.png"
import LanguageGrid from "./LanguageGrid"
function About() {
    return <div className="w-2/3 flex place-content-center mx-auto my-52">
        <section className="w-1/2 grid items-center place-content-center">
            <img src={myPic} alt="Victoire Ansima Picture" className="mx-auto" />
            <aside className="text-2xl text-center  mx-auto ">I am Victoire, a full-stack  MERN developer, <br />I enjoy learning new skills and inovating using technology</aside>
        </section>
        <LanguageGrid />
    </div>
}

export default About