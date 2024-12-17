"use client";

import React from 'react'
import { motion } from 'framer-motion'
import work1Image from '../images/work1.jpeg'

type Props = {}

function Projects({ }: Props) {
    const Projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5, }}

            className="h-screen ralative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl z-30">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {Projects.map((project, i) => (
                    <div key={i} className="w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -300, opacity: 0,
                            }}
                            transition={{ duration: 1.2, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            src={work1Image.src}
                            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:graysale transition duration-300 ease-in-out"
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {Projects.length}:
                                </span>{" "}
                                THE.LAB.701
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                TheLab701 isn't just a coffee shop; it's a symbol of nostalgia, passion, and a commitment to spreading positive energy.<br /><br />

                                Founded in August 2020 by Kevin Tan, this unique coffee lab was born out of his very own apartment's storage room, carrying forward the legacy and memories of the place he grew up in, represented by the '701' - his apartment number.<br /><br />
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/80 left-0 h-[500px] -skew-y-12 z-10">
            </div>
        </motion.div>
    )
}

export default Projects;