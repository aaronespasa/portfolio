"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { GoX } from "react-icons/go";
import Image, { StaticImageData } from "next/image";
import EarlyDay1 from "@/public/about/early-days/image-1.webp"
import EarlyDay2 from "@/public/about/early-days/image-2.webp"
import EarlyDay3 from "@/public/about/early-days/image-3.webp"
import Hobbies1 from "@/public/about/hobbies/image-1.webp"
import Hobbies2 from "@/public/about/hobbies/image-2.webp"
import Hobbies3 from "@/public/about/hobbies/image-3.webp"
import ProfessionalExp1 from "@/public/about/professional-experience/image-1.webp"
import ProfessionalExp2 from "@/public/about/professional-experience/image-2.webp"
import ProfessionalExp3 from "@/public/about/professional-experience/image-3.webp"
import SelfEducation1 from "@/public/about/self-education/image-1.webp"
import SelfEducation2 from "@/public/about/self-education/image-2.webp"
import SelfEducation3 from "@/public/about/self-education/image-3.webp"
import Sports1 from "@/public/about/sports/image-1.webp"
import Sports2 from "@/public/about/sports/image-2.webp"
import Sports3 from "@/public/about/sports/image-3.webp"
import University1 from "@/public/about/university/image-1.webp"
import University2 from "@/public/about/university/image-2.webp"
import University3 from "@/public/about/university/image-3.webp"
import Volunteering1 from "@/public/about/volunteering/image-1.webp"
import Volunteering2 from "@/public/about/volunteering/image-2.gif"
import Volunteering3 from "@/public/about/volunteering/image-3.webp"
import { Content } from "next/font/google";

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
              className="z-50 fixed top-[20%] left-[10%] md:top-[15%] md:left-[15%] lg:left-1/4 mx-auto w-[80vw] h-[80v] max-w-[600px] max-h-[600px]" 
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

type ContentLayoutProps = React.PropsWithChildren<{
  layout: "images-left" | "images-right" | "images-top",
  className?: string,
  image1: StaticImageData,
  image2: StaticImageData,
  image3: StaticImageData,
  title: string
}>;

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, layout, className, image1, image2, image3, title }) => {
  const ContentImage = ({ image, number, placeholder, customClassName }: { image: StaticImageData, number: 1|2|3, placeholder: boolean, customClassName?: string }) => {
    const isVertical = layout === "images-top"
    return (
      <figure key={image.src}
                     className={`absolute w-32 h-32 top-0 left-0
                     ${customClassName}
                     `}
      >
        <Image src={image} alt={title} placeholder={placeholder ? "blur" : "empty"}
             className={`rounded-lg object-cover shadow-md w-32 h-32`} />
      </figure>
    )
  }

  return (
    <div
      className={`gap-2 w-full h-full
        ${layout === "images-top" && "grid grid-col-1 items-center justify-start"}
        ${layout === "images-left" && "grid sm:grid-cols-[1fr_2fr]"}
        ${layout === "images-right" && "grid sm:grid-cols-[2fr_1fr]"}
      `}
    >
      <div key="image-group" className="relative">
        <ContentImage image={image1} placeholder={true} number={1} customClassName="z-10" />
        <ContentImage image={image2} placeholder={image2 !== Volunteering2} number={2} customClassName="z-20" />
        <ContentImage image={image3} placeholder={true} number={3} customClassName="z-10" />
      </div>
      <motion.div key="content-group">
        <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
        {children}
      </motion.div>
    </div>
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
      className="mb-28 max-w-[60rem] w-[90%] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <motion.ul className="grid grid-cols-1 gap-3 max-w-[60rem] w-full
                              grid-rows-[repeat(14,_1fr)] sm:grid-cols-[3fr_2fr_3fr] sm:grid-rows-5 lg:grid-cols-[3fr_2fr_2fr_3fr] lg:grid-rows-4"
        >
          <Card key="early-days" itemId="early-days" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-1 row-end-3"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                           image1={EarlyDay1} image2={EarlyDay2} image3={EarlyDay3}
                           title="My Early Days & Hackathons"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="education" itemId="education" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-3 row-end-5 h-64 sm:row-auto sm:col-start-2 sm:col-end-4 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          >
            <ContentLayout layout="images-right"
                           image1={University1} image2={University2} image3={University3}
                           title="BSc Computer Science"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="self-education-personal-projects" itemId="self-education-personal-projects" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-5 row-end-7 sm:row-auto sm:col-start-2 sm:col-end-4 sm:row-start-2 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          > 
            <ContentLayout layout="images-left"
                            image1={SelfEducation1} image2={SelfEducation2} image3={SelfEducation3}
                            title="Self-Education & Personal Projects"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="professional-experience" itemId="professional-experience" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-7 row-end-[9] sm:row-auto sm:row-start-3 sm:col-start-1 sm:col-end-3 lg:col-end-4 sm:aspect-[5/2]"
              customClassName=""
          >
            <ContentLayout layout="images-left"
                           image1={ProfessionalExp1} image2={ProfessionalExp2} image3={ProfessionalExp3}
                           title="Professional Experience"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="volunteering" itemId="volunteering" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[9] row-end-[11] sm:row-start-3 sm:row-end-5"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                            image1={Volunteering1} image2={Volunteering2} image3={Volunteering3}
                            title="Volunteering as Instructor on AI"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="hobbies" itemId="hobbies" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[11] row-end-[13] gap-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-end-2 sm:row-start-4 sm:row-span-1"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                            image1={Hobbies1} image2={Hobbies2} image3={Hobbies3}
                            title="Hobbies"
            >
              Description
            </ContentLayout>
          </Card>
          <Card key="sports" itemId="sports" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[13] row-end-[15] sm:row-start-4 sm:row-end-4 sm:col-start-1 sm:col-end-2 lg:col-start-2 lg:col-end-4"
              customClassName=""    
          >
            <ContentLayout layout="images-right"
                           image1={Sports1} image2={Sports2} image3={Sports3}
                           title="Sports"
            >
              Description
            </ContentLayout>
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
