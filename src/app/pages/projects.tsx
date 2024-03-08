/* eslint-disable tailwindcss/no-contradicting-classname */
import { NotepadText } from "lucide-react";
import Card from "../components/card";
import getProjects from "../lib/services";

export default async function Projects () {

    const projects = await getProjects()

    //Para agregar proyectos nuevos hasta tener el backoffice

    // createNewProject({
    //     title: "App template using Electron + Vite + React",
    //     description: "Easily extendable and customizable app template using Electron + Vite + React. It includes a lot of features like linter, Chakra components and more",
    //     link: "https://github.com/EliasLeguizamon123/templater-ts-electron-vite?tab=readme-ov-file",
    //     tags: ["Electron", "Vite", "React", "TypeScript", "ChakraUI", "ESLint"],
    //     image: "https://github.com/EliasLeguizamon123/templater-ts-electron-vite/blob/master/wallpaper.png?raw=true"
    // })


    return (
        <section id="projects" data-section="projects">
            <div className="h-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4 sm:px-4 md:px-28 lg:px-40">
                <h2 className="mb-2 flex items-center gap-x-3 px-4 text-3xl font-semibold text-black/80 dark:text-white">
                    <NotepadText className="animate-bounce text-cyan-700" />
                    <p>
                        Projects
                    </p>
                </h2>
                <p className="mb-6 p-4 pl-10 italic text-gray-200">Explore a curated selection of my latest work and personal projects below</p>
                <div className="grid auto-rows-[192px] grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <Card key={project.id} i={i} link={project.link} tags={project.tags} image={project.image} title={project.title} description={project.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}