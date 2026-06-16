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
    return <div className="grid grid-cols-1 items-center place-content-center">
        <div className=" flex items-center place-content-between">
            <img src={dockerImg} alt="" className="h-32 aspect-square object-cover" />
            <img src={htmlImg} alt="" className="h-32 aspect-square object-cover" />
            <img src={cssImg} alt="" className="h-32 aspect-square object-cover" />
        </div>
        <div className=" flex items-center place-content-between ">
            <img src={reactImg} alt="" className="h-32 aspect-square object-cover" />
            <img src={typeScriptImg} alt="" className="rounded-md animate-pulse m-8" />
            <img src={mongoDbImg} alt="" className="h-32 aspect-square object-cover" />
        </div>

        <div className=" flex items-center place-content-between">
            <img src={javaScriptImg} alt="" className="h-32 aspect-square object-cover" />
            <img src={nodeImg} alt="" className="h-32 aspect-square object-cover" />
            <img src={gitImg} alt="" className="h-32 aspect-square object-cover" />
        </div>

    </div>
}

export default LanguageGrid