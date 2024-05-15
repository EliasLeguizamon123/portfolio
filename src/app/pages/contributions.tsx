/* eslint-disable tailwindcss/no-contradicting-classname */
'use client';

import { GitPullRequest } from "lucide-react";
import { Repository } from "../lib/repoModel";
import RepoCard from "../components/RepoCard";
import Astro from "../components/icons/Astro";
import Rust from "../components/icons/Rust";
import Markdown from "../components/icons/Markdown";

export default function Contributions () {

    const repos: Repository[] = [
        {
            id: 1,
            name: "Clone-Wars",
            url: "https://github.com/GorvGoyl/Clone-Wars",
            tecnology: "Markdown",
            icon: <Markdown width={'55'} height={'55'} color={'#FFF'} />
        },
        {
            id: 2,
            name: "la-velada-web-oficial",
            url: "https://github.com/midudev/la-velada-web-oficial",
            tecnology: "Astro",
            icon: <Astro width={'55'} height={'55'} color={'#FFF'} />
        },
        {
            id: 3,
            name: "OneFetch",
            url: "https://github.com/o2sh/onefetch",
            tecnology: "Rust",
            icon: <Rust width={'55'} height={'55'} color={'#FFF'} />
        },
        {
            id: 4,
            name: "Gengo (言語)",
            url: "https://github.com/spenserblack/gengo",
            tecnology: "Rust",
            icon: <Rust width={'55'} height={'55'} color={'#FFF'} />
        },
    ]
    
    

    return (
        <section id="contributions" data-section="contributions">
            <div className="size-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
                    <GitPullRequest className="animate-bounce text-cyan-700" />
                    <p>
                        Contributions
                    </p>
                    
                </h2>
                <p className="mb-6 p-4 pl-10 italic text-gray-200">Below, you&apos;ll find a selection of projects I&apos;m currently collaborating on within the open-source community.</p>
                <div className="grid grid-cols-1 justify-items-center  gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {repos?.map((repo) => (
                        <RepoCard repo={repo} key={repo.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}