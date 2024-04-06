/* eslint-disable tailwindcss/no-contradicting-classname */
'use client';

import { GitPullRequest } from "lucide-react";
import { Repository } from "../lib/repoModel";
import RepoCard from "../components/RepoCard";

export default function Contributions () {

    const repos: Repository[] = [
        {
            id: 1,
            name: "Clone-Wars",
            url: "https://github.com/GorvGoyl/Clone-Wars",
        },
        {
            id: 2,
            name: "la-velada-web-oficial",
            url: "https://github.com/midudev/la-velada-web-oficial",
        }
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
                <div className="flex w-full flex-row gap-4">
                    {repos?.map((repo) => (
                        <RepoCard repo={repo} key={repo.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}