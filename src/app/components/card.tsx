import Image from "next/image"
export interface props {
    title: string,
    description: string,
    image: string,
    link: string,
    i: number,
    tags: string[]
}

export default function Card(props: props) {
    console.log(props.tags)
    return (
        <div
            className={`group row-span-1 cursor-pointer rounded-xl border-2 border-slate-400/10 bg-local text-white transition duration-300 hocus:-translate-y-2.5 hocus:scale-105 ${
                props.i === 2 || props.i === 3 || props.i === 8 || props.i === 9 ? 'col-span-1 lg:col-span-2' : props.i === 1 || props.i === 5 || props.i === 11 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
        >
            <div className="absolute z-50 hidden w-full flex-col group-hover:flex group-hover:opacity-100">
                <h2 className="px-4 py-2 text-base text-white">{props.title}</h2>
                {/* <p className="px-4">{props.description}</p> */}
                {props.tags.map((tag, index) => (
                    <p key={index} className="px-4 py-1 text-xs text-white">{tag}</p>
                ))}
            </div>
            <Image src={props.image} width={400} alt={props.title} height={700} className="size-full rounded-xl object-cover transition-opacity duration-300 group-hover:brightness-50" />
        </div>
    )
}