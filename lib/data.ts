import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paintwallImg from "@/public/project/cover/paintwall.jpg";
import richiImg from "@/public/project/cover/richi.png";
import rentmateImg from "@/public/project/cover/rentmate.png";
import deepfakeDetectionImg from "@/public/project/cover/deepfake-detection.png";
import imagecaptioningImg from "@/public/project/cover/image-captioning.png";
import computerVisionWebImg from "@/public/project/cover/computervision-web.png";

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

export const OPTIONS = ["all", "ml", "db", "se", "web"] as const;

export const projectsData = [
  {
    title: "PaintWall",
    slug: "paintwall",
    description:
      "Mobile application to colorize walls using augmented reality.",
    tags: ["PyTorch", "C++", "Swift", "Python"],
    category: ["ml"],
    // puntuation, date
    score: 8,
    imageUrl: paintwallImg,
  },
  {
    title: "Research Buddy",
    slug: "research-buddy",
    description:
      "Vodafone's RAG Model (Chatbot) to help researchers find information about their projects.",
    tags: ["React", "NextJS 13", "Langchain", "AWS", "Python", "Flask"],
    category: ["web"],
    score: 9,
    date: "Sept. 2023",
    imageUrl: richiImg
  },
  {
    title: "RentMate",
    slug: "rentmate",
    description:
      "Regression model based on transformers with explainability to predict the price of a house.",
    tags: ["React", "NextJS 13", "PyTorch", "AWS"],
    category: ["web"],
    score: 7,
    imageUrl: rentmateImg
  },
  {
    title: "DeepFake Detection",
    slug: "deepfake-detection",
    description:
      "DeepFake detection model based on an image classifier with explainability.",
    tags: ["PyTorch", "Python"],
    category: ["ml"],
    score: 6,
    date: "June 2022",
    imageUrl: deepfakeDetectionImg
  },
  {
    title: "Image Captioning",
    slug: "image-captioning",
    description:
      "Image captioning model (CNN + RNN) to help blind people understand images on the internet.",
    tags: ["PyTorch", "Python"],
    category: ["ml"],
    score: 4.5,
    date: "May 2021",
    imageUrl: imagecaptioningImg
  },
  {
    title: "Computer Vision Web",
    slug: "computer-vision-web",
    description: "E-learning platform to learn about computer vision.",
    tags: ["React", "NextJS 13", "Prisma", "PostgreSQL", "Python", "Django"],
    category: ["web"],
    score: 8,
    imageUrl: computerVisionWebImg
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
