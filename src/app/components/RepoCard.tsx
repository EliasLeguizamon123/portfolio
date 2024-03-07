import { Repository } from "../lib/repoModel";

export default function RepoCard ({repo}: {repo: Repository}) {
    return (
        <div className="h-[100px] w-[250px] bg-gray-300 text-center">
            <p className="text-gray-500">
                {repo.name.split('/')[1]}
            </p>
        </div>
    )
}