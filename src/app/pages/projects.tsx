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
    },
    {
        id: "2",
        title: "Zenith text editor",
        description: "A powerful text editor built with modern web technologies.",
        link: "https://github.com/EliasLeguizamon123/Zenith-ide",
        tags: ["TypeScript", "React", "Electron", "Astro"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/Zenith-ide/refs/heads/main/zenith.webp",
    },
    {
        id: "3",
        title: "Rustify events",
        description: "CLI tool for check yout Github activity in Rust.",
        link: "https://github.com/EliasLeguizamon123/RustifyEvents",
        tags: ["Rust", "CLI"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/RustifyEvents/refs/heads/main/miniature.webp",
    },
    {
        id: "4",
        title: "Wortise CMS",
        description: "A content management system for managing and publishing content.",
        link: "https://github.com/EliasLeguizamon123/wortise-cms",
        tags: ["Next", "Typescript", "Better-Auth", "MongoDB Atlas", "TRPC", "TailwindCSS"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/wortise-cms/refs/heads/main/miniature.webp",
    },
    {
        id: "5",
        title: "Py-Hornet",
        description: "A terminal Epub reader made with Python.",
        link: "https://github.com/EliasLeguizamon123/py-hornet",
        tags: ["Python", "CLI", "BeautifulSoup", "Ebooklib"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/py-hornet/refs/heads/main/screenshots/hornetGnome.png",
    },
];

export default function Projects () {
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
                    <Card project={mockProjects[0]} className="min-h-[280px] md:col-span-2 md:row-span-2" />
                    <Card project={mockProjects[1]} className="min-h-[280px] lg:col-span-2" />
                    <Card project={mockProjects[2]} className="min-h-[280px]" />
                    <Card project={mockProjects[3]} className="min-h-[280px]" />
                    <Card project={mockProjects[4]} className="min-h-[280px] md:col-span-2" />
                </div>
                <div className="mt-12 text-center">
                    <button
                        onClick={() => window.open("https://github.com/EliasLeguizamon123?tab=repositories", "_blank")}
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