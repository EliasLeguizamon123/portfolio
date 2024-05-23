export interface props {
    href: string;
    isNew?: boolean;
    text: string;
    hidden?: boolean;
}

export default function  NavbarButton({href, isNew, text, hidden}: props) {
    return (
        <a 
            href={href} 
            className={`${hidden && 'hidden md:flex'} rounded-full px-3 transition hover:bg-white/30 ${isNew && "animate-background-shine bg-[linear-gradient(110deg,transparent,45%,#1e2631,55%,transparent)] bg-[length:200%_100%] px-3 px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"}`}
        >
            {text}
        </a>
    )

}