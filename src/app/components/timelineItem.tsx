export interface props {
    title: string;
    date: string;
    description: string;
    link?: string;
}
export default function TimelineItem (props: props) {
    return (  
        <li className="ml-4 pb-8">
            <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-cyan-700 ring-4 ring-gunmetal-blue">
                <svg className="size-2.5 text-white dark:text-blue-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.date}</time>
            <h3 className="text-lg font-semibold italic text-white">{props.title}</h3>
            <p className="mb-4 p-4 text-base font-normal text-lavender">
                {props.description}
            </p>
            {props.link && (

                <a href={props.link} target="_blank" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Company site<svg className="ms-2 size-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></a>
            )}
        </li>
    )
}