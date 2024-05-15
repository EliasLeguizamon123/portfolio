/* eslint-disable tailwindcss/no-contradicting-classname */
export default function Navbar() {
    return (
        <header className="absolute top-0 z-50 mx-auto flex w-full items-center justify-center py-5 md:w-10/12">
            <nav className="flex w-full flex-row items-center justify-center rounded-full px-3 py-1 text-white backdrop-blur-sm">
                <a href="#home" className="rounded-full px-3 transition hover:bg-white/30">Home</a>
                <a href="#experience" className="rounded-full px-3 transition hover:bg-white/30">Experience</a>
                <a href="#projects" className="rounded-full px-3 transition hover:bg-white/30">Projects</a>
                <a href="#contributions" className="rounded-full px-3 transition hover:bg-white/30">Contributions</a>
                <a href="#about" className="animate-background-shine items-center justify-center rounded-full bg-[linear-gradient(110deg,transparent,45%,#1e2631,55%,transparent)] bg-[length:200%_100%] px-3 px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">About</a>
            </nav>
        </header>
    )
}