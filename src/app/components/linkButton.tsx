import {ReactNode} from 'react'

/* eslint-disable tailwindcss/no-custom-classname */
export interface props {
    href: string;
    name: string;
    children: ReactNode
}

export default function LinkButton (props: props) {

    return(
        <a href={props.href} target="_blank" className='transition-background inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-100 via-[#374151] to-[#8F9CAE] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hocus:bg-[100%_200%] hocus:text-white hocus:outline-none hocus:ring-slate-400 '>
            <span className='pr-2'>{props.name}</span>
            {props.children}
        </a>
    )
}