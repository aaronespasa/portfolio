"use client";

import Link from "next/link"
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaCheck, FaHammer   } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
type ProjectProps = (typeof projectsData)[number] & { isEven: boolean; };

export default function Project({
  title,
  description,
  skills,
  imageUrl,
  date,
  slug,
  isEven
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{
        y: { type: "spring", stiffness: 100, damping: 12 },
      }}
    >
      <Link href={`work/${slug}`}>
        <section className="bg-gray-100 relative max-w-[42rem] border border-black/5 hover:border-gray-300 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition duration-200 sm:group-even:pl-8">
          {/* tag of the date, at the left when odd and right when even */}
          <div
            className={`absolute top-0 ${isEven ? "right-0 rounded-bl-lg" : "left-0 rounded-br-lg" } text-[0.6rem] uppercase tracking-wider py-1 px-2
                      bg-gray-50 group-hover:bg-gray-100 transition text-[#64748B] shadow-[0_0_15px_0_rgba(100,116,139,0.24)] flex gap-x-[0.4rem] items-center`}
          >
            {date === null ? <><FaHammer/> Ongoing</> : <><FaCheck /> {date}</>}
          </div>
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-xl font-semibold mt-4 sm:mt-0">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {skills.map((skill, index) => (
                <li
                  className="relative bg-white group-hover:bg-gray-100 transition text-[#64748B] shadow-[0_5px_3px_-3px_rgba(100,116,139,0.24)] px-3 py-1 text-[0.6rem] uppercase tracking-wider rounded-md"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] !rounded-t-lg shadow-2xl transition 
                      group-hover:scale-[1.04]
                      group-hover:-translate-x-3
                      group-hover:translate-y-3
                      group-hover:-rotate-2

                      group-even:group-hover:translate-x-3
                      group-even:group-hover:translate-y-3
                      group-even:group-hover:rotate-2

                      group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
