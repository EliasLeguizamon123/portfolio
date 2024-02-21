'use client'
import Image from "next/image"
import { useEffect, useState } from "react";
import GenericTag from "./genericTag";
import { MoveRight } from "lucide-react";
import Github from "./icons/Github";
export interface props {
    title: string,
    description: string,
    image: string,
    link: string,
    i: number,
    tags: string[]
}

export default function Card(props: props) {
    const [tags, setTags] = useState<string[]>([]);
    

    useEffect(() => {
        const tagsString = props.tags[0];

        // Elimina los espacios en blanco y las comillas de la cadena
        const cleanedString = tagsString.replace(/'/g, '').replace(/\s/g, '');

        // Divide la cadena en un array usando la coma como separador
        setTags(cleanedString.split(','))

    }, [props.tags])

    return (
        <div
            className={`group row-span-1 cursor-pointer rounded-xl border-2 border-slate-400/10 bg-local text-white transition duration-100 hocus:-translate-y-2.5 hocus:scale-105 ${
                props.i === 2 || props.i === 3 || props.i === 8 || props.i === 9 ? 'col-span-1 lg:col-span-2' : props.i === 1 || props.i === 5 || props.i === 11 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
            onClick={() => window.open(props.link, '_blank')}
        >
            <div className="absolute z-50 hidden w-full flex-col transition duration-200 group-hover:flex group-hover:opacity-100 ">
                <h2 className="px-4 py-2 text-lg text-white">{props.title}</h2>
                <div className="flex w-full flex-wrap gap-2 pl-4 text-left">
                    {tags.map((tag, index) => (
                        <GenericTag key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <p className="absolute bottom-0 z-50 p-4 text-cyan-600"><Github height={'20px'} width={'20px'} color="white" /></p>
            <Image src={props.image} priority={true} style={{objectPosition: "top"}} width={400} alt={props.title} height={700} className="size-full rounded-xl object-cover transition-opacity duration-300 group-hover:brightness-50" />
        </div>
    )
}