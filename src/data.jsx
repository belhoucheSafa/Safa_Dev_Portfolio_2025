import {
  FaPaintBrush,
  FaCode,
  FaProjectDiagram,
  FaRobot,
  FaBrain,
  FaNetworkWired,
} from "react-icons/fa";

import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import {
  project1,
  BluePapilio__Project,
  BridgeConnect__Project,
  MezoughiDash_Project,
  MezoughiLanding_Project,
  RefineGaming_Project,
  Splyt_Project,
  StockManagement_Project,
  Coffee_Project,
  Donuts_Project,
  McLaren_Project,
  PolySchool_Project,
  PolyPSC_Project,
  HeartDisease_ML_Project,
  CaliforniaHousePrice_ML_Project,
  DiabeticPrediction_ML_Project,
  GoldPricePrediction_ML_Project,
  MallCustomerSegmentation_ML_Project,
  SonarRock_ML_Project,
  MovieRecommendation_ML_Project,
  BigMartSalesPrediction_ML_Project,
  tailwind,
  react,
  emailicon,
  messengericon,
  whatsappicon,
  mongodb,
  nodejs,
  jwt,
  apex,
  gsap,
  scss,
  expo,
  python,
  django,
  threejs,
  shadcn,
  sqlite,
  typescript,
  css,
  html,
  figma,
} from "./assets";

