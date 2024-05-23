"use client"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function NavbarDropdown () {
    return (
        <Dropdown >
            <DropdownTrigger>
                <Button className="flex h-fit rounded-full px-3 transition hover:bg-white/30 md:hidden">
                    Professional
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="rounded-md bg-white/30 text-center text-white">
                <DropdownItem href="#experience" key="experience" className="h-fit rounded-b-lg rounded-t-md  hover:bg-white/30">Experience</DropdownItem>
                <DropdownItem href="#projects" key="projects" className="h-fit rounded-lg hover:bg-white/30">Projects</DropdownItem>
                <DropdownItem href="#contributions" key="contributions" className="h-fit rounded-lg rounded-b-md hover:bg-white/30">Contributions</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}