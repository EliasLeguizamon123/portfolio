/* eslint-disable tailwindcss/no-contradicting-classname */
import Card from "../components/card";
import Logo from '../icon.ico'

export default function Projects () {
    return (
        <section id="projects" data-section="projects">
            <div className="h-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className=" grid w-full grid-cols-1 justify-between gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                    <Card link={"https://github.com/EliasLeguizamon123"} image={Logo} title="Portfolio" description="Lorem ipsum dolor mutis"  />
                </div>
            </div>
        </section>
    )
}