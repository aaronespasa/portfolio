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
  // create a hash map of the top 5 projects for each category (projectCategories) and get only the title, description and slug
  const top5 = projectCategories.reduce((acc, category) => {
    acc[`Top 5 ${category == "web" ? "Web" : category.toUpperCase()}`] = getTop5(category)
    return acc
  }, {} as {[key: string]: {title: string, description: string, slug: string}[]})

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <NavigationMenu className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <NavigationMenuList className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {isWorkSection
          ?
          <>
            {/* <NavigationMenuItem>
                <motion.div
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-x-10 gap-y-6 justify-center p-6 md:w-[400px] lg:w-[500px]">
                    
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem> */}
            {Object.entries(top5).map(([category, projects]) => (
              <NavigationMenuItem key={category}>
                <motion.div
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <ul className="flex flex-wrap gap-x-10 gap-y-6 justify-center p-6 md:w-[400px] lg:w-[500px]">
                    {projects.map((project) => (
                      <Link href={`/work/${project.slug}`}
                            title={project.title}
                            key={project.title}
                            className="md:w-[180px] lg:w-[200px]"
                      >
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-500 text-justify">{project.description}</p>
                      </Link>
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
