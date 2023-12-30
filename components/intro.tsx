"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setIsMobile(window.innerWidth < 640)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nameContainer = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: isMobile ? 8: 20,
      transition: {
        x: { delay: 0.5, duration: 1, type: "spring" },
        opacity: { delay: 0.5, duration: 1 },
        staggerChildren: 0.03,
        delayChildren: 0.5 + 0.04 * i
      },
    }),
  };

  const nameChild = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const greeting = Array.from("Hello, I'm Aarón!")

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-36"
    >
      {/* <358, 247>, <130, 270> */}
        <div className="bg-[hsl(358,76%,94%)] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[hsl(247,82%,91%)] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="flex items-center justify-center relative">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "100%" }}
            animate={{ opacity: 1, scale: 1, x: [ "100%", "-10%"] }}
            transition={{
              opacity: { type: "spring", duration: 0.3 },
              scale: { type: "spring", duration: 0.3, stiffness: 100 },
              x: { type: "spring", duration: 1, delay: 0.5, ease: "easeOut"}
            }}
          >
            <Image
              src="/aaron.jpg"
              alt="Aaron portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0, x: "-10%" }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          className="text-2xl font-medium sm:text-3xl -z-10"
          variants={nameContainer}
          initial="hidden"
          animate="visible"
        >
            {greeting.map((letter: string, index: number) => (
              <motion.span key={index} variants={nameChild}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
      </div>

      <motion.h1
        className="mb-10 mt-8 px-3 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm a{" "}<span className="font-bold">software engineer</span> specialized in{" "}
        <span className="italic">machine learning</span> and{" "}
        <span className="italic">data-driven</span> solutions, skilled in{" "}
        <span className="sm:flex sm:justify-center">
          <span className="underline">React</span>,&nbsp;
          <span className="underline">PyTorch</span>,&nbsp;
          <span className="underline">AWS</span>,&nbsp;
          <span className="underline">SQL</span>&nbsp;&&nbsp;
          <span className="underline">C++</span>.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md lg:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 py-2 lg:px-7 lg:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105
                    hover:bg-gray-950 hover:text-gray-200 active:scale-95 transition shadow-sm"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-6 py-2 lg:px-7 lg:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 border border-black/10 shadow-sm hover:bg-[#FFF4F1]
                   hover:border-[#F24E1E]/30 hover:text-[#F24E1E] hover:scale-105 active:scale-95 transition cursor-pointer"
          href="/CV_Aaron_Espasandin.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:scale-105 transition duration-0 fill-current" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 border border-black/10 shadow-sm hover:bg-[#F1F8FF] hover:text-[#0A66C2] hover:border-[#0A66C2]/30
                        flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="https://www.linkedin.com/in/aaronespasa/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 shadow-sm hover:border-[#222222]/30
                      focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#F2F2F2] hover:text-[#222222] active:scale-105 transition cursor-pointer"
            href="https://github.com/aaronespasa"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