import MezoughiLandingPage from "./assets/projectsDemos/MezoughiLandingPage.mp4";
import MezoughiDashRecord from "./assets/projectsDemos/MezoughiDashRecord.mp4";
import SplytProteinLanding from "./assets/projectsDemos/SplytProject.mp4";
import StockManagementApp from "./assets/projectsDemos/StockManagementApp.mp4";
import RefineGaming from "./assets/projectsDemos/RefineGamingLanding.mp4";
import BluePapilio from "./assets/projectsDemos/DjangoBluePapilio.mp4";
import BridgeEd from "./assets/projectsDemos/BridgeEdProject.mp4";
import StockManagementAppMobile from "./assets/projectsDemos/StockManagementAppMobile.mp4";
import McLaren from "./assets/projectsDemos/McLaren.mp4";
import CoffeeAnimation from "./assets/projectsDemos/CoffeeAnimation.mp4";
import DonutsAnimation from "./assets/projectsDemos/Donuts.mp4";
import PolySchool from "./assets/projectsDemos/PolySchoolProject.mp4";
import PolyPSC from "./assets/projectsDemos/PSCProject.mp4";
export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Education & Experience" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI / UX Design",
    color: "#2563eb",
    colorRGB: "37, 99, 235",
    icon: <FaPaintBrush />,
    description: `As a software engineering student, I design intuitive and engaging interfaces. 
                  From wireframes to polished prototypes, I focus on user-centric designs 
                  that combine creativity and functionality, ensuring seamless experiences across all platforms.`,
  },
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `I build responsive and high-performance applications using modern technologies.
                  My work covers everything from frontend to backend, 
                  creating scalable, maintainable, and efficient solutions for real-world problems.`,
  },
  {
    title: "Project Conception",
    icon: <FaProjectDiagram />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I am involved in the full lifecycle of software projects, including planning, 
                  architecture design, and implementation. I ensure that ideas are transformed 
                  into practical and robust solutions that meet technical and business requirements.`,
  },
  {
    title: (
      <>
        AI & Machine Learning <br />& Deep Learning
      </>
    ),
    icon: <FaBrain />,
    color: "#7ec8e3",
    colorRGB: "126, 200, 227",
    description: `I develop intelligent solutions using AI and ML models to solve complex problems. 
                From predictive analytics to recommendation systems, I apply state-of-the-art algorithms 
                to extract insights and automate decision-making processes.`,
  },
  {
    title: "Intelligent Agents Integration",
    icon: <FaRobot />,
    color: "#7b54ee",
    colorRGB: "123, 84, 238",
    description: `I integrate AI agents into web applications to enhance automation, user interaction, 
                  and personalization. These agents can handle tasks, provide recommendations, 
                  and communicate naturally with users, bridging AI with real-world applications.`,
  },
  {
    title: "Data & AI Pipelines",
    icon: <FaNetworkWired />,
    color: "#10b981",
    colorRGB: "16, 185, 129",
    description: `I design and implement robust data pipelines and workflows for AI projects. 
                  This includes data collection, preprocessing, model training, deployment, 
                  and monitoring to ensure scalable and reliable AI-powered applications.`,
  },
];

export const projects = [
  {
    title: "Recycling Plastic Landing Page",
    image: MezoughiLanding_Project,
    category: "Landing Page",
    description: `A modern, fully designed landing page for a recycling plastic business. The business collects plastic bottles from suppliers and transforms them into multiple types of granules. The landing page features a unique design with smooth pastel colors, 3D icons, and custom images. I handled the full UI/UX design.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "SCSS", logo: scss },
    ],
    video: MezoughiLandingPage,
    projectCode: `
const project = {
  name: "Recycling Plastic Landing Page",
  description: \`A modern, fully designed landing page for a recycling plastic business. The business collects plastic bottles from suppliers and transforms them into multiple types of granules. The landing page features a unique design with smooth pastel colors, 3D icons, and custom images. I handled the full UI/UX design.\`,
  tasks: [
    "Full UI/UX design",
    "3D icons and images",
    "Landing page implementation",
  ],
  notes: () => {
    // Smooth pastel colors
    // Unique modern design
    // Fully responsive
  }
};
    `,
  },
  {
    title: "Recycling Plastic Admin Platform",
    image: MezoughiDash_Project,
    category: "Web App | Platform",
    description: `A platform for managing the recycling business operations. Built with React, Node.js, MongoDB, JWT authentication, ApexCharts, and SCSS. The system manages admins, employees, suppliers, orders, and products securely with full CRUD functionality.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodejs },
      { name: "MongoDB", logo: mongodb },
      { name: "JWT", logo: jwt },
      { name: "ApexCharts", logo: apex },
      { name: "SCSS", logo: scss },
    ],
    video: MezoughiDashRecord,
    projectCode: `
const project = {
  name: "Recycling Plastic Admin Platform",
  description: \`A platform for managing the recycling business operations. Built with React, Node.js, MongoDB, JWT authentication, ApexCharts, and SCSS. The system manages admins, employees, suppliers, orders, and products securely with full CRUD functionality.\`,
  tasks: [
    "Admin, employees, clients, orders, suppliers, stock and products management",
    "Orders and products CRUD",
    "Secure login with JWT",
    "Dashboard with ApexCharts",
  ],
  notes: () => {
    // Secure authentication
    // Full CRUD
    // Dashboard analytics
  }
};
    `,
  },
  {
    title: "Splyt Protein Landing Page",
    image: Splyt_Project,
    category: "Landing Page",
    description: `A highly modern landing page for Splyt Protein, a fizzy beverage. Built with React, TailwindCSS, and GSAP. Every section includes smooth modern animations, 3D effects, and interactive elements. This project was my first time using GSAP, and I applied it while learning in a Three.js + GSAP bootcamp.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "TailwindCSS", logo: tailwind },
      { name: "GSAP", logo: gsap },
    ],
    video: SplytProteinLanding,
    projectCode: `
const project = {
  name: "Splyt Protein Landing Page",
  description: \`A highly modern landing page for Splyt Protein, a fizzy beverage. Built with React, TailwindCSS, and GSAP. Every section includes smooth modern animations, 3D effects, and interactive elements. This project was my first time using GSAP, and I applied it while learning in a Three.js + GSAP bootcamp.\`,
  tasks: [
    "GSAP animations for all sections",
    "3D effects and interactive design",
    "TailwindCSS responsive implementation",
  ],
  notes: () => {
    // First GSAP project
    // Modern animations applied
    // Interactive UX
  }
};
    `,
  },
  {
    title: "RefineGaming Landing Page",
    image: RefineGaming_Project,
    category: "Landing Page",
    description: `A modern animated gaming-themed landing page. Built with GSAP and Three.js for immersive 3D effects and animations, styled with TailwindCSS and shadcn. Inspired by my Splyt Protein project, this one pushes interactivity even further for a futuristic gaming feel.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "TailwindCSS", logo: tailwind },
      { name: "GSAP", logo: gsap },
      { name: "Three.js", logo: threejs },
    ],
    video: RefineGaming,
    projectCode: `
const project = {
  name: "RefineGaming Landing Page",
  description: \`A modern animated gaming-themed landing page. Built with GSAP and Three.js for immersive 3D effects and animations, styled with TailwindCSS and shadcn. Inspired by my Splyt Protein project, this one pushes interactivity even further for a futuristic gaming feel.\`,
  tasks: [
    "GSAP-driven animations",
    "Three.js immersive 3D visuals",
    "Responsive gaming theme with TailwindCSS + shadcn",
  ],
  notes: () => {
    // Gaming-inspired UI
    // Advanced GSAP + Three.js
    // Modern futuristic feel
  }
};
    `,
  },
  {
    title: "Stock Management App (Web + Mobile)",
    image: StockManagement_Project,
    category: "Web & Mobile App",
    description: `A complete stock management system with both web and mobile apps. The web app provides CRUD operations, role-based access (admins & technicians), stock alerts, and preventive maintenance planning for machines. Technicians can scan QR codes of articles and machines to update stock in real time. The mobile app (built with Expo) integrates seamlessly with the web backend.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodejs },
      { name: "JWT", logo: jwt },
      { name: "Expo (React Native)", logo: expo },
    ],
    video: StockManagementApp,
    mobileVideo: StockManagementAppMobile,
    projectCode: `
const project = {
  name: "Stock Management App (Web + Mobile)",
  description: \`A complete stock management system with both web and mobile apps. The web app provides CRUD operations, role-based access (admins & technicians), stock alerts, and preventive maintenance planning for machines. Technicians can scan QR codes of articles and machines to update stock in real time. The mobile app (built with Expo) integrates seamlessly with the web backend.\`,
  tasks: [
    "Web app: CRUD, role-based access, preventive maintenance planning",
    "Mobile app: QR scanning with live stock updates",
    "Notifications for low stock & machine alerts",
  ],
  notes: () => {
    // Real-time QR sync
    // Web + mobile integration
    // Preventive maintenance
  }
};
    `,
  },
  {
    title: "BluePapilio Aesthetic Shop",
    image: BluePapilio__Project,
    category: "Django Web App",
    description: `BluePapilio is a modern e-commerce platform for aesthetic and specialized articles. Built with Django and SQLite, it provides admin and client access, product management, and a highly aesthetic landing page tailored for design-focused audiences.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "Python", logo: python },
      { name: "Django", logo: django },
      { name: "SQLite", logo: sqlite },
      { name: "Html", logo: html },
      { name: "Css", logo: css },
    ],
    video: BluePapilio,
    projectCode: `
const project = {
  name: "BluePapilio Aesthetic Shop",
  description: \`BluePapilio is a modern e-commerce platform for aesthetic and specialized articles. Built with Django and SQLite, it provides admin and client access, product management, and a highly aesthetic landing page tailored for design-focused audiences.\`,
  tasks: [
    "Modern landing page UI",
    "Admin & client role-based access",
    "Products CRUD",
  ],
  notes: () => {
    // Highly aesthetic design
    // Lightweight Django app
    // Full e-commerce flow
  }
};
    `,
  },
  {
    title: "BridgeEd (BridgeCare Prototype)",
    image: BridgeConnect__Project,
    category: "Mobile App | PSC Project",
    description: `BridgeEd is a web-based prototype I personally designed and initiated to support seniors with Alzheimer’s through cognitive stimulation. It provides a clear, accessible interface, a set of categorized games to enhance memory and attention, and a monitoring space for caregivers to follow progress and habits. Developed within my academic PSC, BridgeEd reflects both technical expertise and a commitment to social innovation, highlighting my ownership of the concept and design.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "TypeScript", logo: typescript },
      { name: "Node.js", logo: nodejs },
      { name: "MongoDB", logo: mongodb },
      { name: "shadcn", logo: shadcn },
    ],
    video: BridgeEd,
    projectCode: `
const project = {
  name: "BridgeEd (BridgeCare Prototype)",
  description: \`BridgeEd (BridgeCare) is my personal idea and prototype: a mobile application to assist seniors with Alzheimer’s through cognitive stimulation games. The app offers tailored interfaces for seniors, categorized games to train memory and attention, and monitoring tools for caregivers to track progress. It’s a social-innovation project designed and owned by me as part of my academic PSC, combining technical skills with social impact.\`,
  tasks: [
    "Cognitive stimulation games for seniors",
    "Senior-friendly UI",
    "Caregiver progress monitoring dashboard",
  ],
  notes: () => {
    // My own original concept
    // Academic PSC project
    // Social impact driven
  }
};
    `,
  },

  {
    title: "PolySchool – Web School Platform",
    image: PolySchool_Project,
    category: "Web App | PFE Project",
    description: `PolySchool is a large-scale web application developed as my final-year (PFE) project in Business Intelligence. Built with the MERN stack, it provides a full digital ecosystem for schools: student management, staff and teacher portals, payments, courses, classes, department structures, certifications, community spaces, and LMS-like features. I handled everything end-to-end, from need identification and conception to UI/UX design and full coding over 9 months.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodejs },
      { name: "MongoDB", logo: mongodb },
      { name: "JWT", logo: jwt },
      { name: "ApexCharts", logo: apex },
    ],
    video: PolySchool,
    projectCode: `
const project = {
  name: "PolySchool – Web School Platform",
  description: \`PolySchool is a large-scale MERN web application for school management. It handles students, staff, courses, payments, certifications, community spaces, and LMS features. Developed end-to-end over 9 months, from conception to full coding and UI/UX design.\`,
  tasks: [
    "End-to-end project ownership (needs → conception → design → code)",
  ],
  notes: () => {
    // 9 months development
    // Full MERN stack
    // Business Intelligence focus
    // Real-world school ecosystem
  }
};
  `,
  },

  {
    title: "PSC Management Platform",
    image: PolyPSC_Project,
    category: "Projet socio-culturel",
    description: `A web platform to centralize the management of the PSC (Projet socio-culturel) program for first-year engineering students. Built with React.js and Node.js, it automates team formation, project tracking, tutor assignments, deliverable validation, and provides dashboards with KPIs using ApexCharts. Developed solo over 3 months, covering MVP to final release.`,
    demoLink: "https://google.com/",
    stacks: [
      { name: "React", logo: react },
      { name: "Node.js", logo: nodejs },
      { name: "JWT", logo: jwt },
      { name: "ApexCharts", logo: apex },
    ],
    video: PolyPSC,
    projectCode: `
const project = {
  name: "PSC Management Platform",
  description: \`A web platform to centralize the management of the PSC (Projet socio-culturel) program for first-year engineering students. Built with React.js and Node.js, it automates team formation, project tracking, tutor assignments, deliverable validation, and provides dashboards with KPIs using ApexCharts. Developed solo over 3 months, covering MVP to final release.\`,
  tasks: [
    "Student, tutor, and team management",
    "Automated team formation and tutor assignments",
    "Tracking project deliverables and validation",
    "Dashboarding with ApexCharts",
    "Solo development from conception to code",
  ],
  notes: () => {
    // Management System
    // 2-months development
    // Progressive MVP approach
  }
};
  `,
  },
  {
    title: "McLaren Animated Landing Page",
    image: McLaren_Project,
    category: "UI/UX | Prototype",
    description: `A sleek Figma prototype for a McLaren-themed landing page. It features smooth animations, a modern layout, and a drag-enabled carousel to showcase cars in an engaging, interactive way.`,
    demoLink: "https://google.com/",
    stacks: [{ name: "Figma", logo: figma }],
    video: McLaren,
    projectCode: `
const project = {
  name: "McLaren Animated Landing Page",
  description: \`A sleek Figma prototype for a McLaren-themed landing page. It features smooth animations, a modern layout, and a drag-enabled carousel to showcase cars in an engaging, interactive way.\`,
  tasks: [
    "Landing page UI design",
    "Smooth animations",
    "Drag-enabled car carousel",
  ],
  notes: () => {
    // Figma prototype
    // Luxury car theme
    // Smooth user interaction
  }
};
  `,
  },
  {
    title: "Donut Pricing Landing Page",
    image: Donuts_Project,
    category: "UI/UX | Prototype",
    description: `A fun and colorful Figma prototype for a donut shop landing page. It integrates modern animations and an interactive pricing section that makes the experience visually appealing and engaging.`,
    demoLink: "https://google.com/",
    stacks: [{ name: "Figma", logo: figma }],
    video: DonutsAnimation,
    projectCode: `
const project = {
  name: "Donut Pricing Landing Page",
  description: \`A fun and colorful Figma prototype for a donut shop landing page. It integrates modern animations and an interactive pricing section that makes the experience visually appealing and engaging.\`,
  tasks: [
    "Landing page UI design",
    "Interactive pricing section",
    "Modern playful animations",
  ],
  notes: () => {
    // Donut theme
    // Fun + interactive
    // Engaging pricing design
  }
};
  `,
  },
  {
    title: "Coffee Shop Mobile Prototype",
    image: Coffee_Project,
    category: "UI/UX | Prototype",
    description: `A mobile Figma prototype for a coffee shop ordering experience. The flow covers everything from selecting coffee type, size, and quantity to preparing the order, enhanced with smooth, modern animations.`,
    demoLink: "https://google.com/",
    stacks: [{ name: "Figma", logo: figma }],
    video: CoffeeAnimation,
    projectCode: `
const project = {
  name: "Coffee Shop Mobile Prototype",
  description: \`A mobile Figma prototype for a coffee shop ordering experience. The flow covers everything from selecting coffee type, size, and quantity to preparing the order, enhanced with smooth, modern animations.\`,
  tasks: [
    "Full coffee order flow design",
    "Modern mobile animations",
    "Interactive prototype in Figma",
  ],
  notes: () => {
    // Mobile-first prototype
    // Smooth ordering flow
    // Realistic coffee shop experience
  }
};
  `,
  },
];

export const aiProjects = [
  {
    id: 1,
    type: "ai",
    title: "Heart Disease Prediction",
    image: HeartDisease_ML_Project,
    category: "Machine Learning - Classification",
    description:
      "A binary classification model that predicts heart disease using Logistic Regression and medical indicators.",

    mlType: "Classification",
    algorithm: "Logistic Regression",

    metrics: {
      trainAccuracy: 0.87,
      testAccuracy: 0.86,
    },

    github: "https://github.com/SafaBelh/Heart-disease-prediction",

    stacks: ["Python", "Scikit-Learn", "Pandas"],
  },
  {
    id: 2,
    type: "ai",
    title: "Movie Recommendation System",
    image: MovieRecommendation_ML_Project,
    category: "Machine Learning - Recommendation System",
    description:
      "A content-based movie recommendation system using TF-IDF and Cosine Similarity to suggest movies based on their content features.",

    mlType: "Recommendation",
    algorithm: "TF-IDF + Cosine Similarity",

    github: "https://github.com/SafaBelh/Movies-Recommendation-System",

    stacks: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Difflib"],
  },

  {
    id: 3,
    type: "ai",
    title: "Gold Price Prediction",
    image: GoldPricePrediction_ML_Project,
    category: "Machine Learning - Regression",
    description:
      "A regression model using Random Forest Regressor to predict Gold (GLD) prices based on financial market indicators.",

    mlType: "Regression",
    algorithm: "Random Forest Regressor",

    metrics: {
      r2: 0.98,
    },

    github: "https://github.com/SafaBelh/Gold-Price-Prediction",

    stacks: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
    ],
  },

  {
    id: 4,
    type: "ai",
    title: "Diabetic Prediction ML Project",
    image: DiabeticPrediction_ML_Project,
    category: "Machine Learning - Classification",
    description:
      "A binary classification model using SVM (Linear Kernel) to predict diabetes status based on health indicators.",

    mlType: "Classification",
    algorithm: "SVM (Linear Kernel)",

    metrics: {
      trainAccuracy: 0.78,
      testAccuracy: 0.77,
    },

    github: "https://github.com/SafaBelh/Diabetic-Prediction-ML-Project",

    stacks: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    id: 5,
    type: "ai",
    title: "BigMart Sales Prediction",
    image: BigMartSalesPrediction_ML_Project,
    category: "Machine Learning - Regression",
    description:
      "A regression model using XGBoost to predict sales of items at BigMart outlets based on product and outlet features.",

    mlType: "Regression",
    algorithm: "XGBoost Regressor",

    metrics: {
      trainAccuracy: 0.8616,
      testAccuracy: 0.5445,
    },

    github: "https://github.com/SafaBelh/BigMart-sales-prediction",

    stacks: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    id: 6,
    type: "ai",
    title: "Mall Customer Segmentation",
    image: MallCustomerSegmentation_ML_Project,
    category: "Machine Learning - Clustering",
    description:
      "A K-Means clustering model that segments mall customers into groups based on annual income and spending score.",

    mlType: "Clustering",
    algorithm: "K-Means",

    github: "https://github.com/SafaBelh/Mall-Customer-Segmentation",

    stacks: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
    ],
  },
  {
    id: 7,
    type: "ai",
    title: "Sonar Rock vs. Mine Classification",
    image: SonarRock_ML_Project,
    category: "Machine Learning - Classification",
    description:
      "A binary classification model using Logistic Regression to classify underwater sonar signals as Rock or Mine.",

    mlType: "Classification",
    algorithm: "Logistic Regression",

    metrics: {
      trainAccuracy: 0.83,
      testAccuracy: 0.76,
    },

    github: "https://github.com/SafaBelh/Sonar-Rock-vs-Mine-Classification",

    stacks: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
  },
  {
    id: 8,
    type: "ai",
    title: "California House Price Prediction",
    image: CaliforniaHousePrice_ML_Project,
    category: "Machine Learning - Regression",
    description:
      "A regression model using XGBoost to predict California house prices based on housing features.",

    mlType: "Regression",
    algorithm: "XGBoost Regressor",

    metrics: {
      trainR2: 0.8363,
      testR2: 0.8007,
      trainMAE: 32448,
      testMAE: 34558,
      trainRMSE: 46778,
      testRMSE: 51099,
    },

    github: "https://github.com/SafaBelh/California-House-Price-Prediction",

    stacks: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
    ],
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "safabelhouch@gmail.com",
    link: "mailto:safabelhouch@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "safa Belhouche",
    link: "#",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+216 50122080",
    link: "https://api.whatsapp.com/send?phone=+21650122080",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "",
  },
];
