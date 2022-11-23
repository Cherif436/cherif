import { RiComputerLine } from 'react-icons/ri'
import { FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaServer, FaWordpress } from 'react-icons/fa'
import { IProject, IService, ISkill, IStage } from './type';
import { AiFillGithub, AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill, BsFillBootstrapFill } from 'react-icons/bs';
import { FaSchool } from 'react-icons/fa'
import { SiRedux, SiVisualstudio, SiNextdotjs, SiMysql, SiMongodb } from 'react-icons/si'

export const services: IService[] = [
  {
    title: "Développeur web",
    school: "Institut Paul Hankar",
    ville: "Bruxelles",
    about: "Réaliser, concevoir et développer des applications et site web dynamiques",
    date: "janvier 2017 - juin 2020",
    img: "/images/paulhankar.jpg",
    Icon: FaSchool
  },
  {
    title: "Maintenance informatique",
    school: "EPFC",
    ville: "Bruxelles",
    about: "",
    date: "2015 - 2016",
    img: "/images/epfc.png",
    Icon: FaSchool
  },
  {
    title: "Management des Unités Commerciales",
    school: "Pigier",
    ville: "Tizi Ouzou",
    about: "",
    date: "2008 - 2010",
    img: "/images/pigier.jpg",
    Icon: FaSchool
  },
  {
    title: "Bachelier en commerce international",
    school: "Sigma",
    ville: "Tizi Ouzou",
    about: "",
    date: "2005 - 2008",
    img: "/images/school.jpg",
    Icon: FaSchool
  }
];

export const stages: IStage[] = [
  {
    title: "Développeur web front end",
    school: "SARL Palmerie",
    ville: "Paris",
    about: "Refonte d’un site internet, développement coté front html ‐ css ‐ javascript et coté back php ‐ MySQL",
    date: "novembre 2019 - mai 2020",
    Icon: FaServer
  }
]

export const languages: ISkill[] = [
  {
    name: 'Html',
    level: '84%',
    Icon: AiFillHtml5
  },
  {
    name: 'CSS',
    level: '82%',
    Icon: FaCss3Alt
  },
  {
    name: 'Bootstrap',
    level: '85%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: FaJsSquare
  },
  {
    name: 'React js',
    level: '76%',
    Icon: FaReact
  },
  {
    name: 'Redux',
    level: '61%',
    Icon: SiRedux
  },
  {
    name: 'Next js',
    level: '73%',
    Icon: SiNextdotjs
  },
  {
    name: 'node js & express',
    level: '71%',
    Icon: FaNodeJs
  },
  {
    name: 'PHP',
    level: '65%',
    Icon: FaPhp
  }
]

export const tools: ISkill[] = [
  {
    Icon: SiVisualstudio,
    name: 'Visual Studio Code',
    level: '75%',
  },
  {
    Icon: AiFillGithub,
    name: 'Git',
    level: '61%',
  }
]

export const cms: ISkill[] = [
  {
    Icon: FaWordpress,
    name: 'Wordpress',
    level: '55%',
  }
]

export const database: ISkill[] = [
  {
    Icon: SiMysql,
    name: 'MySQL',
    level: '70%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '75%',
  }
]

export const projects: IProject[] = [
  {
    id: 1,
    name: "Portail emploi",
    description: "Recrutement de profil",
    image_path: "/images/emploi.png",
    deployed_url: "http://www.emploi.epizy.com",
    github_url: "https://github.com/Cherif436",
    category: ['php'],
    key_techs: ['php', 'mysql']
  },
  {
    id: 2,
    name: "Platefome developpeur web",
    description: "Recrutement de profil développeur",
    image_path: "/images/p1.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'mongo'],
    key_techs: ['react', 'node', 'mongo']
  },
  {
    id: 3,
    name: "Site web ecommerce",
    description: "Achat de vétement en ligne",
    image_path: "/images/ecommerce.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'node', 'express', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 4,
    name: "Blog",
    description: "publication périodique et régulière d'articles personnels",
    image_path: "/images/blog.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'react', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 5,
    name: "Plateforme",
    description: "Plateforme réseau social",
    image_path: "/images/socialN.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'express', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 6,
    name: "Site ecommerce",
    description: "Achat de materiel informatique en ligne",
    image_path: "/images/econext.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'express', 'next', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  },
  {
    id: 7,
    name: "Site ecommerce nextjs",
    description: "Achat de vétement en ligne",
    image_path: "/images/ecommnextjs.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'express', 'next', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  },
  {
    id: 8,
    name: "Site Nettoyage vitre",
    description: "Société proposant des services de nettoyage",
    image_path: "/images/clean.png",
    deployed_url: "https://vlcleaningservices.vercel.app/",
    github_url: "https://github.com/Cherif436",
    category: ['next'],
    key_techs: ['next']
  },
  {
    id: 9,
    name: "Site restaurant",
    description: "Application de commande de nourriture",
    image_path: "/images/restaurant.png",
    deployed_url: "",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'express', 'next', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  }
]