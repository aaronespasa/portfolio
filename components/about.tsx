"use client";

import React, { useState, useEffect } from "react";
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
      className={`group text-xs sm:text-sm w-full h-full flex items-center justify-center
                border border-black/10 bg-gray-100 text-gray-700 rounded-lg
                ${customClassName}
                ${gridClassName}
                ${active ? className + " p-4" : "cursor-pointer select-none p-2"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
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
          duration: 0.2,
          ease: "easeInOut"
        },
        borderColor: {
          duration: 0.2,
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
              className="z-50 fixed top-[5%] lg:top-[10%] inset-0 mx-auto w-[80vw] !h-[80vh] max-w-[300px] max-h-[450px] md:max-w-[600px] lg:max-h-[600px]" 
    >
      { selectedId === itemId && (
        <button onClick={(e) => { e.stopPropagation(); handleCloseCard(); }}
                className="z-50 absolute top-3 right-3 rounded-full w-7 h-7 p-1 bg-gray-600
                          hover:bg-gray-700 active:bg-gray-800 transition duration-200"
        >
          <GoX className="z-50 w-full h-full text-gray-100" />
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
  title: string,
  active: boolean,
  shortDescription: React.ReactNode,
  openImage: (imageSrc: string) => void
}>;

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, layout, className, image1, image2, image3, openImage, title, active, shortDescription }) => {
  const ContentImage = ({ image, number, placeholder, customClassName }: { image: StaticImageData, number: 1|2|3, placeholder: boolean, customClassName?: string }) => {
    const isVertical = layout === "images-top"
    return (
      <figure key={image.src}
              className={`transform w-16 h-16 transition-all duration-200 ease-out
              ${active ? "w-20 h-20 lg:w-32 lg:h-32 cursor-pointer hover:scale-95 hover:contrast-125" : "md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none"}
              ${customClassName}
              `}
              onClick={() => openImage(image.src)}
      >
        <Image src={image} alt={title} placeholder={placeholder ? "blur" : "empty"}
             className={`rounded-lg shadow-md w-16 h-16
                        ${active ? "w-20 h-20 sm:w-32 sm:h-32 object-contain" : "md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"}
             `} />
      </figure>
    )
  }

  return (
    <motion.div
      className={`gap-y-2 gap-x-7 w-full h-full
        ${(layout === "images-top" && !active) && "grid grid-cols-1 items-center justify-start"}
        ${(layout === "images-left" && !active) && "grid grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr]"}
        ${(layout === "images-right" && !active) && "grid grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr]"}
        ${active && "flex flex-col"}
      `}
    >
      {/* min-h-[136px] = 96px from the image height and the rest to take into account the other two images translation in the y-axis */}
      <div key="image-group" className={`flex justify-center align-center relative min-w-[64px] lg:min-w-[96px] w-full
                             ${(layout === "images-right" && !active) && "sm:order-2"}
                             ${active ? "min-h-[100px] md:min-h-[140px]" : "min-h-[96px] lg:min-h-[136px]"}
      `}>
        {/* TODO: add absolute class to the customClassName and try to put them in an appropiate position */}
        <ContentImage image={image1} placeholder={true} number={1}
                      customClassName={`z-10 -rotate-12
                                      ${!active && "absolute top-1/2 left-1/2 sm:left-[60%] lg:left-1/2"}
                                      ${!active && `-translate-x-[70%] -translate-y-[40%] sm:-translate-y-[45%] lg:-translate-y-[40%] group-hover:-translate-x-[95%] group-hover:-translate-y-[45%]
                                                    group-hover:sm:-translate-y-[55%] group-hover:lg:-translate-y-[45%] group-hover:-rotate-[20deg]`}
                                      ${active && "translate-y-4 -translate-x-4"}
                      `}
        />
        <ContentImage image={image2} placeholder={image2 !== Volunteering2} number={2}
                      customClassName={`z-20
                                      ${!active && "absolute top-1/2 left-1/2 sm:left-[60%] lg:left-1/2"}
                                      ${!active && "-translate-x-[50%] -translate-y-[50%] group-hover:-translate-y-[75%]"}
                      `}
        />
        <ContentImage image={image3} placeholder={true} number={3}
                      customClassName={`z-10 rotate-12
                                      ${!active && "absolute top-1/2 left-1/2 sm:left-[60%] lg:left-1/2"}
                                      ${!active && "-translate-x-[30%] -translate-y-[40%] group-hover:-translate-x-[5%] group-hover:-translate-y-[45%] group-hover:rotate-[20deg]"}
                                      ${active && "translate-y-4 translate-x-4"}
                      `}
        />
      </div>
      <motion.div key="content-group"
                  className={`w-full h-full
                    ${(layout === "images-left" || layout === "images-right") && "flex flex-col items-center"}
                    ${!active && "justify-center"}
                  `}
      >
        <h3 className="text-sm sm:text-base font-semibold mb-1">{title}</h3>
        <p className={`text-xs sm:text-sm text-gray-600 ${active && "hidden"}`}>{shortDescription}</p>
        <div className={`text-xs sm:text-sm text-gray-600 ${!active && "hidden"}`}>{children}</div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const { ref } = useSectionInView("About");
  const [selectedId, setSelectedId] = useState<string|null>(null);
  const [activeImage, setActiveImage] = useState<string|null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  const openImage = (imageSrc: string) => {
    setActiveImage(imageSrc);
    toggleScrollLock(true);
  };

  const closeImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setActiveImage(null);
    toggleScrollLock(false);
  };

  const EnlargedImage = ({ src } : { src: string | null }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-50 z-[100] flex justify-center items-center cursor-pointer" onClick={closeImage}>
      <Image src={src} alt={src} className="w-[80vw] md:w-[60vw] max-h-[80vh] object-contain" width={1920} height={1080}/>
    </div>
  );
};

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
  }, []);


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
      <EnlargedImage src={activeImage} />
      <SectionHeading>About me</SectionHeading>
        <motion.ul className="grid grid-cols-1 gap-3 max-w-[60rem] w-full
                              grid-rows-[repeat(14,_1fr)] sm:grid-cols-[6fr_6fr_5fr] sm:grid-rows-4 lg:grid-cols-[3fr_2fr_2fr_3fr] lg:grid-rows-4"
        >
          <Card key="early-days" itemId="early-days" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-1 row-end-3"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                           active={selectedId === "early-days"}
                           image1={EarlyDay1} image2={EarlyDay2} image3={EarlyDay3} openImage={openImage}
                           title="My Early Days & Hackathons"
                           shortDescription={<>I started my tech adventure at 14 with digital marketing, quickly moved into front-end development, and finally found my calling in AI. My team's AI tool won second place at GameOfCode.eu, enhancing online classes with NLP and computer vision.</>}
            >
              My tech journey kicked off when I was 14, dabbling in digital marketing before shifting gears to front-end development. However, it was the magic of AI that truly captured my interest, particularly Machine Learning and Computer Vision. A standout moment early in my career was competing in the GameOfCode.eu hackathon. There, my team and I developed an AI program that significantly improved online learning through NLP and computer vision, landing us in a proud second place. This experience was more than a competition; it was a thrilling challenge that solidified my passion for AI.
            </ContentLayout>
          </Card>
          <Card key="education" itemId="education" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-3 row-end-5 h-64 sm:row-auto sm:col-start-2 sm:col-end-4 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          >
            <ContentLayout layout={isMobile ? "images-top" : "images-right"}
                           active={selectedId === "education"}
                           image1={University1} image2={University2} image3={University3} openImage={openImage}
                           title="BSc Computer Science"
                           shortDescription={<>Pursuing a BSc in Computer Science at University Carlos III of Madrid, with an AI specialization.</>}
            >
              I'm on the home stretch of my BSc in Computer Science at University Carlos III of Madrid, where I've honed my focus on AI.
            </ContentLayout>
          </Card>
          <Card key="self-education-personal-projects" itemId="self-education-personal-projects" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-5 row-end-7 sm:row-auto sm:col-start-2 sm:col-end-4 sm:row-start-2 lg:col-end-5 sm:aspect-[5/2]"
              customClassName=""
          > 
            <ContentLayout layout={isMobile ? "images-top" : "images-left"}
                           active={selectedId === "self-education-personal-projects"}
                           image1={SelfEducation1} image2={SelfEducation2} image3={SelfEducation3} openImage={openImage}
                           title="Self-Education & Personal Projects"
                           shortDescription={<>I'm always leveling up my skills with courses on ML, TensorFlow, and Swift, and putting theory to practice with projects like ‘RentMate’, an AI-driven tool for predicting rental prices.</>}
            >
              My thirst for knowledge doesn't stop at the classroom door. I've taken my learning into my own hands with courses covering Machine Learning, TensorFlow, Deep Learning, and Swift programming. My project ‘RentMate’ stands out as a practical application of my studies, offering AI-driven rental price predictions in Madrid. This project, built on an Explainable Transformer model, is a perfect example of my drive to bring AI solutions to real-world issues.
            </ContentLayout>
          </Card>
          <Card key="professional-experience" itemId="professional-experience" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-7 row-end-[9] sm:row-auto sm:row-start-3 sm:col-start-1 sm:col-end-3 lg:col-end-4 sm:aspect-[5/2]"
              customClassName=""
          >
            <ContentLayout layout={isMobile ? "images-top" : "images-left"}
                           active={selectedId === "professional-experience"}
                           image1={ProfessionalExp1} image2={ProfessionalExp2} image3={ProfessionalExp3} openImage={openImage}
                           title="Professional Experience"
                           shortDescription={<>I interned as a Generative AI Engineer at Vodafone and contributed to Meta’s PlayTorch, working on AI applications and adapting ML models for new platforms.</>}
            >
              In my professional path, I've been a Generative AI Engineer intern at Vodafone, where I was instrumental in developing innovative AI solutions, including a web-based chatbot based on a Retrieval Augmented Generation (RAG) model. I also contributed to Meta’s PlayTorch project, focusing on adapting ML models for Apple Silicon devices. These roles have sharpened my skills in AI, teamwork, and the ability to tackle tech challenges head-on.
            </ContentLayout>
          </Card>
          <Card key="volunteering" itemId="volunteering" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[9] row-end-[11] sm:row-start-3 sm:row-end-5"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                           active={selectedId === "volunteering"}
                           image1={Volunteering1} image2={Volunteering2} image3={Volunteering3} openImage={openImage}
                           title="Volunteering as Instructor on AI"
                           shortDescription={<>As a mentor with Saturdays.AI, I've taught Computer Vision, sharing my knowledge on Object Detection and Image Segmentation to inspire others.</>}
            >
              Volunteering as a Computer Vision mentor at Saturdays.AI has allowed me to give back by teaching Object Detection, Image Segmentation, and Autoencoders using OpenCV and Keras. This experience has been incredibly rewarding, allowing me to help demystify AI for enthusiasts and equip them with the skills to explore this dynamic field further.
            </ContentLayout>
          </Card>
          <Card key="hobbies" itemId="hobbies" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[11] row-end-[13] gap-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-end-2 sm:row-start-4 sm:row-span-1"
              customClassName=""
          >
            <ContentLayout layout="images-top"
                           active={selectedId === "hobbies"}
                           image1={Hobbies1} image2={Hobbies2} image3={Hobbies3} openImage={openImage}
                           title="Hobbies"
                           shortDescription={<>I love merging creativity with tech, making educational videos, and dabbling in graphic design for the web.</>}
            >
              When I'm not buried in code, I channel my creativity into making educational videos and exploring graphic design for the web. This blend of tech and art allows me to express ideas visually and engage with a broader audience, showcasing the fun and impactful side of technology.
            </ContentLayout>
          </Card>
          <Card key="sports" itemId="sports" handleCardClick={handleCardClick} selectedId={selectedId} handleCloseCard={handleCloseCard}
              gridClassName="grid row-start-[13] row-end-[15] sm:row-start-4 sm:row-end-4 sm:col-start-1 sm:col-end-2 lg:col-start-2 lg:col-end-4"
              customClassName=""    
          >
            <ContentLayout layout="images-top"
                           active={selectedId === "sports"}
                           image1={Sports1} image2={Sports2} image3={Sports3} openImage={openImage}
                           title="Sports"
                           shortDescription={<>I'm a former rugby player for the Asturias team and now a gym enthusiast, valuing physical fitness and the lessons learned from team sports.</>}
            >
              My sports journey began on the rugby field, playing for six years and representing the Asturias team. This experience taught me the importance of teamwork, discipline, and resilience. Nowadays, I keep active by hitting the gym, maintaining my physical health, and embodying the spirit of perseverance and strength I learned from rugby.
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
