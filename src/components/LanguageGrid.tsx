import dockerImg from "../assets/languages/docker.png";
import htmlImg from "../assets/languages/html_logo-removebg-preview 1.png"
import cssImg from "../assets/languages/css.png"
import reactImg from "../assets/languages/react.png"
import mongoDbImg from "../assets/languages/mongoDb.png"
import typeScriptImg from "../assets/languages/typescript.png"
import javaScriptImg from "../assets/languages/Javascript 1.png"
import nodeImg from "../assets/languages/node.png"
import gitImg from "../assets/languages/gitff.png"
function LanguageGrid() {
    return <div className="grid grid-cols-1 items-center place-content-center py-32 sm:py-1">
        <div className=" flex items-center sm:place-content-between place-content-center gap-4 ">
            <img src={dockerImg} alt="" className="h-16 aspect-square object-cover" />
            <img src={htmlImg} alt="" className="h-16 aspect-square object-cover" />
            <img src={cssImg} alt="" className="h-16 aspect-square object-cover" />
        </div>
        <div className=" flex items-center sm:place-content-between place-content-center ">
            <img src={reactImg} alt="" className="h-16 aspect-square object-cover" />
            <img src={typeScriptImg} alt="" className="rounded-md h-32 animate-pulse m-8 -z-10" />
            <img src={mongoDbImg} alt="" className="h-16 aspect-square object-cover" />
        </div>

        <div className=" flex items-center sm:place-content-between place-content-center">
            <img src={javaScriptImg} alt="" className="h-16 aspect-square object-cover" />
            <img src={nodeImg} alt="" className="h-16 aspect-square object-cover" />
            <img src={gitImg} alt="" className="h-16 aspect-square object-cover" />
        </div>
    </div>
}

export default LanguageGrid