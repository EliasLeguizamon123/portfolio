/* eslint-disable tailwindcss/no-contradicting-classname */
import { NotepadText } from "lucide-react";
import Card from "../components/card";
import getProjects from "../lib/services";

export default async function Projects () {
    // const trird{
    //     title: "Polychrome",
    //     description: "A crate for printing colored and underlined text in the terminal.",
    //     link: "https://github.com/EliasLeguizamon123/polychrome",
    //     tags: ["Rust", "CLI", "Terminal", "Text", "Color"],
    //     image: "https://github.com/EliasLeguizamon123/polychrome/blob/main/miniature.png?raw=true"
    // })

    const projects = await getProjects()


    return (
        <section id="projects" data-section="projects">
            <div className="size-full p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
                    <NotepadText className="animate-bounce text-cyan-700" />
                    <p>
                        Projects
                    </p>
                </h2>
                <p className="mb-6 p-4 pl-10 italic text-gray-200">Explore a curated selection of my latest work and personal projects below</p>
                <div className=" grid auto-rows-[192px]  grid-cols-1 gap-4 p-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <Card key={project.id} i={i} link={project.link} tags={project.tags} image={project.image} title={project.title} description={project.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}