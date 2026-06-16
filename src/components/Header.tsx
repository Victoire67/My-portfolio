
function Header() {
    return (<header className="flex items-center place-content-between">
        <nav className="w-1/2">
            <ul className="flex items-center place-content-left gap-16 text-2xl w-full  ">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </nav>
        <button>BUTTON</button>
    </header>)
}

export default Header ;