"use client";

import React from 'react'
import work1Image from '../images/work1.jpeg'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{ y: -100, opacity: 0, }}
        transition={{ duration: 1.4, }}
        whileInView={{ y: 0, opacity: 1, }}
        viewport={{ once: true }}
        src={work1Image.src}
        alt=""
        className="rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-start"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Founder</h4>
            <p className="font-bold text-2xl mt-1">THE.LAB.701</p>

            <div className="flex space-x-2 my-2">
                <img
                src="https://seeklogo.net/wp-content/uploads/2020/09/react-logo.png"
                className="h-10 w10 rounded-full"
                alt=""
                />
                <img
                src="https://tailwindkit.github.io/tailwindcss/images/tailwind-css.png"
                className="h-10 w10 rounded-full"
                alt=""
                />
                <img
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
                className="h-10 w10 rounded-full"
                alt=""
                />
            </div>

            <p className="uppercase py-5 text-gray-300">
                Aug 2020 - Present
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Founded and managed an innovative coffee shop integrating smart technology and unique branding, enhancing customer engagement and earning public recognition.</li>
                {/* <li>Key Point 2</li>
                <li>Key Point 3</li> */}
            </ul>

        </div>

    </article>
  )
}

export default ExperienceCard