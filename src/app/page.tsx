/* eslint-disable tailwindcss/no-contradicting-classname */
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contributions from "./pages/contributions";
import Experience from "./pages/experience";
import HomeSection from "./pages/home";
import Projects from "./pages/projects";


export default function Home() {

    
    return (
        <main className="size-full select-none bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="sticky top-0 z-50 flex w-full justify-center">
                <Navbar />
            </div>
            <HomeSection />
            <Experience />
            <Projects />
            <Contributions />
            <About />
        </main>
    )
}
