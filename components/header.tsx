"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from 'next/navigation'
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { projectsData, projectCategories } from "@/lib/data";

const getTop5 = (category: string) => {
  return projectsData
            .filter((project) => project.category.includes(category))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map((project) => ({
                      title: project.title,
                      description: project.description,
                      slug: project.slug
                    }))
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  
  const pathname = usePathname()
  const isWorkSection = pathname.split("/")[1] === "work";
  const top5 = projectCategories.reduce((acc, category) => {
    acc[`Top 5 ${category == "web" ? "Web" : category.toUpperCase()}`] = getTop5(category)
    return acc
  }, {} as {[key: string]: {title: string, description: string, slug: string}[]})

  return (
    <header className="z-[999] relative">
      {/* animate when isWorkSection changes */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80
                   shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <NavigationMenu className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <NavigationMenuList className={`flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.8rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap
                                        ${isWorkSection ? "sm:gap-0" : "sm:gap-5"}`}>
          {isWorkSection
          ?
          <>
            <NavigationMenuItem>
                <motion.div
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <NavigationMenuTrigger className="!bg-transparent">
                    <Link href="/">Home</Link>
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-x-10 gap-y-4 justify-center p-2">
                    {
                      links.map((link) => (
                        <motion.li
                          className="h-3/4 flex items-center justify-center relative"
                          key={link.hash}
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                          <Link
                            className="flex w-full items-center justify-start gap-2 p-2 rounded-md text-gray-600 font-medium text-[0.8rem] hover:scale-95 active:scale-105
                                       transition duration-200 hover:bg-[rgba(229,231,235,0.67)] border border-transparent hover:border-gray-300 hover:text-gray-950"
                            href={link.hash}
                            onClick={() => {
                              setActiveSection(link.name);
                              setTimeOfLastClick(Date.now());
                            }}
                          >
                            {link.icon}
                            {link.name}
                            </Link>
                        </motion.li>
                      ))
                    }
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            {Object.entries(top5).map(([category, projects]) => (
              <NavigationMenuItem key={category}>
                <motion.div
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <NavigationMenuTrigger className="!bg-transparent">{category}</NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <ul className="flex flex-wrap gap-x-4 gap-y-3 justify-center p-6 md:w-[400px] lg:w-[550px]">
                    {projects.map((project) => (
                      <motion.li
                          className="h-3/4 flex items-center justify-center relative"
                          key={project.title}
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                        <Link href={`/work/${project.slug}`}
                              title={project.title}
                              className="md:w-[220px] lg:w-[240px] p-4 hover:scale-95 active:scale-105 transition duration-200 rounded-md
                                       hover:bg-[rgba(229,231,235,0.67)] border border-transparent hover:border-gray-300 hover:text-gray-950"
                        >
                          <h3 className="text-[0.9rem] font-semibold">{project.title}</h3>
                          <p className="text-[0.8rem] text-gray-500">{project.description}</p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            ))}
          </>
          : links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  {
                    "text-gray-950":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
