import { meta, pendopo, vriday, nightspade, fxmedia } from "../assets/images";
import {
    car,
    contact,
    csharp,
    estate,
    git,
    github,
    javascript,
    linkedin,
    phaser,
    pricewise,
    snapgram,
    summiz,
    threads,
    typescript,
    unity,
    unreal
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Fullstack",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: unreal,
        name: "Unreal Engine",
        type: "Game Engine",
    },
    {
        imageUrl: phaser,
        name: "Phaser3",
        type: "Game Engine",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Game Programmer",
        company_name: "Vriday Studio",
        icon: vriday,
        iconBg: "#f5d996",
        date: "Oct 2021 - Present",
        points: [
            "Creates an interactive gallery full of Indonesian heritage and cultures",
            "Collaborates with teams full of creative peoples including designers, product managers, and other developers to create engaging experience.",
            "Develops games using LIDAR and Kinect sensors, detecting people and motion for interactive gameplay.",
        ],
    },
    {
        title: "Intern Unity Developer",
        company_name: "FX Media",
        icon: fxmedia,
        iconBg: "#d5f2f7",
        date: "Apr 2021 - Aug 2021",
        points: [
            "Develops AR games using Unity and PlayCanvas.",
            "Creates online multiplayer games with various mechanics.",
        ],
    },
    {
        title: "Intern Game Programmer",
        company_name: "Falkana Studio",
        icon: unity,
        iconBg: "#bebdbd",
        date: "Dec 2020 – Feb 2021",
        points: [
            "Contributing in multiple projects within short deadlines",
            "Reducing code redundancies down to 70% smaller for stable and bug-free games",
        ],
    },
    {
        title: "Game Programmer",
        company_name: "Pendopo Studio",
        icon: pendopo,
        iconBg: "#3a3838",
        date: "Jul 2020 – Sept 2020",
        points: [
            "Develops tools for cutscenes, dialogue systems, and mini-games to be used by game designer",
            "Collaborates with teams including game designer and artist in a incubation game studio program",
            "Help deliver the game until it is released in alpha state"
        ],
    },
    {
        title: "Intern Web Game Programmer",
        company_name: "Nightspade Studio",
        icon: nightspade,
        iconBg: "#363636",
        date: "Jan 2020 – Mar 2020",
        points: [
            "Develops web game using Phaser 3 from scratch",
            "Releases game in Netlify, used to A/B test internal product"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];