export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 mx-auto flex w-full items-center justify-center py-5 opacity-100 xl:w-[1120px]">
            <nav className="flex w-full flex-row items-center justify-center rounded-full  px-3 py-1 text-lavender backdrop-blur-2xl">
                <a href="#home" className="rounded-full px-3 transition hover:bg-white/30">Home</a>
                <a href="#experience" className="rounded-full px-3 transition hover:bg-white/30">Experience</a>
                <a href="#projects" className="rounded-full px-3 transition hover:bg-white/30">Projects</a>
                <a href="#contact" className="rounded-full px-3 transition hover:bg-white/30">Contact</a>
            </nav>
        </header>
    )
}