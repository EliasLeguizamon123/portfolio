/* eslint-disable tailwindcss/no-contradicting-classname */
import Card from "../components/card";
import Logo from '../icon.ico'

export default function Projects () {
    return (
        <section id="projects" data-section="projects">
            <div className=" mx-auto h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pl-4 opacity-70">
                <div className="flex w-full flex-nowrap justify-between p-10">
                    <Card image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                </div>
            </div>
        </section>
    )
}