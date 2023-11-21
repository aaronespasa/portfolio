import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paintwallImg from "@/public/project/cover/paintwall.jpg";
import richiImg from "@/public/project/cover/richi.png";
import rentmateImg from "@/public/project/cover/rentmate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UC3M: First Year of Computer Science",
    location: "Madrid, Spain",
    description:
      "I started studying Computer Science at University Carlos III of Madrid.",
    icon: React.createElement(LuGraduationCap), // CgWorkAlt
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "PaintWall",
    description:
      "Mobile application to colorize walls using augmented reality.",
    tags: ["PyTorch", "C++", "Swift", "Python"],
    inProgress: true,
    imageUrl: paintwallImg,
  },
  {
    title: "Vodafone's RAG Model",
    description:
      "Vodafone's Innovation Team Chatbot to help researchers find information about their projects.",
    tags: ["React", "NextJS 13", "Langchain", "AWS", "Python", "Flask"],
    inProgress: false,
    imageUrl: richiImg
  },
  {
    title: "RentMate",
    description:
      "Regression model based on transformers with explainability to predict the price of a house.",
    tags: ["React", "NextJS 13", "PyTorch", "AWS"],
    inProgress: true,
    imageUrl: rentmateImg
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
