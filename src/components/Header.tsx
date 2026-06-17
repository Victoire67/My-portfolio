import Button from "./Button";
function Header() {
    return (<header className="bg-teal-900 flex items-center place-content-between bg-teal-00 w-full px-[20px] py-[10px] fixed">
        <nav className="w-1/2">
            <ul className="flex items-center place-content-left gap-16 text-2xl w-full">
                <li className="cursor-pointer hover:text-amber-200">Home</li>
                <li className="cursor-pointer hover:text-amber-200">About</li>
                <li className="cursor-pointer hover:text-amber-200">Projects</li>
                <li className="cursor-pointer hover:text-amber-200">Contacts</li>
            </ul>
        </nav>

        <div className="hidden sm:block"><Button txt="Contact me" /></div>
    </header>)
}

export default Header;