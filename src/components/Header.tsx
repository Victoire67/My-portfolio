import Button from "./Button";
function Header() {
    return (<header className="bg-teal-900 z-10 flex items-center place-content-between w-full px-[20px] py-[10px] fixed">
        <nav className="sm:w-1/2 w-full ">
            <ul className="flex items-center sm:place-content-left sm:gap-8 sm:text-2xl gap-4 place-content-between w-full">
                <a href="#home">      <li className="cursor-pointer hover:text-amber-200 hover:scale-105 ">Home</li></a>
                <a href="#about">   <li className="cursor-pointer hover:text-amber-200 hover:scale-105 ">About</li></a>
                <a href="#projects">                <li className="cursor-pointer hover:text-amber-200 hover:scale-105 ">Projects</li></a>
            </ul>
        </nav>

        <a href="#contact-me" className="hidden sm:block"><Button txt="Contact me" /></a>
    </header>)
}

export default Header;