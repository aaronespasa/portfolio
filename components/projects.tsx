"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { PiCursorFill } from "react-icons/pi";

interface OptionProps {
  isTop5: boolean;
  option: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Option: React.FC<React.PropsWithChildren & OptionProps> = ({ children, isTop5, option, selected, setSelected }) => {
  let isSelected = selected === option;

  return (
    <li className={`relative group text-xs w-24 sm:text-sm  sm:w-28 p-2 text-center aspect-square flex items-center justify-center cursor-pointer select-none
                   border border-black/10 bg-gray-100 text-gray-700 rounded-lg mb-6
                   transition duration-300 ease-out hover:scale-95 active:scale-105 hover:bg-gray-200
                   ${isSelected && "border-gray-700 bg-gray-800 text-white hover:bg-gray-700"} `}
        onClick={() => setSelected(option)}
    >
      {isTop5 && (
        <div className={`absolute top-0 right-0 rounded-bl-lg rounded-tr-lg text-[0.6rem] uppercase tracking-wider px-2 leading-4 flex gap-x-[0.4rem] items-center
                        bg-gray-50 group-hover:bg-gray-100 transition duration-300 ease-out text-[#64748B] shadow-[0_0_15px_0_rgba(100,116,139,0.24)]
                        ${isSelected && "bg-gray-600 text-gray-50 group-hover:bg-gray-500"}`}>
                TOP 5
        </div>
      )}
      {children}
    </li>
  )
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  const [selected, setSelected] = useState<string>("all");
  const [projects, setProjects] = useState<typeof projectsData>(projectsData); // .sort((a, b) => b.score - a.score)

  useEffect(() => {
    if (selected == "all") {
      setProjects(projectsData);
      return;
    }
    
    const filteredData = projectsData.filter((project) =>
      project.category.includes(selected)
    );

    setProjects(filteredData);
  }, [selected])

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
      <SectionHeading>My projects</SectionHeading>
      <ul className="flex flex-col items-center sm:items-start justify-center sm:flex-row sm:justify-between">
        <Option isTop5={false} option="all" selected={selected} setSelected={setSelected}>All<br/>Projects</Option>
        <p className="text-sm text-[#64748B] mt-0 mb-6 sm:mt-12 sm:mb-0">OR</p>
        <ul className="grid gap-2 justify-center grid-cols-2 sm:grid-cols-4">
          <Option isTop5={true} option="ml" selected={selected} setSelected={setSelected}>
            Machine Learning<br/>Projects
            {/* <motion.div
              initial={{ scale: 0, scaleZ: 0 }}
              whileInView={{ scale: [1, 0.8, 1], scaleZ: [1, 0.5, 1], scaleY: [1, 0.5, 1] }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: 0.8
              }}
              className="absolute bottom-0 right-0 "
            >
              <PiCursorFill className="w-6 h-6 text-gray-800" />
            </motion.div> */}
          </Option>
          <Option isTop5={true} option="db" selected={selected} setSelected={setSelected}>DB & Data Engineering<br/>Projects</Option>
          <Option isTop5={true} option="se" selected={selected} setSelected={setSelected}>Software Engineering<br/>Projects</Option>
          <Option isTop5={true} option="web" selected={selected} setSelected={setSelected}>Web Development<br/>Projects</Option>
        </ul>
      </ul>
      <div className="grid grid-cols-1">
          {projects.map((project, index) => (
              <Project key={project.title} {...project} isEven={(index + 1) % 2 == 0} />
          ))}
      </div>
    </motion.section>
  );
}
