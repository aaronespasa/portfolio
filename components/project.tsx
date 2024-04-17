"use client";

import Link from "next/link"
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { FaCheck, FaHammer, FaAward } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";
type ProjectProps = (typeof projectsData)[number] & { isEven: boolean; };

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  imageUrl: StaticImageData;
  date: string | null;
  slug: string;
  isEven: boolean;
  special: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, imageUrl, date, slug, isEven, special }) => (
  <section className={` relative max-w-[42rem] rounded-lg overflow-hidden
                          sm:pr-8 sm:h-[20rem] transition duration-200 sm:group-even:pl-8
                          ${special ? "card-wrapper h-48" : "bg-gray-100 hover:bg-gray-200 border border-black/5 hover:border-gray-300"}
                          `}>
    <div className={`h-full ${special && "card-content sm:flex sm:items-center border border-black/5 hover:border-gray-300"}`}>
      {/* tag of the date, at the left when odd and right when even */}
      <div
        className={`absolute top-0 ${isEven ? "right-0 rounded-bl-lg" : "left-0 rounded-br-lg" } text-[0.6rem] uppercase tracking-wider py-1 px-2
                  bg-gray-50 group-hover:bg-gray-100 transition text-[#64748B] shadow-[0_0_15px_0_rgba(100,116,139,0.24)] flex gap-x-[0.4rem] items-center`}
      >
        {date === null ? <><FaHammer/> Ongoing</> : <><FaCheck /> {date}</>}
      </div>
      {/* border-gray-700 bg-gray-800 text-white hover:bg-gray-700 */}
      {special && (
        <div
        className={`absolute top-0 ${isEven ? "left-0 rounded-br-lg" : "right-0 rounded-bl-lg" } text-[0.6rem] uppercase tracking-wider py-1 px-2
                  bg-gray-800 group-hover:bg-gray-700 transition text-white shadow-[0_0_15px_0_rgba(100,116,139,0.24)] flex gap-x-[0.4rem] items-center`}
        >
          <><FaAward/> Best Project</>
        </div>
      )}
        
      {/* project details */}
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-xl font-semibold mt-4 sm:mt-0">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          {description}
        </p>
        {special && (
          <div className="my-auto flex gap-x-4 items-center bg-white text-gray-900 font-medium py-1 px-4 rounded-lg text-[0.75rem]">
            <GiTrophyCup className="w-10 h-10" />
            <p>My segmentation model <b>improves the state of the art</b> by a 0.5% of IoU.</p>
          </div>
        )}
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

      {/* image */}
      {special
      ? (
        <figure className="w-full flex justify-center">
          <Image
            src={imageUrl}
            alt="Special project I worked on"
            quality={100}
            className="hidden sm:block w-[10em] h-[10em] transition rounded-[2rem] shadow-2xl
                      group-hover:scale-[1.1]
                      group-hover:rotate-[4deg]

            "
          />
        </figure>
      )
      : (
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
      )}
    </div>
  </section>
)

export default function Project({
  title,
  description,
  skills,
  imageUrl,
  date,
  slug,
  isEven,
  special
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
            <ProjectCard title={title}
                          description={description}
                          skills={skills}
                          imageUrl={imageUrl}
                          date={date}
                          slug={slug}
                          isEven={isEven}
                          special={special}
            />
      </Link>
    </motion.div>
  );
}
