import Button from "./Button";
function Header() {
    return (<header className="flex items-center place-content-between">
        <nav className="w-1/2">
            <ul className="flex items-center place-content-left gap-16 text-2xl w-full  ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Contacts</li>
            </ul>
        </nav>
        <Button txt="Contact me" />
    </header>)
}

export default Header;