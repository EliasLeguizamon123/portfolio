/* eslint-disable tailwindcss/no-contradicting-classname */
'use client';

import { GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserContributions } from "../lib/services";
import { Repository } from "../lib/repoModel";
import RepoCard from "../components/RepoCard";

export default function Contributions () {
    const [repos, setRepos] = useState<Repository[]>();
    
    useEffect(() => {
        getUserContributions('EliasLeguizamon123').then((data) => {
            setRepos(data);
        })
    }, [])

    return (
        <section id="contributions" data-section="contributions">
            <div className="size-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
                    <GitPullRequest className="animate-bounce text-cyan-700" />
                    <p>
                        Contributions
                    </p>
                    
                </h2>
                <div className="flex w-full flex-row gap-4">
                    {repos?.map((repo) => (
                        <RepoCard repo={repo} key={repo.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}