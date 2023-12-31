export default function Navbar() {
    return (
        <header className="absolute top-0 z-50 mx-auto flex items-center justify-center py-5  xl:w-[1120px]">
            <nav className="flex w-full flex-row items-center justify-center rounded-full  px-3 py-1 text-white backdrop-blur-2xl">
                <a href="#home" className="rounded-full px-3 transition hover:bg-white/30">Home</a>
                <a href="#experience" className="rounded-full px-3 transition hover:bg-white/30">Experience</a>
                <a href="#projects" className="rounded-full px-3 transition hover:bg-white/30">Projects</a>
                <a href="#contact" className="rounded-full px-3 transition hover:bg-white/30">Contact</a>
            </nav>
        </header>
    )
}