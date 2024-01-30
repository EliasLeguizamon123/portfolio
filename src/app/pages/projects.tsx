/* eslint-disable tailwindcss/no-contradicting-classname */
import Card from "../components/card";
import { sql } from "@vercel/postgres";

export default async function Projects () {

    const { rows } = await sql`select * from projects`;
    // createNewProject({   
    //     title: 'templater-ts-electron-vite', 
    //     description: 'Template for Vite, Electron, TS, Chakra ui, Eslint', 
    //     image: 'https://github.com/EliasLeguizamon123/templater-ts-electron-vite/assets/25516473/5ab8df87-c7fc-450c-8877-80d93d0e4da4', 
    //     link: 'https://github.com/EliasLeguizamon123/templater-ts-electron-vite', 
    //     tags: ['Typescript', 'Electron', 'Vite', 'Chakra UI', 'Eslint']
    // }
    // )

    console.log(rows)
    return (
        <section id="projects" data-section="projects">
            <div className="h-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4 sm:px-4 md:px-28 lg:px-40">
                <div className="grid auto-rows-[192px] grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {rows.map((project, i) => (
                        <Card key={i} i={i} link={project.link} tags={project.tags} image={project.image} title={project.title} description={project.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}