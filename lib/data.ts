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
import thirdeyeImg from "@/public/project/cover/3rdeye.png";
import { GoHome, GoPerson, GoCodeSquare, GoTools, GoBriefcase, GoComment } from "react-icons/go";
import { FiGithub, FiYoutube, FiGlobe, FiFileText, FiPlay   } from "react-icons/fi";

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

export const contributorsInfo = [
  {
    name: "Dario Caballero",
    linkedin: "https://www.linkedin.com/in/dario-caballero/",
    imageName: "dario-caballero.png"
  },
  {
    name: "Carlos Iborra",
    linkedin: "https://www.linkedin.com/in/carlos-iborra/",
    imageName: "carlos-iborra.jpg"
  },
  {
    name: "Martin Shao",
    linkedin: "https://www.linkedin.com/in/martin-shao-he-55828a208/",
    imageName: "martin-shao.jpg"
  },
  {
    name: "Alejandro García",
    linkedin: "https://www.linkedin.com/in/alejandro-garc%C3%ADa-330199284/",
    imageName: "alejandro-garcia.jpg"
  },
  {
    name: "Lucas Gallego",
    linkedin: "https://www.linkedin.com/in/lucas-gallego-bravo-0a6a47238/",
    imageName: "lucas-gallego.jpg"
  },
  {
    name: "Juan Jaraices",
    linkedin: "https://www.linkedin.com/in/juan-jaraices/",
    imageName: "juan-jaraices.jpg"
  },
  {
    name: "Eva Fonseca",
    linkedin: "https://www.linkedin.com/in/evafonsecalopez/",
    imageName: "eva-fonseca.jpg"
  },
  {
    name: "Laura Segura",
    linkedin: "https://www.linkedin.com/in/laura-segura-mayordomo/",
    imageName: "laura-segura.jpg"
  },
  {
    name: "Carlos Herrera",
    linkedin: "https://www.linkedin.com/in/carlos-herrera-d%C3%ADaz-308bb8169/",
    imageName: "carlos-herrera.jpg"
  },
  {
    name: "David Vargas",
    linkedin: "https://www.linkedin.com/in/david-vargas-frutos/",
    imageName: "david-vargas.jpg"
  },
  {
    name: "Irene Salvador",
    linkedin: "https://www.linkedin.com/in/irene-salvador-ortega/",
    imageName: "irene-salvador.jpg"
  },
  {
    name: "Jorge González",
    linkedin: "https://www.linkedin.com/in/jorgegonz%C3%A1lezsierra94/",
    imageName: "jorge-gonzalez.jpg"
  }
]

export const linkTypes = [
  {
    type: "web",
    icon: React.createElement(FiGlobe),
  },
  {
    type: "youtube",
    icon: React.createElement(FiYoutube),
  },
  {
    type: "github",
    icon: React.createElement(FiGithub),
  },
  {
    type: "docs",
    icon: React.createElement(FiFileText),
  },
  {
    type: "slides",
    icon: React.createElement(FiPlay),
  }
]

export const projectsData = [
  {
    title: "PaintWall",
    slug: "paintwall",
    description:
      "Mobile application to colorize walls using augmented reality.",
    skills: ["PyTorch", "C++", "Swift", "Python"],
    category: ["ml"],
    tags: ["Deep Learning", "Computer Vision", "Augmented Reality"],
    contributors: [],
    date: null,
    score: 8,
    imageUrl: paintwallImg,
    links: []
  },
  {
    title: "Research Buddy",
    slug: "research-buddy",
    description:
      "Vodafone's RAG Model (Chatbot) to help researchers find information about their projects.",
    skills: ["React", "NextJS 13", "Langchain", "AWS", "Python", "Flask"],
    category: ["web"],
    tags: ["Natural Language Processing", "Chatbot", "LLM"],
    contributors: ["Juan Jaraices", "Eva Fonseca", "Laura Segura", "Carlos Herrera", "David Vargas", "Irene Salvador"],
    date: "Sept. 2023",
    score: 9,
    imageUrl: richiImg,
    links: []
  },
  {
    title: "RentMate",
    slug: "rentmate",
    description:
      "Regression model based on transformers with explainability to predict the price of a house.",
    skills: ["React", "NextJS 13", "PyTorch", "AWS"],
    tags: ["Deep Learning", "Multimodal Transformers", "Explainability"],
    contributors: ["Dario Caballero", "Carlos Iborra", "Martin Shao"],
    category: ["web"],
    date: null,
    score: 7,
    imageUrl: rentmateImg,
    links: []
  },
  {
    title: "DeepFake Detection",
    slug: "deepfake-detection",
    description:
      "DeepFake detection model based on an image classifier with explainability.",
    skills: ["PyTorch", "Python"],
    category: ["ml"],
    tags: ["Deep Learning", "Computer Vision", "DeepFakes", "Explainability"],
    contributors: ["Jorge González"],
    score: 6,
    date: "June 2022",
    imageUrl: deepfakeDetectionImg,
    links: []
  },
  {
    title: "Image Captioning",
    slug: "image-captioning",
    description:
      "Image captioning model (CNN + RNN) to help blind people understand images on the internet.",
    skills: ["PyTorch", "Python"],
    category: ["ml"],
    tags: ["Deep Learning", "Computer Vision", "Natural Language Processing"],
    contributors: [],
    date: "May 2021",
    score: 4.5,
    imageUrl: imagecaptioningImg,
    links: []
  },
  {
    title: "3rdEye",
    slug: "3rdeye",
    description: "Detailed software development and planning report for a computer vision project to help firefighters.",
    skills: ["Budgeting and Financial Management", "Software Config. Management Plan", "Requirements Engineering", "Software Design" ],
    category: ["se"],
    tags: ["Project Management", "Software Engineering"],
    contributors: ["Dario Caballero", "Carlos Iborra", "Martin Shao", "Alejandro García", "Lucas Gallego"],
    date: "Dec. 2023",
    score: 6,
    imageUrl: thirdeyeImg,
    links: [
      {
        name: "Detailed Report",
        type: "docs",
        url: "https://docs.google.com/document/d/1Gs_-gDckq7wMyoTev-PT6WchvgvDka1z2Huwnm9spGk/edit?usp=sharing"
      },
      {
        name: "Final Presentation",
        type: "slides",
        url: "https://docs.google.com/presentation/d/1OdQFZlliFOKrpBcC2GztmmLslKF_LiYt5U-87PS0WqQ/edit?usp=sharing"
      },
      {
        name: "Technical Presentation",
        type: "slides",
        url: "https://docs.google.com/presentation/d/1nUZp2NcR_f2dKZqK3i13R1tYwzvCz03AW9nOQBNuGl0/edit?usp=sharing"
      },
      {
        name: "Economic Presentation",
        type: "slides",
        url: "https://docs.google.com/presentation/d/1dNCr0h4B1W8-w5jlsJplBeFec8iN216IQonUtudr1Zk/edit?usp=sharing"
      }
    ]
  },
  {
    title: "Computer Vision Web",
    slug: "computer-vision-web",
    description: "E-learning platform to learn about computer vision.",
    skills: ["React", "NextJS 13", "PostgreSQL", "Python", "Django"],
    category: ["web"],
    tags: ["Full Stack", "DB Modeling", "UI/UX Design"],
    contributors: [],
    date: null,
    score: 8,
    imageUrl: computerVisionWebImg,
    links: []
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
