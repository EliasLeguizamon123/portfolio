/* eslint-disable tailwindcss/no-contradicting-classname */
"use client"
import { ExternalLink, Github, NotepadText } from "lucide-react";
import Card from "../components/card";

const mockProjects = [
    {
        id: "1",
        title: "Polychrome",
        description: "A crate for printing colored and underlined text in the terminal.",
        link: "https://github.com/EliasLeguizamon123/polychrome",
        tags: ["Rust", "CLI", "Terminal", "Text", "Color"],
        image: "https://github.com/EliasLeguizamon123/polychrome/blob/main/miniature.png?raw=true",
        size: { colSpan: 2, rowSpan: 2 }, // crece ancho y alto
    },
    {
        id: "2",
        title: "Zenith text editor",
        description: "A simple text editor built with modern web technologies.",
        link: "https://github.com/EliasLeguizamon123/Zenith-ide",
        tags: ["Astro", "Electron", "Typescript", "React"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/Zenith-ide/refs/heads/main/zenith.webp",
        size: { colSpan: 2, rowSpan: 1 }, // crece ancho
    },
    {
        id: "3",
        title: "Rustify events",
        description: "CLI tool for check yout Github activity in Rust.",
        link: "https://github.com/EliasLeguizamon123/RustifyEvents",
        tags: ["Rust", "CLI"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/RustifyEvents/refs/heads/main/miniature.webp",
        size: { colSpan: 1, rowSpan: 1 }, // tamaño normal
    },
    {
        id: "4",
        title: "Wortise CMS",
        description: "A content management system for managing and publishing content.",
        link: "https://github.com/EliasLeguizamon123/wortise-cms",
        tags: ["Next", "Typescript", "Better-Auth", "MongoDB Atlas", "TRPC", "TailwindCSS"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/wortise-cms/refs/heads/main/miniature.webp",
        size: { colSpan: 1, rowSpan: 1 }, // tamaño normal
    },
    {
        id: "5",
        title: "Py-Hornet",
        description: "A terminal Epub reader made with Python.",
        link: "https://github.com/EliasLeguizamon123/py-hornet",
        tags: ["Python", "CLI", "BeautifulSoup", "Ebooklib"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/py-hornet/refs/heads/main/screenshots/hornetGnome.png",
        size: { colSpan: 1, rowSpan: 1 }, // crece ancho
    },
    {
        id: "6",
        title: "Mobile App wallet",
        description: "A mobile app that lets you ditch magnetic cards without losing any benefits for game houses",
        link: "https://play.google.com/store/apps/details?id=com.lepark&hl=en",
        tags: ["React Native", "Mercado Pago", "Typescript", "Javascript"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/ll-django-basics/refs/heads/main/664_1x_shots_so.png",
        size: { colSpan: 2, rowSpan: 1 },
    },
    {
        id: "7",
        title: "Mobile App Schedules",
        description: "A mobile app for monitor and manage users to acces attractions in amusement parks",
        link: "https://play.google.com/store/apps/details?id=com.anonymous.wrist_bands_mobile&hl=en",
        tags: ["React Native", "Mercado Pago", "Typescript", "Javascript"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/ll-django-basics/refs/heads/main/998_1x_shots_so.png",
        size: { colSpan: 1, rowSpan: 1 },
    },
];

const sizeToClass = ({ colSpan, rowSpan }: {colSpan: number, rowSpan: number}) => {
    let colClass = "";
    let rowClass = "";

    if (colSpan === 2) colClass = "md:col-span-2";
    else if (colSpan === 3) colClass = "md:col-span-3";

    if (rowSpan === 2) rowClass = "md:row-span-2";
    else if (rowSpan === 3) rowClass = "md:row-span-3";

    return `min-h-[280px] ${colClass} ${rowClass}`.trim();
};

export default function Projects() {
    return (
        <section id="projects" data-section="projects">
            <div className="size-full p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
                    <NotepadText className="animate-bounce text-cyan-700" />
                    <p>Projects</p>
                </h2>
                <p className="mb-6 p-4 pl-10 italic text-gray-200">
                    Explore a curated selection of my latest work and personal projects below
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
                    {mockProjects.map((project) => (
                        <Card
                            key={project.id}
                            project={project}
                            className={sizeToClass(project.size)}
                        />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button
                        onClick={() =>
                            window.open(
                                "https://github.com/EliasLeguizamon123?tab=repositories",
                                "_blank"
                            )
                        }
                        className="group inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 text-gray-100 transition-all duration-300 hover:border-cyan-400 hover:from-gray-800 hover:to-gray-700"
                    >
                        <Github className="size-4" />
                        View All Projects
                        <ExternalLink className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
