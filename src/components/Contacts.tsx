import github from "../assets/socials/github.png"
import gmail from "../assets/socials/mailogo.png";
import linkedIn from "../assets/socials/linkedinlogo.png"
import x from "../assets/socials/xlogo.png"
function Contacts(){
    return <div className="flex  mx-auto gap-8">
        <img src={gmail} alt="gmail"  className="h-32" />
        <img src={linkedIn} alt="Linkedin logo"  className="h-32"/>
        <img src={github} alt="github logo" className="h-32" />
        <img src={x} alt="x logo" className="h-32" />
    </div>
}

export default Contacts;