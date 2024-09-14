import { meta, pendopo, vriday, nightspade, fxmedia } from "../assets/images";
import {
    car,
    contact,
    csharp,
    git,
    github,
    javascript,
    linkedin,
    phaser,
    gik,
    typescript,
    unity,
    unreal,
    gamepad
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
            "Replicates internal AR applications using Unity and PlayCanvas.",
            "Creates simple online multiplayer games with various mechanics.",
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
        company_name: "Pendopo Multi Creations",
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
        iconUrl: gik,
        theme: 'btn-back-brown',
        name: 'Galeri Indonesia kaya',
        description: 'An interactive and unique experience on digital galleries full of Indonesian cultures and tradition, combining it with the current technology',
        link: 'https://indonesiakaya.com/kunjungi-kami/galeri-indonesia-kaya/',
    },
    {
        iconUrl: pendopo,
        theme: 'btn-back-black',
        name: 'Rendezvous',
        description: 'Help develop prologue version of "Rendezvous" with multiple reusable tools that can be easily used by game designer',
        link: 'https://pendopomc.com/',
    },
    {
        iconUrl: gamepad,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Develop a web game using Phaser 3 and releasing it for internal A/B test purposes',
        link: 'https://freeza354.itch.io/fusefive',
    },
];