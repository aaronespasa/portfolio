import React from "react";
import { CgTrophy, CgWorkAlt } from "react-icons/cg";
import { LiaHandshakeSolid, LiaCodeBranchSolid  } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import paintwallImg from "@/public/project/cover/paintwall.jpg";
import richiImg from "@/public/project/cover/research-buddy.png";
import rentmateImg from "@/public/project/cover/rentmate.png";
import deepfakeDetectionImg from "@/public/project/cover/deepfake-detection.png";
import imagecaptioningImg from "@/public/project/cover/image-captioning.png";
import computerVisionWebImg from "@/public/project/cover/computervision-web.png";
import thirdeyeImg from "@/public/project/cover/3rdeye.png";
import hospitalDatabaseImg from "@/public/project/cover/hospital-database.jpg";
import musicManagerImg from "@/public/project/cover/music-manager.png";
import backgroundRemovalImg from "@/public/project/cover/background-removal.png";
import review2ratingImg from "@/public/project/cover/review2rating.png";
import cppPathfindingImg from "@/public/project/cover/cpp-pathfinding.png";
import busRoutingSeatAllocationImg from "@/public/project/cover/bus-routing-seat-allocation.png";
import socketMessagingImg from "@/public/project/cover/socket-messaging.png";
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
    date: "September 2020",
  },
  {
    title: "GameOfCode.eu Competition",
    location: "Online",
    description: "Participated in the GameOfCode.eu competition, where my team and I developed an innovative AI tool that uses Computer Vision and NLP to enhance online learning experiences. Our project earned us second place, highlighting our ability to apply AI to solve real-world problems.",
    icon: React.createElement(CgTrophy), // Alternative icon for achievement
    date: "October 2020",
  },
  {
    title: "Meta PlayTorch Open Source Contributor",
    location: "Remote",
    description: "Contributed to Meta’s PlayTorch project, focusing on integrating ML models for Apple Silicon devices. My work involved creating an Android Virtual Device compatible with Apple's ARM CPU architecture, enabling seamless execution on the latest Macs, and solving a challenging quantization runtime error.",
    icon: React.createElement(LiaCodeBranchSolid), // GiBrain for innovative/technical contribution
    date: "October 2020 - February 2021",
  },
  {
    title: "Volunteering at Saturdays.AI",
    location: "Madrid, Spain",
    description: "Volunteered as a mentor at Saturdays.AI, teaching Computer Vision. I conducted courses on Object Detection, Image Segmentation, and Autoencoders, using OpenCV and Keras. This experience allowed me to share my passion for AI and empower others to explore the field of Computer Vision.",
    icon: React.createElement(LiaHandshakeSolid), // Alternative icon for volunteering
    date: "October 2022 - June 2023",
  },
  {
    title: "Internship at Vodafone",
    location: "Madrid, Spain",
    description: "Interned as a Generative AI Engineer at Vodafone, where I contributed to developing a web-based chatbot utilizing Retrieval-augmented Generation (RAG) for the Innovation Team. Also developed a platform using React.js and NextJS for showcasing AI proof of concepts, significantly enhancing cross-departmental collaboration.",
    icon: React.createElement(CgWorkAlt), // CgWorkAlt for work experience
    date: "June 2023 - November 2023",
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
  },
  {
    name: "Alejandra Galán",
    linkedin: "https://www.linkedin.com/in/alejandragalanarrospide/",
    imageName: "alejandra-galan.jpeg"
  },
  {
    name: "Pablo Brasero",
    linkedin: "https://www.linkedin.com/in/pablo-brasero-mart%C3%ADnez-762036230/",
    imageName: "pablo-brasero.jpeg"
  },
  {
    name: "Alicia Benitez",
    linkedin: "https://www.linkedin.com/in/alicia-benitez-rogero/",
    imageName: "alicia-benitez.jpeg"
  },
  {
    name: "Beatriz Encinas",
    linkedin: "https://www.linkedin.com/in/beatriz-encinas-mu%C3%B1oz-94563b25a/?originalSubdomain=es",
    imageName: "beatriz-encinas.jpeg"
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
    category: ["ml", "web"],
    date: null,
    score: 8.5,
    imageUrl: rentmateImg,
    links: [
      {
        name: "Final Presentation",
        type: "slides",
        url: "https://docs.google.com/presentation/d/1iX2sl1EIguJj9X55h2rbCo0Ht9UHiEgPxZzctHjxNrc/edit?usp=sharing"
      },
      {
        name: "Report",
        type: "docs",
        url: "https://drive.google.com/file/d/1eAVE6BUB9JOWOutZEYEuPSHTp7kjpckd/view?usp=sharing"
      }
    ]
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
    title: "Review2Rating",
    slug: "review2rating",
    description: "Classification model to predict the rating of a hotel review based on its text. Also, topic modeling to extract the main topics of the reviews.",
    skills: ["Scikit-learn", "PyTorch", "Python", "Embeddings", "LDA"],
    category: ["ml"],
    tags: ["Natural Language Processing", "Text Classification", "Topic Modeling", "Machine Learning"],
    contributors: ["Dario Caballero", "Carlos Iborra", "Martin Shao"],
    date: "Oct. 2023",
    score: 7,
    imageUrl: review2ratingImg,
    links: [
      {
        name: "Code",
        type: "github",
        url: "https://github.com/aaronespasa/review2rating/tree/main"
      },
      {
        name: "Report",
        type: "docs",
        url: "https://docs.google.com/document/d/11G-zlRtPlRLZZMMHvw2uR9mkDpbsgWtf14JoerHN5rE/edit?usp=sharing"
      }
    ]
  },
  {
    title: "Background Removal",
    slug: "videoconferencing-background-removal",
    description: "Background removal model for videoconferencing using computer vision (U-Net). I presented this challenge to my students in the Saturdays.AI course.",
    skills: ["Keras", "OpenCV", "Matplotlib", "Python"],
    category: ["ml"],
    tags: ["Deep Learning", "Computer Vision", "Image Segmentation"],
    contributors: [],
    date: "April 2023",
    score: 7,
    imageUrl: backgroundRemovalImg,
    links: [
      {
        name: "Google Colab",
        type: "web",
        url: "https://drive.google.com/file/d/1Sx1zC2aDpvToIVgeXpyYzRlYr5PqyU0y/view?usp=sharing"
      }
    ]
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
    links: [
      {
        name: "Code",
        type: "github",
        url: "https://github.com/aaronespasa/image-captioning-pytorch"
      }
    ]
  },
  {
    title: "Music Manager",
    slug: "music-manager",
    description: "NoSQL database using MongoDB for implementation & clustering optimization of a database of artists and concerts",
    skills: ["MongoDB", "Database Design", "Database Optimization", "ETL Pipelines"],
    category: ["db"],
    tags: ["Non-Relational Database", "MongoDB", "Data Engineering", "ETL", "Business Intelligence"],
    contributors: ["Carlos Iborra", "Pablo Brasero"],
    date: "Nov. 2023",
    score: 7,
    imageUrl: musicManagerImg,
    links: [
      {
        name: "Database Design",
        type: "docs",
        url: "https://docs.google.com/document/d/1MDTuH1Pf6yBw7OS5Xsl9rU3L1HnlTu7mL2VB63VbBLo/edit?usp=sharing"
      },
      {
        name: "Aggregation Pipelines",
        type: "docs",
        url: "https://docs.google.com/document/d/1vfqow1OlJ_JRD8OfklBDcFHRKsz2wmJv30WyifIzCtQ/edit?usp=sharing"
      },
      {
        name: "Database Optimization",
        type: "docs",
        url: "https://docs.google.com/document/d/12MUyneA9MDr9n1EF_KLiVCsfxo5jXvUe9w8tt5D834Y/edit?usp=sharing"
      }
    ]
  },
  {
    title: "Hospital Database",
    slug: "hospital-database",
    description: "Relational database implemented using PL/SQL for managing the information of a hospital",
    skills: ["PL/SQL", "Database Design", "Database Optimization"],
    category: ["db"],
    tags: ["Relational Database", "Oracle", "Business Intelligence"],
    contributors: ["Alicia Benitez", "Beatriz Encinas"],
    date: "Dec. 2021",
    score: 6,
    imageUrl: hospitalDatabaseImg,
    links: [
      {
        name: "Relational Design",
        type: "docs",
        url: "https://docs.google.com/document/d/1nFwI3zyXZ-Eev58KdtvB4_fi3sF2FWA12FWVIkMMLf0/edit?usp=sharing"
      },
      {
        name: "Physical Design",
        type: "docs",
        url: "https://docs.google.com/document/d/16tgyfjsu_9J0ok5J--WuzUR5-FbclTpmIXTv8hfCJVo/edit?usp=sharing"
      }
    ]
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
    score: 7.5,
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
    title: "A* Pathfinding (C++)",
    slug: "cpp-pathfinding",
    description: "C++ implementation of the A* pathfinding algorithm to find the shortest path between two points in a real map (OpenStreetMap).",
    skills: ["C++", "CMake", "OpenStreetMap", "IO2D"],
    category: ["se"],
    tags: ["A*", "Pathfinding", "C++", "Software Engineering"],
    contributors: [],
    date: "Nov. 2021",
    score: 6,
    imageUrl: cppPathfindingImg,
    links: [
      {
        name: "Code",
        type: "github",
        url: "https://github.com/aaronespasa/a-star-openstreetmap"
      }
    ]
  },
  {
    title: "Bus Routing & Seat Allocation",
    slug: "bus-routing-seat-allocation",
    description: "Heuristic algorithm to solve the bus routing and seat allocation problem, a constraint satisfaction problem.",
    skills: ["CSP", "Heuristics", "GLPK", "Python"],
    category: ["se"],
    tags: ["Constraint Satisfaction Problem", "Heuristics", "Python", "Software Engineering"],
    contributors: ["Alejandra Galán"],
    date: "Dec. 2022",
    score: 7,
    imageUrl: busRoutingSeatAllocationImg,
    links: [
      {
        name: "Routing Report",
        type: "docs",
        url: "https://github.com/aaronespasa/school-bus-routing/blob/main/memoria.pdf"
      },
      {
        name: "Routing Code",
        type: "github",
        url: "https://github.com/aaronespasa/school-bus-routing"
      },
      {
        name: "Seat Allocation Report",
        type: "docs",
        url: "https://docs.google.com/document/d/1dGVMB9b-ZCTQVqUaY_WWxGuTT5FJPuPX-BpRtbzJ_F0/edit?usp=sharing"
      },
      {
        name: "Seat Allocation Code",
        type: "github",
        url: "https://github.com/aaronespasa/bus-seat-allocator"
      }
    ]
  },
  {
    title: "Socket Messaging (C)",
    slug: "socket-messaging",
    description: "C implementation of a socket messaging system to connect multiple Python clients.",
    skills: ["Sockets", "Concurrency", "Message Queues", "ONC RPC", "C", "Python"],
    category: ["se"],
    tags: ["Distributed Systems", "Sockets", "Concurrency", "Software Engineering"],
    contributors: ["Carlos Iborra"],
    date: "May. 2023",
    score: 7.4,
    imageUrl: socketMessagingImg,
    links: [
      {
        name: "Final Code",
        type: "github",
        url: "https://github.com/carlosiborra/message-delivery-python-c"
      },
      {
        name: "Final Report",
        type: "docs",
        url: "https://docs.google.com/document/d/1eI2oRmAHI5H105Dr_Mhst8QQwPvzUa_mcYSC9p9TAkc/edit?usp=sharing"
      },
      {
        name: "Interprocess Comm. Code",
        type: "github",
        url: "https://github.com/aaronespasa/interprocess-communications-in-c"
      },
      {
        name: "Message Queues Report",
        type: "docs",
        url: "https://docs.google.com/document/d/18r3jC-4a1qWiX-vDXpaoVsuuLGTmQ_d3OG2rrDwYU8A/edit?usp=sharing"
      },
      {
        name: "Socket Messaging Report",
        type: "docs",
        url: "https://docs.google.com/document/d/1eS8CoeJEzFLzSCLLI-1r9f5Aj0wcK8CgheUv8ZkX0IQ/edit?usp=sharing"
      },
      {
        name: "ONC RPC Report",
        type: "docs",
        url: "https://docs.google.com/document/d/1u6b-ps0ORuEGtf15gwOqfJ7ZNtexCErXlFpiKg6ZTeE/edit?usp=sharing"
      }
    ]
  },
  {
    title: "Computer Vision Hispano",
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
