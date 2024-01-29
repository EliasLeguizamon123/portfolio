import Image, { StaticImageData } from "next/image";

export interface props {
    title: string,
    description: string,
    image: StaticImageData | string,
    link: string,
    i: number
}

export default function Card(props: props) {
    return (
        <div
            className={`group row-span-1 cursor-pointer rounded-xl border-2 border-slate-400/10 bg-local text-white ${
                props.i === 0 || props.i === 3 || props.i === 6 ? 'row-span-2' : ''
            }`}
        >
            <div className="absolute z-50">
                <h2 className=" hidden p-4 text-white  group-hover:flex group-hover:opacity-100">{props.i}</h2>
            </div>
            <Image src={props.image} width={1} alt={props.title} height={1} className=" h-full w-full rounded-xl object-cover transition-opacity duration-300 group-hover:brightness-50" />
        </div>
    )
}