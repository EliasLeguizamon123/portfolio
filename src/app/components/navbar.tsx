import NavbarButton from "./navbarButton";
import NavbarDropdown from "./navbarDropdown";

/* eslint-disable tailwindcss/no-contradicting-classname */
export default function Navbar() {
    return (
        <header className="absolute top-0 z-50 mx-auto flex w-full items-center justify-center py-5 md:w-10/12">
            <nav className="flex w-full flex-row items-center justify-center rounded-full px-3 py-1 text-white backdrop-blur-sm">
                <NavbarButton href="#home" text="Home" />
                {/* Hidden dropdowns */}
                <NavbarDropdown />
                <NavbarButton href="#experience" text="Experience" hidden />
                <NavbarButton href="#projects" text="Projects" hidden />
                <NavbarButton href="#contributions" text="Contributions" hidden />
                {/* <NavbarButton href="#about" text="About" isNew/> */}
            </nav>
        </header>
    )
}