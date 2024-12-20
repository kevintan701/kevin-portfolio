"use client";

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200, opacity: 0,
                }}
                transition={{ duration: 1, }}
                whileInView={{ opacity: 1, x: 0, }}
                src="https://seeklogo.net/wp-content/uploads/2020/09/react-logo.png"
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:graysale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="font-bold opacity-100 text-black text-3xl">100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill