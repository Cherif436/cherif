import React, { FunctionComponent, useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { fadeInUp, stagger } from '../animations'
import { IProject } from '../type'
import Image from 'next/image'

const ProjectCard:FunctionComponent<{ 
  project: IProject; 
  showDetail: null | number;
  setShowDetail: ( id: null | number) => void;
}> = ({ 
  project: {
    name, 
    image_path,
    deployed_url, 
    description,
    key_techs,
    id,
  }, 
  showDetail,
  setShowDetail
}) => {

  return (
    <div className="overflow-y-scroll" style={{height: '22vh'}}>
      <Image 
        src={image_path} 
        alt={name}
        className="cursor-pointer" 
        onClick={() => setShowDetail(id)} 
        layout="responsive" 
        height={150} 
        width={300} 
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-white rounded-lg bg-gradient-to-b md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-gray-100">
              <Image src={image_path} alt={name} layout="responsive" height={150} width={300} />
            </motion.div>
              
            <motion.div className="flex justify-center my-4 space-x-3">
              <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-yellow-500 dark:bg-dark-200 dark:bg-black-500" target="_blank" rel="noopener noreferrer">
                <AiFillProject className="text-red-500" /> <span>Projet</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium drop-shadow-2xl md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium drop-shadow-2xl">{description}</motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {
                key_techs.map(tech => <span key={tech} className="px-2 py-2 my-1 bg-yellow-500 rounded dark:bg-dark-200">
                  {tech}
                </span>)
              }
            </motion.div>
          </motion.div>
          <button onClick={() => setShowDetail(null)} className="absolute p-1 bg-red-500 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
            <MdClose size={30} />
          </button>
        </div>
      )}
      
    </div>
  )
}

export default ProjectCard
