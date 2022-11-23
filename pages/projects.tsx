import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../type'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("Tout")

  const [showDetail, setShowDetail] = useState<number | null>(null)

  const handlerFilterCategory = (category:Category | 'Tout') => {
    if(category === 'Tout'){
      setProjects(projectsData);
      setActive(category);
      return; 
    }

    const newArray = projectsData.filter((project) => project.category.includes(category))
    setProjects(newArray);
    setActive(category);
  }

  return (
    <motion.div className="px-5 py-2 overflow-y-scroll" style={{height: '65vh'}} variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h1 className="mb-8 text-2xl font-bold text-center text-red-500 dark:text-white text-x4">Mes projets</h1>
      
      <ProjectsNavbar 
        handlerFilterCategory={handlerFilterCategory} 
        active={active} 
      /> 
      <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial="initial" animate="animate">
        {
          projects.map(project => (
            <motion.div className="col-span-12 p-2 rounded-lg bg-gradient-to-t from-yellow-400 to-transparent sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeInUp} key={project.name}>
              <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default Projects
