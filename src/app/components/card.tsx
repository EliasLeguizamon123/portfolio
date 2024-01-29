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
            className={`group row-span-1 cursor-pointer rounded-xl border-2 border-slate-400/10 bg-local text-white transition duration-300 hocus:-translate-y-2.5 hocus:scale-105 ${
                props.i === 2 || props.i === 3 || props.i === 8 || props.i === 9 ? 'col-span-1 lg:col-span-2' : props.i === 1 || props.i === 5 || props.i === 11 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
        >
            <div className="absolute z-50">
                <h2 className="hidden p-4 text-white  group-hover:flex group-hover:opacity-100">{'index: ' +props.i}</h2>
            </div>
            <Image src={props.image} width={400} alt={props.title} height={700} className=" h-full w-full rounded-xl object-cover transition-opacity duration-300 group-hover:brightness-50" />
        </div>
    )
}