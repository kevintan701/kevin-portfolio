"use client";

import React from 'react'
import { motion } from 'framer-motion'
import kevin2Image from '../images/kevin2.jpg'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{ duration: 1.5, }}

            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w07xl px-10 space-y-12 justify-evenly mx-auto items-center"
        >

            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}

                src={kevin2Image.src}
                alt="Kevin Tan"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]"
            />
            <div className="space-y-10 px md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a {" "}
                    <span className="underline decoration-[yellow]/50">little</span>{" "}
                    background
                </h4>
                <p className="text-base">
                    Hi, I’m Kevin Tan—an INFJ passionate about leveraging technology to positively impact communities. Pursuing a Master’s in UX Research and Design at the University of Michigan, I specialize in creating intuitive user experiences.<br /><br />

                    As the founder of THE.LAB.701, a coffee shop integrating smart technology, I’ve merged my love for design, tech, and community into a unique customer experience. Previously, I managed significant projects in the metallurgical industry, expanding client bases and improving efficiencies.<br /><br />

                    I thrive on bringing positive energy to others—whether through design, creating welcoming spaces, or sharing uplifting content. In my free time, I enjoy running half-marathons, playing basketball, traveling, reading, and music.<br /><br />

                    Let’s connect and make a difference together!
                </p>
            </div>
        </motion.div>
    )
}