"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { GoX } from "react-icons/go";

type BaseCardProps = React.PropsWithChildren<{
    className?: string,
    gridClassName: string,
    itemId: string,
    handleCardClick: (id: string) => void,
    active?: boolean,
    customClassName?: string
}>;

const BaseCard: React.FC<BaseCardProps> = ({ children, customClassName, gridClassName, className, itemId, handleCardClick, active }) => {
  return (
    <motion.li layoutId={itemId} onClick={() => handleCardClick(itemId)}
      className={`group text-xs sm:text-sm p-2 w-full h-full flex items-center justify-center
                border border-black/10 bg-gray-100 text-gray-700 rounded-lg
                ${customClassName}
                ${gridClassName}
                ${active ? className : "cursor-pointer select-none"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: active ? 1 : 0.95,
        backgroundColor: active ? "rgb(243, 244, 246)" : "#E5E7EB",
        borderColor: active ? "rgba(0,0,0,0.1)" : "#9CA3AF"
      }}
      transition={{
        scale: {
          duration: 0.3,
          delay: 0.175,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
        backgroundColor: {
          duration: 0.3,
          ease: "easeInOut"
        },
        borderColor: {
          duration: 0.3,
          ease: "easeInOut"
        },
      }}
    >
      {children}
    </motion.li>
  )
}

type CardProps = BaseCardProps & {
  selectedId: string|null,
  handleCloseCard: () => void
}

const Card: React.FC<CardProps> = ({ children, gridClassName, customClassName, itemId, selectedId, handleCardClick, handleCloseCard }) => {
  return (
    <BaseCard gridClassName={gridClassName} itemId={itemId} handleCardClick={handleCardClick} active={selectedId === itemId} customClassName={customClassName}
              className="z-50 fixed top-[20%] left-[10%] md:top-[15%] md:left-[15%] lg:left-1/4 mx-auto w-[80vw] h-[80vh] max-w-[600px] max-h-[600px]" 
    >
      { selectedId === itemId && (
        <button onClick={(e) => { e.stopPropagation(); handleCloseCard(); }}
                className="absolute top-3 right-3 rounded-full w-7 h-7 p-1 bg-gray-600
                          hover:bg-gray-700 active:bg-gray-800 transition duration-200"
        >
          <GoX className="w-full h-full text-gray-100" />

        </button>
      )}
      {children}
    </BaseCard>
  )
}

export default function About() {
  const { ref } = useSectionInView("About");
  const [selectedId, setSelectedId] = useState<string|null>(null);

  const toggleScrollLock = (lock: boolean) => {
    if (lock) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleCardClick = (id: string) => {
    setSelectedId(id);
    toggleScrollLock(true);
  };

  const handleCloseCard = () => {
    setSelectedId(null);
    toggleScrollLock(false);
  };


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <motion.ul className="grid grid-cols-1 gap-3 max-w-[45rem] w-full
                              grid-rows-[repeat(14,_1fr)] sm:grid-cols-[3fr_2fr_3fr] sm:grid-rows-5 lg:grid-cols-[3fr_2fr_2fr_3fr] lg:grid-rows-4"
        >
          <Card key="early-days" itemId="early-days" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="flex flex-col gap-2 row-start-1 row-end-3"
              customClassName=""
          >
            Early Days
          </Card>
          <Card key="education" itemId="education" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-3 row-end-5 h-64 sm:row-auto sm:grid-cols-3 sm:col-start-2 sm:col-end-4 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          >
            Education
          </Card>
          <Card key="self-education-personal-projects" itemId="self-education-personal-projects" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-5 row-end-7 sm:row-auto sm:grid-cols-3 sm:col-start-2 sm:col-end-4 sm:row-start-2 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          > 
            Self-education & Personal Projects
          </Card>
          <Card key="professional-experience" itemId="professional-experience" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-7 row-end-[9] sm:row-auto sm:grid-cols-3 sm:row-start-3 sm:col-start-1 sm:col-end-3 lg:col-end-4 sm:aspect-[5/2]"
              customClassName=""
          >
            Professional Experience
          </Card>
          <Card key="volunteering" itemId="volunteering" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="flex row-start-[9] row-end-[11] flex-col gap-2 sm:row-start-3 sm:row-end-5"
              customClassName=""
          >
            Volunteering
          </Card>
          <Card key="hobbies" itemId="hobbies" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="flex flex-col row-start-[11] row-end-[13] gap-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-end-2 sm:row-start-4 sm:row-span-1"
              customClassName=""
          >
            Hobbies
          </Card>
          <Card key="sports" itemId="sports" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[13] row-end-[15] sm:grid-cols-3 sm:row-start-4 sm:row-end-4 sm:col-start-1 sm:col-end-2 lg:col-start-2 lg:col-end-4"
              customClassName=""    
          >
            Sports
          </Card>
        </motion.ul>
        {/* Backdrop */}
        <motion.div 
          onClick={handleCloseCard}
          className="opacity-0 fixed inset-0 pointer-events-none bg-gray-100 bg-opacity-50 backdrop-blur-sm z-40"
          animate={{
            opacity: selectedId ? 1 : 0,
            pointerEvents: selectedId ? "auto" : "none",
            cursor: selectedId ? "pointer" : "default"
          }}
        />
    </motion.section>
  );
}
