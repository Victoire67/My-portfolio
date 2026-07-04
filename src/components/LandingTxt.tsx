import Button from "./Button";
function LandingTxt() {
    return <div className="grid text-center items-center p-auto place-content-center bg-teal-900 h-screen"  id="home">
        <h1 className="sm:text-[64px] text-[32px]">Hello👋 ,  I am <span className="font-bold italic">Victoire Ansima <br className="hidden sm:block"/></span> I am a software engineer </h1>

        <div className="mx-auto">
            <Button txt="View More" />
        </div>

    </div>
}

export default LandingTxt;