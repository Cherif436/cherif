import { IconType } from 'react-icons'

export interface IService {
  title: string
  school: string
  ville: string
  about: string
  date: string
  img: string
  Icon: IconType,
}

export interface IStage {
  title: string
  school: string
  ville: string
  about: string
  date: string
  Icon: IconType,
}

export interface ISkill {
  name: string
  level: string
  Icon: IconType,
}

export interface IProject {
  id: number
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  category: Category[]
  key_techs: string[]
}

export type Category = "react" | "node" | "express" | "mongo" | "php" | "mysql" | "next"
export type Menu = "A propos de moi" | "Parcours" | "Mes compétences" | "Projets" | "Contact"