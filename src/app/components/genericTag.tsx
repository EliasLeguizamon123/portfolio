export interface props {
    tag: string,
}
export default function GenericTag({ tag }: props) {
    return (
        <span className={`rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300`}> 
            {tag}
        </span>
    )
}