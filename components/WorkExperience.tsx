"use client";

import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'


type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, }}
      whileInView={{ opacity: 1, scale: 1, }}
      transition={{ duration: 1.4, }}
      className="h-screen flex relative overflow-hidden flex-col items-center justify-evenly text-lft md:flex-row max-w-full px-10 space-y-20">

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />

      </div>
    </motion.div>
  )
}

export default WorkExperience