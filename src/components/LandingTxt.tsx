import Button from "./Button";
function LandingTxt() {
    return <div className="grid text-center items-center p-auto place-content-center">
        <h1 className="text-[64px]">Hello👋 ,  I am <span className="font-bold">Victoire Ansima <br /></span> I am a software engineer </h1>

        <div className="mx-auto">
            <Button txt="View More" />
        </div>

    </div>
}

export default LandingTxt;