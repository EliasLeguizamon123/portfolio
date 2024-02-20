import { BriefcaseIcon } from "lucide-react";

export  interface props {
    width: string;
    height: string;
    color: string;
}

export default function Briefcase ({width, height, color}: props){
    return (
        <BriefcaseIcon width={width} height={height} color={color} />
    )
}