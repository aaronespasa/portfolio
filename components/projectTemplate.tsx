import React, { PropsWithChildren } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FaCheck, FaHammer   } from "react-icons/fa";
import { projectsData, contributorsInfo, linkTypes } from "@/lib/data";

type CalloutProps = React.PropsWithChildren<{
    tag?: string
    type: "dark" | "light"
}>

export const Callout = ({ tag, type, children }: CalloutProps) => {
    return (
        <div className={`relative border rounded-lg p-4 mb-4 overflow-hidden
                        ${type === "light" ? "bg-gray-100 border-black/30" : "bg-gray-800 text-white border-gray-400"}`}>
            {tag && (
                <div className={`absolute top-0 left-0 rounded-br-lg text-[0.6rem] uppercase tracking-wider px-2
                                shadow-[0_0_15px_0_rgba(100,116,139,0.24)] flex gap-x-[0.4rem] items-center
                                ${type === "light" ? "bg-gray-50 text-[#64748B]" : "bg-gray-600 text-gray-50"}
                                `}>
                    {tag}
                </div>
            )}
            <p className={tag && "mt-4"}>
                {children}
            </p>
        </div>
    )
}

const CoverBackground = ({ src, title, children }: { src: string, title: string, children: React.ReactNode }) => {
    return (
        <div className="relative w-full max-h-[60rem]">
            <div className="h-full w-full absolute -top-12 left-0 pointer-events-none z-0 overflow-hidden">
                <Image src={src} alt={title + " cover"} fill sizes="100vw" className="object-cover mix-blend-multiply blur-[6px]" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 -z-[2]"></div>
                {/* Gradient Mask */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 via-20% via-transparent to-transparent"></div> */}
                {/* div for inverted border radius */}
                <div className="w-[min(100%,20rem)] md:w-[min(100%,38rem)] h-8 bg-gray-50 absolute bottom-0 left-1/2 -translate-x-1/2 box-content">
                    <div className="absolute bottom-0 -left-6 w-6 aspect-square rotate-180"
                         style={{
                            backgroundImage: "radial-gradient(circle at 100% 100%, transparent 24px, rgb(249,250,251) 4px)",
                         }}>

                    </div>
                    <div className="absolute bottom-0 -right-6 w-6 aspect-square rotate-[270deg]"
                         style={{
                            backgroundImage: "radial-gradient(circle at 100% 100%, transparent 24px, rgb(249,250,251) 4px)",
                         }}>

                    </div>

                </div>
            </div>
            {children}
        </div>
    )
}

type ProjectTemplateProps = PropsWithChildren<{
    slug: string
    intro: string
    image: StaticImageData
}>

const ProjectTemplate = ({ slug, intro, image, children }: ProjectTemplateProps) => {
    const project = projectsData.find(project => project.slug === slug)
    if (!project) return null
    
    const { title, tags, contributors, links, skills, date } = project
    // @ts-ignore
    const contributorsData = contributorsInfo.filter(contributor => contributors.includes(contributor.name))

    return (
        <>
            <CoverBackground src={image.src} title={title}>
                <div className="h-full flex flex-col items-center relative z-10 pt-28">
                    <div className="w-[min(100%,20rem)] md:w-[min(100%,38rem)]">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <div key={index} className="relative bg-slate-500/70 text-gray-50 border border-slate-300/70 backdrop-blur-sm selection:bg-slate-700
                                                            shadow-[0_5px_3px_-3px_rgba(100,116,139,0.24)] px-3 py-1 text-[0.6rem] uppercase tracking-wider rounded-md">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <h1 className="text-5xl text-white font-bold selection:bg-slate-900">{title}</h1>
                        <p className="text-base text-gray-200 selection:bg-slate-900 mt-3 mb-4">{intro}</p>
                        {links.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {links.map((link, index) => (
                                    <Link href={link.url} key={index} target='_blank'
                                          className={`relative flex flex-col items-center justify-center gap-2 rounded-md w-24 aspect-square transform duration-200 ease-out hover:scale-95
                                                      backdrop-blur-sm selection:bg-slate-700 font-medium group text-center
                                                      shadow-[0_5px_3px_-3px_rgba(100,116,139,0.24)] px-3 py-1 text-[0.6rem] uppercase tracking-wider
                                                      ${link.type === "github" && "bg-slate-800/50 text-gray-100 hover:text-white hover:bg-slate-500/70 border border-slate-400"}
                                                      ${link.type === "web" && "bg-blue-500/30 text-blue-200 hover:text-white hover:bg-blue-500/60 border border-blue-500"}
                                                      ${link.type === "youtube" && "bg-red-500/30 text-red-50 hover:text-white hover:bg-red-500/60 border border-red-500"}
                                                      ${link.type === "docs" && "bg-teal-500/30 text-teal-50 hover:text-white hover:bg-teal-500/60 border border-teal-500"}
                                                      ${link.type === "slides" && "bg-yellow-600/30 text-yellow-50 hover:text-white hover:bg-yellow-600/60 border border-yellow-600"}
                                                      `}>
                                        {link.name}
                                        <figure className={`text-3xl text-gray-300 transition-colors duration-200 ease-out
                                                            ${link.type === "github" && "text-gray-300 group-hover:text-white"}
                                                            ${link.type === "web" && "text-blue-200 group-hover:text-white"}
                                                            ${link.type === "youtube" && "text-red-200 group-hover:text-white"}
                                                            ${link.type === "docs" && "text-teal-200 group-hover:text-white"}
                                                            ${link.type === "slides" && "text-yellow-200 group-hover:text-white"}
                                        `}>
                                            {/* @ts-ignore */}
                                            {linkTypes.find(linkType => linkType.type === link.type).icon}
                                        </figure>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {skills.length > 0 && (
                            <>
                                <div className="flex items-center space-x-2 text-base mt-2 mb-2">
                                    <h4 className="font-medium text-gray-200 uppercase tracking-wider text-xs selection:bg-slate-700">Main Skills</h4>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="relative flex items-center gap-2 rounded-full
                                                                  bg-slate-500/50 text-gray-100 border border-gray-500 backdrop-blur-sm selection:bg-slate-700
                                                                    shadow-[0_5px_3px_-3px_rgba(100,116,139,0.24)] px-3 py-1 text-[0.6rem] uppercase tracking-wider">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {contributorsData.length > 0 && (
                            <>
                                <div className="flex items-center space-x-2 text-base mb-2">
                                    <h4 className="font-medium text-gray-200 uppercase tracking-wider text-xs selection:bg-slate-700">Other Contributors</h4>
                                    <span className="rounded-full bg-slate-500/70 text-gray-50 px-[0.33rem] py-1 text-[0.5rem] leading-[0.5rem] font-semibold ">{contributors.length}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {contributorsData.map((contributor, index) => (
                                        <Link href={contributor.linkedin} key={index}
                                              className="relative flex items-center gap-2 rounded-full transform duration-200 ease-out hover:scale-95
                                                      bg-slate-500/50 text-gray-100 border border-gray-500 backdrop-blur-sm selection:bg-slate-700
                                                         shadow-[0_5px_3px_-3px_rgba(100,116,139,0.24)] px-3 py-1 text-[0.6rem] uppercase tracking-wider">
                                            <Image src={`/project/contributors/${contributor.imageName}`} alt={contributor.name} width={24} height={24} className="rounded-full" />
                                            {contributor.name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="relative overflow-hidden text-base bg-gray-50 rounded-md pt-12 pb-6 px-4 selection:bg-slate-300">
                            <div className={`absolute top-0 right-0 rounded-bl-lg text-[0.6rem] uppercase tracking-wider py-1 px-2
                                           shadow-[0_0_15px_0_rgba(100,116,139,0.24)] flex gap-x-[0.4rem] items-center font-medium border-b border-l
                                           ${date === null ?
                                            "bg-yellow-100 border-yellow-400 text-yellow-900" :
                                            "bg-gray-50 text-[#64748B] border-gray-300"}`}
                            >
                                {date === null ? <><FaHammer/> Ongoing</> : <><FaCheck /> {date}</>}
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </CoverBackground>
        </>
    )
}

export default ProjectTemplate