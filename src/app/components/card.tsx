import Image, { StaticImageData } from "next/image";

export interface props {
    title: string,
    description: string,
    image: StaticImageData | string,
    link: string
}

export default function Card(props: props) {
    return (
        <a href={props.link} target="_blank" className="flex flex-col items-center rounded-lg border border-gray-200 bg-gray-800 shadow transition ease-in-out hover:-translate-y-1 hover:scale-105 md:max-w-xl md:flex-row dark:border-gray-700 dark:hover:text-white">
            <Image className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.image} alt="project image" />
            <div className="flex flex-col justify-between p-4 text-center leading-normal md:text-left">
                <h5 className="mb-2 text-2xl font-bold italic tracking-tight text-gray-900 dark:text-lavender">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
        </a>
    )
}