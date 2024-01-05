/* eslint-disable tailwindcss/no-contradicting-classname */
import Navbar from "./components/navbar";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import HomeSection from "./sections/home";
import Projects from "./sections/projects";


export default function Home() {

    
    return (
        <main>
            <div className="sticky top-0 z-50 flex w-full justify-center">
                <Navbar />
            </div>
            <HomeSection />
            <Experience />
            <Projects />
            <Contact />
        </main>
    )
}
