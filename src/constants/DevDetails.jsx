export const DevDetails = [
    {
        davName:"Gorden Archer",
        devPhone:"0546214293",
        devAge:"20",
        devEmail:"archergorden@gmail.com",
        devOccupation:"Student",
        devNationality:"Ghanaian"
    }
]

export const DevLanguages = [
    {
        lang:"React",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"90"
    },
    {
        lang:"Django",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80"
    },
    {
        lang:"JavaScript",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"70"
    },
    {
        lang:"UI/UX",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"85"
    },
    {
        lang:"Tailwind",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80"
    },

    {
        lang:"HTML",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"100"
    },

    {
        lang:"CSS",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80"
    },
    {
        lang:"Continuos Learning / Communication",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"100"
    },
]

import Image1 from '../assets/images/projects/proj1.jpeg'
import Image2 from '../assets/images/projects/proj2.jpeg'
import Image3 from '../assets/images/projects/proj3.jpeg'
import Image4 from '../assets/images/projects/proj4.jpeg'

export const Projects = [
  {
    id: 1,
    project_preview: Image3,
    name: "Connectify",
    details: "Social media platform for friend requests, real-time chat, and post engagement.",
    long_description: `Connectify is a social media app where users can connect, chat instantly, and interact with posts. Built with performance and scalability in mind, it offers a smooth and engaging experience.`,
    stack: ["Django", "React"],
    link: null,
    code: "https://github.com/GordenArcher/Connectify"
  },
//   {
//     id: 2,
//     project_preview: "", 
//     name: "Chattify",
//     details: "Chat app with real-time messaging and notifications.",
//     long_description: `Chattify allows users to send friend requests and chat one-on-one in real-time. Built with Django and React, it supports smooth notifications for messages and friend requests.`,
//     stack: ["Django", "React"],
//     link: null,
//     code: "https://github.com/GordenArcher/Chattify"
//   },
  {
    id: 3,
    name: "Recuerdo",
    project_preview: Image1,
    details: "Memory app for uploading and organizing personal media.",
    long_description: `Recuerdo lets users upload and organize their unique memories through photos and videos. It offers privacy and nostalgia through easy-to-use digital albums.`,
    stack: ["Django", "React"],
    link: "https://recuerdo.vercel.app/",
    code: "https://github.com/GordenArcher/Memory-app"
  },
  {
    id: 4,
    name: "Currency Exchange",
    project_preview: Image4,
    details: "Currency converter with real-time exchange rates.",
    long_description: `A currency exchange app that converts amounts between currencies using live rates. Simple interface for travelers and businesses.`,
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://currency-exchange-beta-three.vercel.app/",
    code: "https://github.com/GordenArcher/Currency-Exchange"
  },
  {
    id: 5,
    name: "Src Sports Website",
    project_preview: Image2,
    details: "Sports academy website showcasing programs and events.",
    long_description: `Semester project website for SRC sports academy with schedules, news, and event info. Designed for easy navigation and engagement.`,
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://semester-project-six.vercel.app/",
    code: "https://github.com/GordenArcher/src-sports"
  }
];




import { Home, User, LucideFolderGit, FileText, Mail} from "lucide-react";

export const links = [
    {
        id:1,
        link: '/',
        label:"Home",
        icon: Home
    },
    {
        id:2,
        link: '/about',
        label:"About",
        icon: User
    },
    {
        id:3,
        link: '/projects',
        label:"Projects",
        icon: LucideFolderGit
    },
    // {
    //     id:4,
    //     link: '/articles',
    //     label:"Articles",
    //     icon: FileText
    // },
    {
        id:5,
        link: '/contact',
        label:"Contact",
        icon: Mail
    }
] 