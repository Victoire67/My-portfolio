import Button from "./Button";
function LandingTxt() {
    return <div className="grid  z-4 text-center items-center p-auto place-content-center bg-teal-900 h-screen overflow-clip" id="home">
        <div className="h-100 w-100 bg-amber-200 absolute transform rotate-70 -top-35 z-5 "></div>
        <h1 className="sm:text-[64px] text-[32px] z-50">Hello👋 ,  I am <span className="font-bold italic">Victoire Ansima <br className="hidden sm:block" /></span> I am a software engineer </h1>

        <div className="mx-auto">
            <Button txt="View More" />
        </div>
        <div className="h-100 w-100 bg-amber-200 absolute transform rotate-70 top-45 z-5 left-[80%] "></div>
    </div>
}

export default LandingTxt;