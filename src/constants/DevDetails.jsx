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
        prof:"90%"
    },
    {
        lang:"Django",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80%"
    },
    {
        lang:"JavaScript",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"70%"
    },
    {
        lang:"UI/UX",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"85%"
    },
    {
        lang:"Tailwind",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80%"
    },

    {
        lang:"HTML",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"100%"
    },

    {
        lang:"CSS",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"80%"
    },
    {
        lang:"Continuos Learning / Communication",
        desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        prof:"100%"
    },
]

import Image1 from '../assets/images/projects/proj1.jpeg'
import Image2 from '../assets/images/projects/proj2.jpeg'
import Image3 from '../assets/images/projects/proj3.jpeg'
import Image4 from '../assets/images/projects/proj4.jpeg'

export const Projects = [
    {
        id:1,
        project_preview: Image3,
        name:"Connectify",
        details:"Connectify is a social media platform where users can send friend requests, chat with friends in real-time, and engage with posts by liking and commenting.",
        link:null,
        code:"https://github.com/GordenArcher/Connectify"
    },
    // {
    //     id:2,
    //     name:"Chattify",
    //     project_preview:"",
    //     details:"Connectify is a chat application where users can send friend requests, chat with friends in real-time, and engage with friends by chatting one on one. Built with Django and react, it offers a smooth and interactive experience with real-time notifications for messages, friend requests.",
    //     link:null,
    //     code:"https://github.com/GordenArcher/Chattify"
    // },
    {
        id:3,
        name:"Recuerdo",
        project_preview: Image1,
        details:"It's an application that allow users to upload their memory or media that are unique to them. so basically it's a memory application",
        link:"https://recuerdo.vercel.app/",
        code:"https://github.com/GordenArcher/Memory-app"
    },
    {
        id:4,
        name:"Currency Exchange",
        project_preview: Image4,
        details:"This is also a currency exchange application that allow users to enter any amount to be exchanged in the selected currency",
        link:"https://currency-exchange-beta-three.vercel.app/",
        code:"https://github.com/GordenArcher/Currency-Exchange"
    },
    {
        id:5,
        name:"Src Sports Website",
        project_preview: Image2,
        details:"This project was a semeter project in school, where the proffessor highlited that we create a sports academy website for the src board",
        link:"https://semester-project-six.vercel.app/",
        code:"https://github.com/GordenArcher/src-sports"
    }
]