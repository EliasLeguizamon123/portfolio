/* eslint-disable tailwindcss/no-contradicting-classname */
import Navbar from "./components/navbar";
import Experience from "./pages/experience";
import HomeSection from "./pages/home";
import Projects from "./pages/projects";


export default function Home() {

    
    return (
        <main>
            <div className="sticky top-0 z-50 flex w-full justify-center">
                <Navbar />
            </div>
            <HomeSection />
            <Experience />
            <Projects />
        </main>
    )
}
