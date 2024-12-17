// kevin-portfolio/components/Header.tsx
"use client";

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5, }}
        animate={{ x: 0, opacity: 1, scale: 1, }}
        transition={{ duration: 1.5, }}
        className="flex flex-row items-center"
      >
        {/* Social Icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/kevin-tan-b3982984/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/kevintan701?tab=repositories"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@KevinTan-fm2fx"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5, }}
        animate={{ x: 0, opacity: 1, scale: 1, }}
        transition={{ duration: 1, }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >

        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}