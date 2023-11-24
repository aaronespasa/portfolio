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
import { GoHome, GoPerson, GoCodeSquare, GoTools, GoBriefcase, GoComment } from "react-icons/go";

export const links = [
  {
    name: "Home",
    hash: "/#home",
    icon: React.createElement(GoHome),
  },
  {
    name: "About",
    hash: "/#about",
    icon: React.createElement(GoPerson),
  },
  {
    name: "Projects",
    hash: "/#projects",
    icon: React.createElement(GoCodeSquare),
  },
  {
    name: "Skills",
    hash: "/#skills",
    icon: React.createElement(GoTools),
  },
  {
    name: "Experience",
    hash: "/#experience",
    icon: React.createElement(GoBriefcase),
  },
  {
    name: "Contact",
    hash: "/#contact",
    icon: React.createElement(GoComment),
  }
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

export const projectCategories = ["ml", "db", "se", "web"] as const;

export const projectsData = [
  {
    title: "PaintWall",
    slug: "paintwall",
    description:
      "Mobile application to colorize walls using augmented reality.",
    tags: ["PyTorch", "C++", "Swift", "Python"],
    category: ["ml"],
    date: null,
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
    date: "Sept. 2023",
    score: 9,
    imageUrl: richiImg
  },
  {
    title: "RentMate",
    slug: "rentmate",
    description:
      "Regression model based on transformers with explainability to predict the price of a house.",
    tags: ["React", "NextJS 13", "PyTorch", "AWS"],
    category: ["web"],
    date: null,
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
    date: "May 2021",
    score: 4.5,
    imageUrl: imagecaptioningImg
  },
  {
    title: "Computer Vision Web",
    slug: "computer-vision-web",
    description: "E-learning platform to learn about computer vision.",
    tags: ["React", "NextJS 13", "PostgreSQL", "Python", "Django"],
    category: ["web"],
    date: null,
    score: 8,
    imageUrl: computerVisionWebImg
  }
];

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js 13",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "PL/SQL",
  "Redux",
  "Python",
  "Django",
  "Docker",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "AWS",
  "Digital Ocean",
  "C++",
  "OpenMP",
  "Swift"
] as const;
