import { motion } from "framer-motion"
import { FunctionComponent } from "react"
import { ISkill } from "../type"

const Bar:FunctionComponent<{ data:ISkill }> = ({data: {Icon, level, name}}) => {
  const variants = {
    initial: {
      width: 0 
    },
    animate: {
      width: level,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }
    }
  }
  return (
    <div className="my-2 text-white border border-red-500 rounded-full blue:bg-blue-200 dark:bg-black-500">
      <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" style={{width: level}} variants={variants} initial="initial" animate="animate">
        <Icon className="mr-3 text-white" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
