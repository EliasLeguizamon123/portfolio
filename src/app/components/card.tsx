/* eslint-disable @next/next/no-img-element */
'use client'

import React, {  useRef, useState } from "react";
import { Project } from "../lib/projectModel";
import { ExternalLink, GithubIcon } from "lucide-react";
import GenericTag from "./genericTag";

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function Card({ project, className = "" }: ProjectCardProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
    const divRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return
        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            onClick={() => window.open(project.link, "_blank")}
            className={`relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-black via-gray-950 to-black shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.15), transparent 40%)`,
                }}
            />

            {/* Imagen del proyecto */}
            <div className="relative h-40 w-full overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="size-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?text=${encodeURIComponent(project.title)}`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="flex flex-1 flex-col justify-between p-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="line-clamp-1 text-lg font-semibold text-gray-100">{project.title}</h3>
                        <div className="flex items-center gap-1">
                            <GithubIcon className="size-4 text-gray-400" />
                            <ExternalLink className="size-4 text-gray-400" />
                        </div>
                    </div>

                    <p className="line-clamp-2 text-sm text-gray-300">{project.description}</p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                        <GenericTag tag={tag} key={tag} />
                    ))}
                    {project.tags.length > 3 && (
                        <GenericTag tag={`+${project.tags.length - 3}`} key="more-tags" />
                    )}
                </div>
            </div>
        </div>
    )
}
