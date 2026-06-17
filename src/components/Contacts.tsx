import github from "../assets/socials/github.png"
import gmail from "../assets/socials/mailogo.png";
import linkedIn from "../assets/socials/linkedinlogo.png"
import x from "../assets/socials/xlogo.png"
function Contacts() {
    return <div className="flex  mx-auto gap-8 h-screen bg-teal-900 items-center w-full place-content-center">
        <a href="ansimavicky@gmail.com">
            <img src={gmail} alt="gmail" className="sm:h-32 h-16" />
        </a>
        <a href="https://www.linkedin.com/in/victoire-ansima-6bb506284/">
           <img src={linkedIn} alt="Linkedin logo" className="sm:h-32 h-16" />
        </a>
        <a href="https://github.com/Victoire67">
            <img src={github} alt="github logo" className="sm:h-32 h-16" />
        </a>
        <a href="https://www.linkedin.com/in/victoire-ansima-6bb506284/">
            <img src={x} alt="x logo" className="sm:h-32 h-16" />
        </a>
    </div>
}

export default Contacts;