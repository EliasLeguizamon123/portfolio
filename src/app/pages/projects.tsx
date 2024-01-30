/* eslint-disable tailwindcss/no-contradicting-classname */
import Card from "../components/card";
import { sql } from "@vercel/postgres";


export default async function Projects () {

    const { rows } = await sql`SELECT * FROM projects`;
    
    return (
        <section id="projects" data-section="projects">
            <div className="h-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4 sm:px-4 md:px-28 lg:px-40">
                <div className="grid auto-rows-[192px] grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {rows.map((project, i) => (
                        <Card key={i} i={i} link={project.link} image={project.image} title={project.title} description={project.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}