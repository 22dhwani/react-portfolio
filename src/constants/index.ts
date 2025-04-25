import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  laravel,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 trackobill,
  bridgingdivides,
  kodecreators,
  devkruti,
  divyachemicals,
  medidata,
  tripguide,
  aws,
  errandd,
  luxurialist,
  ebrhaim,
  nirav,
  krutarth
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About Me",
  },

  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "feedback",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Software Developer",
    icon: web, // or a custom icon that fits this better
  },
  {
    title: "AI & Data Solutions Engineer",
    icon: backend,
  },
  {
    title: "Frontend Developer (React & Next.js)",
    icon: mobile,
  },
  {
    title: "Project Manager & Technical Lead",
    icon: creator,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Software Developer",
    companyName: "Bridging Divides - Toronto Metropolitan University",
    icon: bridgingdivides,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Engineered AI-driven tools, including a Q&A chatbot and web scraper, using Next.js, FastAPI, and React to enhance data retrieval by 20%.",
      "Optimized RESTful APIs and Supabase data pipelines to ensure scalable, real-time data handling across multiple user interfaces.",
      "Designed and implemented intuitive, responsive UIs using Tailwind CSS and Chakra UI to improve user engagement and usability.",
      "Collaborated within an Agile team to deliver production-ready software for a research-driven platform serving 20,000+ users."
    ]
  },
  {
    title: "Full Stack Software Developer",
    companyName: "Kode Creators",
    icon: kodecreators,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    companyName: "DevKruti Tech",
    icon: devkruti,
    iconBg: "#eee",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Analyzed large datasets using Python, Pandas, and SQL to extract actionable insights and support data-driven decision-making for 100+ clients.",
      "Developed interactive dashboards and reports with Tableau and Power BI, enabling stakeholders to visualize key metrics and trends in real time.",
      "Built data pipelines using Azure Data Factory to streamline ETL processes and ensure timely delivery of accurate analytics to 15+ business teams.",
      "Collaborated with cross-functional teams to define KPIs and data requirements, ensuring alignment between technical solutions and business goals."
    ]
  },
 
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
    "Dhwani's work on our Bridging Divides platform was nothing short of exceptional. Her attention to detail, intuitive design sense, and ability to transform complex ideas into a clean, functional UI exceeded our expectations.",
    name: "Ebrahim Bagheri",
    designation: "Project Head ",
    company: "Bridging Divides",
    image: ebrhaim,
  },
  {
    testimonial:
      "Dhwani’s technical skills and project management abilities are impressive. She consistently delivered quality work on time while effectively leading complex projects.",
    name: "Nirav Kalola",
    designation: "CEO & Founder",
    company: "Kode Creators",
    image: nirav,
  }
  
,  
{
  testimonial:
    "Thanks to Dhwani's web development skills and optimization efforts, our website's performance skyrocketed, leading to a substantial boost in both traffic and user engagement.",
  name: "Krutarth Desai",
  designation: "CEO",
  company: "DevKruti Tech",
  image: krutarth,
}

];

const projects: TProject[] = [
  {
    name: "ERRANDO",
    description:
    "A service marketplace platform enabling 1,500+ users to find, book, and interact with service providers in real time. Features include credit-based transactions, Firebase chat integration, and seamless booking powered by Laravel and React.js.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: errandd,
    sourceCodeLink: "https://github.com/22dhwani/Erranddo",
  },
  {
    name: "Automobile Pricing",
    description:
      "A Java-based data scraping and analysis tool that extracts and processes details from 100,000+ car listings. Features include inverted indexing, page ranking, and pricing insights to support efficient automobile market research.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Jsoup",
        color: "green-text-gradient",
      },
      {
        name: "Data Scraping",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,// replace with your actual image variable
    sourceCodeLink: "https://github.com/22dhwani/Automobile_pricing", // update with actual link
  },
  
  {
    name: "MediData Analysis",
    description:
      "An intelligent disease prediction system built using Python and Streamlit, utilizing machine learning models like Logistic Regression and SVC to diagnose 50+ diseases based on symptoms. Offers personalized insights and enhances medical decision-making.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: medidata, // replace with your actual image variable
    sourceCodeLink: "https://github.com/22dhwani/MediData", // update with actual repo link
  },
  {
    name: "Track-o-Bill",
    description:
      "A full-stack expense tracking web app inspired by Splitwise. Built with React and Tailwind for a responsive UI, and Django REST Framework to manage user balances, group transactions, and seamless data syncing via APIs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trackobill, // replace with your actual image variable
    sourceCodeLink: "https://github.com/22dhwani/track-o-bill",
  },
  {
    name: "Divya Chemicals",
    description:
      "A corporate website for Divya Chemicals, designed to showcase the company’s product catalog, quality assurance practices, and company information. Built using Django and MySQL for a dynamic, scalable backend and easy content management.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: divyachemicals, // replace with your actual image variable
    sourceCodeLink: "https://github.com/22dhwani/divya_chemicals", // replace with actual repo link
  },
  {
    name: "Luxurialist",
    description:
      "A visually rich website inspired by iconic designs from Dior, Prada, Chanel, and Gucci. Built entirely with HTML, CSS, and Bootstrap, it delivers a high-end fashion aesthetic with responsive layouts and elegant styling.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: luxurialist, // replace with your actual image variable
    sourceCodeLink: "https://github.com/22dhwani/Luxurialist", // replace with actual link
  }
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
