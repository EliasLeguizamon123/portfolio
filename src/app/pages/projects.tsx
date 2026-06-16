/* eslint-disable tailwindcss/no-contradicting-classname */
"use client"
import { ExternalLink, Github, NotepadText } from "lucide-react";
import Card from "../components/card";

const mockProjects = [
    {
        id: "8",
        title: "Giftitto",
        description: "Digital gift card platform for unique experiences in Argentina — gastronomy, wellness, and more. Instant delivery with Mercado Pago integration.",
        link: "https://giftitto.com/",
        tags: ["React", "TypeScript", "Mercado Pago", "Node.js", "PostgreSQL"],
        image: "/820_1x_shots_so.png",
    },
    {
        id: "1",
        title: "Polychrome",
        description: "A modern, feature-rich terminal styling library for Rust",
        link: "https://github.com/EliasLeguizamon123/polychrome",
        tags: ["Rust", "CLI", "Terminal", "Text", "Color"],
        image: "https://github.com/EliasLeguizamon123/polychrome/blob/main/miniature.png?raw=true",
    },
    {
        id: "2",
        title: "Zenith text editor",
        description: "A modern, cross-platform text editor built with Astro, Electron, and React.",
        link: "https://github.com/EliasLeguizamon123/Zenith-ide",
        tags: ["Astro", "Electron", "Typescript", "React"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/Zenith-ide/refs/heads/main/zenith.webp",
    },
    {
        id: "3",
        title: "Clocky Software Development Agency - Landing Page",
        description: "Modern, responsive landing page for a software development agency.",
        link: "https://www.clocky.online/en",
        tags: ["NextJS", "TailwindCSS", "Typescript", "React"],
        image: "https://github.com/EliasLeguizamon123/RustifyEvents/blob/main/clocky.png?raw=true",
    },
    {
        id: "6",
        title: "Mobile App wallet",
        description: "A digital wallet app that replaces physical magnetic cards for game arcades while preserving all loyalty benefits.",
        link: "https://play.google.com/store/apps/details?id=com.lepark&hl=en",
        tags: ["React Native", "Mercado Pago", "Typescript", "Javascript"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/ll-django-basics/refs/heads/main/664_1x_shots_so.png",
    },
    {
        id: "7",
        title: "Mobile App Schedules",
        description: "A mobile app for monitoring and managing visitor access to attractions across amusement parks.",
        link: "https://play.google.com/store/apps/details?id=com.anonymous.wrist_bands_mobile&hl=en",
        tags: ["React Native", "Mercado Pago", "Typescript", "Javascript"],
        image: "https://raw.githubusercontent.com/EliasLeguizamon123/ll-django-basics/refs/heads/main/998_1x_shots_so.png",
    },
];

const getBentoClasses = (index: number) => {
    if (index === 0) return "lg:col-span-2 lg:row-span-2";
    if (index % 5 === 0 || index % 5 === 3) return "lg:col-span-2";
    return "";
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
                <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {mockProjects.map((project, i) => (
                        <Card
                            key={project.id}
                            project={project}
                            className={`min-h-[280px] ${getBentoClasses(i)}`}
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
