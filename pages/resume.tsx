import { motion } from "framer-motion"
import Bar from "../components/Bar"
import { cms, database, languages, tools } from "../data"
import {fadeInUp, routeAnimation} from '../animations'
import { FaCode, FaDatabase, FaTools, FaWordpress } from "react-icons/fa"

const Resume = () => {
  
  return (
    <motion.div className="px-6 py-10" variants={routeAnimation} initial="initial" animate="animate">
      <h1 className="mb-8 text-3xl font-bold text-center text-red-500 dark:text-white text-x4">Mes compétences</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="flex my-3 text-2xl font-bold"><FaCode className="mr-2 dark:text-white" /> Langages</h5>
          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
        <div>
          <h5 className="flex my-3 text-2xl font-bold"><FaTools className="mr-2 dark:text-white" /> Outils</h5>
          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
          <h5 className="flex my-3 text-2xl font-bold"><FaDatabase className="mr-2 dark:text-white" /> Base de données</h5>
          <div className="my-2">
            {
              database.map(datab => <Bar data={datab} key={datab.name} />)
            }
          </div>
          <h5 className="flex my-3 text-2xl font-bold"> CMS</h5>
          <div className="my-2">
            {
              cms.map(c => <Bar data={c} key={c.name} />)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
